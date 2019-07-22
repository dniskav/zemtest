import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';

const HeaderContainer = styled.div`
    display: grid;
    grid-column-template: auto;
    grid-row-template: auto auto auto;
    height: 540px;
    max-width: 1024px;
    width: 100%;
    border: 1px red dashed;
`;

const VotingBox = styled.div`
    border: 1px green dashed;
`;

const Controls = styled.div`
    border: 1px green dashed;
`;

const ProgressBar = styled.div`
    border: 1px green dashed;
`;

const Header = () => (
    <HeaderContainer>
        <NavBar />
        <VotingBox>
            VotingBox
        </VotingBox>
        <ProgressBar>
            ProgressBar
        </ProgressBar>
    </HeaderContainer>
);

export default Header;
