


var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));

function render() {
    var state = store.getState();
    document.getElementById('value').innerHTML = state.count.result;
    document.getElementById('value2').innerHTML = state.sum;
    if (state.count.loading) {
      document.getElementById('status').innerHTML = "is loading...";
    } else {
      document.getElementById('status').innerHTML = "loaded";
    }
    // image
    document.getElementById('imagesStatus').innerHTML = state.images.loading;
    if(state.images.loading =="loading…"){
         document.getElementById('imagesList').innerHTML = "";
    }
     else if(state.images.loading =="loaded"){
         for(var i=0; i< state.images.data.length; i++){
             document.getElementById('imagesList').innerHTML
                   += ("<img src='"  + state.images.data[i].link + "' style='height:200px'>");
         }
     }
  console.log('current state is: ', state);
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
        store.dispatch(asyncIncrease);
  })
document.getElementById('sum')
  .addEventListener('click', function () {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    store.dispatch(getSum(a, b));
  })

document.getElementById('randomImagesButton')
  .addEventListener('click', function () {
        store.dispatch(getRandomImages);
  })