import * as actionTypes from '../actions';

const initialState = {
    results: [],
};

const resultsReducer = (prestate = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...prestate,
                results: prestate.results.concat({id: new Date(), value: action.result}),
            }
        case actionTypes.DELETE_RESULT:
            const updateArr = [...prestate.results].filter(result => action.resultEleId !== result.id);
            return {
                ...prestate,
                results: updateArr,
            }
    }

    return prestate;
}

export default resultsReducer;