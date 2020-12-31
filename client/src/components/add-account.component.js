import React, { Component } from 'react';
import AccountDataService from '../services/account.service';

export default class AddAccount extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.addAccount = this.addAccount.bind(this);

        this.state = {
            id: null,
            username: '',
            password: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    addAccount() {
        console.log('clicked')
        var data = {
            username: this.state.username,
            password: this.state.password
        }

        AccountDataService.create(data)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    username: res.data.username,
                    password: res.data.password
                })
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="submid-form">
                <div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="username"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            name="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            className="form-control"
                            id="password"
                            required
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            name="password"
                        />
                    </div>
                    <button onClick={this.addAccount} className="btn btn-success">
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}