import { defineConfig } from "vocs";

export default defineConfig({
  title: "Cyber Docs",
  titleTemplate: "%s – Cyber Docs",
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
        text: "Cyber Token",
        collapsed: false,
        items: [
          { text: "Overview", link: "/cyber-token/overview" },
          { text: "Token Address", link: "/cyber-token/token-address" },
          {
            text: "Governance",
            link: "/cyber-token/governance",
          },
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
        text: "Roadmap",
        collapsed: false,
        items: [
          { text: "Overview", link: "/roadmap/overview" },
          {
            text: "Stage 1 (Q2 2024): Testnet with Governance Framework",
            link: "/roadmap/stage1",
          },
          {
            text: "Stage 2 (Q3 2024): Mainnet with EigenDA and Decentralized Verifier",
            link: "/roadmap/stage2",
          },
          {
            text: "Stage 3 (Q3/Q4 2024): Launch Decentralized/Shared Sequencer",
            link: "/roadmap/stage3",
          },
          {
            text: "Stage 4 (Q4 2024): Launch CyberDB",
            link: "/roadmap/stage4",
          },
          {
            text: "Stage 5 (Q1 2025): Upgrade to Native AA",
            link: "/roadmap/stage5",
          },
        ],
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
          { text: "Overview", link: "/api-reference/overview" },
          { text: "Authentication", link: "/api-reference/auth" },
          {
            text: "Bundler Endpoints",
            collapsed: false,
            items: [
              {
                text: "eth_sendUserOperation",
                link: "/api-reference/bundler/eth_sendUserOperation",
              },
              {
                text: "eth_estimateUserOperationGas",
                link: "/api-reference/bundler/eth_estimateUserOperationGas",
              },
              {
                text: "eth_getUserOperationByHash",
                link: "/api-reference/bundler/eth_getUserOperationByHash",
              },
              {
                text: "eth_getUserOperationReceipt",
                link: "/api-reference/bundler/eth_getUserOperationReceipt",
              },
              {
                text: "eth_chainId",
                link: "/api-reference/bundler/eth_chainId",
              },
              {
                text: "eth_supportedEntryPoints",
                link: "/api-reference/bundler/eth_supportedEntryPoints",
              },
            ],
          },
          {
            text: "Paymaster Endpoints",
            collapsed: false,
            items: [
              {
                text: "cc_getUserCredit",
                link: "/api-reference/paymaster/cc_getUserCredit",
              },
              {
                text: "cc_estimateUserOperation",
                link: "/api-reference/paymaster/cc_estimateUserOperation",
              },
              {
                text: "cc_sponsorUserOperation",
                link: "/api-reference/paymaster/cc_sponsorUserOperation",
              },
              {
                text: "cc_listPendingUserOperations",
                link: "/api-reference/paymaster/cc_listPendingUserOperations",
              },
              {
                text: "cc_rejectUserOperation",
                link: "/api-reference/paymaster/cc_rejectUserOperation",
              },
            ],
          },
        ],
      },
    ],
    "/cyber-id": [
      {
        text: "CyberID",
        collapsed: false,
        items: [
          { text: "Overview", link: "/cyber-id/overview" },
          { text: "Query Owner", link: "/cyber-id/query-owner" },
          { text: "Query Holdings", link: "/cyber-id/query-holdings" },
        ],
      },
    ],
  },
  topNav: [
    { text: "SDKs", link: "/sdk/cyber-account" },
    { text: "CyberWallet", link: "/cyber-wallet/overview" },
    { text: "CyberID", link: "/cyber-id/overview" },
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
    {
      icon: "discord",
      link: "https://discord.gg/cyberconnecthq",
    },
  ],
  logoUrl: "/assets/logo.svg",
});
