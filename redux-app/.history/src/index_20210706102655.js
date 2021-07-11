import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import counterReducer from './store/reducers/reducer';

const store = createStore(counterReducer,)
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Provider store= {store} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
