import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UnstyledVote from '../VoteForm';


const UnstyledSince = ({ time, topic, className }) => (
    <div className={className}>
        <span>{time}</span> ago in <span>{topic}</span>
    </div>
);

const UntyledPoolProgress = ({ up, down, className }) => (
    <div className={className}>
        <div style={{ width: `${up}%`}} className="votes-up">
            <FontAwesomeIcon icon="thumbs-up" />{up}%
        </div>
        <div style={{ width: `${down}%`}}className="votes-down">
            {down}%<FontAwesomeIcon icon="thumbs-down" />
        </div>
    </div>
);

const CommonData = styled.div`
    display: flex;
    flex-direction: column;
    height: 258px;
    margin: 242px 40px 0;
    position: relative;
`;

const Name = styled.h3`
    font-size: 45px;
    margin-bottom: 5px;
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
`;

const CandidateBox = ({ name, up, down, topic, since, url, image, legend, ndx }) => {
    const style = {
        backgroundImage: `url(${image})`,
    };
    const winning = up > down;
    const currentStatus = {
        backgroundColor: (winning) ? '#1cbbb4' : '#ffad1d',
    };
    return (
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
                <VoteForm name={name} done={false} vote={(param) => {console.log(param)}} ndx={ndx} />
            </CommonData>
            <PoolProgress up={up} down={down} />
        </Container>
    )
};

CandidateBox.propTypes = {
    name: PropTypes.string.isRequired,
    up: PropTypes.number.isRequired,
    down: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired,
    since: PropTypes.number.isRequired,
    ndx: PropTypes.number.isRequired,
    url: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    legend: PropTypes.string.isRequired,
}

export default CandidateBox;
