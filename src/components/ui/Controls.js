import React from 'react'
import { connect } from 'react-redux'
import * as counterActions from '../../actions/counter'

const Controls = (props) => {
    const handleIncrement = () => {
        const whichAction = props.which === 'blue' ? counterActions.INCREMENT_BLUE : counterActions.INCREMENT_RED
        props.dispatch({ type: whichAction })
    }

    const handleDecrement = () => {
        const whichAction = props.which === 'blue' ? counterActions.DECREMENT_BLUE : counterActions.DECREMENT_RED
        props.dispatch({ type: whichAction  })
    }

    return (
        <div>
            <button onClick={handleDecrement}>- 1</button>
            <button onClick={handleIncrement}>+ 1</button>
        </div>
    )
}

export default connect()(Controls)
