import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_GREETING") {
    return { ...state, greeting: action.payload };
  }
  return state;
};

export default rootReducer;
