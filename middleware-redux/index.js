const logger = function(store) {
  return function(next) {
    return function(action) {
      next(action);
    }
  }
};

// Middlware to log errors
const crashReporter = function(store) {
  return function(next) {
    return function(action) {
      try {
        next(action);
      } catch(err) {
        console.group('crashReporter');
        console.error('error happen with action == ', action);
        console.error(err);
        console.groupEnd('crashReporter');
      }
    }
  }
}


var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter));

function render() {
    var state = store.getState();
    document.getElementById('value').innerHTML = state.count;
    document.getElementById('value2').innerHTML = state.sum;
};
store.subscribe(render);

render();



//~end step 2.2
document.getElementById('decrement')
  .addEventListener('click', function () {
    store.dispatch(decrease());
  })
document.getElementById('incrementAsync')
  .addEventListener('click', function () {
        store.dispatch(increase());
  })
document.getElementById('sum')
  .addEventListener('click', function () {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    store.dispatch(getSum(a, b));
  })