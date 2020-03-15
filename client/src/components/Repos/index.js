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
        } catch (err) {
            console.log('fail', err);
        }
        
        this.setState({ repos });
    };
    render() {
        return <div id="repos">You see me!</div>;
    }
}
