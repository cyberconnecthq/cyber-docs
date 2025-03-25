import { defineConfig } from "vocs";

export default defineConfig({
  title: "Cyber Docs",
  titleTemplate: "%s – Cyber Docs",
  theme: {
    accentColor: { light: "#0c9b00", dark: "#07DC10" },
  },
  banner:
    "**Cyber Mainnnet** is live! Learn [how to build on Cyber](/build-on-cyber/network-info).",
  sidebar: {
    "/": [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          { text: "Cyber L2", link: "/" },
          {
            text: "What can be built on Cyber L2",
            link: "/what-can-be-built-on-cyber-l2",
          },
          {
            text: "Cyber L2 & Optimism Superchain",
            link: "/cyber-l2-and-optimism-superchain",
          },
        ],
      },
      {
        text: "Blockchain-based social networks",
        collapsed: false,
        items: [
          {
            text: "Overview",
            link: "/blockchain-based-social-networks/overview",
          },
          {
            text: "Learning from building CyberConnect",
            link: "/blockchain-based-social-networks/learning-from-building-cyberconnect",
          },
        ],
      },
      {
        text: "Cyber Architecture",
        collapsed: false,
        items: [
          { text: "Overview", link: "/architecture/overview" },
          {
            text: "OP Stack",
            link: "/architecture/op-stack",
          },
          {
            text: "EigenDA",
            link: "/architecture/eigen-da",
          },
          {
            text: "Native Account Abstraction",
            link: "/architecture/native-account-abstraction",
          },
          {
            text: "Native Yield",
            link: "/architecture/native-yield",
          },
          {
            text: "Decentralized Sequencer & Verifier",
            link: "/architecture/decentralized-sequence-verifier",
          },
          {
            text: "CyberDB",
            link: "/architecture/cyber-db",
          },
        ],
      },
      {
        text: "CYBER Token",
        collapsed: false,
        items: [
          { text: "Overview", link: "/cyber-token/overview" },
          { text: "Token Address", link: "/cyber-token/token-address" },
          {
            text: "Staking",
            link: "/cyber-token/staking",
          },
          {
            text: "CYBER Token Distribution",
            link: "/cyber-token/distribution",
          },
        ],
      },
      {
        text: "CyberID",
        collapsed: false,
        items: [
          { text: "Overview", link: "/cyber-id/overview" },
          { text: "Features", link: "/cyber-id/features" },
        ],
      },
      {
        text: "Governance",
        collapsed: false,
        items: [
          {
            text: "Working Constitution of CyberDAO",
            link: "/governance/constitution",
          },
          {
            text: "Processes & Governance Procedures",
            link: "/governance/processes",
          },
          {
            text: "Delegates",
            collapsed: false,
            items: [
              {
                text: "Delegate Overview",
                link: "/governance/delegate-overview",
              },
              {
                text: "Delegate Expectations",
                link: "/governance/delegate-expectation",
              },
              {
                text: "Delegate Code of Conduct",
                link: "/governance/code-of-conduct",
              },
            ],
          },
          {
            text: "Grants",
            link: "/governance/grants",
          },
          {
            text: "The Cyber Foundation",
            link: "/governance/cyber-foundation",
          },
        ],
      },
      {
        text: "Roadmap",
        collapsed: false,
        items: [
          { text: "Overview", link: "/roadmap/overview" },
          {
            text: "Stage 1 (Q2 2024)",
            link: "/roadmap/stage1",
          },
          {
            text: "Stage 2 (Q3 2024)",
            link: "/roadmap/stage2",
          },
          {
            text: "Stage 3 (Q3/Q4 2024)",
            link: "/roadmap/stage3",
          },
          {
            text: "Stage 4 (Q4 2024)",
            link: "/roadmap/stage4",
          },
          {
            text: "Stage 5 (Q1 2025)",
            link: "/roadmap/stage5",
          },
        ],
      },
    ],
    "/build-on-cyber": [
      {
        text: "Getting started",
        collapsed: false,
        items: [
          {
            text: "Network information",
            link: "/build-on-cyber/network-info",
          },
          {
            text: "How-to Guides",
            collapsed: false,
            items: [
              {
                text: "Add Cyber to Metamask",
                link: "/build-on-cyber/connecting-wallet",
              },
              {
                text: "Bridge assets to Cyber Testnet",
                link: "/build-on-cyber/bridging-assets",
              },
              {
                text: "Deploy your first contract",
                link: "/build-on-cyber/contract-deployment",
              },
            ],
          },
        ],
      },

      {
        text: "Tutorials",
        collapsed: false,
        items: [
          {
            text: "Deploying a token using Thirdweb",
            link: "/build-on-cyber/thirdweb-cli",
          },
          {
            text: "Building a dApp using Thirdweb SDK",
            link: "/build-on-cyber/thirdweb-sdk",
          },
          {
            text: "Build your own crowdfunding dApp",
            link: "/build-on-cyber/crowdfunding",
          },
        ],
      },

      {
        text: "Contract Addresses",
        collapsed: false,
        items: [
          { text: "Testnet", link: "/build-on-cyber/addresses-testnet" },
          { text: "Mainnet", link: "/build-on-cyber/addresses-mainnet" },
        ],
      },
      {
        text: "Resources and Tools",
        collapsed: false,
        items: [
          { text: "Uniswap", link: "/build-on-cyber/uniswap" },
          { text: "Bridges", link: "/build-on-cyber/bridges" },
          { text: "Faucets", link: "/build-on-cyber/faucets" },
          { text: "Node Providers", link: "/build-on-cyber/node-providers" },
          { text: "Block Explorers", link: "/build-on-cyber/block-explorers" },
          {
            text: "Development and Client",
            collapsed: false,
            items: [
              { text: "Foundry", link: "/build-on-cyber/foundry" },
              { text: "Hardhat", link: "/build-on-cyber/hardhat" },
              { text: "Remix", link: "/build-on-cyber/remix" },
              { text: "Thirdweb", link: "/build-on-cyber/thirdweb" },
              {
                text: "Verify Contract",
                link: "/build-on-cyber/verify-contract",
              },
              { text: "Wagmi", link: "/build-on-cyber/wagmi" },
              { text: "Ethers.js", link: "/build-on-cyber/ethersjs" },
              { text: "Web3.js", link: "/build-on-cyber/web3js" },
              { text: "Reservoir", link: "/build-on-cyber/reservoir" },
            ],
          },
          {
            text: "Account Abstraction",
            collapsed: true,
            items: [
              {
                text: "ZeroDev",
                link: "/build-on-cyber/account-abstraction/zerodev",
              },
              {
                text: "thirdweb",
                link: "/build-on-cyber/account-abstraction/thirdweb",
              },
              {
                text: "Pimlico",
                link: "/build-on-cyber/account-abstraction/pimlico",
              },
              {
                text: "Alchemy Account Kit",
                link: "/build-on-cyber/account-abstraction/alchemy-account-kit",
              },
              {
                text: "Particle",
                link: "/build-on-cyber/account-abstraction/particle",
              },
              {
                text: "Turnkey",
                link: "/build-on-cyber/account-abstraction/turnkey",
              },
              {
                text: "Privy",
                link: "/build-on-cyber/account-abstraction/privy",
              },
            ],
          },
        ],
      },

      {
        text: "Support",
        link: "/build-on-cyber/support",
      },
      {
        text: "FAQ",
        link: "/build-on-cyber/faq",
      },
    ],

    "/cyber-wallet": [
      {
        text: "CyberWallet",
        collapsed: false,
        items: [
          { text: "Overview", link: "/cyber-wallet/overview" },
          { text: "Account Abstract", link: "/cyber-wallet/erc4337" },
          {
            text: "Authentication",
            link: "/cyber-wallet/auth",
          },
          {
            text: "Gas Fee Model",
            link: "/cyber-wallet/gas",
          },
          {
            text: "Send UserOperation",
            link: "/cyber-wallet/send-user-op",
          },
        ],
      },
    ],
    "/sdk": [
      {
        text: "SDK",
        collapsed: false,
        items: [
          {
            text: "CyberAccount",
            link: "/sdk/cyber-account",
          },
          {
            text: "CyberAccount Plugins",
            link: "/sdk/cyber-account-plugins",
          },
          {
            text: "CyberApps",
            collapsed: false,
            items: [
              { text: "Overview", link: "/sdk/cyber-apps/overview" },
              {
                text: "Getting Started",
                link: "/sdk/cyber-apps/getting-started",
              },
              { text: "API Reference", link: "/sdk/cyber-apps/api-reference" },
            ],
          },
        ],
      },
      {
        text: "API Reference",
        collapsed: false,
        items: [
          { text: "Overview", link: "/sdk/api-reference/overview" },
          { text: "Authentication", link: "/sdk/api-reference/auth" },
          {
            text: "Bundler Endpoints",
            collapsed: false,
            items: [
              {
                text: "eth_sendUserOperation",
                link: "/sdk/api-reference/bundler/eth_sendUserOperation",
              },
              {
                text: "eth_estimateUserOperationGas",
                link: "/sdk/api-reference/bundler/eth_estimateUserOperationGas",
              },
              {
                text: "eth_getUserOperationByHash",
                link: "/sdk/api-reference/bundler/eth_getUserOperationByHash",
              },
              {
                text: "eth_getUserOperationReceipt",
                link: "/sdk/api-reference/bundler/eth_getUserOperationReceipt",
              },
              {
                text: "eth_chainId",
                link: "/sdk/api-reference/bundler/eth_chainId",
              },
              {
                text: "eth_supportedEntryPoints",
                link: "/sdk/api-reference/bundler/eth_supportedEntryPoints",
              },
            ],
          },
          {
            text: "Paymaster Endpoints",
            collapsed: false,
            items: [
              {
                text: "cc_getUserCredit",
                link: "/sdk/api-reference/paymaster/cc_getUserCredit",
              },
              {
                text: "cc_estimateUserOperation",
                link: "/sdk/api-reference/paymaster/cc_estimateUserOperation",
              },
              {
                text: "cc_sponsorUserOperation",
                link: "/sdk/api-reference/paymaster/cc_sponsorUserOperation",
              },
              {
                text: "cc_listPendingUserOperations",
                link: "/sdk/api-reference/paymaster/cc_listPendingUserOperations",
              },
              {
                text: "cc_rejectUserOperation",
                link: "/sdk/api-reference/paymaster/cc_rejectUserOperation",
              },
            ],
          },
        ],
      },
    ],
    // "/cyber-id": [
    //   {
    //     text: "CyberID",
    //     collapsed: false,
    //     items: [
    //       { text: "Overview", link: "/cyber-id/overview" },
    //       { text: "Query Owner", link: "/cyber-id/query-owner" },
    //       { text: "Query Holdings", link: "/cyber-id/query-holdings" },
    //     ],
    //   },
    // ],
  },
  topNav: [
    { text: "Overview", link: "/", match: "/index" },
    { text: "Build on Cyber", link: "/build-on-cyber/network-info" },
    { text: "SDKs", link: "/sdk/cyber-account" },
    { text: "CyberWallet", link: "/cyber-wallet/overview" },
    // { text: "CyberID", link: "/cyber-id/overview" },
  ],
  socials: [
    {
      icon: "github",
      link: "https://github.com/cyberconnecthq",
    },
    {
      icon: "x",
      link: "https://twitter.com/cyberconnecthq",
    },
    // {
    //   icon: "discord",
    //   link: "https://discord.gg/cyberconnecthq",
    // },
  ],
  logoUrl: { dark: "/assets/logo.svg", light: "/assets/logo-black.svg" },
});
