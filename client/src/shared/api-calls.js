import request from 'superagent';

export default class ApiCalls {

    /**
     * @name login
     * @param {{username: string, password: string}} data
     * @return Promise<string>
     */
    static login (data) {
        console.log('calling login from utility ')
        return request.post('/api/auth/login').send(data).set('accept', 'json');
    }

    /**
     * @name signup
     * @param {{username: string, password: string}} data
     * @return Promise<string>
     */
    static signup (data) {
        console.log('calling signup from utility ')
        return request.post('/api/auth/signup').send(data).set('accept', 'json');
    }
}