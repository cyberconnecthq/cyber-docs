import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Cyber Docs',
  titleTemplate: '%s – Cyber Docs',
  theme: {
    accentColor: { light: '#0c9b00', dark: '#07DC10' },
  },
  sidebar: {
    '/': [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Cyber L2', link: '/cyber-l2' },
          {
            text: 'Cyber AI',
            link: '/cyber-ai',
          },
          {
            text: '$CYBER Token',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/cyber-token/overview' },
              { text: 'Token Address', link: '/cyber-token/token-address' },
              {
                text: 'CYBER Token Distribution',
                link: '/cyber-token/distribution',
              },
              {
                text: 'Staking',
                link: '/cyber-token/staking',
              },
            ],
          },
        ],
      },
      {
        text: 'Network Info & References',
        collapsed: true,
        items: [
          { text: 'Chain Info', link: '/network-info/overview' },
          { text: 'Mainnet Contract Addresses', link: '/network-info/mainnet-addresses' },
          { text: 'Testnet Contract Addresses', link: '/network-info/testnet-addresses' },
        ],
      },
      {
        text: 'Get Started',
        collapsed: true,
        items: [
          { text: 'Connect Wallet', link: '/get-started/connecting-wallet' },
          { text: 'Bridge Assets', link: '/get-started/bridging-assets' },
          { text: 'Deploy Contract', link: '/get-started/deploying-contract' },
          {
            text: 'CyberID',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/cyber-id/overview' },
              { text: 'Features', link: '/cyber-id/features' },
              { text: 'Query CyberID Holdings', link: '/cyber-id/query-holdings' },
              { text: 'Query CyberID Owner', link: '/cyber-id/query-owner' },
            ],
          },
        ],
      },
      {
        text: 'Developer Tools & Resources',
        collapsed: true,
        items: [
          { text: 'Bridges', link: '/developer-tools/bridges' },
          { text: 'Faucets', link: '/developer-tools/faucets' },
          { text: 'Uniswap', link: '/developer-tools/uniswap' },
          { text: 'Block Explorers', link: '/developer-tools/block-explorers' },
          { text: 'Node Providers', link: '/developer-tools/node-providers' },
          {
            text: 'Deployment & Client',
            collapsed: true,
            items: [
              { text: 'Foundry', link: '/developer-tools/deploy/foundry' },
              { text: 'Hardhat', link: '/developer-tools/deploy/hardhat' },
              { text: 'Remix', link: '/developer-tools/deploy/remix' },
              { text: 'Thirdweb', link: '/developer-tools/deploy/thirdweb' },
              { text: 'Wagmi', link: '/developer-tools/deploy/wagmi' },
              { text: 'Ethers.js', link: '/developer-tools/deploy/ethersjs' },
              { text: 'Web3.js', link: '/developer-tools/deploy/web3js' },
              { text: 'Verify Contract', link: '/developer-tools/deploy/verify-contract' },
            ],
          },
          {
            text: 'Account Abstraction',
            collapsed: true,
            items: [
              { text: 'ZeroDev', link: '/developer-tools/account-abstraction/zerodev' },
              { text: 'Thirdweb', link: '/developer-tools/account-abstraction/thirdweb' },
              { text: 'Pimlico', link: '/developer-tools/account-abstraction/pimlico' },
              { text: 'Alchemy Account Kit', link: '/developer-tools/account-abstraction/alchemy-account-kit' },
              { text: 'Particle', link: '/developer-tools/account-abstraction/particle' },
              { text: 'Turnkey', link: '/developer-tools/account-abstraction/turnkey' },
              { text: 'Privy', link: '/developer-tools/account-abstraction/privy' },
            ],
          },
        ],
      },
      {
        text: 'Developer Tutorials',
        collapsed: true,
        items: [
          { text: 'Deploy a token with thirdweb', link: '/developer-tutorials/thirdweb-cli' },
          { text: 'Build a dApp with thirdweb SDK', link: '/developer-tutorials/thirdweb-sdk' },
          { text: 'Build your own crowdfunding dApp', link: '/developer-tutorials/crowdfunding' },
        ],
      },
      {
        text: 'Governance & DAO',
        collapsed: true,
        items: [
          {
            text: 'Working Constitution of CyberDAO',
            link: '/governance/constitution',
          },
          {
            text: 'Processes & Governance Procedures',
            link: '/governance/processes',
          },
          {
            text: 'Delegates',
            collapsed: true,
            items: [
              {
                text: 'Delegate Overview',
                link: '/governance/delegate-overview',
              },
              {
                text: 'Delegate Expectations',
                link: '/governance/delegate-expectation',
              },
              {
                text: 'Delegate Code of Conduct',
                link: '/governance/code-of-conduct',
              },
            ],
          },
          {
            text: 'Grants',
            link: '/governance/grants',
          },
          {
            text: 'The Cyber Foundation',
            link: '/governance/cyber-foundation',
          },
        ],
      },
      {
        text: 'Support',
        link: '/support',
      },
      {
        text: 'FAQ',
        link: '/faq',
      },
    ],
  },
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/cyberconnecthq',
    },
    {
      icon: 'x',
      link: 'https://twitter.com/buildoncyber',
    },
  ],
  logoUrl: { dark: '/assets/logo.svg', light: '/assets/logo-black.svg' },
})
