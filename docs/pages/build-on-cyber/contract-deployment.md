# Deploy your first Smart Contract on Cyber L2
In this tutorial we will be learning how to deploy a simple smart contracts on Cyber L2 using Hardhat. 

## Step 1: Pre-requisites

Before deploying your smart contract, ensure you have completed the following:

1. **Add Cyber Testnet to MetaMask**  
   Follow the [guide for adding the Cyber Testnet network](/build-on-cyber/connecting-wallet) to your MetaMask wallet.

2. **Bridging Assets to Cyber Testnet**  
   Use the [Bridging assets to Cyber Testnet guide](/build-on-cyber/bridging-assets) to transfer assets from other networks to Cyber Testnet so you have funds available for deployment.



## Step 2: Creating a Hardhat Project


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

5.Create an empty hardhat.config.js and install the Ethers plugin to use the Ethers.js library to interact with the network.

```bash
npm install @nomiclabs/hardhat-ethers ethers
```

## Step 3: Creating your Smart Contract

1. Create a contracts directory

```bash
mkdir contracts && cd contracts
```

2. Create your_contract.sol file in contracts directory

```bash
touch your_contract.sol
```

## Step 4: Creating your Configuration File

Modify the Hardhat configuration file and create a secure file to store your private key in.

1. Create a secrets.json file to store your private key

```bash
cd ../
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

- Import the Ethers plugin
- Import the secrets.json file
- Inside the module.exports add the Cyber network configuration

```js
//hardhat.config.js

require("@nomiclabs/hardhat-ethers");
const { privateKey } = require("./secrets.json");

module.exports = {
  solidity: "0.8.14",
  defaultNetwork: "Cyber",
  networks: {
    Cyber: {
      url: "CHAIN_RPC_URL", // Insert Cyber RPC URL Here
      chainId: CHAIN_ID, // Insert Cyber ChainID Here
      accounts: ["YOUR_PRIVATE_KEY"], // Insert your private key here
    },
  },
};
```

## Step 5: Deploying your Smart Contract

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
  const Your_Contract = await ethers.getContractFactory("your_contract");
  console.log("Deploying Your_Contract...");

  // 2. Instantiating a new smart contract
  const your_contract = await Your_Contract.deploy();

  // 3. Waiting for the deployment to resolve
  await your_contract.deployed();

  // 4. Use the contract instance to get the contract address
  console.log("Your_Contract deployed to:", your_contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

4. Deploy your_contract.sol using the command below

```bash
cd ../
npx hardhat run scripts/deploy.js --network Cyber
```

## Step 6: Verify Your Smart Contract
After deployment, you can verify your smart contract on the Cyber Testnet Explorer by visiting [Cyber Testnet Explorer](https://testnet.cyberscan.co/). 
Search for your contract using its address and confirm that it has been successfully deployed.


