import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddAccount from './components/add-account.component';
import SearchJob from './components/search-job.components';

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <AddAccount />
                </div>
            </div>
        );
    }
}

export default App;