# Thirdweb

[Thirdweb](https://thirdweb.com/cyber) is an all-encompassing Web3 development platform that provides a comprehensive suite of tools essential for smart contract and DApp development. With thirdweb, developers have access to a variety of resources tailored to support every stage of the DApp development process.

For a detailed instructions on thirdweb, using the CLI & SDK for creating and deploying applications, refer to the comprehensive thirdweb [documentation](https://portal.thirdweb.com/).

## Thirdweb CLI

### 1. Create a project

To create a new smart contract using the thirdweb CLI, run the following command:

````bash
npx thirdweb create
````

### 2. Configure your project

Input the following to confirgure your project in CLI:

- What type of project do you want to create?
- What is your project named?
- What is the framework do you want to use?
- What will be the name of your new smart contract?
- What type of contract do you want to start from?
- What extension do you want to add to your contract?

Thirdweb gives you the flexibility to chose the suitable options. Example, You can create a new project using [Hardhat](/developer-tools/deploy/hardhat) or [Forge](/developer-tools/deploy/foundry) and add optional [extensions](https://portal.thirdweb.com/typescript/v5/extensions).

### 3. Deploying a smart contract:

````bash
npx thirdweb deploy
````

Executing this command will trigger the following actions:

- Compiling all the contracts in the current directory
- Providing the option to select which contract(s) you wish to deploy
- Uploading your contract source code (ABI) to IPFS


### 4. Network selection 

After running the above command, visit the provided dashboard URL and select Cyber or Cyber Testnet from the network dropdown.

- The dashboard will also require you to fill out the parameters, For example, If you are deploying an ERC20 based smart contract, you will have to enter the `_name`(Contract Name) and `_symbol`(Token symbol or ticket).

For additional information on Deploy, please reference [thirdweb’s documentation.](https://portal.thirdweb.com/contracts/deploy/overview)

### 5. Publishing a smart contract

````bash
npx thirdweb publish
````

You can [publish](https://portal.thirdweb.com/contracts/publish/overview) and share your contract onto thirdweb's registry.


## Thirdweb SDK

Thirdweb offers SDKs for a range of programming languages, such as [TypeScript](https://portal.thirdweb.com/typescript/v5), [React](https://portal.thirdweb.com/typescript/v5/react), [React Native](https://portal.thirdweb.com/react-native/v0), [Unity](https://portal.thirdweb.com/unity), [.NET](https://portal.thirdweb.com/dotnet) and [Solidity](https://portal.thirdweb.com/contracts/build/overview).

### 1. Create a new application

Run the following command to start creating a new application:

````bash
npx thirdweb create --app
````

Input your preferences for the command line prompts:
- Give your project a name
- Choose your network
- Choose your preferred framework: Next.js, CRA, Vite, React Native, Node.js, or Express
- Choose your preferred language: JavaScript or TypeScript


### 2. Initialize SDK on Cyber Network
Wrap your application in the ThirdwebProvider component and change the activeChain to Cyber Network.

````typescript
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Cyber } from "@thirdweb-dev/chains";


const App = () => {
  return (
    <ThirdwebProvider activeChain={ Cyber }>
      <YourApp />
    </ThirdwebProvider>
  );
};
````

### 3. Connect to your contract:

To connect to your contract, use the SDK’s `getContract` method. You will need to pass a client ID/secret key to use thirdweb's infrastructure services. If you don't have any API keys yet you can create one for free from the [dashboard settings.](https://thirdweb.com/dashboard)

````typescript
// create the client with your clientId, or secretKey if in a server environment
export const client = createThirdwebClient({ 
  clientId: "YOUR_CLIENT_ID" 
});

// connect to your contract
export const contract = getContract({ 
  client, 
  chain: defineChain(7560), 
  address: "0x..."
});
````
### 4. Calling contract functions

You can use the hook, `useReadContract` to read from a contract:

````typescript
import { useReadContract } from "thirdweb/react";
import { getOwnedNFTs } form "thirdweb/extensions/erc721"
const { data, isLoading } = useReadContract(getOwnedNFTs, { contract, owner: address });
````

- Example: below is a code snippet that uses `useOwnedNFTs` hook to get a list of NFTs owned by a single wallet address:

````typescript
import { useOwnedNFTs } from '@thirdweb-dev/react';
const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(contract, "0x...", { start: 0, count: 100 });

````

### 5. Connect Wallets

You can use the hook, `useConnectedWallets`, to return all connected wallets.

````typescript
import { useConnectedWallets } from "thirdweb/react";

const wallets = useConnectedWallets();
````

### 6. Send Transaction
You can use `useSendTransaction`, hook to send a transaction
````typescript
import { useSendTransaction } from "thirdweb/react-native";
const { mutate: sendTx, data: transactionResult } = useSendTransaction();

// later
sendTx(tx);
````

### 6. Deploy your app

Use the following command to deploy your static web application on IPFS:

````bash
npx thirdweb deploy --app
````

If you face any issues, feel free to reach out to our engineers for [Support](/support.md) or to thirdweb support at [support.thirdweb.com](support.thirdweb.com)
