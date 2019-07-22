import React from 'react';
import Flexbox from 'flexbox-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
    <div>
        <Flexbox>
            <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
            </ul>
        </Flexbox>
        <Flexbox>
            <span>Follow US</span>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
            <FontAwesomeIcon icon={['fab', 'twitter']} />
        </Flexbox>
    </div>
);

export default Footer;
