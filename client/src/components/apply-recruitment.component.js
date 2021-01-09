import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './style/search-job.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {
    Row,
    Col,
    ListGroupItem,
    Card,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardText,
    Button,
    Container,
    Modal,
    ModalBody,
    ModalProps,
    ModalFooter,
    ModalHeader,
    ModalBodyProps,
    Progress,
    InputGroupAddon,
    FormGroup,
    InputGroup,
    Input,
    Form,
    Label
} from 'reactstrap';
import { 
    faMapMarkerAlt,
    faWrench,
    faDollarSign,
    faSignInAlt,
    faRibbon,
    faClock,
    faUserCog,
    faUser,
    faEnvelope,
    faPhone,
    faCheck,
    faTimes,
    faFile
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'; 

import UploadButton from './UploadButton'

import DataService from '../services/service'

export default withRouter(class ApplyRecruitment extends Component {
    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;

        this.state = {
            recruitment: {
                jobName: '',
                companyName: '',
                location: '',
                date: '',
                expiredDate: '',
                field: '',
                salary: '',
                yearsOfExperience: '',
                jobType: '',
                listJobDescription: [],
                listJobRequirement: [],
                listSkill: []
            },
            isApplyCVModalOpen: false,
            isApplyWithCV: false,
            fullname: '',
            email: '',
            phone: '',
            selectedFile: null
        };

        this.handleOnClickApply = this.handleOnClickApply.bind(this);
        this.handleOnClickSendApply = this.handleOnClickSendApply.bind(this);

        this.handleOnClickApplyWithCV = this.handleOnClickApplyWithCV.bind(this);
        this.handleOnClickApplyWithoutCV = this.handleOnClickApplyWithoutCV.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);

    }

    componentDidMount() {
        this.getRecruitment(this.props.match.params.id);
    }

    getRecruitment(id) {
        DataService.getRecruitment(id)
        .then(data => {
            const job = data.data.job;
            const required_skill = [];
            const recruitment = job.recruitment;
            const company = recruitment.company;
            for(var i = 0; i < data.data.required_skill.length; ++i) {
                required_skill.push({
                    name: data.data.required_skill[i].SkillName,
                    level: data.data.required_skill[i].Level,
                })
            }

            this.setState({
                recruitment: {
                    jobName: job.JobName,
                    companyName: company.CompanyName,
                    location: company.Location,
                    date: recruitment.RecruitmentDate,
                    expiredDate: recruitment.ExpiredDate,
                    field: '',
                    salary: recruitment.Salary + ' USD',
                    yearsOfExperience: recruitment.YearsOfExperience,
                    jobType: job.JobType,
                    listJobDescription: recruitment.Description.split('\n'),
                    listJobRequirement: recruitment.Requirement.split('\n'),
                    listSkill: required_skill
                }
            })
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    handleFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    }

    handleOnClickApply(){
        this.setState({
            isApplyCVModalOpen: !this.state.isApplyCVModalOpen
        });
    }

    handleOnClickSendApply(){
        
        var isSended = true;

        if(this.state.isApplyWithCV)
        {
            isSended &= this.handleFileUpload();
        }

        if(isSended)
        {
            this.setState({
                isApplyCVModalOpen: !this.state.isApplyCVModalOpen
            });
            alert("Great! You have sent an application.");
        }
    }

    handleOnClickApplyWithCV(){
        this.setState({
            isApplyWithCV: true,
            isApplyCVModalOpen: true
        });
    }

    handleOnClickApplyWithoutCV(){
        this.setState({
            isApplyWithCV: false,
            isApplyCVModalOpen: true
        });
    }

    handleFileUpload(){
        if(this.state.selectedFile == null)
        {
            alert("Please upload your CV");
            // do something
            return false;
        }

        const formData = new FormData();

        formData.append('resume', this.state.selectedFile, this.state.selectedFile.name);

        axios.post('http://localhost:8080/api/resume/upload/', formData)
        .then(() => {
            this.state.selectedFile = null;
        })

        return true;
    }

    handleSubmitForm(){
        
    }

    renderSkill(skill){
        const percent = 100*(parseInt(skill.level)/9);
        let levelName = 'beginner';
        if(skill.level <= 5)
            levelName = 'intermediate';
        else if(skill.level <= 6)
            levelName = 'upper-intermediate';
        else if(skill.level <= 8)
            levelName = 'advanced';
        else
            levelName = 'expert'
        return(
            <div style={{marginTop: '5px', marginBottom: '5px'}}>
                {skill.name}
                <Progress value={Math.round(percent)}>
                    {levelName}
                </Progress>
            </div>
        );
    }

    renderListSkill(){
        const listSkill = this.state.recruitment.listSkill.map((skill) => this.renderSkill(skill));
        return(
            <div style={{maxWidth: '100%'}}>
                {listSkill}
            </div>
        );
    }

    renderUnorderedList(listString){
        const list = listString.map(item => {
            return(
                <li style={{marginTop: '5px'}}>
                    {item}
                </li>
            );
        });
        return(
            <ul>
                {list}
            </ul>
        );
    }

    renderListJobRequirement(){
        const listRequirement = this.renderUnorderedList(this.state.recruitment.listJobRequirement);
        return(
            <div style={{textAlign: 'justify'}}>
                <b>Job Requirement:</b>
                {listRequirement}
            </div>
        );
    }

    renderListJobDescription(){
        const listDescription = this.renderUnorderedList(this.state.recruitment.listJobDescription);
        return(
            <div style={{textAlign: 'justify'}}>
                <b>Job Description:</b>
                {listDescription}
            </div>
        );
    }

    renderTitle (){
        return(
            <div style={{fontSize: '25px'}}>
                Applying to
                <span style={{color: '#4033FF', marginLeft: '10px', marginRight: '10px'}}>{this.state.recruitment.jobName}</span>
                at
                <span style={{color: '#4033FF', marginLeft: '10px', marginRight: '10px'}}>{this.state.recruitment.companyName}</span>
            </div>
        );
    }

    renderValidationEmail(){
        const email = this.state.email;
        if(email === '')
            return (null);
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        {
            return <FontAwesomeIcon icon={faCheck} style={{margin: '15px', color: 'green'}}/>;
        }
        return(
            <FontAwesomeIcon icon={faTimes} style={{margin: '15px', color: 'red'}}/>
        );
    }

    renderValidationPhone(){
        const phone = this.state.phone;
        if(phone === '')
            return (null);
        if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone))
        {
            return <FontAwesomeIcon icon={faCheck} style={{margin: '15px', color: 'green'}}/>;
        }
        return(
            <FontAwesomeIcon icon={faTimes} style={{margin: '15px', color: 'red'}}/>
        );
    }

    renderCVUpload(){

        if(this.state.isApplyWithCV)
        {
            // const file = this.state.selectedFile ? this.state.selectedFile.lastModifiedDate.toDateString() : null;
            const file = this.state.selectedFile ? this.state.selectedFile.name : null;
            return(
                <InputGroup style={{margin: '15px'}}>
                    <InputGroupAddon addonType='append' style={{padding: '5px', marginRight: '49px'}}>
                        <FontAwesomeIcon icon={faFile} style={{margin: '5px', marginRight: '10px'}} />
                        CV file:
                    </InputGroupAddon>
                    <Input style={{height:'90%', maxWidth: '70%', float: 'right', fontSize: '16px'}} type="email" name="email" placeholder="Select CV: *.doc, *.docx, *.pdf" value={file} disabled='disabled'/>
                    <InputGroupAddon addonType="prepend" style={{marginLeft: '10px'}}>
                        <UploadButton style={{height: '87%'}} onChange={this.handleFileChange}/>
                    </InputGroupAddon>
                </InputGroup>
            );
        }
        return (null);
    }

    renderApplyModal(){
        const title = this.renderTitle();

        const onFullNameChange = (e) => this.setState({fullname: e.target.value});
        const onEmailChange = (e) => this.setState({email: e.target.value});
        const onPhoneChange = (e) => this.setState({phone: e.target.value});
        const validationEmail = this.renderValidationEmail();
        const validationPhone = this.renderValidationPhone();

        const CVUpload = this.renderCVUpload();

        return(
            <div>
                <Modal style={{maxWidth: '60%'}} isOpen={this.state.isApplyCVModalOpen} toggle={this.handleOnClickApply}>
                    <ModalHeader toggle={this.handleOnClickApply}>
                        {title}
                    </ModalHeader>
                    <ModalBody style={{fontSize: '16px'}}>
                        <Form style={{border:'0px solid #000000', padding: '5px'}} onSubmit={this.handleSubmitForm}>
                            <FormGroup style={{margin: '0px'}}>
                                <InputGroup style={{margin: '15px'}}>
                                    <InputGroupAddon addonType='append' style={{padding: '5px', marginRight: '30px'}}>
                                        <FontAwesomeIcon icon={faUser} style={{margin: '5px'}} />
                                        Full name:
                                    </InputGroupAddon>
                                    <Input style={{height:'90%', maxWidth: '70%', fontSize: '16px'}} type="fullname" name="fullname" placeholder="Enter your full name" value={this.state.fullname} onChange={onFullNameChange}/>
                                </InputGroup>
                                <InputGroup style={{margin: '15px'}}>
                                    <InputGroupAddon addonType='append' style={{padding: '5px', marginRight: '58px'}}>
                                        <FontAwesomeIcon icon={faEnvelope} style={{margin: '5px'}} />
                                        Email:
                                    </InputGroupAddon>
                                    <Input style={{height:'90%', maxWidth: '70%', float: 'right', fontSize: '16px'}} type="email" name="email" placeholder="Enter your email" value={this.state.email} onChange={onEmailChange}/>
                                    {validationEmail}
                                </InputGroup>

                                <InputGroup style={{margin: '15px'}}>
                                    <InputGroupAddon addonType='append' style={{padding: '5px', marginRight: '50px'}}>
                                        <FontAwesomeIcon icon={faPhone} style={{margin: '5px'}} />
                                        Phone:
                                    </InputGroupAddon>
                                    <Input style={{height:'90%', maxWidth: '70%', fontSize: '16px'}} type="phone" name="phone" placeholder="Enter your phone number" value={this.state.phone} onChange={onPhoneChange}/>
                                    {validationPhone}
                                </InputGroup>
                                {CVUpload}
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{marginRight: '20px'}} type='submit' color='primary' onClick={this.handleOnClickSendApply}>Send</Button>
                        <Button type='button' color='secondary' onClick={this.handleOnClickApply}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

    render() {

        const jobName = this.state.recruitment.jobName;
        const companyName = this.state.recruitment.companyName;
        const description = this.state.recruitment.description;
        const location = this.state.recruitment.location;
        const field = this.state.recruitment.field;
        const salary = this.state.recruitment.salary;
        const yearsOfExperience = this.state.recruitment.yearsOfExperience;
        const jobType = this.state.recruitment.jobType;
        const skills = this.state.recruitment.skills;
        
        const jobDescription = this.renderListJobDescription();
        const jobRequirement = this.renderListJobRequirement();
        const listSkill = this.renderListSkill();

        const applyModal = this.renderApplyModal();

        return(
            <Container style={{maxWidth: '80%'}}>
                {applyModal}
                <Row style={{maxWidth: '100%', margin: '10px'}}>
                <Container style={{border:'1px solid #33FFF3', maxWidth: '100%'}}>
                    <Row style={{maxWidth: '100%'}}>
                        <Col sm={{size: 'auto'}}>
                            <CardImg style={{width:"100%", margin:'10px', border:'1px solid #A433FF'}} src = {'http://placehold.it/100x100'}/>
                        </Col>
                        <Col className='card-col small-margin-left' style={{maxWidth: '100%'}}>
                            <CardBody className='card-body'>
                                <CardTitle tag='h5' style = {{marginTop:"5px", color: '#4033FF', textTransform: 'uppercase'}} >
                                    <b>{jobName}</b>
                                </CardTitle>
                                <CardText className='paragraph'>
                                    <b>{companyName}</b>
                                    <br/>
                                    <AwesomeButton type='primary' style={{margin: '10px', marginLeft: '0px'}} onPress={this.handleOnClickApplyWithCV}>
                                        <b>Apply with CV</b>
                                    </AwesomeButton>
                                    Or
                                    <AwesomeButton type='secondary' style={{margin: '10px'}} onPress={this.handleOnClickApplyWithoutCV}>
                                        <b>Apply without CV</b>
                                    </AwesomeButton>
                                </CardText>
                            </CardBody>
                        </Col>      
                    </Row>
                </Container>
                </Row>
                <Row style={{maxWidth: '100%', margin: '10px'}}>
                    <Container style={{border:'1px solid #33FFF3', maxWidth: '100%'}}>
                        <Row style={{maxWidth: '100%', padding: '10px', fontSize: '16px', paddingRight: '0px'}}>
                            <Col style={{maxWidth: '65%'}}>
                                {jobDescription}
                                {jobRequirement} 
                            </Col>
                            <Col style={{maxWidth: '35%', paddingRight: '0px'}}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className='small-margin-right'/>
                                <b>Location</b> <br/>
                                {location} <br/>
                                <FontAwesomeIcon icon={faDollarSign} style={{marginTop: '30px'}} className='small-margin-right'/>
                                <b>Salary</b><br/>
                                {salary}<br/>
                                <FontAwesomeIcon icon={faRibbon} style={{marginTop: '30px'}} className='small-margin-right'/>
                                <b>Years of Experience</b><br/>
                                {yearsOfExperience}<br/>
                                <FontAwesomeIcon icon={faClock} style={{marginTop: '30px'}} className='small-margin-right'/>
                                <b>Job Type</b><br/>
                                {jobType}<br/>
                                <FontAwesomeIcon icon={faUserCog} style={{marginTop: '30px'}} className='small-margin-right'/>
                                <b>Skills</b><br/>
                                {listSkill}<br/>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        );
    }
})