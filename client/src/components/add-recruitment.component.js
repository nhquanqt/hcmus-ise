import React, { Component } from 'react';
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
    InputGroupText,
    FormGroup,
    InputGroup,
    Input,
    Form,
    ListGroup
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
    faFile,
    faPlusSquare,
    faMinusSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'; 
import Autocomplete from './Autocomplete';
import NumericInput from 'react-numeric-input';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import CookieService from '../services/CookieService'
import DataService from '../services/service'

class Skill extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.level = props.level;
        this.id = props.id;
        this.handleDeleteClick = (id) => (event) => props.handleDeleteClick(id);
    }

    render(){
        return(
            <Container>
                <Card style={{paddingTop: '5px', paddingLeft: '15px', paddingRight: '5px'}}>
                    <Row>
                        <Col sm={{size: 'auto'}} style={{margin: '0px', marginRight: '10px', paddingTop: '10px'}}>
                            <span style={{marginRight: '10px'}}>{this.name}</span>
                            {this.level}
                        </Col>
                        <Col style={{display: 'block', padding: '10px 15px', overflow: 'hidden', position: 'relative'}} sm={{size: 'auto'}}>
                                <AwesomeButton type="primary" style={{justifyContent: 'center', float: 'right'}} onPress={this.handleDeleteClick(this.id)}>
                                    <FontAwesomeIcon icon={faMinusSquare}/>
                                </AwesomeButton>
                        </Col>
                    </Row>
                </Card>
            </Container>
        );
    }
}

export default class AddRecruitment extends Component{
    constructor(props){
        super(props);

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleDeleteSkillClick = this.handleDeleteSkillClick.bind(this);
        this.handleAddSkillClick = this.handleAddSkillClick.bind(this);
        this.handleJobTypeChange = this.handleJobTypeChange.bind(this);
        this.handleMajorChange = this.handleMajorChange.bind(this);
        this.handleSkillNameChange = this.handleSkillNameChange.bind(this);

        this.state={
            // companyName: '',
            // companyEmail: '',
            // phone: '',
            jobName: '',
            jobType: '',
            major: '',
            yearsOfExperience: '',
            salary: '',
            description: '',
            requirement: '',
            listSkill: [],
            currentSkillName: '',
            currentSkillLevel: 1,
            skillCount: 0,
            isSkillNameMatch: false,
            isJobTypeMatch: false,
            isMajorMatch: false,
            date: null,
        }
    }

    handleSubmitForm(){

        const UserID = CookieService.get("UserID");

        console.log(UserID);
        
        DataService.getCompany(UserID)
        .then(data => {
            this.setState({companyID: data.data.id});
            
            const recruitmentDate = new Date();

            const recruitment = {
                CompanyID: this.state.companyID,
                RecruitmentDate: recruitmentDate,
                ExpiredDate: this.state.date,
                Description: this.state.description,
                Salary: parseInt(this.state.salary),
                JobName: this.state.jobName,
                JobType: this.state.jobType,
                JobDescription: this.state.description,
                Requirement: this.state.requirement
            }

            DataService.postRecruitment(recruitment)
            .then( () => {
                alert("Recruitment posted!");
            });
    
        })
        .catch(err => {
            console.log('error');
            console.log(err.message);
            alert(err.message);
        })

    }

    handleAddSkillClick(){
        const skillName = this.state.currentSkillName;
        const skillLevel = this.state.currentSkillLevel;
        if(skillName === ''){

        }
        this.setState({
            listSkill: this.state.listSkill.concat([
                {
                    name: skillName,
                    level: skillLevel,
                    id: this.state.skillCount,
                    handleDeleteClick: this.handleDeleteSkillClick
                }
            ]),
            skillCount: this.state.skillCount + 1
        });
    }

    handleDeleteSkillClick(id){
        const newListSkill = this.state.listSkill;
        const index = newListSkill.map(e => e.id).indexOf(id);
        if(index !== -1){
            newListSkill.splice(index, 1);
            this.setState({listSkill: newListSkill});
        }
    }

    handleJobTypeChange(value, isMatch){
        this.setState({
            jobType: value,
            isJobTypeMatch: isMatch
        })
    }

