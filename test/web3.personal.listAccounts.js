var chai = require('chai');
var assert = chai.assert;
var web4 = require('../index');
var web4 = new web4();
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

var method = 'listAccounts';

var tests = [{
    result: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855'],
    formattedResult: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855'],
    call: 'personal_'+ method
}];

describe('web4.personal', function () {
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
                var result = web4.personal[method];

                // then
                assert.deepEqual(test.formattedResult, result);
            });
        });
    });
});
