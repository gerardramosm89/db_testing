      // step 1.2
      var store = Redux.createStore(combineReducer)
      // ~end step 1.2
      // step 1.3
      function render() {
         var state = store.getState();
         document.getElementById('value').innerHTML = state.count;
         document.querySelector('#value2').innerHTML = state.sum;
        //  document.getElementById('value2').innerHTML = state.a + state.b
      };
      store.subscribe(render);
      // ~end step 1.3
      render();

      // step 2.2

      //~end step 2.2
      document.getElementById('decrement')
        .addEventListener('click', function () {
          store.dispatch(decrease());
        })
      document.getElementById('incrementAsync')
        .addEventListener('click', function () {
          setTimeout(
            function increment () {

              store.dispatch(increase());

            }
          , 1000);
        })
      document.getElementById('sum')
        .addEventListener('click', function () {
          var a = document.getElementById('a').value;
          var b = document.getElementById('b').value;
          a = parseInt(a);
          b = parseInt(b);
          store.dispatch(getSum(a, b));
        })