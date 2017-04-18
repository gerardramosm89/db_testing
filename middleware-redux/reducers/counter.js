function counter(currentState, action) {
  var DEFAULT_STATE = { result: 0, loading: false };
  var nextState = Object.assign({}, currentState);

  console.log("action is: ", action);
  if (currentState === undefined) { // look at to Note 1.1

    nextState = DEFAULT_STATE;
    return nextState;
  }
  switch (action.type) {
    case 'DECREMENT':
    console.log('Hello wtf');
      nextState.result = currentState.result - 1;
      console.log("nextstate is: ", nextState);
      return nextState;
    case 'INCREMENT':
      nextState.result = currentState.result + 1;
      nextState.loading = false;
      return nextState;
    case 'INCREMENT_LOADING':
      nextState.loading = true;
      return nextState;
    default:
      nextState = currentState;
      return nextState;
  }
}