let StateManager = (() => {
  // to maintain the currentState
  let _currentState = undefined,
    // to maintain the callbacks
    _callbacks = [],
    // to hold the reference of a reducer function
    _reducerFn = undefined,
    // action to initialize the 'currentState' with the 'valid default state'
    _init_action = {
      type: "@@INIT/ACTION",
    };

  // getState() method of the 'store'
  function getState() {
    // return the currentState maintained by the store
    return _currentState;
  }

  // subscribe() method of the 'store'
  function subscribe(callbackFn) {
    // check if the callbackFn is infact a function
    if (typeof callbackFn !== "function") {
      // throw an error if the argument is NOT a callback function
      throw new Error("Invalid argument. callback must be a function");
    }

    // keep the callbackFn for future invocations (by notifyChange function)
    _callbacks.push(callbackFn);
  }

  // private utility
  function notifyChange() {
    // invoke the callback fns
    _callbacks.forEach((callbackFn) => callbackFn());
  }

  // dispatch() method of the 'store'
  // action -> object representing the user action that may or may not result in state changes
  /*  -> 
    { 
        type : 'unique action name', 
        payload : 'any supporting data (optional)' 
    } 
*/
  function dispatch(action) {
    // invoke the reducerFn with the currentState & action
    let newState = _reducerFn(_currentState, action);

    if (newState === _currentState) {
      // state has not changed
      return;
    }
    // state has changed
    // update the store with the newState
    _currentState = newState;

    // trigger the callbackFns to notify that the state has changed
    notifyChange();
  }

  // factory to create the store instance
  function createStore(reducer) {
    // validate if the reducer is a function
    if (typeof reducer !== "function") {
      // throw an error if the reducer is not a function
      throw new Error("invalid argument. reducer must be a function");
    }

    // keep the reference of the reducer function for future use (to be invoked when an 'action' is 'dispatched')
    _reducerFn = reducer;

    // invoke the reducer function to get the valid default state (default currentState)
    _currentState = _reducerFn(_currentState /* undefined */, _init_action);

    // construct a store object
    const store = {
      getState,
      subscribe,
      dispatch,
    };

    // return the store object
    return store;
  }

  // action dispatcher factory
  function bindActionCreators(actionCreators, dispatch) {
    const actionDispatchers = {};
    for (let key in actionCreators) {
      actionDispatchers[key] = function (...args) {
        const action = actionCreators[key](...args);
        dispatch(action);
      };
    }
    return actionDispatchers;
  }

  // top-level object to export the factory function
  return {
    createStore,
    bindActionCreators
  };
})();