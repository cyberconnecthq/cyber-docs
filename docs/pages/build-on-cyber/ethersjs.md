# Ethers.js

ethers.js is a JavaScript library that allows developers to interact with EVM-compatible blockchain networks. You can use ethers.js to connect to Cyber Testnet and Mainnet.

## Install

```bash
npm install --save ethers
```

## Setup

```javascript
const ethers = require("ethers"); // ethers v6
const url = "https://cyber-testnet.alt.technology/";
const provider = new ethers.JsonRpcProvider(url);
```

## Read data from Cyber

```javascript
const latestBlock = await provider.getBlockNumber();
```
