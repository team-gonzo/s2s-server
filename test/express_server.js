var assert = require('assert');
var request = require('supertest');

describe('loading express', function () {
    var server;
    beforeEach(function () {
        //bust cached server module and load a fresh on for each test
        delete require.cache[require.resolve('../server/server.js')];
        server = require('../server/server.js');
    });
    afterEach(function (done) {
        server.close(done);
    });

    it('responds to / with 200', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });

    it('responds to everything else with a 404', function testPath(done) {
        request(server)
            .get('/does/not/exist')
            .expect(404, done);
    });
})