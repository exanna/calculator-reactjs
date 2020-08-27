import React from 'react';
import styled from 'styled-components';
import Calculator from '../components/Calculator/Calculator';

const H1 = styled.h1`
    text-align: center;
    text-transform: uppercase;
    margin-top: 0;
    letter-spacing: 3px;
    user-select: none;
    /* font-size: 30px; */
`;

const StyledWrapper = styled.div`
    max-width: 280px;
    margin: 0 auto;
    text-align: center;
    @media (max-width: 500px) {
        max-width: 100%;
    }
`;

const CalculatorPage = () => {
    return (
        <StyledWrapper>
            <H1>Kalkulator</H1>
            <Calculator />
        </StyledWrapper>
    );
};

export default CalculatorPage;