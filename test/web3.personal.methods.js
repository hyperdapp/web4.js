var chai = require('chai');
var assert = chai.assert;
var web4 = require('../index.js');
var web4 = new web4();
var u = require('./helpers/test.utils.js');
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

describe('web4.net', function() {
    describe('methods', function() {
        // set dummy providor, to prevent error
        web4.setProvider(new FakeHttpProvider());
        u.propertyExists(web4.personal, 'listAccounts');
        u.methodExists(web4.personal, 'newAccount');
        u.methodExists(web4.personal, 'unlockAccount');
    });
});
