import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import GlobalStyles from './styles/GlobalStyles';
import AppProvider from './hooks';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyles />
    </AppProvider>
  </React.StrictMode>,
)
