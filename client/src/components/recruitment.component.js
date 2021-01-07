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
        // this.handleApplyRecruitmentClick = (id) => (event) => this.handleApplyRecruitmentClick(id);

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
            id: "123123",
            jobName: "Full-stack React Development",
            companyName: "Đại học Khoa học tự nhiên",
            description: "Chế độ thưởng: Thưởng đột xuất theo tình hình kinh doanh công ty, thưởng sinh nhật Công ty, thưởng n...\nTham gia đầy đủ BHXH, BHYT, BHTN. K",
            location: "Quận 3, TP HCM",
            date: "",
            expiredDate: "",
            field: "Công nghệ thông tin",
            salary: "20,000,000 VND"
        };
    }

    componentDidMount() {
        
    }

    getRercuitment(id) {

    }

    handleApplyRecruitmentClick(){
        this.props.history.push(`/recruitment/apply/${this.state.id}`);
    }

    render() {
        const jobName = this.state.jobName;
        const companyName = this.state.companyName;
        const description = this.state.description;
        const location = this.state.location;
        const field = this.state.field;
        const salary = this.state.salary;

        return (
            <ListGroupItem style={{backgroundColor:"#F0F0F0"}}>
                <Card style={{justifyContent:"center", border:'1px solid #33FFF3', maxWidth: '100%'}}>
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