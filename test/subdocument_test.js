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

  it('Can add subdocuments to an existing record', (done) => {
    const gerry = new User({ name: 'Gerry', posts: []});
    gerry.save()
      .then(() => {
        return User.findOne({ name: 'Gerry' })
      })
      .then((user => {
        user.posts.push({ title: 'New Post' });
        return user.save();
      }))
      .then(() => {
        return User.findOne({ name: 'Gerry' });
      })
      .then((user) => {
        assert(user.posts[0].title == 'New Post');
        done();
      });
  });

  it('Can remove an existing subdocument', (done) => {
    const gerry = new User({ 
      name: 'Gerry',
      posts: [{ title: 'New Title' }]
    });

    gerry.save()
      .then(() => {
        return User.findOne({ name: 'Gerry' })
      })
      .then((user) => {
        user.posts[0].remove(); // When calling .remove() for a subdocument you still have to save class again
        return user.save();
      })
      .then((user) => {
        assert(user.posts.length == 0);
        done();
      });
  });

});