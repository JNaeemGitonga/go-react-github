import React, { Component } from 'react';
import styles from './Login.module.css';
import SignupViewContext from '../../context/signup-view-context';
import * as Mui from '../../shared/material-ui.components';
import Button from '../../shared/Button';
import Input from '../../shared/Input';
import LoginUtilities from './Login.utilities';
import ApiCalls from '../../shared/api-calls';
import n from '../../shared/css-names';
import vn from '../../shared/validator-names';
import ln from '../../shared/label-names';


export default class Login extends Component {
    state = {
        showSignup: this.context,
        username: '',
        password: '',
        confirmPassword: '',
        confirmPasswordInvalid: false,
        passwordInvalid: false,
        usernameInvalid: false,
    };

    componentDidMount() {
        //* check for the existance of a form
        //* before adding a listener to it. Why? Because if we don't
        //* our test will fail since when running test form may be undefined.
        //* this is probably due to the fact that jest runs an approximation
        //* of the real browser behavior. https://create-react-app.dev/docs/running-tests
        const form = document.getElementsByTagName('form')[0];
        if (form) {
            form.addEventListener('keyup', this.checkKeyCodeAndSubmit);
        }
    }

    checkKeyCodeAndSubmit = e => e.keyCode === 13 && this.submit();

    login = () => {
        const res = ApiCalls.login({
            username: this.state.username,
            password: this.state.password,
        });
        if (res.statusCode === 200) {
            //* redirect to inside app
        } else {
            //* call an error function
        }
    };

    signup = async () => {
        const token = await ApiCalls.signup({
            username: this.state.username,
            password: this.state.password,
        });
        console.log('signup res ', token);
    };

    submit = () => {
        const usernameInvalid = LoginUtilities.isInputInvalid(
            ln.username,
            this.state.username
        );
        const passwordInvalid = LoginUtilities.isInputInvalid(
            ln.password,
            this.state.password
        );
        this.setState({ passwordInvalid, usernameInvalid });
        if (!passwordInvalid && !usernameInvalid) {
            if (this.state.showSignup) this.signup();
            else this.login();
        }
    };

    componentWillUnmount() {
        document
            .getElementsByTagName('form')[0]
            .removeEventListener('keyup', this.checkKeyCodeAndSubmit);
    }

    updateComponent = update => {
        this.setState(update);
    }

    render() {
        const {
            showSignup,
            confirmPasswordInvalid,
            usernameInvalid,
            passwordInvalid,
        } = this.state;

        return (
            <div id={styles.login} className={styles[n.formWrapper]}>
                <Mui.Container className={styles[n.formHead]}>
                    <div id="placeholder" />{/* Without this place holder MUI will throw an error as this element must contain a child */}
                </Mui.Container>
                <form id={styles[n.loginSignupFormId]}
                      aria-label="login form">

                    <Input updateComponent={this.updateComponent}
                           id={styles[n.usernameInputId]}
                           required={true}
                           error={usernameInvalid}
                           utilities={[ln.username, [vn.usernameInvalid, LoginUtilities.isInputInvalid]]}
                           type={ln.name}
                           label={ln.username}
                    />
                    <Input updateComponent={this.updateComponent}
                           id={styles[n.passwordInputId]}
                           error={passwordInvalid}
                           required={true}
                           utilities={[ln.password, [vn.passwordInvalid, LoginUtilities.isInputInvalid]]}
                           type={ln.password}
                           label={ln.password}
                    />
                    {showSignup && (
                        <Input updateComponent={this.updateComponent}
                               id={styles[n.confirmPasswordInputId]}
                               error={confirmPasswordInvalid}
                               required={true}
                               utilities={[ln.confirmPasswordCC, [vn.confirmPasswordInvalid, LoginUtilities.confirmPasswordIsInvalid, this.state.password]]}
                               type={ln.password}
                               label={ln.confirmPassword}
                        />
                    )}
                </form>

                <Button action={this.submit}
                        variant="outlined"
                        color="primary"
                        btnText="Submit"
                />

                <SignupViewContext.Provider value={showSignup}>
                    {showSignup && (
                        <span
                            className={styles[n.toggleSpan]}
                            onClick={() => this.setState({ showSignup: false })}
                        >
                            Click here to Login
                        </span>
                    )}
                    {!showSignup && (
                        <span
                            className={styles[n.toggleSpan]}
                            onClick={() => this.setState({ showSignup: true })}
                        >
                            Click here to SignUp
                        </span>
                    )}
                </SignupViewContext.Provider>
            </div>
        );
    }
}

Login.contextType = SignupViewContext;
