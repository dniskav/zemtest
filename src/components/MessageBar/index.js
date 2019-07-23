import React from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import VotingSystem from '../VotingSystem';

const MessageBarContainer = styled.div`
    max-width: 1024px;
`;

const MessageBar = () => (
    <Subscribe to={[VotingSystem]}>
    {(vs) => (
        <React.Fragment>
            {vs.state.showMessage &&
            <MessageBarContainer className="message-bar">
                <div>
                    <div className="title">{vs.state.message.title}</div>
                    <div className="caption">{vs.state.message.caption}</div>
                </div>
                <div className="content">
                    {vs.state.message.content}
                </div>
                <button className="dismiss" onClick={vs.hideMessage}>
                    X
                </button>
            </MessageBarContainer>
            }
        </React.Fragment>
    )}
    </Subscribe>
);

export default MessageBar;
