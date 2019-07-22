import React from 'react';
import styled from 'styled-components';

const Navcontainer = styled.div`
    max-width: 1024px;
    border: 1px green dashed;
`;

const NavBar = () => (
    <Navcontainer>
        <h1>Rule of Thumb.</h1>
        <nav>
            <ul>
                <li>
                    <a href="#">Past Trials</a>
                </li>
                <li>
                    <a href="#">How it works</a>
                </li>
                <li>
                    <a href="#">Login/Sign Up</a>
                </li>
            </ul>
        </nav>
    </Navcontainer>
);

export default NavBar;
