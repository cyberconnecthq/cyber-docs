# Wagmi

Wagmi Core is a VanillaJS library for Ethereum. You can use Wagmi and Viem to connect to Cyber Testnet and Mainnet.

## Install

```bash
npm install @wagmi/core @wagmi/connectors viem@2.x
```

## Setup

**Create chain using viem**

```typescript
import { type Chain } from "viem";

export const cyberTestnet = {
  id: 111557560,
  name: "Cyber Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://cyber-testnet.alt.technology/"] },
  },
  blockExplorers: {
    default: {
      name: "Cyber Testnet Explorer",
      url: "https://cyber-testnet-explorer.alt.technology/",
    },
  },
} as const satisfies Chain;
```

**Create config**

```typescript
import { http, createConfig } from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";

export const config = createConfig({
  chains: [cyberTestnet],
  transports: {
    [cyberTestnet.id]: http(),
  },
});
```

## Read data from Cyber

```typescript
import { getBlockNumber } from "@wagmi/core";
import { config } from "./config";

const blockNumber = await getBlockNumber(config);
```
