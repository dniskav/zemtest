import React, { PureComponent } from 'react';
import CandidateBox from '../CandidateBox';
import styled from 'styled-components';
import candidates from '../../assets/candidates';

const VotingGrid = styled.div`
    display: grid;
    grid-gap: 42px;
    grid-template-columns: repeat(2, 492px);
    grid-template-rows: repeat(2, 550px);
`;

const VotingTitle = styled.h2`
    display: block;
`;

const Content = styled.div`
    display: grid;
    max-width: 1024px;
    margin:0 auto;
    border: 1px red dashed;
`;

class VotingBox extends PureComponent {
    state = {
        candidates: [],
    }
    componentDidMount = () => {
        this.loadCandidates();
    }
    loadCandidates = () => {
        this.setState({ candidates });
    }
    render() {
        const { candidates } = this.state;
        return (
            <Content>
                <VotingTitle>Previous Rulings</VotingTitle>
                <VotingGrid>
                    {candidates.map((el, ndx) => (
                        <CandidateBox {...el} key={el.name} ndx={ndx} />
                    ))}
                </VotingGrid>
            </Content>
        )
    };
};

export default VotingBox;
