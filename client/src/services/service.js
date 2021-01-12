import http from "../http-common";

class DataService {
    getRecruitment(id) {
        return http.get(`/recruitments/id/${id}`);
    }

    searchRercuitments(req) {
        return http.get(`/jobs/search`, {params: req});
    }

    postRecruitment(req) {
        return http.post(`/company/postJob`, req);
    }

    login(req) {
        return http.get(`/user/login`, {params: req});
    }

    signup(req) {
        return http.post(`/user/signup`, req);
    }

    getUser(id) {
        return http.get(`/user/id/${id}`);
    }

    updateSeekerProfile(req) {
        return http.post(`/seeker/uploadProfile`, req);
    }

    updateCompanyProfile(req) {
        return http.post(`/company/uploadProfile`, req);
    }

    getSeeker(UserID) {
        return http.get(`/seeker/id/${UserID}`);
    }

    getCompany(UserID) {
        return http.get(`/company/id/${UserID}`);
    }
}

export default new DataService();