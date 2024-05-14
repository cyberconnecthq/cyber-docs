# Verify Contract

## Forge

### mainnet

```bash
forge verify-contract --verifier blockscout --verifier-url https://api.socialscan.io/cyber/v1/explorer/command_api/contract --chain-id 7560 <CONTRACT_ADDRESS> src/Counter.sol:Counter
```

### testent

```bash
forge verify-contract --verifier blockscout --verifier-url https://api.socialscan.io/cyber-testnet/v1/explorer/command_api/contract --chain-id 111557560 <CONTRACT_ADDRESS> src/Counter.sol:Counter
```

[More Information](https://thehemera.gitbook.io/explorer-api/verify-smart-contract/verify-smart-contract/verify-through-foundry)

## Hardhat

### Config network

```
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
```

## Config etherscan 

```
etherscan: {
    customChains: [
      {
        network: "CyberTestnet",
        chainId: 111557560,
        urls: {
          apiURL: "https://api.socialscan.io/cyber-testnet/v1/explorer/command_api/contract",
          browserURL: "https://cyber-testnet.socialscan.io",
        },
      },
      {
        network: "Cyber",
        chainId: 7560,
        urls: {
          apiURL: "https://api.socialscan.io/cyber/v1/explorer/command_api/contract",
          browserURL: "https://cyber.socialscan.io",
        },
      },
    ],
    apiKey: {
      CyberTestnet: "abc",
      Cyber: "abc",
    },
  }
```

### Verify Counter contract

#### mainnet

```shell
npx hardhat verify <CONTRACT_ADDRESS> --network Cyber
```

#### testent

```shell
npx hardhat verify <CONTRACT_ADDRESS> --network CyberTestnet
```

[More Information](https://thehemera.gitbook.io/explorer-api/verify-smart-contract/verify-smart-contract/verify-through-hardhat)