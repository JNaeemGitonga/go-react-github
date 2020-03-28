import request from 'superagent';
import arn from './constants/api-route-names';
import { siteUrl } from './constants/strings';

export default class ApiCalls {

    /**
     * @name login
     * @param {{username: string, password: string}} data
     * @return Promise<string>
     */
    static async login (data) {
        let response;
        try {
            const origin = process.env.NODE_ENV === 'development' ? window.location.origin : siteUrl;
            response = await request.post(arn.login).send(data).set('accept', 'application/json').set('origin', origin);
        } catch (e) {
            response = e;
        }
        return response;
    }

    /**
     * @name signup
     * @param {{username: string, password: string}} data
     * @return Promise<string>
     */
    static async signup (data) {
        let response;
        try {
            response = await request.post(arn.signup).send(data).set('accept', 'json');
        } catch (e) {
            response = e;
        }
        return response;
    }
}