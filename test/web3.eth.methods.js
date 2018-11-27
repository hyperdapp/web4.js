var chai = require('chai');
var assert = chai.assert;
var web4 = require('../index.js');
var web4 = new web4();
var u = require('./helpers/test.utils.js');
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

describe('web4.eth', function() {
    describe('methods', function() {
        // set dummy providor, to prevent error
        web4.setProvider(new FakeHttpProvider());

        u.methodExists(web4.eth, 'getBalance');
        u.methodExists(web4.eth, 'getStorageAt');
        u.methodExists(web4.eth, 'getTransactionCount');
        u.methodExists(web4.eth, 'getCode');
        u.methodExists(web4.eth, 'sendTransaction');
        u.methodExists(web4.eth, 'call');
        u.methodExists(web4.eth, 'getBlock');
        u.methodExists(web4.eth, 'getTransaction');
        u.methodExists(web4.eth, 'getUncle');
        u.methodExists(web4.eth, 'getBlockTransactionCount');
        u.methodExists(web4.eth, 'getBlockUncleCount');
        u.methodExists(web4.eth, 'filter');
        u.methodExists(web4.eth, 'contract');

        u.propertyExists(web4.eth, 'coinbase');
        u.propertyExists(web4.eth, 'mining');
        u.propertyExists(web4.eth, 'gasPrice');
        u.propertyExists(web4.eth, 'accounts');
        u.propertyExists(web4.eth, 'defaultBlock');
        u.propertyExists(web4.eth, 'blockNumber');
        u.propertyExists(web4.eth, 'protocolVersion');
    });
});

