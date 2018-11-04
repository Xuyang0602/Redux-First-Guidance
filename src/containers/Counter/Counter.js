import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add" clicked={this.props.onAdd5Counter}  />
                <CounterControl label="Subtract" clicked={this.props.onSubstract5}  />

                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedRes.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedRes: state.res.results,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd5Counter: () => dispatch({type: actionTypes.ADD, value: 5}),
        onSubstract5: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreResult: (res) => dispatch({type: actionTypes.STORE_RESULT, result: res}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultEleId: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);