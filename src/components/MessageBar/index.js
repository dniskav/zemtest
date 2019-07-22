import React from 'react';
import styled from 'styled-components';

const MessageBarContainer = styled.div`
    max-width: 1024px;
    border: 1px red dashed;
`;

const MessageBar = () => (
    <MessageBarContainer>MessageBar</MessageBarContainer>
);

export default MessageBar;
