function counter(currentState, action) {
  DEFAULT_STATE = 0;
  console.log("action is: ", action);
  if (currentState === undefined) { // look at to Note 1.1

    nextState = DEFAULT_STATE;
    return nextState;
  }
  switch (action.type) {
    case 'DECREMENT':
    console.log('Hello wtf');
      nextState = currentState - 1;
      console.log("nextstate is: ", nextState);
      return nextState;
    case 'INCREMENT': 
      nextState = currentState + 1;
      return nextState;
    default:
      nextState = currentState;
      return nextState;
  }
}