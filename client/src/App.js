import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddAccount from './components/add-account.component';
import SearchJob from './components/search-job.components';
import ApplyRecruitment from './components/apply-recruitment.components';

class App extends Component {
    render () {
        const listDescription = ['ĐH KHTN mong muốn cộng tác với các lập trình viên Back-end có kinh nghiệm, có đam mê và nhiệt huyết trong việc phát triển sản phẩm, cung cấp các giải pháp giải quyết các bài toán liên quan đến quản lý trải nghiệm khách hàng;',
        'Có khả năng nắm bắt và ứng dụng nhanh chóng các công nghệ mới (GoLang, NodeJS…);',
        'Có khả năng thiết kế (Architecture và Detail Design) và phát triển sản phẩm trên nền tảng công nghệ mới;',
        'Tương tác với các thiết bị điều khiển thông minh (IoT);',
        'Làm việc trực tiếp với khách hàng, đối tác trong và ngoài nước;',
        'Hỗ trợ triển khai sản phẩm ở các thị trường trong và ngoài nước;',
        'Thông tin chi tiết thêm sẽ trao đổi khi phỏng vấn.'];
        const listRequirement = ['ĐH KHTN mong muốn cộng tác với các lập trình viên Back-end có kinh nghiệm, có đam mê và nhiệt huyết trong việc phát triển sản phẩm, cung cấp các giải pháp giải quyết các bài toán liên quan đến quản lý trải nghiệm khách hàng;',
        'Có khả năng nắm bắt và ứng dụng nhanh chóng các công nghệ mới (GoLang, NodeJS…);',
        'Có khả năng thiết kế (Architecture và Detail Design) và phát triển sản phẩm trên nền tảng công nghệ mới;',
        'Tương tác với các thiết bị điều khiển thông minh (IoT);',
        'Làm việc trực tiếp với khách hàng, đối tác trong và ngoài nước;',
        'Hỗ trợ triển khai sản phẩm ở các thị trường trong và ngoài nước;',
        'Thông tin chi tiết thêm sẽ trao đổi khi phỏng vấn.'];
        return (
            <div>
                <div>
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
                </div>
            </div>
        );
    }
}

export default App;