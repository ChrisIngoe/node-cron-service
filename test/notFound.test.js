'use strict';

var app = require('../app'),
  request = require('supertest'),
  expect = require('chai').expect;

describe('Not Found API Integration Tests', function () {
  describe('when requesting resource that doesnt exist', function () {
    it('should respond with 404', function (done) {
      request(app)
        .get('/missing')
        .expect(404)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          expect(res.statusCode).to.equal(404);
          expect(res.text).to.equal('URL Not Found: /missing');
          done();
        });
    });
  });
});