    handleMajorChange(value, isMatch){
        this.setState({
            major: value,
            isMajorMatch: isMatch
        })
    }

    handleSkillNameChange(value, isMatch){
        this.setState({
            currentSkillName: value,
            isSkillNameMatch: isMatch
        })

    }

    renderListSkill(){
        const searchItems = this.state.listSkill.map((item) => {
            return (
                <ListGroupItem style={{border:'0px solid #000000', paddingRight: "25px", paddingLeft: "5px", paddingTop: "5px", paddingBottom: "5px"}} key = {item.id} >
                    <Skill
                        name = {item.name}
                        level = {item.level}
                        id = {item.id}
                        handleDeleteClick = {this.handleDeleteSkillClick}
                    />
                </ListGroupItem>
            );
        });
        return (
            <ListGroup horizontal style={{overflow:'scroll', WebkitOverflowScrolling:'touch', }}>
                {searchItems}
            </ListGroup>
        );
    }

    renderValidation(value){
        if(value === '')
        {
            return (
                <div style={{marginTop: '5px', marginLeft: '5px'}}>
                    <FontAwesomeIcon icon={faTimes} color='red'/>
                </div>
            );
        }
        else{
            return (
                <div style={{marginTop: '5px', marginLeft: '5px'}}>
                    <FontAwesomeIcon icon={faCheck} color='green'/>
                </div>
            );
        }
    }

