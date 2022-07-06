import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';

import { FilmHubApp } from './FilmHubApp';
import ToggleColorModeProvider from './utils/ToggleColorMode';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToggleColorModeProvider>
          <FilmHubApp />
        </ToggleColorModeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
