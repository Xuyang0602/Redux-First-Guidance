const redux = require('redux');
const creatCentralStore = redux.createStore;

// InitialState
const initialState = {
    counter: 0,
};

// Reducer
const rootReducer = (preState = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...preState,
            counter: preState.counter + 1,
        }
    } else if (action.type === 'ADD_COUNTER') {
        return {
            ...preState,
            counter: preState.counter + action.value,
        }
    }
    return preState;
};

// Central Store
const centralStore = creatCentralStore(rootReducer);
console.log(centralStore.getState());

// Subscription  => it make sure that I dont have to manually call getState but to 
//                  inform me whenever I need to get a new state because something changed
//               => it getting triggered whenever the state is updated
centralStore.subscribe(() => {
    console.log('[Subscription]', centralStore.getState());
})

// Dispatching Action
centralStore.dispatch({type: 'INC_COUNTER'}); // 'type is mandatory
console.log(centralStore.getState());
centralStore.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(centralStore.getState());

