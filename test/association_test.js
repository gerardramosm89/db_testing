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
        //assert(user.blogPosts[0].title == 'JS is great');
        done();
      });
  });

  it('saves a full relation graph', (done) => {
    User.findOne({ name: 'Gerry' })
      .populate({
        path: 'blogPosts',
        populate: {
          path: 'comments',
          model: 'comment',
          populate: {
            path: 'user',
            model: 'user'
          }
        }
      })
      .then((user) => {
        assert(user.name === 'Gerry');
        assert(user.blogPosts[0].title === 'JS is great');
        assert(user.blogPosts[0].comments[0].content == 'Congrats on great post');
        done();
      });
  });

});