//reducers (state,action)
let initialState = {
  count: 0,
};

let counterReducer = (state, action) => {
  if (state === undefined) {
    state = initialState;
  }
  if (action.type === 'Increase') {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === 'Decrease') {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
};

export default counterReducer;
