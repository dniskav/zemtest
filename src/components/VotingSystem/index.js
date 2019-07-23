import React from 'react';
import { Container } from 'unstated';
import fakeAPI from '../../assets/fakeAPI';

class VotingSystem extends Container {
    state = {
        candidates: [],
        showMessage: true,
        message: {
            title: '',
            caption: '',
            content: '',    
        }
    };
    componentDidMount = () => {
        this.loadCandidates();
    }
    hideMessage = () => {
        this.setState({ showMessage: false });
    }
    loadCandidates = () => {
        this.setState({ ...fakeAPI });
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
