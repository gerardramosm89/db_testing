const assert = require('assert');
const User = require('../src/user');

describe('Virtual types', () => {
  it('postCount returns number of posts', (done) => {
    const gerry = new User({
      name: 'Gerry',
      posts: [{ title: 'PostTitle'}]
    });

    gerry.save()
      .then(() => User.findOne({ name: 'Gerry' }))
      .then((user) => {
        //console.log(user);
        gerry.set('postCount', 1);
        gerry.save();
        assert(gerry.postCount == 1);
        done();
      });
  });
});