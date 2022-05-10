// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxContractPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxContractPath, 'utf-8');

console.log(solc.compile(source, 1));