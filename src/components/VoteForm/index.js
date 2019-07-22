import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = styled.button`
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    font-weight: 900;
    height: 40px;
    width: 100px;
`;

const PreVote = styled.div`
    display: inline-flex;
    align-items: center;
`;

class VoteForm extends PureComponent{
    state = {
        currentVote: null,
        done: false,
    }
    voting = (e) => {
        this.setState({ currentVote: e.target.value });
    }
    sendVote = () => {
        const { currentVote } = this.state;
        if(currentVote === null) {
            return;
        };
        this.setState({ done: true, currentVote });
    }
    enableVoting = () => {
        this.setState({ done: false, currentVote: null });
    }
    render () {
        const { done } = this.state;
        const { name, ndx } = this.props;
        return(
            <div>
                {(!done) ? (
                <PreVote className="vote-form">
                    <input id={'voteUp-' + ndx} className="vote-radio" type="radio" name={name} value={true} onChange={this.voting} />
                    <label htmlFor={'voteUp-' + ndx} className="vote-icon vote-up">
                        <FontAwesomeIcon icon="thumbs-up" />
                    </label>
                    <input id={'voteDown-' + ndx} className="vote-radio" type="radio" name={name} value={false} onChange={this.voting} />
                    <label htmlFor={'voteDown-' + ndx} className="vote-icon vote-down">
                        <FontAwesomeIcon icon="thumbs-down" />
                    </label>
                    <Button onClick={this.sendVote}>Vote now</Button>
                </PreVote>
                ) : ( 
                    <Button onClick={this.enableVoting}>Vote again</Button>
                )}
            </div>
        );
    }
};

VoteForm.propTypes = {
    vote: PropTypes.func.isRequired,
    ndx: PropTypes.number.isRequired,
}

export default VoteForm;
