const assert = require('assert');
const User = require('../src/user');

describe('Subdocuments', () => {
  it('can create a subdocument', (done) => {
    const gerry = new User({ 
      name: 'Gerry', 
      posts: [
        { title: "PostTitle" }
      ]
    });
    gerry.save()
      .then(() => User.findOne({ name: 'Gerry' }))
      .then((user) => {
        assert(user.posts[0].title === 'PostTitle');
        done();
      });
  });
});