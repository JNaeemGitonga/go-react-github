import React, { Component } from 'react';
import styles from './Login.module.css';
import SignupViewContext from '../../context/signup-view-context';
import { Input } from '@material-ui/core';

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
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (this.state.showSignup) this.signup();
                        else this.login();
                    }}
                    id={styles['login-signup-form']}
                    aria-label="login form"
                >
                    <Input
                        required="true"
                        onChange={e =>
                            this.setState({ username: e.target.value })
                        }
                        type="name"
                        placeholder="username"
                        aria-label="username input"
                    />
                    <Input
                        required='true'
                        onChange={e =>
                            this.setState({ password: e.target.value })
                        }
                        type="password"
                        placeholder="password"
                        aria-label="password input"
                    />
                    {this.state.showSignup && (
                        <Input
                        disableUnderline='true'
                            onChange={e =>
                                this.setState({
                                    confirmPassword: e.target.value,
                                })
                            }
                            required="true"
                            type="password"
                            placeholder="confirm password"
                            aria-label="confirm password"
                        />
                    )}

                    <Input
                        fullWidth='true'
                        color='secondary'
                        type="submit"
                        value="Submit"
                        aria-label="submit button"
                    />
                </form>

                <SignupViewContext.Provider value={this.state.signup}>
                    {this.state.showSignup && (
                        <span
                            onClick={() => this.setState({ showSignup: false })}
                        >
                            Login
                        </span>
                    )}
                    {!this.state.showSignup && (
                        <span
                            onClick={() => this.setState({ showSignup: true })}
                        >
                            SignUp
                        </span>
                    )}
                </SignupViewContext.Provider>
            </div>
        );
    }
}
Login.contextType = SignupViewContext;
