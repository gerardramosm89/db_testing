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
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        //console.log('all dbs dropped');
        done();
      });
    });
  });
});