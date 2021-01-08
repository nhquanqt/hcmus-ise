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
    faFile,
    faPlusSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'; 

export default class AddRecruitment extends Component{
    constructor(props){
        super(props);

        this.handleSubmitForm = this.handleSubmitForm.bind(this);

        this.state={
            companyName: '',
        }
    }

    handleSubmitForm(){

    }

    render(){
        return(
            <Container style={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'}}>
                <Form style={{border:'0px solid #000000', padding: '5px', width: '60%'}} onSubmit={this.handleSubmitForm}>
                            <FormGroup>
                                <InputGroup style={{fontSize: '14px'}}>
                                    <b>Company name:</b>
                                </InputGroup>
                                <InputGroup style={{marginBottom: '15px'}}>
                                    <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: VNG" value={this.state.companyName}/>
                                </InputGroup>

                                <Row>
                                    <Col>
                                        <InputGroup style={{fontSize: '14px'}}>
                                            <b>Company email:</b>
                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '15px'}}>
                                            <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: recruitment@vng.com" value={this.state.companyName}/>
                                        </InputGroup>
                                    </Col>  
                                    <Col>
                                        <InputGroup style={{fontSize: '14px'}}>
                                            <b>Phone number:</b>
                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '15px'}}>
                                            <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: 0339576024" value={this.state.companyName}/>
                                        </InputGroup>
                                    </Col>
                                </Row>

                                <InputGroup style={{fontSize: '14px'}}>
                                    <b>Job name:</b>
                                </InputGroup>
                                <InputGroup style={{marginBottom: '15px'}}>
                                    <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: Full-stack React Development" value={this.state.companyName}/>
                                </InputGroup>

                                <InputGroup style={{fontSize: '14px'}}>
                                    <b>Select needed skills in this job:</b>
                                </InputGroup>
                                <InputGroup style={{marginBottom: '15px'}}>
                                    <Row>
                                        <Col style={{paddingLeft: '15px', paddingRight: '0px'}} xs='auto'>
                                            <InputGroupAddon addonType='prepend'>
                                                <Button>
                                                    <FontAwesomeIcon icon={faPlusSquare}/>
                                                </Button>
                                            </InputGroupAddon>
                                        </Col>
                                        <Col style={{maxWidth: '55%', paddingLeft: '0px', paddingRight: '0px'}}>
                                            <InputGroup style={{fontSize: '16px'}}>
                                                <InputGroupAddon addonType='prepend' style={{margin:'0px', padding: '0px'}}>
                                                    <InputGroupText>Skill</InputGroupText>
                                                </InputGroupAddon>
                                                <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: Javascript" value={this.state.companyName}/>
                                            </InputGroup>
                                        </Col>
                                        <Col style={{maxWidth: '35%', paddingLeft: '0px', paddingRight: '10px'}}>
                                            <InputGroup>
                                                <InputGroupAddon addonType='prepend' style={{fontSize: '14px'}}>
                                                    <InputGroupText>Level</InputGroupText>
                                                </InputGroupAddon>
                                                <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Select 1-9" value={this.state.companyName}/>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </InputGroup>
                                <Row style={{marginBottom: '15px'}}>
                                    <Col>
                                        <InputGroup style={{fontSize: '14px'}}>
                                        <b>Years of experience:</b>
                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '15px'}}>
                                            <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: 1-3" value={this.state.companyName}/>
                                        </InputGroup>
                                    </Col>  
                                    <Col>
                                        <InputGroup style={{fontSize: '14px'}}>
                                            <b>Salary:</b>
                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '15px'}}>
                                            <Input style={{ maxWidth: '100%'}} type="name" name="company-name" placeholder="Ex: 1000" value={this.state.companyName}/>
                                            <InputGroupAddon addonType='append' style={{fontSize: '14px'}}>
                                                <InputGroupText><FontAwesomeIcon icon={faDollarSign}/></InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
            </Container>
        );
    }
}