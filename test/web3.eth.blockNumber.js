var chai = require('chai');
var assert = chai.assert;
var web4 = require('../index');
var web4 = new web4();
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

var method = 'blockNumber';

var tests = [{
    result: '0xb',
    formattedResult: 11,
    call: 'tim_'+ method
}];

describe('web4.eth', function () {
    describe(method, function () {
        tests.forEach(function (test, index) {
            it('property test: ' + index, function () {
                
                // given
                var provider = new FakeHttpProvider();
                web4.setProvider(provider);
                provider.injectResult(test.result);
                provider.injectValidation(function (payload) {
                    assert.equal(payload.jsonrpc, '2.0');
                    assert.equal(payload.method, test.call);
                    assert.deepEqual(payload.params, []);
                });

                // when 
                var result = web4.eth[method];
                
                // then
                assert.strictEqual(test.formattedResult, result);
            });
            
            it('async get property test: ' + index, function (done) {
                
                // given
                var provider = new FakeHttpProvider();
                web4.setProvider(provider);
                provider.injectResult(test.result);
                provider.injectValidation(function (payload) {
                    assert.equal(payload.jsonrpc, '2.0');
                    assert.equal(payload.method, test.call);
                    assert.deepEqual(payload.params, []);
                });

                // when 
                web4.eth.getBlockNumber(function (err, result) {
                    assert.strictEqual(test.formattedResult, result);
                    done();
                });
                
            });
        });
    });
});

