import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Subscribe } from 'unstated';
import VotingSystem from '../VotingSystem';

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
        currentVote: false,
        done: false,
    }
    voting = (e) => {
        this.setState({ done: false, currentVote: e.target.value });
    }
    sendVote = () => {
        const { currentVote } = this.state;
        this.setState({ done: true, currentVote });
    }
    enableVoting = () => {
        this.setState({ done: false, currentVote: false });
    }
    render () {
        const { done, currentVote } = this.state;
        const { name, ndx } = this.props;
        return(
        <Subscribe to={[VotingSystem]}>
            {(vs) => (
            <div>
                {(!done) ? (
                <PreVote className="vote-form">
                    <input id={'voteUp-' + ndx} className="vote-radio" type="radio" name={name} value="positive" onChange={this.voting} />
                    <label htmlFor={'voteUp-' + ndx} className="vote-icon vote-up">
                        <FontAwesomeIcon icon="thumbs-up" />
                    </label>
                    <input id={'voteDown-' + ndx} className="vote-radio" type="radio" name={name} value="negative" onChange={this.voting} />
                    <label htmlFor={'voteDown-' + ndx} className="vote-icon vote-down">
                        <FontAwesomeIcon icon="thumbs-down" />
                    </label>
                    <Button onClick={() => {this.sendVote(); vs.vote(currentVote, ndx)}} disabled={!currentVote}>Vote now</Button>
                </PreVote>
                ) : ( 
                    <Button onClick={this.enableVoting}>Vote again</Button>
                )}
            </div>
            )}
        </Subscribe>
        );
    }
};

VoteForm.propTypes = {
    ndx: PropTypes.number.isRequired,
}

export default VoteForm;
