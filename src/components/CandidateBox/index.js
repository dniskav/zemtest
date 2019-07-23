import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UnstyledVote from '../VoteForm';
import { Subscribe } from 'unstated';
import VotingSystem from '../VotingSystem';


const UnstyledSince = ({ time, topic, className }) => (
    <div className={className}>
        <span>{parseFloat(time / 30).toFixed(1)}</span> month ago in <span>{topic}</span>
    </div>
);

const UntyledPoolProgress = ({ up, down, className }) => {
    const total = up + down;
    const percentUp = parseFloat(up / total * 100).toFixed(1)
    const percentDown = parseFloat(down / total * 100).toFixed(1);
    return (
        <div className={className}>
            <div style={{ width: `${percentUp}%`}} className="votes-up">
                <FontAwesomeIcon icon="thumbs-up" />{percentUp}%
            </div>
            <div style={{ width: `${percentDown}%`}}className="votes-down">
                {percentDown}%<FontAwesomeIcon icon="thumbs-down" />
            </div>
        </div>
    )
};

const CommonData = styled.div`
    display: flex;
    flex-direction: column;
    height: 258px;
    margin: 242px 40px 0;
    position: relative;
`;

const Name = styled.h3`
    display: flex;
    font-size: 45px;
    height: 98px;
    margin: 0 0 5px 0;
    align-items: flex-end;
`;

const Since = styled(UnstyledSince)`
    font-size: 12px;
    font-weight: 900;
    margin-bottom: 18px;
`;

const Legend = styled.p`
    font-size: 16px;
    margin: 0 0 20px 0;
`;

const VoteForm = styled(UnstyledVote)`

`;

const PoolProgress = styled(UntyledPoolProgress)`
    display: flex;
    font-size: 34px;
    height: 50px;
    width: 100%;
`;

const Container = styled.div`
    color: #fff;
    background-size: cover;
`;

class CandidateBox extends PureComponent {
    render() {
        const { name, up, down, topic, since, image, legend, ndx } = this.props;
        const style = {
            backgroundImage: `url(${image})`,
        };
        const winning = up > down;
        const currentStatus = {
            backgroundColor: (winning) ? '#1cbbb4' : '#ffad1d',
        };
        return (
            <Subscribe to={[VotingSystem]}>
            {(vs) => (
            <Container style={style}>
                <CommonData>
                    <div className="vote-icon status-vote-icon" style={currentStatus}>
                        {winning ? (
                            <FontAwesomeIcon icon="thumbs-up" />
                        ) : (
                            <FontAwesomeIcon icon="thumbs-down" />
                        )}
                    </div>
                    <Name>{name}</Name>
                    <Since time={since} topic={topic} />
                    <Legend>{legend}</Legend>
                    <VoteForm name={name} done={false} ndx={ndx} />
                </CommonData>
                <PoolProgress up={up} down={down} />
            </Container>
            )}
            </Subscribe>
        )
    };
};

CandidateBox.propTypes = {
    name: PropTypes.string.isRequired,
    up: PropTypes.number.isRequired,
    down: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired,
    since: PropTypes.number.isRequired,
    ndx: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    legend: PropTypes.string.isRequired,
}

export default CandidateBox;
