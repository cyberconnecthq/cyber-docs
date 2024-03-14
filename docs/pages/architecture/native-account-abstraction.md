# Native Account Abstraction

The upgrade from externally owned accounts (EOAs) to smart contract accounts will unlock countless UX benefits, such as seedless experience, flexible gas fee delegation, batch transactions, and programmable accounts.

ERC-4337 offers a standard for smart contract accounts, but its out-of-protocol approach has drawbacks. It creates a separate transaction flow, making it challenging for existing users to benefit or upgrade without moving assets. Also, there's a significant gas overhead of ~42k for UserOperations versus ~21k for basic transactions. Finally, ERC-4337 relies on a significantly smaller set of participating nodes and non-standard RPC methods.

EIP-2938 defines a very mature alternative approach to Account Abstraction. However, it does not translate well to the architecture of ERC-4337, which is being used in production without any protocol changes. Cyber L2 is actively implementing RIP-7560 to bring smart contract accounts to first-class citizens at the protocol level with general backward compatibility to ERC-4337 ecosystems.
