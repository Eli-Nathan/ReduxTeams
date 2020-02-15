import React from 'react'
import { connect } from 'react-redux'
import * as counterActions from '../../actions/counter'

const Controls = (props) => {
    const changeCounter = (action) => {
        props.dispatch({ type: action.type, payload: action.payload })
    }

    return (
        <div>
            <button onClick={() => changeCounter(counterActions[`DECREMENT_${props.which.toUpperCase()}`])}>- 1</button>
            <button onClick={() => changeCounter(counterActions[`INCREMENT_${props.which.toUpperCase()}`])}>+ 1</button>
        </div>
    )
}

export default connect()(Controls)
