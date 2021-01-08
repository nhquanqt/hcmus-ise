import http from '../http-common';

class AccountDataService {
    create(data) {
        return http.post("/accounts", data);
    }
}

export default new AccountDataService();