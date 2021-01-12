import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './style/search-job.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Card,
    Button, 
    Form,
    Input,
    FormGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { 
    faPlusSquare,
    faSearch,
    faMinusSquare,
    faExchangeAlt,
    faRecycle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Recruitment from './recruitment.component'
import DataService from '../services/service'
import { View } from 'react-native';

class SearchItem extends Component{
    constructor(props){
        super(props);

        this.handleDeleteClick = (id) => (event) => props.handleDeleteClick(id);
        this.id = props.id;

        this.state = {
            keyword: this.props.keyword
        }
    }

    render(){
        return (
            <Container className='container-search-item' color='success' style={{paddingLeft: '20px', paddingRight: '10px'}}>
                <Row>
                    <Col className='row-search-item' sm={{size: 'auto'}} style={{margin: '0px', marginRight: '10px'}}>
                        <Card style={{padding: '5px', border:'1px solid #3385FF'}}>
                            {this.state.keyword}
                        </Card>
                    </Col>
                    <Col className='row-search-item-button' sm={{size: 'auto'}}>
                            <AwesomeButton type="primary" className='button-search-item' onPress={this.handleDeleteClick(this.id)}>
                                <FontAwesomeIcon icon={faMinusSquare}/>
                            </AwesomeButton>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(class SearchJob extends Component {
    constructor(props) {
        super(props);

        this.onAddSearchItemClick = this.onAddSearchItemClick.bind(this);
        this.onSearchItemDeleteClick = this.onSearchItemDeleteClick.bind(this);
        this.handleSwitchSearchOption = this.handleSwitchSearchOption.bind(this);
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.categories = ['category1', 'category2', 'category3', 'category4'];

        this.state = {
            listSearchItem: [],
            dropdownOpen: false,
            dropdownValue: this.categories[0],
            nextItemId: 0,
            currentKeyword: '',
            isAdvancedSearch: false,
            isSwitchSearchOptionEnter: false,
            recruitments: [],
            currentRecruitmentCount: 0,
            currentSelectedRecruitmentId: 0,
        };

    }

    componentDidMount() {
        this.getAllRecruitment();
    }

    getAllRecruitment() {
        DataService.searchRercuitments({})
        .then(data => {
            const tmp = JSON.parse(JSON.stringify(data.data));
            this.setState({
                recruitments: [],
                currentRecruitmentCount: 0
            })
            for(var i = 0; i < tmp.length; ++i) {
                const job = tmp[i];
                const recruitment = job.recruitment;
                const company = recruitment.company;
                this.setState({
                    recruitments: this.state.recruitments.concat([
                        {
                            jobName: job.JobName,
                            location: company.Location,
                            field: job.MajorName,
                            date: recruitment.RecruitmentDate,
                            expiredDate: recruitment.ExpiredDate,
                            yearsOfExperience: recruitment.YearsOfExperience,
                            jobType: job.JobType,
                            companyName: company.CompanyName,
                            salary: recruitment.Salary + ' USD',
                            listDescription: [recruitment.Description],
                            listRequirement: [recruitment.Requirement],
                            listSkill: [],
                            id: recruitment.id
                        }
                    ]),
                    currentRecruitmentCount: this.state.currentRecruitmentCount + 1
                });
            }
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    onAddSearchItemClick(){
        const keyword = this.state.currentKeyword;
        if(keyword === ''){
            alert('You must enter keyword!!!');
            return;
        }
        const category = this.state.dropdownValue;
        const listSearchItem = this.state.listSearchItem;
        if(listSearchItem.some(item => item.category === category)){
            alert('Category already exist!!!');
            return;
        }
        const nextItemId = this.state.nextItemId;
        this.setState({
            listSearchItem: listSearchItem.concat([
                {
                    keyword: keyword,
                    category: category,
                    id: nextItemId
                }
            ]),
            nextItemId: nextItemId + 1
        });
    }

    onSearchItemDeleteClick(id){
        const newListSearchItem = this.state.listSearchItem
        const index = newListSearchItem.map(e => e.id).indexOf(id);
        if(index !== -1){
            newListSearchItem.splice(index, 1);
            this.setState({listSearchItem: newListSearchItem});
        }
    }

    handleSwitchSearchOption(){
        this.setState({
            isAdvancedSearch: !this.state.isAdvancedSearch
        });
    }

    handleSubmitSearch(e){
        e.preventDefault();
        this.handleSearch();
    }

    handleSearch(){

        const query = {
            JobName: this.state.currentKeyword
        };

        DataService.searchRercuitments(query)
        .then(data => {
            const tmp = JSON.parse(JSON.stringify(data.data));
            this.setState({
                recruitments: [],
                currentRecruitmentCount: 0
            })
            for(var i = 0; i < tmp.length; ++i) {
                const job = tmp[i];
                const recruitment = job.recruitment;
                const company = recruitment.company;
                this.setState({
                    recruitments: this.state.recruitments.concat([
                        {
                            jobName: job.JobName,
                            location: company.Location,
                            field: job.MajorName,
                            date: recruitment.RecruitmentDate,
                            expiredDate: recruitment.ExpiredDate,
                            yearsOfExperience: recruitment.YearsOfExperience,
                            jobType: job.JobType,
                            companyName: company.CompanyName,
                            salary: recruitment.Salary + ' USD',
                            listDescription: [recruitment.Description],
                            listRequirement: [recruitment.Requirement],
                            listSkill: [],
                            id: recruitment.id
                        }
                    ]),
                    currentRecruitmentCount: this.state.currentRecruitmentCount + 1
                });
            }
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    renderAddSearchItem(){
        return(
            <InputGroupAddon addonType="prepend">
                <AwesomeButton type="primary" onPress={this.onAddSearchItemClick}>
                    <FontAwesomeIcon icon={faPlusSquare}/>
                </AwesomeButton>
            </InputGroupAddon>
        );
    }

    renderListSearchItem(){
        const searchItems = this.state.listSearchItem.map((item) => {
            return (
                <ListGroupItem style={{border:'0px solid #000000', paddingRight: "25px", paddingLeft: "5px", paddingTop: "5px", paddingBottom: "5px"}} key = {item.id} className='small-margin'>
                    <SearchItem
                        keyword = {item.keyword}
                        id = {item.id}
                        handleDeleteClick = {this.onSearchItemDeleteClick}
                    />
                </ListGroupItem>
            );
        });
        return (
            <ListGroup className="list-group-search-job" horizontal style={{padding:'10px'}}>
                {searchItems}
            </ListGroup>
        );
    }

    renderListCategoryDropDown(){
        const dropdownOpen = this.state.dropdownOpen;
        const dropDownOpenHandle = () => this.setState({dropdownOpen: true});
        const dropDownCloseHandle = () => this.setState({dropdownOpen: false});
        const onChangeDropdownValue = (e) => this.setState({
            dropdownValue: e.currentTarget.textContent,
            dropdownOpen: false
        })
        const categories = this.categories.map(category => {
            return(
                <DropdownItem color='primary'>
                    <div  onClick={onChangeDropdownValue}>{category}</div>
                </DropdownItem>
            );
        });
        return(
            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} onMouseEnter={dropDownOpenHandle} onMouseLeave={dropDownCloseHandle}>
                <DropdownToggle caret>
                    {this.state.dropdownValue}
                </DropdownToggle>
                <DropdownMenu color='primary'>
                    {categories}
                </DropdownMenu>
            </InputGroupButtonDropdown>
        )
    }

    renderEnterSearchOption(){
        const currentOption = this.state.isAdvancedSearch ? 'Normal Search' : 'Advanced Search';
        return (
            <div>
                <FontAwesomeIcon icon={faExchangeAlt} style={{marginRight: '10px'}}/>
                {currentOption}
            </div>
        );
    }

    renderLeaveSearchOption(){
        const currentOption = this.state.isAdvancedSearch ? 'Advanced Search' :  'Normal Search';
        return (
            <div>
                {currentOption}
            </div>
        );
    }

    renderSwitchSearchOption(){
        const handleMouseLeave = () => this.setState({isSwitchSearchOptionEnter: false});
        const handleMouseEnter = () => this.setState({isSwitchSearchOptionEnter: true});
        const currentOption = this.state.isSwitchSearchOptionEnter ? this.renderEnterSearchOption() : this.renderLeaveSearchOption();
        return(
            <InputGroupAddon addonType="prepend" style={{marginRight: '10px'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <AwesomeButton type="primary" onPress={this.handleSwitchSearchOption}>
                                        {currentOption}
                                    </AwesomeButton>
                                </InputGroupAddon>
        );
    }

    renderRecruitment(recruitment){
        return(
            <Recruitment 
                            id={recruitment.id}
                            jobName={recruitment.jobName}
                            jobLocation={recruitment.location}
                            field={recruitment.field}
                            companyName={recruitment.companyName}
                            salary={recruitment.salary}
                            description={recruitment.listDescription}
                            date={recruitment.date}
                            expiredDate={recruitment.expiredDate}
                                        />
        );
    }

    renderListRecruitment(){
        const listRecruitment = this.state.recruitments.map(recruitment => this.renderRecruitment(recruitment));
        return(
            <ListGroup style={{marginTop: "10px", border:'1px solid #3385FF'}}>
                {listRecruitment}
            </ListGroup>
        )
    }

    render() {

        const onSearchBoxChange = (e) => this.setState({currentKeyword: e.target.value});

        const addSearchItem = this.state.isAdvancedSearch ? this.renderAddSearchItem() : (null);

        const listSearchItem = this.state.isAdvancedSearch ? this.renderListSearchItem() : (null);
    
        const listCategoryDropDown = this.renderListCategoryDropDown();

        const switchSearchOption = this.renderSwitchSearchOption();

        const listRecruitment = this.renderListRecruitment();

        return (
            <Container style={{marginTop: '10px', maxWidth: '80%'}}>
                <Form  style={{border:'1px solid #3385FF', padding: '5px'}} onSubmit={e => this.handleSubmitSearch(e)}>
                    <FormGroup style={{margin: '0px'}}>
                        <InputGroup>

                            {switchSearchOption}

                            {addSearchItem}

                            <Input style={{height:'90%'}} type="keyword" name="keyword" id="searchJobKeyword" placeholder="Enter keyword" onChange={onSearchBoxChange}/>
                            
                            {/* {listCategoryDropDown} */}

                            <InputGroupAddon addonType='append' className='small-margin-left'>
                                <AwesomeButton type="primary">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </AwesomeButton>
                            </InputGroupAddon>

                        </InputGroup>
                    </FormGroup>
                    
                    {listSearchItem}
                </Form>
                
                {listRecruitment}
            </Container>
        );
    }
})