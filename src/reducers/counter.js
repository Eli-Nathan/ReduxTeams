const initialState = {
  blueCounter: 0,
  redCounter: 0,
  total: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_BLUE":
      return {
        ...state,
        blueCounter: state.blueCounter + 1,
        total: state.total + 1
      };
    case "INCREMENT_RED":
      return {
        ...state,
        redCounter: state.redCounter + 1,
        total: state.total + 1
      };
    case "DECREMENT_BLUE":
      return {
        ...state,
        blueCounter: state.blueCounter - 1,
        total: state.total - 1
      };
    case "DECREMENT_RED":
      return {
        ...state,
        redCounter: state.redCounter - 1,
        total: state.total - 1
      };
    case "RESET_BLUE":
      return {
        ...state,
        blueCounter: 0,
        total: state.redCounter
      }
    case "RESET_RED":
        return {
          ...state,
          redCounter: 0,
          total: state.blueCounter
        }
    case "RESET_ALL":
      return initialState;
    default:
      return state;
  }
};

export default counter;
