import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from '../src/containers/Login';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <GlobalStyles />
  </React.StrictMode>,
)
