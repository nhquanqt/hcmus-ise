import React, { Component } from 'react';
import AccountDataService from '../services/account.service';
import '../App.css';
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

class SearchItem extends Component{
    constructor(props){
        super(props);

        this.handleDeleteClick = (id) => (event) => props.handleDeleteClick(id);
        this.id = props.id;

        this.state = {
            keyword: this.props.keyword,
            category: this.props.category
        }
    }

    render(){
        return (
            <Container className='container-search-item' color='success'>
                <Row className='row-search-item'>
                    {this.state.category}
                </Row>
                <Row className='row-search-item'>
                    {this.state.keyword}
                </Row>
                <Row className='row-search-item-button'>
                        <Button className='button-search-item' color='primary' onClick={this.handleDeleteClick(this.id)}>
                            X
                        </Button>
                        <Button className='button-search-item' color='primary'>
                            C
                        </Button>
                </Row>
            </Container>
        );
    }
}

export default class SearchJob extends Component{

    constructor(props){
        super(props);

        this.onAddSearchItemClick = this.onAddSearchItemClick.bind(this);
        this.onSearchItemDeleteClick = this.onSearchItemDeleteClick.bind(this);
        this.onAdvancedSearchClick = this.onAdvancedSearchClick.bind(this);

        this.categories = ['category1', 'category2', 'category3', 'category4']

        this.state = {
            listSearchItem: [],
            dropdownOpen: false,
            dropdownValue: this.categories[0],
            nextItemId: 0,
            currentKeyword: '',
            isAdvancedSearch: false
        }

    }

    onAddSearchItemClick(){
        const keyword = this.state.currentKeyword;
        if(keyword === ''){
            alert('You must enter keyword!!!');
            return;
        }
        const category = this.state.dropdownValue;
        const listSearchItem = this.state.listSearchItem;
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

    onAdvancedSearchClick(){
        this.setState({
            isAdvancedSearch: !this.state.isAdvancedSearch
        });
    }

    renderAddSearchItem(){
        return(
            <InputGroupAddon addonType="prepend">
                <Button onClick={this.onAddSearchItemClick}>
                    Add
                </Button>
            </InputGroupAddon>
        );
    }

    renderListSearchItem(){
        const searchItems = this.state.listSearchItem.map((item) => {
            return (
                <ListGroupItem key = {item.id} className='small-margin'>
                    <SearchItem
                        keyword = {item.keyword}
                        category = {item.category}
                        id = {item.id}
                        handleDeleteClick = {this.onSearchItemDeleteClick}
                    />
                </ListGroupItem>
            );
        });
        return (
            <ListGroup className="list-group-search-job" horizontal>
                {searchItems}
            </ListGroup>
        );
    }

    renderListCategoryDropDown(){
        const dropdownOpen = this.state.dropdownOpen;
        const toggleDropDown = () => this.setState({dropdownOpen: !dropdownOpen});
        const onChangeDropdownValue = (e) => this.setState({dropdownValue: e.currentTarget.textContent})
        const categories = this.categories.map(category => {
            return(
                <DropdownItem>
                    <div  onClick={onChangeDropdownValue}>{category}</div>
                </DropdownItem>
            );
        });
        return(
            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                <DropdownToggle caret>
                    {this.state.dropdownValue}
                </DropdownToggle>
                <DropdownMenu>
                    {categories}
                </DropdownMenu>
            </InputGroupButtonDropdown>
        )
    }

    render(){
        const onSearchBoxChange = (e) => this.setState({currentKeyword: e.target.value}) 
        
        const addSearchItem = this.state.isAdvancedSearch ? this.renderAddSearchItem() : (null);

        const listSearchItem = this.state.isAdvancedSearch ? this.renderListSearchItem() : (null);
    
        const listCategoryDropDown = this.renderListCategoryDropDown()

        return(
                <Container>
                    <Form>
                        <FormGroup>
                            <InputGroup>

                                {addSearchItem}

                                <Input type="keyword" name="keyword" id="searchJobKeyword" placeholder="Enter keyword" width="60%" onChange={onSearchBoxChange}/>
                                
                                {listCategoryDropDown}

                                <InputGroupAddon addonType="append" className='small-margin-left'>
                                    <Button color='primary' onClick={this.onAdvancedSearchClick}>
                                        Advanced Search
                                    </Button>
                                </InputGroupAddon>

                            </InputGroup>
                        </FormGroup>
                        
                        {listSearchItem}

                        <ListGroup className='justify-content-end'>
                            <Button color='primary'>
                                Find
                            </Button>
                        </ListGroup>
                    </Form>
                </Container>
        );
    }
}