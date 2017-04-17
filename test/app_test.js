const assert = require('assert');
const request = require('supertest');
const app = require('../src/app');

describe('The express app', () => {
  it('handles a GET quest to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        // console.log(response);
        assert(response.body.message === 'Hello there!');
        done();
      });
  });
});