// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let fetchedAccounts;

beforeEach(async () => {
    //Get a list of all accounts
    fetchedAccounts = await web3.eth.getAccounts();

    //Use one of the accounts to deploy a contract 
});

describe('Inbox Class', () => {
    it('deploys a contract', ()=>{
        console.log(fetchedAccounts);
    });
});