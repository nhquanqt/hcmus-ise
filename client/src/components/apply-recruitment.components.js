import React, { Component } from 'react';
import Recruitment from './recruitment.components';
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
    Form
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

export default class ApplyRecruitment extends Component{
    constructor(props){
        super(props);

        // this.jobName = props.recruitment.jobName;
        // this.companyName = props.recruitment.companyName;
        // this.location = props.recruitment.location;
        // this.date = props.recruitment.date;
        // this.expiredDate = props.recruitment.expiredDate;
        // this.field = props.recruitment.field;
        // this.salary = props.recruitment.salary;
        // this.yearsOfExperience = props.recruitment.yearsOfExperience;
        // this.jobType = props.recruitment.jobType;
        // this.listDescription = props.recruitment.listDescription;

        // this.listRequirement = props.recruitment.listRequirement;

        // this.listJobRequirement = props.listJobRequirement;

        // this.listSkill = props.recruitment.listSkill;

        this.jobName = "";
        this.companyName = "";
        this.location = "";
        this.date = "";
        this.expiredDate = "";
        this.field = "";
        this.salary = "";
        this.yearsOfExperience = "";
        this.jobType = "";
        this.listDescription = [];

        this.listRequirement = [];

        this.listJobRequirement = [];

        this.listSkill = [];

        this.handleOnClickApply = this.handleOnClickApply.bind(this);
        this.handleOnClickSendApply = this.handleOnClickSendApply.bind(this);

        this.handleOnClickApplyWithCV = this.handleOnClickApplyWithCV.bind(this);
        this.handleOnClickApplyWithoutCV = this.handleOnClickApplyWithoutCV.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);

        this.state = {
            isApplyCVModalOpen: false,
            isApplyWithCV: false,
            fullname: '',
            email: '',
            phone: '',
            selectedFile: null
        }
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
        this.setState({
            isApplyCVModalOpen: !this.state.isApplyCVModalOpen
        });
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
        const formData = new FormData();

        formData.append('myFile', this.state.selectedFile, this.state.selectdFile.name);

        axios.post('api/uploadfile', formData);
    }

    handleSubmitForm(){

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
        const listRequirement = this.renderUnorderedList(this.listRequirement);
        return(
            <div style={{textAlign: 'justify'}}>
                <b>Job Requirement:</b>
                {listRequirement}
            </div>
        );
    }

    renderListJobDescription(){
        const listDescription = this.renderUnorderedList(this.listDescription);
        return(
            <div style={{textAlign: 'justify'}}>
                <b>Job Description:</b>
                {listDescription}
            </div>
        );
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
        const listSkill = this.listSkill.map((skill) => this.renderSkill(skill));
        return(
            <div style={{maxWidth: '100%'}}>
                {listSkill}
            </div>
        );
    }

    renderTitle (){
        return(
            <div style={{fontSize: '25px'}}>
                Applying to
                <span style={{color: '#4033FF', marginLeft: '10px', marginRight: '10px'}}>{this.jobName}</span>
                at
                <span style={{color: '#4033FF', marginLeft: '10px', marginRight: '10px'}}>{this.companyName}</span>
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
            const file = this.state.selectedFile ? this.state.selectedFile.lastModifiedDate.toDateString() : null;
            return(
                <InputGroup style={{margin: '15px'}}>
                    <InputGroupAddon addonType='append' style={{padding: '5px', marginRight: '49px'}}>
                        <FontAwesomeIcon icon={faFile} style={{margin: '5px', marginRight: '10px'}} />
                        CV file:
                    </InputGroupAddon>
                    <Input style={{height:'90%', maxWidth: '70%', float: 'right', fontSize: '16px'}} type="email" name="email" placeholder="Select CV: *.doc, *.docx, *.pdf" value={file} disabled='disabled'/>
                    <InputGroupAddon addonType="prepend" style={{marginLeft: '10px'}}>
                        <Button color='primary' type='button' style={{height: '87%'}}>Browse</Button>
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

    render(){
        const jobName = this.jobName;
        const companyName = this.companyName;
        const description = this.description;
        const location = this.location;
        const field = this.field;
        const salary = this.salary;
        const yearsOfExperience = this.yearsOfExperience;
        const jobType = this.jobType;
        const skills = this.skills;
        
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
}