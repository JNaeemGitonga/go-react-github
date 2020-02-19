import React, { Component } from 'react';
import request from 'superagent';

export default class Repos extends Component {
    state = {
        repos: [],
    };

    componentDidMount() {
        this.getRepos('JNaeemGitonga');
    }

    getRepos = async username => {
        let repos;
        try {
            repos = await request.get(`/api/repos/${username}`);
            this.setState({ repos });
        } catch (err) {
            console.log('fail', err);
        }
    };
    render() {
        return <div id="repos">You see me!</div>;
    }
}
