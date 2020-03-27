import React from 'react';
import styles from '../../App.module.css';
import Nav from '../Nav';
import Login from '../Login';
import Repos from '../Repos';
import Favorites from '../Favorites';
import { Router, Route } from "react-router-dom";
import history from '../../shared/history';

export const Entry = () => {
    return (
        <div className={styles.entry}>
            <Nav />
            <Router history={history}>
                <Route exact path='/' component={Login} />
                <Route exact path='/repos/:username' component={Repos} />
                <Route exact path='/favorites' component={Favorites} />
            </Router>
        </div>
    );
}

export default Entry;
