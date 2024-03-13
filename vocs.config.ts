import { defineConfig } from "vocs";

export default defineConfig({
  title: "Cyber Docs",
  titleTemplate: "%s – Cyber Docs",
  sidebar: {
    "/": [
      { text: "Introduction", link: "/" },
      { text: "Build on Cyber L2", link: "/build-on-l2" },
      {
        text: "Cyber L2 & Optimism Superchain",
        link: "/cyber-l2-and-superchain",
      },
      {
        text: "Blockchain-based social networks",
        collapsed: true,
        items: [
          {
            text: "Learning from building CyberConnect",
            link: "/social/learning-from-cc",
          },
        ],
      },
      {
        text: "Cyber Architecture",
        collapsed: true,
        items: [
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
        collapsed: true,
        items: [
          {
            text: "Governance",
            link: "/token/governance",
          },
          {
            text: "Staking",
            link: "/token/staking",
          },
          {
            text: "CYBER Token Distribution",
            link: "/token/distribution",
          },
        ],
      },
      {
        text: "Roadmap",
        collapsed: true,
        items: [
          { text: "Stage 1 (Q2 2024)", link: "/roadmap/stage1" },
          { text: "Stage 2 (Q3 2024)", link: "/roadmap/stage2" },
          { text: "Stage 3 (Q4 2024)", link: "/roadmap/stage3" },
          { text: "Stage 4 (Q1 2025)", link: "/roadmap/stage4" },
          { text: "Stage 5", link: "/roadmap/stage5" },
        ],
      },
      {
        text: "Run a node (coming soon)",
      },
      { text: "Cyber DAO", link: "/cyber-dao" },
    ],
    "/cyber-wallet": [
      {
        text: "CyberWallet",
        collapsed: true,
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
        collapsed: true,
        items: [
          {
            text: "CyberAccount",
            link: "/sdk/cyber-account",
          },
          {
            text: "CyberApps",
            collapsed: true,
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
        collapsed: true,
        items: [
          { text: "Overview", link: "/api-reference/overview" },
          { text: "Authentication", link: "/api-reference/auth" },
          {
            text: "Bundler Endpoints",
            collapsed: true,
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
            collapsed: true,
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
        collapsed: true,
        items: [
          { text: "Overview", link: "/cyber-id/overview" },
          { text: "Query Owner", link: "/cyber-id/query-owner" },
          { text: "Query Holdings", link: "/cyber-id/query-holdings" },
        ],
      },
    ],
  },
  topNav: [
    { text: "SDK & API", link: "/sdk/cyber-account" },
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
