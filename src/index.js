import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import GlobalStyle from './styles/globalStyles';
import App from './layouts/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
