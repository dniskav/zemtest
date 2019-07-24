import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Content = styled.div`
    border-top: 1px dashed lightgray;
    color: #9C9C9C;
    display: grid;
    font-size: 12px;
    font-weight: 900;
    grid-template-columns: 50% 50%;
    margin-right: 10px;
    padding: 34px 0;
    li > a {
        color: #9C9C9C;
        text-decoration: none;
    }
`;

const BottomNav = styled.ul`
    display: inline-flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 300px;
`;

const SocialNav = styled.div`
    display: inline-flex;
    justify-content: flex-end;
    span {
        margin-left: 10px;
    }
`;

const Footer = () => (
    <Content>
        <BottomNav>
            <li><a href="#" >Terms and Conditions</a></li>
            <li><a href="#" >Privacy Policy</a></li>
            <li><a href="#" >Contact Us</a></li>
        </BottomNav>
        <SocialNav>
            <span>Follow US</span>
            <span>
                <FontAwesomeIcon icon={['fab', 'facebook']} />
            </span>
            <span>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </span>
        </SocialNav>
    </Content>
);

export default Footer;
