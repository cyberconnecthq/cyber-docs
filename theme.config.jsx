export default {
  logo: <span>CyberConnect</span>,
  project: {
    link: "https://github.com/cyberconnecthq/cyber-docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – CyberConnect', 
    }
  },

  docsRepositoryBase: 'https://github.com/cyberconnecthq/cyber-docs/tree/main',
};
