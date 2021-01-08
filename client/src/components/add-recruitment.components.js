import React, { Component } from 'react';
import AccountDataService from '../services/account.service';
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
            <Container>
                <Form style={{border:'0px solid #000000', padding: '5px'}} onSubmit={this.handleSubmitForm}>
                            <FormGroup style={{margin: '0px'}}>
                                <InputGroup style={{margin: '15px'}}>
                                    Company Name:
                                    <Input style={{height:'90%', maxWidth: '70%', fontSize: '16px'}} type="name" name="company-name" placeholder="Ex: VNG" value={this.state.companyName}/>
                                </InputGroup>
                            </FormGroup>
                        </Form>
            </Container>
        );
    }
}