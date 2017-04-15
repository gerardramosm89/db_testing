const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the db', () => {
  let joe;
  beforeEach((done) => {
    gerry = new User({ name: 'Gerry' });
    gerry.save().then(() => done());
  });

  it('finds all users with a name of Gerry', (done) => {
    User.find({ name: 'Gerry' })
      .then((users) => {
        assert(users[0].name === 'Gerry');
        done();
      });
  });

  it('finds a user with a particular id', (done) => {
    User.findOne({ _id: gerry._id})
      .then((user) => {
        assert(user.name == 'Gerry');
        done();
      });
  });
});