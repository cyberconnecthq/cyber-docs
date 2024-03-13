// vocs.config.ts
import { defineConfig } from "file:///Users/suv/Dev/cyber-docs/node_modules/.pnpm/vocs@1.0.0-alpha.43_@types+react@18.2.23_react-dom@18.2.0_react@18.2.0_rollup@4.13.0_typescript@5.4.2/node_modules/vocs/_lib/index.js";
var vocs_config_default = defineConfig({
  title: "Cyber",
  sidebar: {
    "/": [
      { text: "Introduction", link: "/" },
      { text: "Build on Cyber L2", link: "/build-on-l2" },
      {
        text: "Cyber L2 & Optimism Superchain",
        link: "/cyber-l2-and-superchain"
      },
      {
        text: "Blockchain-based social networks",
        collapsed: true,
        items: [
          {
            text: "Learning from building CyberConnect",
            link: "/social/learning-from-cc"
          }
        ]
      },
      {
        text: "Cyber Architecture",
        collapsed: true,
        items: [
          {
            text: "OP Stack",
            link: "/architecture/op-stack"
          },
          {
            text: "EigenDA",
            link: "/architecture/eigen-da"
          },
          {
            text: "Native Account Abstraction",
            link: "/architecture/native-account-abstraction"
          },
          {
            text: "Native Yield",
            link: "/architecture/native-yield"
          },
          {
            text: "Decentralized Sequencer & Verifier",
            link: "/architecture/decentralized-sequence-verifier"
          },
          {
            text: "CyberDB",
            link: "/architecture/cyber-db"
          }
        ]
      },
      {
        text: "Cyber Token",
        collapsed: true,
        items: [
          {
            text: "Governance",
            link: "/token/governance"
          },
          {
            text: "Staking",
            link: "/token/staking"
          },
          {
            text: "CYBER Token Distribution",
            link: "/token/distribution"
          }
        ]
      },
      {
        text: "Roadmap",
        collapsed: true,
        items: [
          { text: "Stage 1 (Q2 2024)", link: "/roadmap/stage1" },
          { text: "Stage 2 (Q3 2024)", link: "/roadmap/stage2" },
          { text: "Stage 3 (Q4 2024)", link: "/roadmap/stage3" },
          { text: "Stage 4 (Q1 2025)", link: "/roadmap/stage4" },
          { text: "Stage 5", link: "/roadmap/stage5" }
        ]
      },
      {
        text: "Run a node (coming soon)"
      },
      { text: "Cyber DAO", link: "/cyber-dao" }
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
            link: "/cyber-wallet/auth"
          },
          {
            text: "Gas Fee Model",
            link: "/cyber-wallet/gas"
          },
          {
            text: "Send UserOperation",
            link: "/cyber-wallet/send-user-op"
          }
        ]
      }
    ],
    "/sdk": [
      {
        text: "SDK",
        collapsed: true,
        items: [
          {
            text: "CyberAccount",
            link: "/sdk/cyber-account"
          },
          {
            text: "CyberApps",
            collapsed: true,
            items: [
              { text: "Overview", link: "/sdk/cyber-apps/overview" },
              {
                text: "Getting Started",
                link: "/sdk/cyber-apps/getting-started"
              },
              { text: "API Reference", link: "/sdk/cyber-apps/api-reference" }
            ]
          }
        ]
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
                link: "/api-reference/bundler/eth_sendUserOperation"
              },
              {
                text: "eth_estimateUserOperationGas",
                link: "/api-reference/bundler/eth_estimateUserOperationGas"
              },
              {
                text: "eth_getUserOperationByHash",
                link: "/api-reference/bundler/eth_getUserOperationByHash"
              },
              {
                text: "eth_getUserOperationReceipt",
                link: "/api-reference/bundler/eth_getUserOperationReceipt"
              },
              {
                text: "eth_chainId",
                link: "/api-reference/bundler/eth_chainId"
              },
              {
                text: "eth_supportedEntryPoints",
                link: "/api-reference/bundler/eth_supportedEntryPoints"
              }
            ]
          },
          {
            text: "Paymaster Endpoints",
            collapsed: true,
            items: [
              {
                text: "cc_getUserCredit",
                link: "/api-reference/paymaster/cc_getUserCredit"
              },
              {
                text: "cc_estimateUserOperation",
                link: "/api-reference/paymaster/cc_estimateUserOperation"
              },
              {
                text: "cc_sponsorUserOperation",
                link: "/api-reference/paymaster/cc_sponsorUserOperation"
              },
              {
                text: "cc_listPendingUserOperations",
                link: "/api-reference/paymaster/cc_listPendingUserOperations"
              },
              {
                text: "cc_rejectUserOperation",
                link: "/api-reference/paymaster/cc_rejectUserOperation"
              }
            ]
          }
        ]
      }
    ],
    "/cyber-id": [
      {
        text: "CyberID",
        collapsed: true,
        items: [
          { text: "Overview", link: "/cyber-id/overview" },
          { text: "Query Owner", link: "/cyber-id/query-owner" },
          { text: "Query Holdings", link: "/cyber-id/query-holdings" }
        ]
      }
    ]
  },
  topNav: [
    { text: "SDK & API", link: "/sdk/cyber-account" },
    { text: "CyberWallet", link: "/cyber-wallet/overview" },
    { text: "CyberID", link: "/cyber-id/overview" }
  ],
  socials: [
    {
      icon: "github",
      link: "https://github.com/cyberconnecthq"
    },
    {
      icon: "x",
      link: "https://twitter.com/cyberconnecthq"
    },
    {
      icon: "discord",
      link: "https://discord.gg/cyberconnecthq"
    }
  ],
  logoUrl: "/assets/logo.svg"
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc3V2L0Rldi9jeWJlci1kb2NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc3V2L0Rldi9jeWJlci1kb2NzL3ZvY3MuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zdXYvRGV2L2N5YmVyLWRvY3Mvdm9jcy5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidm9jc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogXCJDeWJlclwiLFxuICBzaWRlYmFyOiB7XG4gICAgXCIvXCI6IFtcbiAgICAgIHsgdGV4dDogXCJJbnRyb2R1Y3Rpb25cIiwgbGluazogXCIvXCIgfSxcbiAgICAgIHsgdGV4dDogXCJCdWlsZCBvbiBDeWJlciBMMlwiLCBsaW5rOiBcIi9idWlsZC1vbi1sMlwiIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiQ3liZXIgTDIgJiBPcHRpbWlzbSBTdXBlcmNoYWluXCIsXG4gICAgICAgIGxpbms6IFwiL2N5YmVyLWwyLWFuZC1zdXBlcmNoYWluXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkJsb2NrY2hhaW4tYmFzZWQgc29jaWFsIG5ldHdvcmtzXCIsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkxlYXJuaW5nIGZyb20gYnVpbGRpbmcgQ3liZXJDb25uZWN0XCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9zb2NpYWwvbGVhcm5pbmctZnJvbS1jY1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkN5YmVyIEFyY2hpdGVjdHVyZVwiLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJPUCBTdGFja1wiLFxuICAgICAgICAgICAgbGluazogXCIvYXJjaGl0ZWN0dXJlL29wLXN0YWNrXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkVpZ2VuREFcIixcbiAgICAgICAgICAgIGxpbms6IFwiL2FyY2hpdGVjdHVyZS9laWdlbi1kYVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJOYXRpdmUgQWNjb3VudCBBYnN0cmFjdGlvblwiLFxuICAgICAgICAgICAgbGluazogXCIvYXJjaGl0ZWN0dXJlL25hdGl2ZS1hY2NvdW50LWFic3RyYWN0aW9uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIk5hdGl2ZSBZaWVsZFwiLFxuICAgICAgICAgICAgbGluazogXCIvYXJjaGl0ZWN0dXJlL25hdGl2ZS15aWVsZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJEZWNlbnRyYWxpemVkIFNlcXVlbmNlciAmIFZlcmlmaWVyXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9hcmNoaXRlY3R1cmUvZGVjZW50cmFsaXplZC1zZXF1ZW5jZS12ZXJpZmllclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJDeWJlckRCXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9hcmNoaXRlY3R1cmUvY3liZXItZGJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJDeWJlciBUb2tlblwiLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJHb3Zlcm5hbmNlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi90b2tlbi9nb3Zlcm5hbmNlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlN0YWtpbmdcIixcbiAgICAgICAgICAgIGxpbms6IFwiL3Rva2VuL3N0YWtpbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiQ1lCRVIgVG9rZW4gRGlzdHJpYnV0aW9uXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi90b2tlbi9kaXN0cmlidXRpb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJSb2FkbWFwXCIsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiU3RhZ2UgMSAoUTIgMjAyNClcIiwgbGluazogXCIvcm9hZG1hcC9zdGFnZTFcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJTdGFnZSAyIChRMyAyMDI0KVwiLCBsaW5rOiBcIi9yb2FkbWFwL3N0YWdlMlwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlN0YWdlIDMgKFE0IDIwMjQpXCIsIGxpbms6IFwiL3JvYWRtYXAvc3RhZ2UzXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiU3RhZ2UgNCAoUTEgMjAyNSlcIiwgbGluazogXCIvcm9hZG1hcC9zdGFnZTRcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJTdGFnZSA1XCIsIGxpbms6IFwiL3JvYWRtYXAvc3RhZ2U1XCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiUnVuIGEgbm9kZSAoY29taW5nIHNvb24pXCIsXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiBcIkN5YmVyIERBT1wiLCBsaW5rOiBcIi9jeWJlci1kYW9cIiB9LFxuICAgIF0sXG4gICAgXCIvY3liZXItd2FsbGV0XCI6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJDeWJlcldhbGxldFwiLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIk92ZXJ2aWV3XCIsIGxpbms6IFwiL2N5YmVyLXdhbGxldC9vdmVydmlld1wiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkFjY291bnQgQWJzdHJhY3RcIiwgbGluazogXCIvY3liZXItd2FsbGV0L2VyYzQzMzdcIiB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiQXV0aGVudGljYXRpb25cIixcbiAgICAgICAgICAgIGxpbms6IFwiL2N5YmVyLXdhbGxldC9hdXRoXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkdhcyBGZWUgTW9kZWxcIixcbiAgICAgICAgICAgIGxpbms6IFwiL2N5YmVyLXdhbGxldC9nYXNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiU2VuZCBVc2VyT3BlcmF0aW9uXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9jeWJlci13YWxsZXQvc2VuZC11c2VyLW9wXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBcIi9zZGtcIjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlNES1wiLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJDeWJlckFjY291bnRcIixcbiAgICAgICAgICAgIGxpbms6IFwiL3Nkay9jeWJlci1hY2NvdW50XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkN5YmVyQXBwc1wiLFxuICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyB0ZXh0OiBcIk92ZXJ2aWV3XCIsIGxpbms6IFwiL3Nkay9jeWJlci1hcHBzL292ZXJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiR2V0dGluZyBTdGFydGVkXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvc2RrL2N5YmVyLWFwcHMvZ2V0dGluZy1zdGFydGVkXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogXCJBUEkgUmVmZXJlbmNlXCIsIGxpbms6IFwiL3Nkay9jeWJlci1hcHBzL2FwaS1yZWZlcmVuY2VcIiB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJBUEkgUmVmZXJlbmNlXCIsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiT3ZlcnZpZXdcIiwgbGluazogXCIvYXBpLXJlZmVyZW5jZS9vdmVydmlld1wiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkF1dGhlbnRpY2F0aW9uXCIsIGxpbms6IFwiL2FwaS1yZWZlcmVuY2UvYXV0aFwiIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJCdW5kbGVyIEVuZHBvaW50c1wiLFxuICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiZXRoX3NlbmRVc2VyT3BlcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvYXBpLXJlZmVyZW5jZS9idW5kbGVyL2V0aF9zZW5kVXNlck9wZXJhdGlvblwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJldGhfZXN0aW1hdGVVc2VyT3BlcmF0aW9uR2FzXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvYXBpLXJlZmVyZW5jZS9idW5kbGVyL2V0aF9lc3RpbWF0ZVVzZXJPcGVyYXRpb25HYXNcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiZXRoX2dldFVzZXJPcGVyYXRpb25CeUhhc2hcIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9hcGktcmVmZXJlbmNlL2J1bmRsZXIvZXRoX2dldFVzZXJPcGVyYXRpb25CeUhhc2hcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiZXRoX2dldFVzZXJPcGVyYXRpb25SZWNlaXB0XCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvYXBpLXJlZmVyZW5jZS9idW5kbGVyL2V0aF9nZXRVc2VyT3BlcmF0aW9uUmVjZWlwdFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJldGhfY2hhaW5JZFwiLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiL2FwaS1yZWZlcmVuY2UvYnVuZGxlci9ldGhfY2hhaW5JZFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJldGhfc3VwcG9ydGVkRW50cnlQb2ludHNcIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9hcGktcmVmZXJlbmNlL2J1bmRsZXIvZXRoX3N1cHBvcnRlZEVudHJ5UG9pbnRzXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJQYXltYXN0ZXIgRW5kcG9pbnRzXCIsXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJjY19nZXRVc2VyQ3JlZGl0XCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvYXBpLXJlZmVyZW5jZS9wYXltYXN0ZXIvY2NfZ2V0VXNlckNyZWRpdFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJjY19lc3RpbWF0ZVVzZXJPcGVyYXRpb25cIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9hcGktcmVmZXJlbmNlL3BheW1hc3Rlci9jY19lc3RpbWF0ZVVzZXJPcGVyYXRpb25cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiY2Nfc3BvbnNvclVzZXJPcGVyYXRpb25cIixcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi9hcGktcmVmZXJlbmNlL3BheW1hc3Rlci9jY19zcG9uc29yVXNlck9wZXJhdGlvblwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJjY19saXN0UGVuZGluZ1VzZXJPcGVyYXRpb25zXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvYXBpLXJlZmVyZW5jZS9wYXltYXN0ZXIvY2NfbGlzdFBlbmRpbmdVc2VyT3BlcmF0aW9uc1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJjY19yZWplY3RVc2VyT3BlcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgbGluazogXCIvYXBpLXJlZmVyZW5jZS9wYXltYXN0ZXIvY2NfcmVqZWN0VXNlck9wZXJhdGlvblwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFwiL2N5YmVyLWlkXCI6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJDeWJlcklEXCIsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiT3ZlcnZpZXdcIiwgbGluazogXCIvY3liZXItaWQvb3ZlcnZpZXdcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJRdWVyeSBPd25lclwiLCBsaW5rOiBcIi9jeWJlci1pZC9xdWVyeS1vd25lclwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlF1ZXJ5IEhvbGRpbmdzXCIsIGxpbms6IFwiL2N5YmVyLWlkL3F1ZXJ5LWhvbGRpbmdzXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgdG9wTmF2OiBbXG4gICAgeyB0ZXh0OiBcIlNESyAmIEFQSVwiLCBsaW5rOiBcIi9zZGsvY3liZXItYWNjb3VudFwiIH0sXG4gICAgeyB0ZXh0OiBcIkN5YmVyV2FsbGV0XCIsIGxpbms6IFwiL2N5YmVyLXdhbGxldC9vdmVydmlld1wiIH0sXG4gICAgeyB0ZXh0OiBcIkN5YmVySURcIiwgbGluazogXCIvY3liZXItaWQvb3ZlcnZpZXdcIiB9LFxuICBdLFxuICBzb2NpYWxzOiBbXG4gICAge1xuICAgICAgaWNvbjogXCJnaXRodWJcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2N5YmVyY29ubmVjdGhxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBcInhcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9jeWJlcmNvbm5lY3RocVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogXCJkaXNjb3JkXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vZGlzY29yZC5nZy9jeWJlcmNvbm5lY3RocVwiLFxuICAgIH0sXG4gIF0sXG4gIGxvZ29Vcmw6IFwiL2Fzc2V0cy9sb2dvLnN2Z1wiLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZQLFNBQVMsb0JBQW9CO0FBRTFSLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxJQUFJO0FBQUEsTUFDbEMsRUFBRSxNQUFNLHFCQUFxQixNQUFNLGVBQWU7QUFBQSxNQUNsRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixN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
