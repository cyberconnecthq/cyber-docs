# Deploying an ERC20 Token on Cyber Mainnet with Thirdweb CLI

In this tutorial, we will explore how to deploy an ERC20 token on the Cyber mainnet using the thirdweb tools. ERC20 tokens are a standard for creating fungible, interchangeable tokens on the Ethereum blockchain, and they're used widely across various projects. The Cyber mainnet offers a robust platform for these tokens, and with thirdweb's CLI and GUI tools, the process becomes straightforward even for those with minimal blockchain development experience.

## Requirements
Before we begin, ensure you have the following:

- Node.js and npm/yarn installed on your system. You can install the CLI as a global command on your machine:

```bash
npx thirdweb install
```

- Cyber mainnet/ testnet added to the wallet. [Check the guide to add Cyber to the wallet](/get-started/connecting-wallet)
- An active [thirdweb account](https://thirdweb.com/dashboard) connected to a wallet loaded with ETH for gas fees.


## Step-by-Step Guide

### 1. **Create a project**

To create a new smart contract using the thirdweb CLI, run the following command:
```bash
npx thirdweb create
```

### 2. **Configure your project**

![configuration](/tutorial-assets/thirdweb-configure.png)

Input the following to configure your project in CLI:
- What type of project do you want to create?
- What is your project named?
- What is the framework you want to use?
- What will be the name of your new smart contract?
- What type of contract do you want to start from?
- What extension do you want to add to your contract?

Thirdweb gives you the flexibility to choose the suitable options. Example, You can create a new project using Hardhat or Forge and add optional extensions.

### 3. **Deploying a smart contract:**

```bash
npx thirdweb deploy
```


Executing this command will trigger the following actions:
- Compiling all the contracts in the current directory
- Providing the option to select which contract(s) you wish to deploy
- Uploading your contract source code (ABI) to IPFS

![deploy](/tutorial-assets/thirdweb-11.png)

### 4. **Network selection**
After running the above command, visit the provided dashboard URL and select Cyber or Cyber Testnet from the network dropdown.

![network](/tutorial-assets/thirdweb-3.png)

The dashboard will also require you to fill out the parameters. For example, If you are deploying an ERC20 based smart contract, you will have to enter the _name(Contract Name) and _symbol(Token symbol or ticket).

![dashboard](/tutorial-assets/thirdweb-2.png)

For additional information on Deploy, please reference thirdweb’s documentation.

For this particular example, I am naming the token to be ‘ThirdWeb Testing Token’ and the ticker symbol will be ‘TWTT’.

![dashboard-config](/tutorial-assets/thirdweb-1.png)


Once the parameters are filled out, you will need to click on “Deploy Now” which will trigger the transaction and you will see the metamask pop-up to sign the transaction. The deploy process takes place in two steps. The first step is signing the transaction to deploy the smart contract, while the second step is a gasless transaction to add the smart contract in Thirdweb dashboard for further uses.

![signature-request](/tutorial-assets/thirdweb-4.png)

Once the signature is verified, you'll be redirected to the dashboard.

![deployed-token](/tutorial-assets/thirdweb-5.png)

You can verify the contract deployment by heading over to the explorer and searching for the deployed contract.

![verify](/tutorial-assets/thirdweb-6.png)


### 5. **Minting tokens**

Once the contract is deployed, you will need to navigate to “Extensions” to mint the tokens. Here you will have to simply click on the “+Mint” button and then decide the total supply of tokens and the number of tokens owned by the creator.

![minting](/tutorial-assets/thirdweb-7.png)

Once the minting is successful you will see a prompt on the bottom notifying that "Tokens minted successfully".

![minting-success](/tutorial-assets/thirdweb-10.png)

### 6. **Publishing a smart contract**
You can publish and share your contract onto thirdweb's registry.

```bash
npx thirdweb publish
```

![publish](/tutorial-assets/thirdweb-8.png)


You will get a prompt to visit the link to publish your contract, which will ask you for some information about the contract. This includes: Contract Name, description, Image and a Readme.


![publish-via-dashboard](/tutorial-assets/thirdweb-9.png)

You can finish the publishing process by adding contract details.


## Conclusion

You've successfully deployed an ERC20 token on the Cyber mainnet using thirdweb tools. Continue to explore and leverage thirdweb's features to enhance your projects with Cyber and share your achievements within the developer community. If you face any issues, feel free to reach out to our engineers for [Support](/support.md).

