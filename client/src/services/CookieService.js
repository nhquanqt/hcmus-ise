import Cookie from 'universal-cookie';

const cookie = new Cookie();

class CookieService {
    get(key, options) {
        return cookie.get(key, options);
    }

    set(key, value, options) {
        cookie.set(key, value, options);
    }

    remove(key, options) {
        cookie.remove(key, options);
    }

    getAll(options) {
        return cookie.getAll(options);
    }
}

export default new CookieService();