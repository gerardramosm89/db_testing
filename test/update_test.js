const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let gerry;
  beforeEach((done) => {
    gerry = new User({ name: 'Gerry' });
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
});