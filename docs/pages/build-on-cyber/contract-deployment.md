# Deploy your first Smart Contract on Cyber L2
In this tutorial we will be learning how to deploy a simple smart contracts on Cyber L2 using **Forge in Foundry**. 

## Step 1: Pre-requisites

Before deploying your smart contract, ensure you have completed the following:

1. **Add Cyber Testnet to MetaMask**  
   Follow the [guide for adding the Cyber Testnet network](/build-on-cyber/connecting-wallet) to your MetaMask wallet.

2. **Bridging Assets to Cyber Testnet**  
   Use the [Bridging assets to Cyber Testnet guide](/build-on-cyber/bridging-assets) to transfer assets from other networks to Cyber Testnet so you have funds available for deployment.

## Step 2: Install Foundry

  - Linux or MacOS
    ```bash
    curl -L https://foundry.paradigm.xyz | bash
    foundryup
    ```

  - Windows
    ```bash
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs/ | sh
    cargo install --git https://github.com/foundry-rs/foundry foundry-cli anvil --bins --locked
    ```

## Step 3: Create a project

  ```bash
  forge init hello_foundry
  ```

-   Foundry will create a new project directory with the name you specified. By default it will create a new project with a sample contract `Counter` and a sample test file.
  ```bash
  cd hello_foundry
  ```

1.  We can build the project with `forge build`

```bash
$ forge build
```

2.  And run the tests with `forge test`
```bash
forge test
```

## Step 4: Deploying your Smart Contract

Deploying a contract with Forge is a simple process that can be done with a single command. However, it requires an RPC endpoint, a private key that has funds, and any arguments for the constructor of the contract.

To deploy the Counter.sol contract, use the command that corresponds to the Cyber chain's RPC URL while running the forge create command:

```bash
    forge create --rpc-url "RPC URL" //Insert your RPC URL here
    --private-key YOUR_PRIVATE_KEY \
    src/Counter.sol:Counter
```

## Step 5: Verify Your Smart Contract
After deployment, you can verify your smart contract on the Cyber Testnet Explorer by visiting [Cyber Testnet Explorer](https://testnet.cyberscan.co/). 
Search for your contract using its address and confirm that it has been successfully deployed.


#### If you face any issues, feel free to reach out to our engineers on [Discord](/build-on-cyber/support.md).

