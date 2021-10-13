

const rootReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_GREETING":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
