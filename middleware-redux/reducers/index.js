function combineReducer(currentState, action) {
  // var DEFAULT_STATE = {count:0, sum: 0};
  var nextState = Object.assign({},currentState);

  nextState = {
    count: counter(nextState.count, action),
    sum: sum(nextState.sum, action),
    images: images(nextState.images, action)
  };
  return nextState;
  // if (currentState === undefined) { // look at to Note 1.1

  //   nextState = DEFAULT_STATE;
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
  //     var sum = parseInt(action.a) + parseInt(action.b);
  //     nextState.sum = sum;
  //     return nextState;
  //   default:
  //     return nextState;
  // }
}