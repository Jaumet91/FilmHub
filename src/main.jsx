import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';

import { FilmpireApp } from './FilmpireApp';
import ToggleColorModeProvider from './utils/ToggleColorMode';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleColorModeProvider>
        <FilmpireApp />
      </ToggleColorModeProvider>
    </Provider>
  </React.StrictMode>,
);
