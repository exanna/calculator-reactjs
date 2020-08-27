import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import HomePage from '../pages/HomePage';
import CalculatorPage from '../pages/CalculatorPage';
import CurrencyCalculatorPage from '../pages/CurrencyCalculatorPage';
import BmiCalculatorPage from '../pages/BmiCalculatorPage';
import ErrorPage from '../pages/ErrorPage';

const StyledPageWrapper = styled.div`
    padding: 70px;
    flex-grow: 6;
`;

const Page = () => {
    return (
        <StyledPageWrapper>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/calculator" component={CalculatorPage} />
                <Route path="/currency-calculator" component={CurrencyCalculatorPage} />
                <Route path="/bmi-calculator" component={BmiCalculatorPage} />
                <Route component={ErrorPage} />
            </Switch>
        </StyledPageWrapper>
    );
};

export default Page;