import React from 'react';
import { Container } from 'unstated';

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
    hideMessage = () => {
        this.setState({ showMessage: false });
    }
    loadCandidates = () => {
        fetch('/API/config.json', {})
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw response.statusText;
            }
        })
        .then((data) => {
          this.setState({...data});
        })
        .catch((err) => console.warn(err));

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
