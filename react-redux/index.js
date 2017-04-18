var store = Redux.createStore(combineReducer)

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