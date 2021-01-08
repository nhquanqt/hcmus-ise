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
        this.id = props.id;
        this.jobName = props.jobName;
        this.companyName = props.companyName;
        this.description = props.description;
        this.location = props.location;
        this.date = props.date;
        this.expiredDate = props.expiredDate;
        this.field = props.field;
        this.salary = props.salary;
        this.handleApplyRecruitmentClick = this.handleApplyRecruitmentClick.bind(this);
    }

    componentDidMount() {
        
    }

    getRercuitment(id) {

    }

    handleApplyRecruitmentClick(){
        this.props.history.push(`/recruitment/apply/${this.state.id}`);
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
                <Card style={{justifyContent:"center", border:'1px solid #33FFF3', paddingBottom: '5px'}}>
                <Row style={{maxWidth: '100%'}}>
                            <Col sm={{size: 'auto'}}>
                                <CardImg style={{width:"100%", margin:'10px', border:'1px solid #A433FF'}} src = {'http://placehold.it/150x150'}/>
                            </Col>
                            <Col className='card-col small-margin-left' style={{maxWidth: '80%'}}>
                                <Row style={{maxWidth: '100%'}}>
                                    <Col style={{maxWidth: '80%'}}>
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
                                            </CardText>
                                        </CardBody>
                                    </Col>
                                    <Col style={{maxWidth: '20%', float: 'right'}}>
                                        <AwesomeButton type='primary' style={{margin:'10px', justifyContent: 'flex-end'}} onPress={this.handleApplyRecruitmentClick}>
                                            <FontAwesomeIcon icon={faSignInAlt}/>
                                        </AwesomeButton>
                                    </Col>  
                                </Row>
                                <Row style={{maxWidth: '100%', textAlign: 'justify', paddingLeft: '15px', fontSize: '16px'}}>
                                    {description}
                                </Row>
                            </Col>   
                    </Row>
                </Card>
            </ListGroupItem>
        );
    }
}