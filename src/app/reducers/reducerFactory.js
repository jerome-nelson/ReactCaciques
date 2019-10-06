/*
 * Factory function used since all data in Store is either:
 * 1) Array of ids
 * 2) Collection of data using ids
 */
export function reducerFactory(actionTypes) {
  if (!actionTypes || !Array.isArray(actionTypes) || actionTypes.length === 0) {
    // TODO: Use TypeError for non-array types
    throw new Error("reducerFactory requires action types to be set");
  }
  return function(previousState, action) {
    if (typeof previousState === "undefined" || !action || !action.type) {
      return {};
    }
    if (!!action.payload.id && actionTypes.includes(action.type)) {
      return Object.assign({}, previousState, {
        [action.payload.id]: action.payload.data
      });
    }
    return Object.assign({}, previousState);
  };
}

// TODO: Edit to fit structure. Write tests
export function generateActionCreators(type, ...argNames) {
  return function(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}
