import React, { Component } from 'react';
import AccountDataService from '../services/account.service';
import './style/search-job.css';
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
    ModalBodyProps
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

export default class ApplyRecruitment extends Component{
    constructor(props){
        super(props);

        this.jobName = props.jobName;
        this.companyName = props.companyName;
        this.description = props.description;
        this.location = props.location;
        this.date = props.date;
        this.expiredDate = props.expiredDate;
        this.field = props.field;
        this.salary = props.salary;
        this.yearsOfExperience = props.yearsOfExperience;
        this.jobType = props.jobType;
        this.skills = props.skills;

        this.listJobDescription = props.listJobDescription;

        this.listJobRequirement = props.listJobRequirement;

        this.handleOnClickApplyWithCV = this.handleOnClickApplyWithCV.bind(this);
        this.handleOnClickApplyWithoutCV = this.handleOnClickApplyWithoutCV.bind(this);
        this.handleOnClickSendApplyWithCV = this.handleOnClickSendApplyWithCV.bind(this);
        this.handleOnClickSendApplyWithoutCV = this.handleOnClickSendApplyWithoutCV.bind(this);

        this.state = {
            isApplyWithCVModalOpen: false,
            isApplyWithoutCVModalOpen: false,
        }
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
        const listRequirement = this.renderUnorderedList(this.listJobRequirement);
        return(
            <div style={{textAlign: 'justify'}}>
                <b>Job Requirement:</b>
                {listRequirement}
            </div>
        );
    }

    renderListJobDescription(){
        const listDescription = this.renderUnorderedList(this.listJobDescription);
        return(
            <div style={{textAlign: 'justify'}}>
                <b>Job Description:</b>
                {listDescription}
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
                                {skills}<br/>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        );
    }
}