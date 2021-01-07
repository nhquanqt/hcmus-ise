import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
    StartScreen, 
    LoginScreen,
    RegisterScreen,
    RegisterEmployerScreen,
    Dashboard
} from './screens/'

class App extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={StartScreen} />
                    <Route path="/login" exact component={LoginScreen} />
                    <Route path="/seeker/signup" exact component={RegisterScreen} />
                    <Route path="/company/signup" exact component={RegisterEmployerScreen} />
                    <Route path="/dashboard" exact component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default App;