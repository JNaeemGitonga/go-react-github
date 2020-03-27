import React, { Component } from 'react';
import request from 'superagent';
import LoginSignupContext from '../../context/login-signup-context';

export default class Repos extends Component {
    state = {
        repos: [],
    };

    componentDidMount() {
        console.log(this.context.showSignup)
        this.getRepos();
    }

    getRepos = async () => {
        let repos;
        try {
            repos = await request.get(`/api/repos/${this.context.username}`);
        } catch (err) {
            console.log('fail', err);
        }
        
        this.setState({ repos });
    };
    render() {
        return <div id="repos">You see me!</div>
    }
}

Repos.contextType = LoginSignupContext;
