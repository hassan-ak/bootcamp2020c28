import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { setupServer } from './services/mirage/server';
import { Provider } from 'react-redux';
import store from './store';

if (process.env.NODE_ENV === 'development') {
  setupServer();
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);