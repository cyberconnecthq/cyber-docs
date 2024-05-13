# Foundry

Deploying Smart Contracts using Forge in Foundry

## What is Foundry?

Foundry is a toolset for Ethereum development written in Rust that assists developers in managing dependencies, compiling projects, running tests, deploying contracts, and interacting with blockchains through the command line interface. Additionally, Foundry can directly communicate with Cyber's Ethereum API, enabling the use of Foundry to deploy smart contracts into the Cyber network.

## Getting Started with Foundry

1.  Install Foundry

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

2.  Create a project

    ```bash
    forge init hello_foundry
    ```

3.  Foundry will create a new project directory with the name you specified. By default it will create a new project with a sample contract `Counter` and a sample test file.
    ```bash
    cd hello_foundry
    ```

4.  We can build the project with `forge build`

    ```bash
    $ forge build
    ```

5.  And run the tests with `forge test`
    ```bash
    forge test
    ```

## Deploying your Smart Contract

Deploying a contract with Forge is a simple process that can be done with a single command. However, it requires an RPC endpoint, a private key that has funds, and any arguments for the constructor of the contract.

To deploy the Counter.sol contract, use the command that corresponds to the Cyber chain's RPC URL while running the forge create command:

Testnet
```bash
    forge create --rpc-url "https://cyber-testnet.alt.technology/" --private-key YOUR_PRIVATE_KEY  src/Counter.sol:Counter
```

Mainnet
```bash
    forge create --rpc-url "https://cyber.alt.technology/" --private-key YOUR_PRIVATE_KEY src/Counter.sol:Counter
```