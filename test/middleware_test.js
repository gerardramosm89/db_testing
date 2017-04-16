const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const BlogPost = require('../src/blogPost');

describe('Middleware', () => {
  let gerry, blogPost;

  beforeEach((done) => {
    gerry = new User({ name: 'Gerry' });
    blogPost = new BlogPost({
      title: 'JS is great',
      content: 'Yup it really is'
    });

    gerry.blogPosts.push(blogPost);

    Promise.all([gerry.save(), blogPost.save()])
      .then(() => {
        return done();
      });
  });

  it('users clean up dangling blogPosts on remove', (done) => {
    gerry.remove()
      .then(() => BlogPost.count())
      .then((count) => {
        assert(count == 0);
        done();
      });
  });
});