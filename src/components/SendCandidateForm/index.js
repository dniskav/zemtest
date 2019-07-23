import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    height:82px;
    border: 1px red dashed;
    max-width: 1024px;
`;

const SendCandidateForm = () => (
    <FormContainer className="form-container">
        <span>Is there anyone else you would want us to add?</span>
        <button>Submit Name</button>
    </FormContainer>
);

export default SendCandidateForm;
