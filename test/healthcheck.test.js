'use strict';

var app = require('../app'),
  request = require('supertest'),
  expect = require('chai').expect;

describe('Healthcheck API Integration Tests', function () {
  describe('#GET / healthcheck', function () {
    it('should get OK response', function (done) {
      request(app)
        .get('/healthcheck')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.service).to.exist;
          expect(res.body.service).to.equal('OK');
          done();
        });
    });
  });
});
