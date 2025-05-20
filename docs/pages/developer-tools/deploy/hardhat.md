# Hardhat

Deploying Smart Contracts using Hardhat

## What is Hardhat?

Hardhat is a development environment for Ethereum that helps developers manage and automate the common tasks involved in building smart contracts and decentralized applications. It can directly interact with Cyber's Ethereum API, allowing for the deployment of smart contracts into the Cyber network. Additionally, Hardhat is a comprehensive set of tools for creating Ethereum-based software, which includes various components that aid in editing, compiling, debugging, and deploying smart contracts and decentralized applications. All of these components work together to create a complete development environment.

## Creating a Hardhat Project


1. Create a directory for your project

```bash
mkdir hardhat && cd hardhat
```

2. Initialize the project which will create a package.json file

```bash
npm init -y
```

3.Install Hardhat

```bash
npm install hardhat
```

4.Create a project

```bash
npx hardhat
```

## Creating your Configuration File

Modify the Hardhat configuration file and create a secure file to store your private key in.

1. Create a secrets.json file to store your private key

```bash
touch secrets.json
```

2. Add your private key to secrets.json

```json
{
  "privateKey": "YOUR-PRIVATE-KEY-HERE"
}
```

3. Add the file to your project's .gitignore, and never reveal your private key.
4. Modify the hardhat.config.js file

- Import the secrets.json file
- Inside the module.exports add the Cyber network configuration

```js
//hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
const { privateKey } = require("./secrets.json");

module.exports = {
  solidity: "0.8.14",
  defaultNetwork: "CyberTestnet",
  networks: {
    CyberTestnet: {
      url: "https://cyber-testnet.alt.technology/",
      chainId: 111557560,
      accounts: [privateKey],
    },
    Cyber: {
      url: "https://cyber.alt.technology/",
      chainId: 7560,
      accounts: [privateKey],
    },
  },
};
```

## Deploying your Smart Contract

1. Compile the contract

```bash
npx hardhat compile
```

2. Create a new directory for the script and name it scripts and add a new file to it called deploy.js

```bash
mkdir scripts && cd scripts
touch deploy.js
```

3. Create a deployment script, like the one below

```js
// scripts/deploy.js
async function main() {
  // 1. Get the contract to deploy
  const LockFactory = await ethers.getContractFactory("Lock");
  console.log("Deploying Lock...");

  // 2. Instantiating a new smart contract
  const lock = await LockFactory.deploy(1900000000);

  // 3. Waiting for the deployment to resolve
  await lock.waitForDeployment();

  // 4. Use the contract instance to get the contract address
  console.log("lock deployed to:", lock.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

4. Deploy Lock.sol using the command below

```bash
cd ../
```

Testnet
```bash
npx hardhat run scripts/deploy.js --network CyberTestnet
```

Mainnet
```bash
npx hardhat run scripts/deploy.js --network Cyber
```
