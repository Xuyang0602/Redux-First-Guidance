import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
};

const conunterReducer = (prestate = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...prestate,
                counter: prestate.counter + 1,
            }
        case actionTypes.DECREMENT:
            return {
                ...prestate,
                counter: prestate.counter - 1,
            }
        case actionTypes.ADD:
            return {
                ...prestate,
                counter: prestate.counter + action.value,
            }
        case actionTypes.SUBTRACT:
            return {
                ...prestate,
                counter: parseInt(prestate.counter / action.value),
            }
    }

    return prestate;
}

export default conunterReducer;