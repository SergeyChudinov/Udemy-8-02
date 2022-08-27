import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore, bindActionCreators} from 'redux';

import reducer from './reducer';
import * as actions from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
  document.querySelector('#counter').textContent = getState().value;
}
subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

const {dec, inc, rnd} = bindActionCreators(actions, dispatch);
// const incDispatch = bindActionCreators(inc, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.querySelector('#dec').addEventListener('click', dec)
document.querySelector('#inc').addEventListener('click', inc)
document.querySelector('#rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10) + 1
  rnd(value)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
