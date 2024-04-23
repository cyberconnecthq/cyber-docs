# Verify Contract

## Forge

### mainnet

```bash
forge verify-contract --verifier blockscout --verifier-url https://cyberscan.co/api --chain-id 7560 0x52B04768006c54D93885597e6B3189fD176A52F8 src/Counter.sol:Counter
```

### testent

```bash
forge verify-contract --verifier blockscout --verifier-url https://testnet.cyberscan.co/api --chain-id 111557560 0x52B04768006c54D93885597e6B3189fD176A52F8 src/Counter.sol:Counter
```

## Hardhat

### Install dependences

```shell
yarn
```

### Config network

```
networks: {
    cyber_testnet: {
      url: 'https://cyber-testnet.alt.technology/',
      chainId: 111557560,
      accounts: ["YOUR_SK"],
    },
    cyber: {
      url: 'https://cyber.alt.technology/',
      chainId: 7560,
      accounts: ["YOUR_SK"],
    }
},
```

## Config etherscan 

```
etherscan: {
    // dummy key "abc"
    apiKey: {
      cyber_testnet: "abc",
      cyber: "abc"
    },
    customChains: [
      {
        network: "cyber_testnet",
        chainId: 111557560,
        urls: {
          apiURL: "https://testnet.cyberscan.co/api",
          browserURL: "https://testnet.cyberscan.co"
        }
      },
      {
        network: "cyber",
        chainId: 7560,
        urls: {
          apiURL: "https://cyberscan.co/api",
          browserURL: "https://cyberscan.co"
        }
      },
    ]
}
```

### Verify Counter contract

#### mainnet

```shell
yarn hardhat verify --contract contracts/Counter.sol:Counter 0x91f4e4E26024b084a277c95a873Bd3c15c3206c3 --network cyber
```

#### testent

```shell
yarn hardhat verify --contract contracts/Counter.sol:Counter 0x91f4e4E26024b084a277c95a873Bd3c15c3206c3 --network cyber_testnet
```