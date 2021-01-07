import http from "../http-common";

class DataService {
    getRecruitment(id) {
        return http.get(`jobs/id/${id}`);
    }
}

export default new DataService();