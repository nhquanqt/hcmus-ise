import React, { Component } from 'react';
import AccountDataService from '../services/account.service';
import './style/recruitment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { 
    faMapMarkerAlt,
    faWrench,
    faDollarSign,
    faSignInAlt
} from '@fortawesome/free-solid-svg-icons'
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
    Button
} from 'reactstrap';

export default class Recruitment extends Component{
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
    }

    render(){
        const jobName = this.jobName;
        const companyName = this.companyName;
        const description = this.description;
        const location = this.location;
        const field = this.field;
        const salary = this.salary;
        return (
            <ListGroupItem style={{backgroundColor:"#F0F0F0"}}>
                <Card style={{justifyContent:"center", border:'1px solid #33FFF3'}}>
                    <Row style={{width:"100%", height:"100%"}}>
                        <Col sm={{size: 'auto'}}>
                            <CardImg style={{width:"100%", margin:'10px', border:'1px solid #A433FF'}} src = {'http://placehold.it/150x150'}/>
                        </Col>
                        <Col className='card-col small-margin-left'>
                            <CardBody className='card-body'>
                                <CardTitle tag='h6' style = {{marginTop:"5px", color: '#4033FF'}} >
                                    {jobName}
                                </CardTitle>
                                <CardText className='paragraph'>
                                    {companyName}
                                    <br/>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='small-margin-right'/>
                                    {location}
                                    <FontAwesomeIcon icon={faWrench} className='small-margin-left-right'/>
                                    {field}
                                    <br/>
                                    <FontAwesomeIcon icon={faDollarSign} className='small-margin-right'/>
                                    {salary}
                                    <br/>
                                    {description}
                                </CardText>
                            </CardBody>
                        </Col>
                        <Col sm={{size: 'auto'}}>
                            <AwesomeButton type='primary' style={{margin:'10px'}}>
                                <FontAwesomeIcon icon={faSignInAlt}/>
                            </AwesomeButton>
                        </Col>          
                    </Row>
                </Card>
            </ListGroupItem>
        );
    }
}