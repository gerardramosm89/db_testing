const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    const gerry = new User({ name: 'Gerry' });
    gerry.save().then(() => {
      assert(!gerry.isNew);
      done();
    });

  });
});