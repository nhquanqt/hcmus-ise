import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchJob from "./components/search-job.component"
import Recruitment from "./components/recruitment.component"
import ApplyRecruitment from "./components/apply-recruitment.component"
import AddRecruitment from "./components/add-recruitment.component"
import Home from "./pages/Home"
import Apply from "./pages/Apply"
import CompanyProfile from "./pages/CompanyProfile"
import SeekerProfile from "./pages/SeekerProfile"
import PostJob from "./pages/PostJob"
import {
    StartScreen, 
    LoginScreen, 
    SeekerRegisterScreen, 
    CompanyRegisterScreen, 
    Dashboard,
    SeekerProfileScreen,
    CompanyProfileScreen
} from "./screens"

class App extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path={["/", "/home"]} exact component={Home} />
                    <Route path="/login" exact component={LoginScreen} />
                    <Route path="/seeker/signup" exact component={SeekerRegisterScreen} />
                    <Route path="/company/signup" exact component={CompanyRegisterScreen} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/recruitment/search" exact component={SearchJob} />
                    <Route path="/recruitment/apply/:id" exact component={Apply} />
                    <Route path="/recruitment/add" exact component={PostJob} />
                    <Route path="/seeker/profile" exact component={SeekerProfile} />
                    <Route path="/company/profile" exact component={CompanyProfile} />
                </Switch>
            </div>
        );
    }
}

export default App;