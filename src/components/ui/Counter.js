import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
    console.log(props)
    return (
        <div className="counter">
            { props.which === 'blue' ? props.blueCounter : props.redCounter }
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    console.log('state', state)
    console.log('ownProps', ownProps)
  return {
    ...ownProps,
    blueCounter: state.counter.blueCounter,
    redCounter: state.counter.redCounter,
    total: state.counter.total,
  };
};

export default connect(mapStateToProps)(Counter);
