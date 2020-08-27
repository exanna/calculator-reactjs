import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/utils/theme';

import { NavLink } from 'react-router-dom';

const list = [
    {
        name: 'start',
        path: '/',
        exact: true,
    },
    {
        name: 'kalkulator',
        path: '/calculator',
    },
    {
        name: 'kalkulator walut',
        path: '/currency-calculator',
    },
    {
        name: 'kalkulator bmi',
        path: '/bmi-calculator',
    },
];

const StyledNav = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;  
    padding: 30px 20px;
    user-select: none;
    background-color: ${({ theme }) => theme.colors.dark};

    li {
        list-style: none;
    }
    
    a {
        display: block;
        padding: 10px 20px;
        margin-left: 40px;
        font-size: 18px;
        text-decoration: none;
        font-weight: ${({ theme }) => theme.font.regular};
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.65;
        text-shadow: 3px 2px 4px${({ theme }) => theme.colors.dark};
        transition:${({ theme }) => theme.animation};

        &:hover {
            transform: scale(0.95);
            opacity: 1;
            color:${({ theme }) => theme.colors.pink};
        }
        
        &.active {
            color: ${({ theme }) => theme.colors.white};
            font-weight: ${({ theme }) => theme.font.bold};
            opacity: 1;
            transform: scale(1.1);
            cursor: default;
        }
        @media (max-width: 800px) {
            font-size: 12px;
        }
    }   
    
`;


class Navigation extends React.Component {

    render() {

        const menu = list.map(item => (
            <li key={item.name}>
                <NavLink
                    to={item.path}
                    exact={item.exact ? item.exact : false}
                >
                    {item.name}
                </NavLink>
            </li>
        ));

        return (
            <ThemeProvider theme={theme}>
                <StyledNav>
                    {menu}
                </StyledNav>
            </ThemeProvider>

        );
    };
};

export default Navigation;