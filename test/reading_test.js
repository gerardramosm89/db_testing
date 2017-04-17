const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the db', () => {
  let gerry, maria, alex, zach;
  beforeEach((done) => {
    maria = new User({ name: 'Maria' });
    alex = new User({ name: 'Alex' });
    zach = new User({ name: 'Zach' });    
    gerry = new User({ name: 'Gerry' });
    Promise.all([gerry.save(),alex.save(),maria.save(),zach.save()])
      .then(() => done());
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
  // Sort and skip example
  it('can skip and limit the result set', (done) => {
    User.find({}).sort({ name: 1 })
      .skip(1).limit(2)
      .then((users) => {
        assert(users[0].name === 'Gerry');
        assert(users[1].name === 'Maria');
        done()
      });
  });

});