# web3.js

You can also use web3.js to connect to Cyber Testnet and Mainnet.

## Install

```bash

npm install --save web3

```

## Setup

```javascript
const { Web3 } = require("web3");
const web3 = new Web3("https://cyber-testnet.alt.technology/"); // Testnet rpc
```

## Read data from Cyber

```javascript
const latestBlock = await web3.eth.getBlockNumber();
```
