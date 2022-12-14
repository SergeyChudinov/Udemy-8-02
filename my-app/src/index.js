import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();




