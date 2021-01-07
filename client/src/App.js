import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchJob from "./components/search-job.component"
import Recruitment from "./components/recruitment.component"
import ApplyRecruitment from "./components/apply-recruitment.component"

class App extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={SearchJob}/>
                    {/* <Route path="/recruitment" exact component={Recruitment}/> */}
                    <Route path="/recruitment/apply/:id" exact component={ApplyRecruitment}/>
                </Switch>
            </div>
        );
    }
}

export default App;