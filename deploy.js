// deploy code will go here
const HDWallectProvider = require('@truffle/hdwallet-provider');
const Web3 =  require('web3');
const { interface, bytecode } = require('./compile');

const provider = HDWallectProvider(
    process.env.PROVIDERKEY,
    'https://rinkeby.infura.io/v3/dad984162b06451eb4babfcc418e113c'
);

const web3 = new Web3(provider);