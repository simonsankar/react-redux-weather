import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';

const creatStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)


ReactDOM.render(
  <Provider store={creatStoreWithMiddleware(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
