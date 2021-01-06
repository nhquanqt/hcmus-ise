import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddAccount from './components/add-account.component';
import SearchJob from './components/search-job.components';
import ApplyRecruitment from './components/apply-recruitment.components';

class App extends Component {
    render () {
        const router = SearchJob.renderRouter();
        return (
            <div>
                {router}
            </div>
        );
    }
}

export default App;