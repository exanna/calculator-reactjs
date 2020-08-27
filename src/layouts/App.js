import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import styled from 'styled-components';

import Navigation from './Navigation';
import Page from './Page';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <StyledWrapper>
        <Navigation />
        <Page />
      </StyledWrapper>
    </BrowserRouter>

  );
}

export default App;
