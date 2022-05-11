// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let fetchedAccounts, deployedContract;

beforeEach(async () => {
    //Get a list of all accounts
    fetchedAccounts = await web3.eth.getAccounts();

    //Use one of the accounts to deploy a contract 
    deployedContract = await new web3.eth.Contract(JSON.parse(interface))
                                    .deploy({ data: bytecode, arguments: ['Hello there!']})
                                    .send({ from: fetchedAccounts[0], gas: '1000000'})
});

describe('Inbox Class', () => {
    it('deploys a contract', ()=>{
        assert.ok(deployedContract.options.address);
    });

    it('it has a default message', async () => {
        const message = await deployedContract.methods.message().call();
        assert.equal(message, 'Hello there!'); 
    });
});