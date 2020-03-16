export default class Utilities {
    /**
     * @name confirmPasswordIsInvalid
     * @param {string} password 
     * @param {string} confirmPassword 
     * @returns boolean
     */
    static confirmPasswordIsInvalid (password, confirmPassword) {
        if (!password && !confirmPassword) return true;

        if (confirmPassword !== password) return true;

        return false;
    }

    /**
     * @name isInputInvalid
     * @param {string} type 
     * @param {string} value
     * @param {function} _cb //* this will be an api call to check if username has been used before
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
}