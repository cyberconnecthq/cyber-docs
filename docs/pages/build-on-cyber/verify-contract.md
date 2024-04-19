# Verify Contract

## Forge

### mainnet

```bash
forge verify-contract --verifier blockscout --verifier-url https://cyber-explorer.alt.technology/api --chain-id 7560 0x52B04768006c54D93885597e6B3189fD176A52F8 src/Counter.sol:Counter
```

### testent

```bash
forge verify-contract --verifier blockscout --verifier-url https://cyber-testnet-explorer.alt.technology/api --chain-id 111557560 0x52B04768006c54D93885597e6B3189fD176A52F8 src/Counter.sol:Counter
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
      accounts: ["0xfed4030d3379f87b009e9011b83c9e89a9d16411b039e7ca718453c2bd0d3aac"],
    }
},
```

## Config etherscan 

```
etherscan: {
    // dummy key "abc"
    apiKey: {
      cyber_testnet: "abc",
    },
    customChains: [
      {
        network: "cyber_testnet",
        chainId: 111557560,
        urls: {
          apiURL: "https://cyber-testnet-explorer.alt.technology/api",
          browserURL: "https://cyber-testnet-explorer.alt.technology"
        }
      },
    ]
}
```

### Verify Counter contract

```shell
yarn hardhat verify --contract contracts/Counter.sol:Counter 0x91f4e4E26024b084a277c95a873Bd3c15c3206c3 --network cyber_testnet
```