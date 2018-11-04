import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // connect react and redux


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const creatCentralStore = createStore(reducer);

ReactDOM.render(<Provider store={creatCentralStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
