import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './utils/i18n';
import './main.module.scss';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading ...">
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,

  document.getElementById('root'),
);
