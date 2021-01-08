import http from "../http-common";

const host_url = `http://localhost:8080`

class DataService {
    getRecruitment(id) {
        return http.get(`/recruitments/id/${id}`);
    }

    searchRercuitments(req) {
        return http.get(`/jobs/search`, {params: req});
    }

    login(req) {
        return http.get(`/user/login`, {params: req});
    }
}

export default new DataService();