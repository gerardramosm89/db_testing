const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let gerry;
  beforeEach((done) => {
    gerry = new User({ name: 'Gerry', likes: 0 });
    gerry.save().then(() => done());
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
      assert(users.length === 1);
      assert(users[0].name == 'Gerard');
      done();
    });
  };

  it('Instance type using set and save', (done) => {
    gerry.set('name', 'Gerard');
    assertName(gerry.save(), done);
  });

  it('A model instance can update', (done) => {
    assertName(gerry.update({ name: 'Gerard' }), done);

  });

  it('A model class can update', (done) => {
    assertName(
    User.update({ name: 'Gerry'}, { name: 'Gerard'}), 
    done);
  });
  it('A model class can update one record', (done) => {
    assertName(User.findOneAndUpdate({ name: 'Gerry' }, { name: 'Gerard'}), done);
  });
  it('A model class can find a record with an Id and update', (done) => {
    assertName(
      User.findByIdAndUpdate(gerry._id, { name: 'Gerard' }), 
      done);
  });
  it('A user can have their post count incremented by 1', (done) => {
    User.update({ name: 'Gerry' }, { $inc: { likes: 1 }})
      .then(() => User.findOne({ name: 'Gerry' }))
      .then((user) => {
        assert(user.likes == 1);
        done()
      });
  });
});