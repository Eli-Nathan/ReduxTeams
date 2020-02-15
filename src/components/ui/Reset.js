import React from 'react'
import { connect } from 'react-redux'
import { RESET_ALL, RESET_BLUE, RESET_RED } from '../../actions/counter'

const Reset = (props) => {
    const resetCounter = (action) => {
        props.dispatch({ type: action.type, payload: action.payload })
    }

    return (
        <div className="reset">
            <button onClick={() => resetCounter(RESET_BLUE)}>
                Reset blue
            </button>
            <button onClick={() => resetCounter(RESET_RED)}>
                Reset red
            </button>
            <button onClick={() => resetCounter(RESET_ALL)}>
                Reset all
            </button>

        </div>
    )
}

export default connect()(Reset)
