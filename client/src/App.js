import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StartScreen from './screens/StartScreen'
// import LoginScreen from './screens/LoginScreen'
// import RegisterScreen from './screens/RegisterScreen'

class App extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={StartScreen} />
                    {/* <Route path="/login" exact component={LoginScreen} />
                    <Route path="/signup" exact component={RegisterScreen} /> */}
                </Switch>
            </div>
        );
    }
}

export default App;