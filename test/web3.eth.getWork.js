var chai = require('chai');
var web4 = require('../index');
var testMethod = require('./helpers/test.method.js');

var method = 'getWork';

var tests = [{
    args: [],
    formattedArgs: [],
    result: true,
    formattedResult: true,
    call: 'tim_'+ method
}];

testMethod.runTests('eth', method, tests);

