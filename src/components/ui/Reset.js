import React from 'react'
import { connect } from 'react-redux'
import { RESET_ALL, RESET_BLUE, RESET_RED } from '../../actions/counter'

const Reset = (props) => {
    const resetAll = () => {
        props.dispatch({ type: RESET_ALL })
    }

    const resetLeft = () => {
        props.dispatch({ type: RESET_BLUE })
    }

    const resetRight = () => {
        props.dispatch({ type: RESET_RED })
    }

    return (
        <div className="reset">
            <button onClick={resetLeft}>
                Reset blue
            </button>
            <button onClick={resetRight}>
                Reset red
            </button>
            <button onClick={resetAll}>
                Reset all
            </button>

        </div>
    )
}

export default connect()(Reset)
