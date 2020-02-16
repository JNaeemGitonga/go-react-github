import React, { Component } from 'react';
import styles from './Login.module.css'
import SignupViewContext from '../../context/signup-view-context';

export default class Login extends Component {
    state = {
        showSignup: this.context,
        username: '',
        password: '',
        confirmPassword: '',
    }

    login = () => {
        console.log('login',this.state)
    }

    signup = () => {
        console.log('sigasdfasdnup ',this.state)
    }
    render () {
        return (
            <div id={ styles.login } className={ styles['form-wrapper'] }>

                <form onSubmit={ e => {
                        e.preventDefault();
                        if (this.state.showSignup) this.signup();
                        else this.login();
                      } }
                      id={ styles['login-signup-form'] }
                      aria-label='login form'>

                    <input required
                           onChange={ e => this.setState({ username: e.target.value }) }
                           type='name'
                           placeholder='username'
                           aria-label='username input' />
                    <input required
                           onChange={ e => this.setState({ password: e.target.value }) }
                           type='password'
                           placeholder='password'
                           aria-label='password input' />
                    { this.state.showSignup && (
                        <input onChange={ e => this.setState({ confirmPassword: e.target.value }) }
                               required type='password'
                               placeholder='confirm password'
                               aria-label='confirm password' />
                    ) }
                    
                    <input type='submit' value='Submit' aria-label='submit button' />
                </form>

                <SignupViewContext.Provider value={ this.state.signup }>
                    { (this.state.showSignup) &&  <span onClick={ e => this.setState({ showSignup: false }) }>Login</span> }
                    { !this.state.showSignup &&  <span onClick={ e => this.setState({ showSignup: true }) }>SignUp</span> }
                </SignupViewContext.Provider>
            </div>
        )
    }
}
Login.contextType = SignupViewContext;
