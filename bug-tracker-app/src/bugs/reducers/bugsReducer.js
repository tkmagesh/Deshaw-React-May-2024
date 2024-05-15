function bugsReducer(currentState = [], action) {
  switch (action.type) {
    case "BUGS_ADD":
      return [...currentState, action.payload];
    case "BUGS_REPLACE":
      return currentState.map((bug) =>
        bug.id === action.payload.id ? action.payload : bug
      );
    case "BUGS_REMOVE":
      return currentState.filter((bug) => bug.id !== action.payload.id);
    case "BUGS_RETAIN":
      return action.payload;
    default:
      break;
  }
  return currentState;
}

export default bugsReducer;