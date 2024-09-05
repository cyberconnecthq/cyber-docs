## Particle Network Wallet-as-a-Service

Particle Network's Wallet-as-a-Service integrates decentralized wallet functionality with social logins into web applications. With minimal setup, developers can leverage Particle's powerful SDKs to enable 2-click onboarding into smart accounts through social logins and leverage Account Abstraction features.

## Particle Connect Quickstart Guide

**Particle Connect** combines Social and Web3 logins with built-in Account Abstraction support, all within a single SDK. This approach allows you to simplify user onboarding while directly incorporating AA features into your dApp.

Integrate **Particle Connect** with **Account Abstraction** into your Next.js application in minutes by following these steps:

### Installation

Scaffold a Particle Connect boiler plate using the `create-connectkit` CLI:

```bash
npm init @particle-network/connectkit@latest
# or
pnpm create @particle-network/connectkit@latest
# or
yarn create @particle-network/connectkit

```

The CLI will guide you through a setup process; it will prompt you to enter a project name, choose your preferred framework (Next.js or React), and select additional options.

```bash
🤩 Welcome to Particle Network!

✔ What is the name of your project? … connectkit-aa-usage

✔ What is the template of your project? › create-next-app
✔ Which chains does your app support?​ › EVM
✔ Which ERC-4337 Contract does your app support?​ › CYBERCONNECT-1.0.0
✔ Does it support an embedded wallet?​ … yes

```

The CLI will inizialize a fully configured project.

### Configuration

