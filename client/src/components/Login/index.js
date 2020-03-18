import React, { Component } from 'react';
import styles from './Login.module.css';
import SignupViewContext from '../../context/signup-view-context';
import * as Mui from '../../shared/material-ui.components';
import LoginUtilities from './login.utilities';
import ApiCalls from '../../shared/api-calls';

export default class Login extends Component {
    apiCalls;
    utilities;
    constructor(apiCalls = ApiCalls, utilities = LoginUtilities) {
        super();
        this.apiCalls = apiCalls;
        this.utilities = utilities;
    }
    state = {
        showSignup: this.context,
        username: '',
        password: '',
        confirmPassword: '',
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

    login = async () => {
        const res = await this.apiCalls.login({ username: this.state.username, password: this.state.password });
        if (res.statusCode === 200) {
            //* redirect to inside app
        } else {
            //* call an error function
        }
    };

    signup = async () => {
        console.log('called signup')
        const token = await this.apiCalls.signup({ username: this.state.username, password: this.state.password })
        console.log('signup res ', token);
    };

    submit = () => {
        const usernameInvalid = this.utilities.isInputInvalid('username', this.state.username);
        const passwordInvalid = this.utilities.isInputInvalid('password', this.state.password);
        this.setState({ passwordInvalid, usernameInvalid });
        if (!passwordInvalid && !usernameInvalid) {
            if (this.state.showSignup) this.signup();
            else this.login();
        }
    }

    componentWillUnmount() {
        document.getElementsByTagName('form')[0].removeEventListener('keyup', this.checkKeyCodeAndSubmit);
    }

    render() {
        const {
            showSignup,
            password,
            confirmPassword,
            usernameInvalid,
            passwordInvalid,
        } = this.state;

        const confirmPasswordError = showSignup && this.utilities.confirmPasswordIsInvalid(password, confirmPassword);

        return (
            <div id={styles.login} className={styles['form-wrapper']}>
                <Mui.Container className={styles['form-head']}>
                    <div id="placeholder" /> {/* Without this place holder MUI will throw an error as this element must contain a child */}
                </Mui.Container>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.submit();
                    }}
                    id={styles['login-signup-form']}
                    aria-label="login form"
                >
                    <Mui.TextField
                        id={styles['username-input']}
                        required={true}
                        error={usernameInvalid}
                        onChange={({ target }) =>
                            this.setState({
                                username: target.value,
                                usernameInvalid: this.utilities.isInputInvalid(
                                    'username',
                                    target.value
                                ),
                            })
                        }
                        type="name"
                        label="username"
                        aria-label="username input"
                    />
                    <Mui.TextField
                        id={styles['password-input']}
                        required={true}
                        error={passwordInvalid}
                        onChange={({ target }) =>
                            this.setState({
                                password: target.value,
                                passwordInvalid: this.utilities.isInputInvalid(
                                    'password',
                                    target.value
                                ),
                            })
                        }
                        type="password"
                        label="password"
                        aria-label="password input"
                    />
                    {showSignup && (
                        <Mui.TextField
                            onChange={({ target }) =>
                                this.setState({
                                    confirmPassword: target.value,
                                })
                            }
                            id={styles['confirm-password-input']}
                            required={true}
                            error={confirmPasswordError}
                            type="password"
                            label="confirm password"
                            aria-label="confirm password"
                        />
                    )}
                </form>
                <Mui.Button
                    onClick={e => {
                        e.preventDefault();
                        this.submit();
                    }}
                    variant="outlined"
                    color="primary"
                    disableElevation
                >
                    Submit
                </Mui.Button>
                <SignupViewContext.Provider value={showSignup}>
                    {showSignup && (
                        <span
                            className={styles['toggle-span']}
                            onClick={() => this.setState({ showSignup: false })}
                        >
                            Click here to Login
                        </span>
                    )}
                    {!showSignup && (
                        <span
                            className={styles['toggle-span']}
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
