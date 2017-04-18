function counter(currentState, action) {
  DEFAULT_STATE = 0;
  var nextState = '?';
  return nextState
}

function sum(currentState, action) {
  DEFAULT_STATE = 77;
  var nextState = '???';
  return nextState
}

function combineReducer(currentState, action) {
  var DEFAULT_STATE = {count:0, a: 0, b: 0, sum: 0};
  var nextState = Object.assign({}, currentState);
  nextState = {
    count: counter(nextState.count, action),
    sum: sum(nextState.sum, action)
  }
  return nextState;
  // if (currentState === undefined) { // look at to Note 1.1

  //   nextState = DEFAULT_STATE;// Note1.2
  //   return nextState;
  // }
  // switch (action.type) {
  //   case 'DECREMENT': // look at Note2.1
  //     nextState.count = currentState.count - 1;
  //     return nextState;// Note2.2
  //   case 'INCREMENT': // look at Note2.1
  //     nextState.count = currentState.count + 1;
  //     return nextState;// Note2.2
  //   case 'SUM':
  //     nextState.a = action.a;
  //     nextState.b = action.b;
  //     nextState.sum = parseInt(action.a) + parseInt(action.b);
  //     return nextState;
  //   default:
  //     return nextState;
  // }
}