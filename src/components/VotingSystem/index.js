import React from 'react';
import { Provider, Subscribe, Container } from 'unstated';
import candidates from '../../assets/candidates';

class VotingSystem extends Container {
    state = {
        candidates: [],
    };
    componentDidMount = () => {
        this.loadCandidates();
    }
    loadCandidates = () => {
        fetch("test.json")
            .then(response => response.json())
            .then(json => console.log(json));
        this.setState({ candidates });
    }
    addCadidate = () => {};
    vote = (value ,ndx) => {
        const newCandidates = this.state.candidates.slice();
        if(value === 'positive') {
            newCandidates[ndx].up ++;
        } else {
            newCandidates[ndx].down ++;
        }
        this.setState({ candidates: newCandidates });
    };
};

export default VotingSystem;
