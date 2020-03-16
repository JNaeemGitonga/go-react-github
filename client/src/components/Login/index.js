import React, { Component } from 'react';
import styles from './Login.module.css';
import SignupViewContext from '../../context/signup-view-context';
import * as Mui from '../../shared/material-ui.components';
import Utilities from '../../shared/utilities';
import ApiCalls from '../../shared/api-calls';

export default class Login extends Component {
    state = {
        showSignup: this.context,
        username: '',
        password: '',
        confirmPassword: '',
        passwordInvalid: false,
        usernameInvalid: false,
    };

    componentDidMount() {
        document.getElementsByTagName('form')[0].addEventListener('keyup', this.checkKeyCodeAndSubmit)
    }

    checkKeyCodeAndSubmit = e => e.keyCode === 13 && this.submit();

    login = async () => {
        const token = await ApiCalls.login({ username: this.state.username, password: this.state.password });
        console.log(token)
    };

    signup = async () => {
        console.log('called signup')
        const token = await ApiCalls.signup({ username: this.state.username, password: this.state.password })
        console.log('signup res ', token);
    };

    submit = () => {
        const usernameInvalid = Utilities.isInputInvalid('username', this.state.username);
        const passwordInvalid = Utilities.isInputInvalid('password', this.state.password);
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
            signup,
            showSignup,
            password,
            confirmPassword,
            usernameInvalid,
            passwordInvalid,
        } = this.state;

        const confirmPasswordError =
            showSignup &&
            Utilities.confirmPasswordIsInvalid(password, confirmPassword);

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
                                usernameInvalid: Utilities.isInputInvalid(
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
                                passwordInvalid: Utilities.isInputInvalid(
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
                <SignupViewContext.Provider value={signup}>
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
