import React, { Component } from 'react';
import Nav from '../Nav';
import Login from '../Login';
import Repos from '../Repos';
import Favorites from '../Favorites';

export default class Entry extends Component {
    state = {
        loggedIn: true,
        repos: false,
        favorites: false,
    };

    setLogInStatus = status => {
        this.setState({ loggedIn: status });
    };

    setView = update => {
        console.log(update);
        this.setState({ ...update });
    };

    render() {
        return (
            <div>
                <Nav loggedIn={this.state.loggedIn} setView={this.setView} />
                {!this.state.loggedIn && (
                    <Login
                        setLogin={this.setLogInStatusb}
                        setView={this.setView}
                    />
                )}
                {this.state.repos && <Repos />}
                {this.state.favorites && <Favorites />}
            </div>
        );
    }
}
