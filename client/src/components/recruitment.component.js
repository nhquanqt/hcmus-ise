import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

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

import DataService from '../services/service';

export default withRouter(class Recruitment extends Component{
    constructor(props) {
        super(props);

        this.handleApplyRecruitmentClick = this.handleApplyRecruitmentClick.bind(this);

        // this.state = {
        //     id: "",
        //     jobName: "",
        //     companyName: "",
        //     description: "",
        //     location: "",
        //     date: "",
        //     expiredDate: "",
        //     field: "",
        //     salary: 0
        // };

        this.state = {
            id: props.id,
            jobName: props.jobName,
            field: props.field,
            companyName: props.companyName,
            description: props.description,
            location: props.jobLocation,
            date: props.date,
            expiredDate: props.expiredDate,
            field: props.field,
            salary: props.salary
        };
    }

    componentDidMount() {
        
    }

    getRercuitment(id) {

    }

    handleApplyRecruitmentClick(){
        this.props.history.push(`/recruitment/apply/${this.state.id}`);
    }

    getDifferenceRecruitmentDate(){
        // const t = "2020-12-22 13:12:01".split(/[- :]/);
        // const recruitmentDate = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
        const recruitmentDate = new Date(this.state.date);
        const currentDate = new Date();
        const diff = currentDate.getTime() - recruitmentDate.getTime();
        const monthTime = 2592000000;
        const weekTime = 604800000;
        const dayTime = 86400000;
        const hourTime = 3600000;
        const minuteTime = 60000;
        let type = '';
        let diffWithType = '';
        if(diff > monthTime){
            type = ' month ';
            diffWithType = Math.floor(diff/monthTime);
        }
        else if(diff > weekTime){
            type = ' week ';
            diffWithType = Math.floor(diff/weekTime);
        }
        else if(diff > dayTime){
            type = ' day ';
            diffWithType = Math.floor(diff/dayTime);
        }
        else if(diff > hourTime){
            type = ' hour ';
            diffWithType = Math.floor(diff/hourTime);
        }
        else if(diff > minuteTime){
            type = ' minute ';
            diffWithType = Math.floor(diff/minuteTime);
        }
        else{
            type = ' minute ';
            diffWithType = '<1';
        }
        return(
            <div>
                {diffWithType}
                {type}
                ago
            </div>
        );
    }

    getExpiredDate(){
        // const t = "2020-12-22 13:12:01";
        const t = new Date(this.state.expiredDate).toDateString();
        return(
            <div>
                {t}
            </div>
        );
    }

    render() {
        const jobName = this.state.jobName;
        const companyName = this.state.companyName;
        const description = this.state.description;
        const location = this.state.location;
        const field = this.state.field;
        const salary = this.state.salary;

        const differenceRecruitmentDate = this.getDifferenceRecruitmentDate();
        const expiredDate = this.getExpiredDate();

        return (
            <ListGroupItem style={{backgroundColor:"#F0F0F0"}}>
                <Card style={{justifyContent:"center", border:'1px solid #33FFF3', maxWidth: '100%'}}>
                    <Row style={{maxWidth: '100%'}}>
                            <Col sm={{size: 'auto'}}>
                                <CardImg style={{width:"100%", margin:'10px', border:'1px solid #A433FF'}} src = {'http://placehold.it/150x150'}/>
                            </Col>
                            <Col className='card-col small-margin-left' style={{maxWidth: '80%'}}>
                                <Row style={{maxWidth: '100%'}}>
                                    <Col style={{maxWidth: '60%'}}>
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
                                    <Col>
                                        <Row>
                                            {differenceRecruitmentDate}
                                        </Row>
                                        <Row>
                                            {expiredDate}
                                        </Row>
                                    </Col>
                                    <Col style={{maxWidth: '20%', float: 'right'}}>
                                        <AwesomeButton type='primary' style={{margin:'10px', justifyContent: 'flex-end'}} onPress={this.handleApplyRecruitmentClick}>
                                            <FontAwesomeIcon icon={faSignInAlt}/>
                                        </AwesomeButton>
                                    </Col>  
                                </Row>
                                <Row style={{maxWidth: '100%', textAlign: 'justify', paddingLeft: '15px'}}>
                                    {description}
                                </Row>
                            </Col>   
                    </Row>
                </Card>
            </ListGroupItem>
        );
    }
})