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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <div>
<<<<<<< HEAD
                    <AddAccount />
=======
                    < ApplyRecruitment 
                    jobName='Full-stack React Development'
                            location='Quận 3, TP HCM'
                            field='Công nghệ thông tin'
                            companyName='Đại học Khoa học tự nhiên'
                            salary='20,000,000 VND'
                            listJobDescription={listDescription}
                            listJobRequirement={listRequirement}
                            yearsOfExperience='1 year'
                            jobType='Full Time'
                            skills='Javascript, Reactjs, Bootstrap, Nodejs'
                            />
>>>>>>> Complete Search-job, Recruitment components, Add Apply components
                </div>
=======
                <SearchJob />
>>>>>>> Add route and parameters-loading component
=======
                {router}
>>>>>>> fixed
=======
                {router}
>>>>>>> 6f03c0399590f2060102c66fb820a993a2978826
            </div>
        );
    }
}

export default App;