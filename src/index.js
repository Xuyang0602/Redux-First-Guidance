import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'; // connect react and redux


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import conunterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

const rootReducers = combineReducers({
    // this is global state
    ctr: conunterReducer,
    res: resultsReducer,
});

const creatCentralStore = createStore(rootReducers);

ReactDOM.render(<Provider store={creatCentralStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
