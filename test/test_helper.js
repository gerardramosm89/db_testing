const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost:27017/users_test');
  mongoose.connection
    .once('open', () => {
      console.log('Good to go!');
      done();
    })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});


beforeEach((done) => {
  // console.log('hit before each, dropping db');
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test
    done();
  });
});