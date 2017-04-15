const assert = require('assert');
const User = require('../src/user');

describe('deleting a user', () => {
  let gerry;
  beforeEach((done) => {
    gerry = new User({ name: 'Gerry' });
    console.log('creating new user');
    gerry.save()
      .then(() => done());
  });
  // Different ways to remove
  it('model instance remove', (done) => {
    gerry.remove().then(() => {
      return User.findOne({ name: 'Gerry' });
    }).then((user) => {
      assert(user === null);
      done();
    });;
  });

  it('class method remove', (done) => {
    User.remove({ name: 'Gerry' }).then(() => {
      return User.findOne({ name: 'Gerry' });
    }).then((user) => {
      assert(user === null);
      done();
    });
  });
  it('class method findAndRemove', () => {

  });
  it('class method findByIdAndRemove', () => {

  });
});