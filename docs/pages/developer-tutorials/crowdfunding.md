# Build your own Crowdfunding dApp

Welcome to this tutorial on creating a crowdfunding dApp on Cyber L2. Crowdfunding application on Cyber L2 offers transparency, security, and efficiency, ensuring funds are handled precisely according to predefined conditions. This tutorial will guide you through building a Solidity-based crowdfunding contract, allowing you to set goals, describe projects, and define deadlines. Whether you're a developer or project creator, learn how to leverage Cyber L2's capabilities to successfully fund your ideas. Let's get started!

## Creating a Hardhat Project

1. Create a directory for your project

```bash
mkdir crowdfunding-example && cd crowdfunding-example
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

When you execute this command, hardhat should create a project for you and will prompt to fill basic project details like:

![create](/tutorial-assets/crowdfunding-1.png)

## Creating your Configuration File

Modify the Hardhat configuration file and create a secure file to store your private key in.

1. Create a **secrets.json** file to store your private key

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

1. Create a new contract called `crowdfunding.sol` and refer to the code below.
```javascript
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.14;

contract Crowdfunding {
    address public owner;
    uint public goal;
    string public description;
    uint public deadline;

    uint public totalFunds;
    bool public withdrawn;
    mapping(address => uint) public contributions;
    address[] public investors;

    constructor(uint _goal, string memory _description, uint _deadlineBlockCount) {
        // Define goal, project description, and deadline
        goal = _goal;
        description = _description;
        deadline = block.number + _deadlineBlockCount;

        // Set owner to deployer of the contract
        owner = msg.sender;
        withdrawn = false;
    }

    function contribute() public payable {
        require(block.number <= deadline, "Funding period has ended.");

        // Add amount to total funds
        totalFunds += msg.value;

        // Add wallet to investor list and amount to contributions dictionary
        contributions[msg.sender] += msg.value;
        investors.push(msg.sender);
    }

    function withdraw() public {
        require(block.number > deadline, "Cannot withdraw before the deadline.");
        require(!withdrawn, "Funds have been withdrawn.");

        withdrawn = true; // prevent re-entrancy attacks

        if(totalFunds >= goal) {
            // If goal was reached, transfer the funds to the owner
            payable(owner).transfer(totalFunds);
        } else {
            // If goal was not reached, refund investors
            for(uint i = 0; i < investors.length; i++) {
                address investor = investors[i];
                payable(investor).transfer(contributions[investor]);
            }
        }
    }

    function isGoalReached() public view returns (bool) {
        return totalFunds >= goal;
    }
}
```

Let's understand the solidity contract code:

### State variables
```js
address public owner;
uint public goal;
string public description;
uint public deadline;

uint public totalFunds;
bool public withdrawn;
mapping(address => uint) public contributions;
address[] public investors;
```
- `owner`: The address of the person who deployed the contract.
- `goal`: The fundraising goal in wei (the smallest unit of ether).
- `description`: A description of the crowdfunding project.
- `deadline`: The block number at which the crowdfunding period ends.
- `totalFunds`: The total amount of funds raised.
- `withdrawn`: A boolean indicating if the funds have been withdrawn by the owner.
- `contributions`: A mapping that tracks the amount of funds contributed by each address.
- `investors`: An array of addresses that have contributed to the crowdfunding campaign.

### Contribute function
```js
function contribute() public payable {
    require(block.number <= deadline, "Funding period has ended.");
    totalFunds += msg.value;
    contributions[msg.sender] += msg.value;
    investors.push(msg.sender);
}
```
This function allows users to contribute funds to the crowdfunding campaign:

- It checks if the current block number is less than or equal to the deadline.
- Updates totalFunds with the contribution amount.
- Records the contribution in the contributions mapping.
- Adds the contributor's address to the investors array.


### Withdraw Function
```js
function withdraw() public {
    require(block.number > deadline, "Cannot withdraw before the deadline.");
    require(!withdrawn, "Funds have been withdrawn.");
    withdrawn = true; // prevent re-entrancy attacks

    if(totalFunds >= goal) {
        payable(owner).transfer(totalFunds);
    } else {
        for(uint i = 0; i < investors.length; i++) {
            address investor = investors[i];
            payable(investor).transfer(contributions[investor]);
        }
    }
}
```
This function allows the owner to withdraw funds after the deadline:

- Checks if the current block number is greater than the deadline.
- Ensures that funds have not already been withdrawn.
- Transfers funds to the owner if the goal is reached.
- Refunds contributors if the goal is not reached.

### Goal Reached Function
```js
function isGoalReached() public view returns (bool) {
    return totalFunds >= goal;
}
```
This function allows anyone to check if the fundraising goal has been reached.


2. Compile the contract

```bash
npx hardhat compile
```

Once you execute the compile command, it should look like:

![compiler](/tutorial-assets/crowdfunding-2.png)

3. Create a new directory for the script and name it scripts and add a new file to it called deploy.js

```bash
mkdir scripts && cd scripts
touch deploy.js
```

4. Create a deployment script, like the one below

```js
// scripts/deploy.js

const hre = require("hardhat");

async function main() {
    // Get the contract to deploy
    const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");

    // Define contract constructor parameters
    const goal = hre.ethers.parseEther("10"); // Example: Goal of 10 Ether
    const description = "Fundraising for a new product";
    const deadlineBlockCount = 100000; // Example: Deadline in 10000 blocks

    // Deploy the contract with the constructor parameters
    const crowdfunding = await Crowdfunding.deploy(goal, description, deadlineBlockCount);

    // Wait for the deployment to be mined
    await crowdfunding.waitForDeployment();

    console.log("Crowdfunding contract deployed to:", crowdfunding.target);
}

// Recommended pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
```

5. Deploy crowdfunding.sol using the command below

```bash
cd ../
```

#### Testnet
```bash
npx hardhat run scripts/deploy.js --network CyberTestnet
```

#### Mainnet
```bash
npx hardhat run scripts/deploy.js --network Cyber
```

You will be able to deploy the contract and hardhat will return the deployed contract address like:

![deployment](/tutorial-assets/crowdfunding-3.png)

- You can verify the contract address by visiting the [Cyber explorer](https://cyber-testnet.socialscan.io/)

## Conclusion
You've successfully deployed a crowdfunding contract on Cyber Testnet. Continue to explore and leverage Cyber L2's features to create a frontend to interact with the contract and share your project within the developer community. If you face any issues, feel free to reach out to our engineers for [Support](/support.md).