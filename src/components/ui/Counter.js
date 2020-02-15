import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
    return (
        <div className="counter">
            { props[`${props.which}Counter`] }
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    blueCounter: state.counter.blueCounter,
    redCounter: state.counter.redCounter,
    greenCounter: state.counter.greenCounter,
    total: state.counter.total,
  };
};

export default connect(mapStateToProps)(Counter);
