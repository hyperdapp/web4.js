var chai = require('chai');
var web4 = require('../index');
var web4 = new web4();
var testMethod = require('./helpers/test.method.js');

var method = 'getCode';


var tests = [{
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855'],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', web4.eth.defaultBlock],
    result: '0x47d33b27bb249a2dbab4c0612bf9caf4747d33b27bb249a2dbab4c0612bf9cafd33b27bb249a2dbab4c0612bf9caf4c1950855',
    formattedResult: '0x47d33b27bb249a2dbab4c0612bf9caf4747d33b27bb249a2dbab4c0612bf9cafd33b27bb249a2dbab4c0612bf9caf4c1950855',
    call: 'tim_'+ method
},{
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 2],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', '0x2'],
    result: '0x47d33b27bb249a2dbab4c0612bf9caf4747d33b27bb249a2dbab4c0612bf9cafd33b27bb249a2dbab4c0612bf9caf4c1950855',
    formattedResult: '0x47d33b27bb249a2dbab4c0612bf9caf4747d33b27bb249a2dbab4c0612bf9cafd33b27bb249a2dbab4c0612bf9caf4c1950855',
    call: 'tim_'+ method
}];

testMethod.runTests('eth', method, tests);

