import React, { Component } from 'react';
import * as Mui from '../../shared/material-ui.components.js'

import SignupViewContext from '../../context/signup-view-context';

import styles from './Nav.module.css';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default class Nav extends Component {

    state = {
        value: 0,
        showSignup: this.context,

    }

    handleChange = (e, newValue) => {
        this.setState({ value: newValue });
    };

    handleClick = showSignup => {
        console.log({showSignup });
        this.setState({ showSignup })
    }
    render() {
        return (
            <div id='nav' className={styles.navBar}>
                <Mui.AppBar position='static' >
                    <Mui.Tabs value={ this.state.value } onChange={ this.handleChange } aria-label='repos or favorites'>
                        { this.props.loggedIn &&  <Mui.Tab 
                                            label='Repos' { ...a11yProps(0) }
                                            onClick={e => this.props.setView({ repos: true, favorites: false }) } /> }
                        {  this.props.loggedIn &&   <Mui.Tab 
                                            label='Favorites' { ...a11yProps(1) }
                                            onClick={ e => this.props.setView({ repos: false, favorites: true }) } /> }
                    </Mui.Tabs>
                        { !this.props.loggedIn && (
                            <SignupViewContext.Provider value={ this.state.showSignup }>
                                <div className={styles['login-signup']}>
                                    <span onClick={ () => this.handleClick(false) }>Login</span>
                                    <span onClick={ () => this.handleClick(true) }>Signup</span>
                                </div>
                            </SignupViewContext.Provider>
                        ) }
                </Mui.AppBar>
          </div>
        );
    }
}
Nav.contextType = SignupViewContext;
