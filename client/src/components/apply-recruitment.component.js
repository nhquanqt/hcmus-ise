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
    Progress
} from 'reactstrap';
import { 
    faMapMarkerAlt,
    faWrench,
    faDollarSign,
    faSignInAlt,
    faRibbon,
    faClock,
    faUserCog
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DataService from '../services/service'

export default withRouter(class ApplyRecruitment extends Component {
    constructor(props) {
        super(props);

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
            isApplyWithCVModalOpen: false,
            isApplyWithoutCVModalOpen: false,
        };

        this.handleOnClickApplyWithCV = this.handleOnClickApplyWithCV.bind(this);
        this.handleOnClickApplyWithoutCV = this.handleOnClickApplyWithoutCV.bind(this);
        this.handleOnClickSendApplyWithCV = this.handleOnClickSendApplyWithCV.bind(this);
        this.handleOnClickSendApplyWithoutCV = this.handleOnClickSendApplyWithoutCV.bind(this);

    }

    componentDidMount() {
        this.getRecruitment(this.props.match.params.id);
    }

    getRecruitment(id) {
        DataService.getRecruitment(id)
        .then(data => {
            console.log(data.data);
            const job = data.data;
            const recruitment = job.recruitment;
            const company = recruitment.company;
            this.setState({
                recruitment: {
                    jobName: job.JobName,
                    companyName: company.CompanyName,
                    location: company.Location,
                    date: recruitment.RecruitmentDate,
                    expiredDate: recruitment.ExpiredDate,
                    field: '',
                    salary: recruitment.Salary + ' USD',
                    yearsOfExperience: '',
                    jobType: '',
                    listJobDescription: [recruitment.Description],
                    listJobRequirement: [recruitment.Requirement],
                    listSkill: []
                }
            })
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    handleOnClickApplyWithCV(){
        this.setState({
            isApplyWithCVModalOpen: !this.state.isApplyWithCVModalOpen
        });
    }

    handleOnClickApplyWithoutCV(){
        this.setState({
            isApplyWithoutCVModalOpen: !this.state.isApplyWithoutCVModalOpen
        });
    }

    handleOnClickSendApplyWithCV(){
        this.setState({
            isApplyWithCVModalOpen: !this.state.isApplyWithCVModalOpen
        });
    }

    handleOnClickSendApplyWithoutCV(){
        this.setState({
            isApplyWithoutCVModalOpen: !this.state.isApplyWithoutCVModalOpen
        });
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

        return(
            <Container style={{maxWidth: '80%'}}>
                <Modal isOpen={this.state.isApplyWithCVModalOpen} toggle={this.handleOnClickApplyWithCV}>
                    <ModalHeader toggle={this.handleOnClickApplyWithCV}>
                        Apply with CV
                    </ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                        <AwesomeButton style={{marginRight: '20px'}} type='primary' onPress={this.handleOnClickSendApplyWithCV}>Send</AwesomeButton>
                        <AwesomeButton type='secondary' onPress={this.handleOnClickApplyWithCV}>Cancel</AwesomeButton>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.isApplyWithoutCVModalOpen} toggle={this.handleOnClickApplyWithoutCV}>
                <ModalHeader toggle={this.handleOnClickApplyWithoutCV}>
                        Apply without CV
                    </ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                        <AwesomeButton style={{marginRight: '20px'}} type='primary' onPress={this.handleOnClickSendApplyWithoutCV}>Send</AwesomeButton>
                        <AwesomeButton type='secondary' onPress={this.handleOnClickApplyWithoutCV}>Cancel</AwesomeButton>
                    </ModalFooter>
                </Modal>
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
                        <Row style={{maxWidth: '100%', padding: '10px', fontSize: '18px'}}>
                            <Col style={{maxWidth: '70%'}}>
                                {jobDescription}
                                {jobRequirement} 
                            </Col>
                            <Col style={{maxWidth: '30%'}}>
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
                                {listSkill}
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        );
    }
})