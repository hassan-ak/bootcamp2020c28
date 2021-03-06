import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { setupServer } from './services/mirage/server';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

if (process.env.NODE_ENV === 'development') {
  setupServer();
}



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);