import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/utils/theme';

const keyList = [
    { name: 'percent', value: '%' },
    { name: 'ce', value: 'CE' },
    { name: 'c', value: 'C' },
    { name: 'backspace', value: '◄' },

    { name: 'one by x', value: '1/x' },
    { name: 'power', value: 'x^2' },
    { name: 'square root', value: '2√' },
    { name: 'quotient ', value: '/' },

    { name: 'seven', value: '7' },
    { name: 'eight', value: '8' },
    { name: 'nine', value: '9' },
    { name: 'multiplication', value: '*' },

    { name: 'four', value: '4' },
    { name: 'five', value: '5' },
    { name: 'six', value: '6' },
    { name: 'difference', value: '-' },

    { name: 'one', value: '1' },
    { name: 'two', value: '2' },
    { name: 'three', value: '3' },
    { name: 'sum', value: '+' },

    { name: 'negation', value: '-/+' },
    { name: 'zero', value: '0' },
    { name: 'comma ', value: ',' },
    { name: 'result', value: '=' },
];

const CalcWrapper = styled.ul`    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    user-select: none;
    background-color: ${({ theme }) => theme.colors.darkOpacity};
    padding: 20px;

    li {
        margin: 5px;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 20%;
    }

  
`;

const StyledButton = styled.button`
    min-width: 50px;
    min-height: 50px;
    background-image: linear-gradient(to left, ${({ theme }) => theme.colors.orange} , ${({ theme }) => theme.colors.yellow});
    font-weight: 700;
    font-size: 18px;
    border: none;

    @media (max-width: 500px) {
        min-width: 40px;
        min-height: 40px;
        font-size: 14px;
    }

    :focus {
        outline: none;
    }

    :hover {
        opacity: 0.7
    }
`;

const StyledInput = styled.input`
    width: calc(100% - 50px);
    margin-top: 40px;
    margin-bottom: 25px;
    height: 50px;
    background-color:${({ theme }) => theme.colors.white};
    border-radius: 0;
    border: none;
    box-shadow: 0 0 0 25px ${({ theme }) => theme.colors.darkOpacity};
    text-align: right;
    padding-right: 15px;

    /* arrows off */
    ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }

    :focus {
        outline: none;
    }
`;

class Calculator extends Component {

    state = {
        inputValue: null,
    }


    render() {
        const calcPanel = keyList.map(key => (
            <li key={key.name}>
                <StyledButton>{key.value}</StyledButton>
            </li>
        ));

        return (
            <ThemeProvider theme={theme}>
                <>
                    <StyledInput
                        type='number'
                        placeholder='licz!'
                        value={this.state.inputValue}
                    />
                    <CalcWrapper>
                        {calcPanel}
                    </CalcWrapper>
                </>
            </ThemeProvider>
        );
    }
}

export default Calculator;