    render(){
        const listSkill = this.renderListSkill();
        // const onCompanyNameChanged = (e) => this.setState({companyName: e.target.value});
        // const onCompanyEmailChanged = (e) => this.setState({companyEmail: e.target.value});
        // const onPhoneChanged = (e) => this.setState({phone: e.target.value});
        const onJobNameChanged = (e) => this.setState({jobName: e.target.value});
        const onYearsofExperienceChanged = (e) => this.setState({yearsOfExperience: e.target.value});
        const onSalaryChanged = (e) => this.setState({salary: e.target.value});
        const onDescriptionChanged = (e) => this.setState({description: e.target.value});
        const onRequirementChanged = (e) => this.setState({requirement: e.target.value});

        const listSkillSet = ['javascripts', 'csharp', 'reactjs'];
        const listJobType = ['Fulltime', 'Parttime'];
        const listMajor = ['Software Engineering', 'Networking', 'Computer Vision', 'Chemistry'];
        
        const validationJobName = this.renderValidation(this.state.jobName);
        const validationJobType = this.renderValidation(this.state.jobType);
        const validationMajor = this.renderValidation(this.state.major);

        return(
            <Container style={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'}}>
                <Form style={{border:'0px solid #000000', padding: '5px', width: '60%', marginTop: '20px', marginBottom: '20px'}} onSubmit={this.handleSubmitForm}>
                    It’s our pleasure to support you recruiting your next awesome teammate.
                            <FormGroup>
                                {/* <InputGroup style={{fontSize: '14px', marginTop: '20px'}}>
                                    <b>Company name:</b>
                                </InputGroup>
                                <InputGroup style={{marginBottom: '15px'}}>
                                    <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: VNG" value={this.state.companyName} onChange={onCompanyNameChanged}/>
                                </InputGroup>
                                <Row>
                                    <Col>
                                        <InputGroup style={{fontSize: '14px'}}>
                                            <b>Company email:</b>
                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '15px'}}>
                                            <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: recruitment@vng.com" value={this.state.companyEmail} onChange={onCompanyEmailChanged}/>
                                        </InputGroup>
                                    </Col>  
                                    <Col>
                                        <InputGroup style={{fontSize: '14px'}}>
                                            <b>Phone number:</b>
                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '15px'}}>
                                            <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: 0339576024" value={this.state.phone} onChange={onPhoneChanged}/>
                                        </InputGroup>
                                    </Col>
                                </Row> */}

                                <InputGroup style={{fontSize: '14px', marginTop: '20px'}}>
                                    <b>Job name*:</b>
                                </InputGroup>
                                <InputGroup style={{marginBottom: '15px'}}>
                                    <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: Full-stack React Development" value={this.state.jobName} onChange={onJobNameChanged}/>
                                    {validationJobName}
                                </InputGroup>


                                <Row>
                                    <Col>
                                        <InputGroup style={{fontSize: '14px'}}>
                                            <b>Job type*:</b>
                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '15px', fontSize: '16px'}}>
                                            <Autocomplete suggestions={listJobType} hint='Ex: Fulltime' handleOnChange={this.handleJobTypeChange}/>
                                            {validationJobType}
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup style={{fontSize: '14px'}}>
                                            <b>Major*:</b>
                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '15px', fontSize: '16px'}}>
                                            <Autocomplete suggestions={listMajor} hint='Ex: Software Engineering' handleOnChange={this.handleMajorChange}/>
                                            {validationMajor}
                                        </InputGroup>
                                    </Col>
                                </Row>

                                <InputGroup style={{fontSize: '14px'}}>
                                    <b>Select needed skills in this job:</b>
                                </InputGroup>
                                <Row>
                                    <Col style={{paddingLeft: '15px', paddingRight: '0px'}} xs='auto'>
                                        <InputGroupAddon addonType='prepend'>
                                            <Button type='button' color='primary' onClick={this.handleAddSkillClick}>
                                                <FontAwesomeIcon icon={faPlusSquare}/>
                                            </Button>
                                        </InputGroupAddon>
                                    </Col>
                                    <Col style={{maxWidth: '75%',paddingLeft: '0px', paddingRight: '0px'}}>
                                        <InputGroup style={{fontSize: '16px'}}>
                                            <Autocomplete suggestions={listSkillSet} hint='Ex: Javascript' handleOnChange={this.handleSkillNameChange}/>
                                        </InputGroup>
                                    </Col>
                                    <Col style={{maxWidth: '25%',paddingLeft: '0px', paddingRight: '10px'}}>
                                        <InputGroup>
                                            <Row>
                                                <InputGroupAddon addonType='prepend' style={{fontSize: '14px'}}>
                                                    <InputGroupText>Level</InputGroupText>
                                                </InputGroupAddon>
                                                <NumericInput style={{wrap: {width: '100px'}}} className='form-control' min={1} max={9} value={this.state.currentSkillLevel} onChange={value => this.setState({currentSkillLevel: value})}/>
                                                {/* <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Select 1-9" value={this.state.currentSkillLevel} onChange={onSkillLevelChanged}/> */}
                                            </Row>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                {listSkill}
                                <Row>
                                    <Col>
                                        <InputGroup style={{fontSize: '14px'}}>
                                        <b>Years of experience:</b>
                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '15px'}}>
                                            <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: 1-3" value={this.state.yearsOfExperience} onChange={onYearsofExperienceChanged}/>
                                        </InputGroup>
                                    </Col>  
                                    <Col>
                                        <InputGroup style={{fontSize: '14px'}}>
                                            <b>Salary:</b>
                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '15px'}}>
                                            <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: 1000" value={this.state.salary} onChange={onSalaryChanged}/>
                                            <InputGroupAddon addonType='append' style={{fontSize: '14px'}}>
                                                <InputGroupText><FontAwesomeIcon icon={faDollarSign}/></InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>

                                <InputGroup style={{fontSize: '14px'}}>
                                    <b>Job description:</b>
                                </InputGroup>
                                <InputGroup style={{marginBottom: '15px'}}>
                                    <textarea style={{width: '100%', height: '133px'}} value={this.state.description} onChange={onDescriptionChanged}/>
                                </InputGroup>

                                <InputGroup style={{fontSize: '14px'}}>
                                    <b>Job requirement:</b>
                                </InputGroup>
                                <InputGroup style={{marginBottom: '15px'}}>
                                    <textarea style={{width: '100%', height: '133px'}} value={this.state.requirement} onChange={onRequirementChanged}/>
                                </InputGroup>

                                
                                <InputGroup style={{fontSize: '14px', marginTop: '20px'}}>
                                    <b>ExpiredDate*:</b>
                                </InputGroup>
                                <InputGroup style={{marginBottom: '15px'}}>
                                    <DatePicker selected={this.state.date} onChange={selectedDate => this.setState({date: selectedDate})}/>
                                </InputGroup>
                            </FormGroup>
                    <Button color='primary' style={{width: '100%'}} type='submit'>
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}