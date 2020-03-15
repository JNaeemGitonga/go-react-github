import React, { Component } from 'react';
import styles from './Login.module.css';
import SignupViewContext from '../../context/signup-view-context';
import * as Mui from '../../shared/material-ui.components.js'


export default class Login extends Component {
    state = {
        showSignup: this.context,
        username: '',
        password: '',
        confirmPassword: '',
    };

    login = () => {
        console.log('login', this.state);
    };

    signup = () => {
        console.log('sigasdfasdnup ', this.state);
    };

    render() {
        return (
            <div id={styles.login} className={styles['form-wrapper']}>
               <Mui.Container className={styles['form-head']}>
                   <div id='placeholder'/> {/* Without this place holder MUI will throw an error as this element must contain a child */}
               </Mui.Container>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (this.state.showSignup) this.signup();
                        else this.login();
                    }}
                    id={styles['login-signup-form']}
                    aria-label="login form"
                >
                    <Mui.TextField
                        required={true}
                        onChange={e =>
                            this.setState({ username: e.target.value })
                        }
                        type="name"
                        label="username"
                        aria-label="username input"
                    />
                    <Mui.TextField
                        required={true}
                        onChange={e =>
                            this.setState({ password: e.target.value })
                        }
                        type="password"
                        label="password"
                        aria-label="password input"
                    />
                    {this.state.showSignup && (
                        <Mui.TextField
                            onChange={e =>
                                this.setState({
                                    confirmPassword: e.target.value,
                                })
                            }
                            required={true}
                            type="password"
                            label="confirm password"
                            aria-label="confirm password"
                        />
                    )}
                </form>
                <Mui.Button onClick={e => {
                        e.preventDefault();
                        if (this.state.showSignup) this.signup();
                        else this.login();
                    }}
                    variant="outlined"
                    color="primary"
                    disableElevation>
                    Submit
                </Mui.Button>
                <SignupViewContext.Provider value={this.state.signup}>
                    {this.state.showSignup && (
                        <span
                            className={styles['toggle-span']}
                            onClick={() => this.setState({ showSignup: false })}
                        >
                            Click here to Login
                        </span>
                    )}
                    {!this.state.showSignup && (
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
