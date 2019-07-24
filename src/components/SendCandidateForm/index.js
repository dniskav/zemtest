import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    align-items: center;
    background-image: url(bg.png);
    background-size: cover;
    box-sizing: border-box;
    display: flex;
    font-size: 30px;
    height:82px;
    justify-content: space-between;
    max-width: 1024px;
    padding: 12px 16px;
`;

const SendButton = styled.button`
    width: 210px;
    height: 54px;
    background-color: transparent;
    border: 4px solid #000;
    font-size: 22px;
`;

const SendCandidateForm = () => (
    <FormContainer className="form-container">
        <span>Is there anyone else you would want us to add?</span>
        <SendButton>Submit Name</SendButton>
    </FormContainer>
);

export default SendCandidateForm;
