import React, { Component } from 'react';
import styles from './Login.module.css';
import LoginSignupContext from '../../context/login-signup-context';
import * as Mui from '../../shared/material-ui.components';
import Button from '../../shared/Button';
import LoginUtilities from './Login.utilities';
import ApiCalls from '../../shared/api-calls';
import cn from '../../shared/constants/css-names';
import vn from '../../shared/constants/validator-names';
import ln from '../../shared/constants/label-names';


export default class Login extends Component {
    state = {
        showSignup: this.context.showSignup,
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

    login = async () => {
        const res = await ApiCalls.login({
            username: this.state.username.toLowerCase(),
            password: this.state.password,
        });

        LoginUtilities.handleLogin(res, this.state.username);

    };

    signup = async () => {
        const res = await ApiCalls.signup({
            username: this.state.username,
            password: this.state.password,
        });

        LoginUtilities.handleLogin(res);
    };

    submit = () => {
        const { username, showSignup, password, confirmPassword } = this.state;

        const usernameInvalid = LoginUtilities.isInputInvalid(
            ln.username,
            username
        );

        const passwordInvalid = LoginUtilities.isInputInvalid(
            ln.password,
            password
        );

        this.setState({ passwordInvalid, usernameInvalid });

        if ((passwordInvalid || usernameInvalid) && !showSignup) return;
        
        if (!showSignup) return this.login();

        const confirmPasswordInvalid = LoginUtilities.confirmPasswordIsInvalid(
            password,
            confirmPassword
        );

        this.setState({ confirmPasswordInvalid });

        !confirmPasswordInvalid && this.signup();
    };

    toggleShowSignup = () => {
        this.context.showSignup = !this.context.showSignup;
        this.setState({ showSignup: !this.context.showSignup })
    }

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
            password,
            confirmPassword,
        } = this.state;

        return (
            <div id={styles.login} className={styles[cn.formWrapper]}>
                <Mui.Container className={styles[cn.formHead]}>
                    <div id={cn.placeHolderId} />{/* Without this place holder MUI will throw an error as this element must contain a child */}
                </Mui.Container>
                <form id={styles[cn.loginSignupFormId]}
                    aria-label={ln.loginForm}>

                    <Mui.TextField  id={styles[cn.usernameInputId]}
                            required={true}
                            error={usernameInvalid}
                            type={ln.name}
                            label={ln.username}
                            onChange={({ target }) => {
                                this.context.username = target.value;
                                this.setState({
                                    [ln.username]: target.value,
                                    [vn.usernameInvalid]: LoginUtilities.isInputInvalid(ln.username, target.value)
                                });
            
                            }}
                    />
                    <Mui.TextField  id={styles[cn.passwordInputId]}
                                    error={passwordInvalid}
                                    required={true}
                                    type={ln.password}
                                    label={ln.password}
                                    onChange={({ target }) => {
                                        if (showSignup) LoginUtilities.confirmPasswordIsInvalid(password, confirmPassword)
                                        this.setState({
                                            [ln.password]: target.value,
                                            [vn.passwordInvalid]: LoginUtilities.isInputInvalid(ln.password, target.value)
                                        });
                                        
                                        if (showSignup) {
                                            this.setState({
                                                [vn.confirmPasswordInvalid]: LoginUtilities.confirmPasswordIsInvalid(target.value, confirmPassword) 
                                            });
                                        }
                                    }}
                    />
                    {showSignup && (
                        <Mui.TextField  id={styles[cn.confirmPasswordInputId]}
                                error={confirmPasswordInvalid}
                                required={true}
                                type={ln.password}
                                label={ln.confirmPassword}
                                onChange={({ target }) => {
                                    this.setState({
                                        [ln.confirmPasswordCC]: target.value,
                                        [vn.confirmPasswordInvalid]: LoginUtilities.confirmPasswordIsInvalid(password, target.value)
                                    });
                
                                }}
                        />
                    )}
                </form>

                <Button id={cn.loginSignupSubmitId}
                        action={this.submit}
                        variant={cn.outlined}
                        color={cn.primary}
                        btnText={ln.submit}
                />
                {showSignup && (
                    <span className={styles[cn.toggleSpan]}
                            onClick={() => this.toggleShowSignup()}
                    >
                        Click here to Login
                    </span>
                )}
                {!showSignup && (
                    <span className={styles[cn.toggleSpan]}
                            onClick={() => this.toggleShowSignup()}
                    >
                        Click here to SignUp
                    </span>
                )}
            </div>
        );
    }
}

Login.contextType = LoginSignupContext;
