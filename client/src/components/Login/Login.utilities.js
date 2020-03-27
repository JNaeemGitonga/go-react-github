/*eslint no-unused-vars: 0*/ //* we are using this in our jsdoc see below
import { Response } from 'superagent';
import history from '../../shared/history';

/** Class with methods for login */
export default class LoginUtilities {
    /**
     * Verifies confirm password input
     * @param {string} password 
     * @param {string} confirmPassword 
     * @returns boolean
     */
    static confirmPasswordIsInvalid (password, confirmPassword) {
        if (confirmPassword === '') return true;

        if (!password && !confirmPassword) return true;

        if (confirmPassword !== password) return true;

        return false;
    }

    /**
     * Check if input is valid
     * @param {string} type 
     * @param {string} value
     * @param {Function} _cb //* this will be an api call to check if username has been used before
     * @returns boolean
     */
    static isInputInvalid(type, value, _cb) {
        //! the following commented rules are for eslint's stupid issue with switch in create-react-app
        /*eslint no-labels: 0*/
        /*eslint default-case: 0*/
        /*eslint no-unused-labels: 0*/
        /*eslint no-unreachable: 0*/
        switch (type) {
            case 'password':
                return value.length < 5;
            case 'username':
                return value.length < 5;
            defalut:
                return false;
        }
    }

    /**
     * handles login response
     * @param {Response} response 
     * @param {string} username
     */
    static handleLogin(response, username) {
        if (response.status === 200) {
            history.push(`/repos/${username}`);
        } else {
            //* call an error function
        }
    }
}