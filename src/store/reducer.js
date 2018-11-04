const initialState = {
    counter: 0,
    results: [],
};

const reducer = (prestate = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...prestate,
                counter: prestate.counter + 1,
            }
        case 'DECREMENT':
            return {
                ...prestate,
                counter: prestate.counter - 1,
            }
        case 'ADD5':
            return {
                ...prestate,
                counter: prestate.counter + action.value,
            }
        case 'SUBTRACT5':
            return {
                ...prestate,
                counter: parseInt(prestate.counter / action.value),
            }
        case 'STORE_RESULT':
            return {
                ...prestate,
                results: prestate.results.concat({id: new Date(), value: prestate.counter}),
            }
        case 'DELETE_RESULT':
            const updateArr = [...prestate.results].filter(result => action.resultEleId !== result.id);
            return {
                ...prestate,
                results: updateArr,
            }
    }

    return prestate;
}

export default reducer;