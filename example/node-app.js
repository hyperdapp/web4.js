#!/usr/bin/env node

var web4 = require('../index.js');
var web4 = new web4();

web4.setProvider(new web4.providers.HttpProvider('http://18.207.115.26:8545'));

var coinbase = web4.tim.coinbase;
console.log(coinbase);

var balance = web4.tim.getBalance(coinbase);
console.log(balance.toString(10));
