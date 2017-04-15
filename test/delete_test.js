const assert = require('assert');
const User = require('../src/user');

describe('deleting a user', () => {
  let gerry;
  beforeEach((done) => {
    gerry = new User({ name: 'Gerry' });
    gerry.save()
      .then(() => done());
  });
  // Different ways to remove
  it('model instance remove', (done) => {
    gerry.remove().then(() => {
      console.log("removed");
      User.findOne({ name: 'Gerry' });
    }).then((user) => {
      console.log(user);
      console.log("removed second then");
      assert(user === undefined);
      done();
    });;
  });

  it('class method remove', () => {

  });
  it('class method findAndRemove', () => {

  });
  it('class method findByIdAndRemove', () => {

  });
});