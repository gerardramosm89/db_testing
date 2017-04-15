const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const Comment = require('../src/comments');
const BlogPost = require('../src/blogPost');

describe('Associations', () => {
  let gerry, blogPost, comment;

  beforeEach((done) => {
    gerry = new User({ name: 'Gerry' });
    blogPost = new BlogPost({
      title: 'JS is great',
      content: 'Yup it really is'
    });
    comment = new Comment({ content: 'Congrats on great post' });

    gerry.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.user = gerry;

    Promise.all([gerry.save(), blogPost.save(), comment.save()])
      .then(() => {
        return done();
      });
  });

  it('saves a relation between a user and a blogpost', (done) => {
    User.findOne({ name: 'Gerry' })
      .populate('blogPosts')
      .then((user) => {
        console.log(user);
        //assert(user.blogPosts[0].title == 'JS is great');
        console.log("Called done too early");
        done();
      });
  });
});