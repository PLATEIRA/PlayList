import React from 'react';
import {Provider } from 'react-redux';
import Store from './redux/store';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './globalStyle';
import Router from './Pages/routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <GlobalStyle/>
    <Router />
    </Provider>
  </React.StrictMode>
);


