import http from "../http-common";

class DataService {
    getRecruitment(id) {
        return http.get(`http://localhost:8080/api/recruitments/id/${id}`);
    }

    searchRercuitments(req) {
        return http.get(`http://localhost:8080/api/jobs/search`, {params: req});
    }
}

export default new DataService();