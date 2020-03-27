import React, { Component } from 'react';
import request from 'superagent';
import LoginSignupContext from '../../context/login-signup-context';

export default class Repos extends Component {
    state = {
        repos: [],
    };

    componentDidMount() {
        this.getRepos();
    }

    getRepos = async () => {
        let repos;
        try {
            repos = await request.get(`/api/repos/${this.context.username}`);
            this.setState({ repos })
        } catch (err) {
            console.log('fail', err);
        }
    };
    render() {
        return <div id='repos'>You see me!</div>
    }
}

Repos.contextType = LoginSignupContext;