Configure Particle Connect in your application using the `src/connectkit.tsx` component. Obtain your `projectId`, `clientKey`, and `appId` from the [Particle Dashboard](https://dashboard.particle.network/), and add them to the `.env.sample` file coming with the boilerplate project.

The `ConnectKitProvider` component manages the setup for Particle Connect. A recommended approach is to create a separate `connectkit.tsx` file in the `src` directory, where you can configure and export a component to wrap your application with, the project scaffolded by the CLI is already set up this way.

After setting it up, use the exported component to wrap your main `App` component, ensuring that authentication is accessible across your entire application.

Below is an example of configuring `ConnectKitProvider` and exporting the `ParticleConnectkit` component.

```jsx
"use client";

import React from "react";

import { ConnectKitProvider, createConfig } from "@particle-network/connectkit";
import { authWalletConnectors } from "@particle-network/connectkit/auth";
import type { Chain } from "@particle-network/connectkit/chains";
// embedded wallet start
import { EntryPosition, wallet } from "@particle-network/connectkit/wallet";
// embedded wallet end
// aa start
import { aa } from "@particle-network/connectkit/aa";
// aa end
// evm start
import { cyberTestnet, cyber } from "@particle-network/connectkit/chains";
import { evmWalletConnectors } from "@particle-network/connectkit/evm";
// evm end

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY as string;
const appId = process.env.NEXT_PUBLIC_APP_ID as string;
const walletConnectProjectId = process.env
  .NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string;

if (!projectId || !clientKey || !appId) {
  throw new Error("Please configure the Particle project in .env first!");
}

const supportChains: Chain[] = [];
// evm start
supportChains.push(cyberTestnet, cyber);
// evm end

const config = createConfig({
  projectId,
  clientKey,
  appId,
  appearance: {
    recommendedWallets: [
      { walletId: "metaMask", label: "Recommended" },
      { walletId: "coinbaseWallet", label: "Popular" },
    ],
    language: "en-US",
  },
  walletConnectors: [
    authWalletConnectors(),
    // evm start
    evmWalletConnectors({
      // TODO: replace it with your app metadata.
      metadata: {
        name: "Connectkit Demo",
        icon:
          typeof window !== "undefined"
            ? `${window.location.origin}/favicon.ico`
            : "",
        description: "Particle Connectkit Next.js Scaffold.",
        url: typeof window !== "undefined" ? window.location.origin : "",
      },
      walletConnectProjectId: walletConnectProjectId,
    }),
    // evm end
  ],
  plugins: [
    // embedded wallet start
    wallet({
      visible: true,
      entryPosition: EntryPosition.BR,
    }),
    // embedded wallet end

    // aa config start
    aa({
      name: "CYBERCONNECT",
      version: "1.0.0",
    }),
    // aa config end
  ],
  chains: supportChains as unknown as readonly [Chain, ...Chain[]],
});

// Wrap your application with this component.
export const ParticleConnectkit = ({ children }: React.PropsWithChildren) => {
  return <ConnectKitProvider config={config}>{children}</ConnectKitProvider>;
};

```

After configuring the `ParticleConnectkit` component, integrate it into your `layout.tsx` or `index.tsx` file:

```tsx
import { ParticleConnectkit } from '@/connectkit'; // Export of a configured ConnectKitProvider instance
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Particle Connectkit App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticleConnectkit>{children}</ParticleConnectkit>
      </body>
    </html>
  );
}


```

After configuring the SDK, you can integrate social logins and Account Abstraction (AA) into your application. Particle Connect offers a variety of hooks to streamline the implementation of these features.

### Social Logins

With **Particle Connect** now configured, you can proceed to enable social logins within your application through the aforementioned `ConnectButton` component.

Additionally, for driving application-level interaction (after initial onboarding), `@particle-network/connectkit` provides a variety of hooks. You can explore all available hooks in the [Particle Connect SDK documentation](/api-reference/connect/desktop/web#key-react-hooks-for-particle-connect).

The boilerplate application includes a basic example featuring only a **Connect** button (`ConnectButton`).

After logging in (connecting), users can access the embedded wallet modal provided by Particle Connect via the button in the bottom right corner, unless customized through the `wallet` configuration within `ConnectKitProvider`.

### Account Abstraction Features

You can configure the smart account using the aa plugin located in `src/components/ConnectKit.tsx`. Below is an example configuration:

```tsx
plugins: [  
    // Smart Account (AA) configuration  
    aa({
        name: "CYBERCONNECT",
        version: "1.0.0",  
    }),
],
```

#### Sending AA Transactions

You can send gasless transactions using the native `smartAccount` instance provided by **Particle Connect**.

> This does not require the Particle AA ADK.

Here’s an example:

```tsx
import { useSmartAccount } from "@particle-network/connectkit";
const smartAccount = useSmartAccount();

/**
 * Sends a transaction using the native AA Particle provider with gasless mode.
 */
const executeTxNative = async () => {
  setIsSending(true);
  try {
    const tx = {
      to: recipientAddress,
      value: parseEther("0.01").toString(),
      data: "0x",
    };

    // Fetch fee quotes and use verifyingPaymasterGasless for a gasless transaction
    const feeQuotesResult = await smartAccount?.getFeeQuotes(tx);
    const { userOp, userOpHash } =
      feeQuotesResult?.verifyingPaymasterGasless || {};

    if (userOp && userOpHash) {
      const txHash =
        (await smartAccount?.sendUserOperation({
          userOp,
          userOpHash,
        })) || null;

      setTransactionHash(txHash);
      console.log("Transaction sent:", txHash);
    } else {
      console.error("User operation is undefined");
    }
  } catch (error) {
    console.error("Failed to send transaction:", error);
  } finally {
    setIsSending(false);
  }
};

```

Or you can send transactions using an **EIP-1193** provider. Here is an example using **ethers.js**:

```tsx
// Initialize custom provider with gasless transaction mode
const customProvider = smartAccount
  ? new ethers.BrowserProvider(
      new AAWrapProvider(
        smartAccount,
        SendTransactionMode.Gasless
      ) as Eip1193Provider,
      "any"
    )
  : null;

/**
 * Sends a transaction using the ethers.js library.
 * This transaction is gasless since the customProvider is initialized as gasless.
 */
const executeTxEthers = async () => {
  if (!customProvider) return;

  const signer = await customProvider.getSigner();
  setIsSending(true);
  try {
    const tx = {
      to: recipientAddress,
      value: parseEther("0.01").toString(),
    };

    const txResponse = await signer.sendTransaction(tx);
    const txReceipt = await txResponse.wait();

    setTransactionHash(txReceipt?.hash || null);
  } catch (error) {
    console.error("Failed to send transaction using ethers.js:", error);
  } finally {
    setIsSending(false);
  }
};
```


> Find a complete implementation example on the [Cyber-Particle-AA Demo](https://github.com/Particle-Network/cyber-aa-connect).

## Learn More

Explore Particle Network's [documentation](https://docs.particle.network/) to learn more about the Particle SDKs.
