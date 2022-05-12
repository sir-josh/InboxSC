// deploy code will go here
const HDWallectProvider = require('@truffle/hdwallet-provider');
const Web3 =  require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWallectProvider(
    procees.REACT_APP_PROVIDER_KEY,
    'https://rinkeby.infura.io/v3/dad984162b06451eb4babfcc418e113c'
);

const web3 = new Web3(provider);

// web3.eth.getAccounts().then(result => console.log(result[0]));

const deploy = async()=> {
    const developerAccount = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', developerAccount[0]);

    const deployedAddress = await new web3.eth.Contract(JSON.parse(interface))
                                        .deploy({ data: bytecode, arguments: ['Welcome to giert message']})
                                        .send({ from: developerAccount[0], gas: '1000000'});

    console.log('Contract deployed to', deployedAddress.options.address);
    provider.engine.stop();
}

deploy();