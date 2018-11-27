var chai = require('chai');
var assert = chai.assert;
var web4 = require('../index');
var web4 = new web4();

describe('web4.eth', function () {
    describe('defaultBlock', function () {
        it('should check if defaultBlock is set to proper value', function () {
            assert.equal(web4.eth.defaultBlock, 'latest');
        });
    });
});

