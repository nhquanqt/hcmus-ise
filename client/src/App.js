import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
    StartScreen, 
    LoginScreen,
    ProfileScreen,
    Dashboard,
    CompanyProfileScreen
} from './screens/'
import CreateCV from './screens/CreateCV';

class App extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={CompanyProfileScreen} />
                    <Route path="/login" exact component={LoginScreen} />
                    <Route path="/createcv" exact component={CreateCV} />
                </Switch>
            </div>
        );
    }
}

export default App;