import{u as r,j as e}from"./index-DHgfUVSx.js";const o={title:"Deploying an ERC20 Token on Cyber Mainnet with Thirdweb CLI",description:"undefined"};function i(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"deploying-an-erc20-token-on-cyber-mainnet-with-thirdweb-cli",children:["Deploying an ERC20 Token on Cyber Mainnet with Thirdweb CLI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploying-an-erc20-token-on-cyber-mainnet-with-thirdweb-cli",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"In this tutorial, we will explore how to deploy an ERC20 token on the Cyber mainnet using the thirdweb tools. ERC20 tokens are a standard for creating fungible, interchangeable tokens on the Ethereum blockchain, and they're used widely across various projects. The Cyber mainnet offers a robust platform for these tokens, and with thirdweb's CLI and GUI tools, the process becomes straightforward even for those with minimal blockchain development experience."}),`
`,e.jsxs(n.h2,{id:"requirements",children:["Requirements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#requirements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Before we begin, ensure you have the following:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Node.js and npm/yarn installed on your system. You can install the CLI as a global command on your machine:"}),`
`]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" thirdweb"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"})]})})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Cyber mainnet/ testnet added to the wallet. ",e.jsx(n.a,{href:"/get-started/connecting-wallet",children:"Check the guide to add Cyber to the wallet"})]}),`
`,e.jsxs(n.li,{children:["An active ",e.jsx(n.a,{href:"https://thirdweb.com/dashboard",children:"thirdweb account"})," connected to a wallet loaded with ETH for gas fees."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"step-by-step-guide",children:["Step-by-Step Guide",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-by-step-guide",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"1-create-a-project",children:["1. ",e.jsx(n.strong,{children:"Create a project"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-create-a-project",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"To create a new smart contract using the thirdweb CLI, run the following command:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" thirdweb"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create"})]})})}),`
`,e.jsxs(n.h3,{id:"2-configure-your-project",children:["2. ",e.jsx(n.strong,{children:"Configure your project"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-configure-your-project",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-configure.png",alt:"configuration"})}),`
`,e.jsx(n.p,{children:"Input the following to configure your project in CLI:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"What type of project do you want to create?"}),`
`,e.jsx(n.li,{children:"What is your project named?"}),`
`,e.jsx(n.li,{children:"What is the framework you want to use?"}),`
`,e.jsx(n.li,{children:"What will be the name of your new smart contract?"}),`
`,e.jsx(n.li,{children:"What type of contract do you want to start from?"}),`
`,e.jsx(n.li,{children:"What extension do you want to add to your contract?"}),`
`]}),`
`,e.jsx(n.p,{children:"Thirdweb gives you the flexibility to choose the suitable options. Example, You can create a new project using Hardhat or Forge and add optional extensions."}),`
`,e.jsxs(n.h3,{id:"3-deploying-a-smart-contract",children:["3. ",e.jsx(n.strong,{children:"Deploying a smart contract:"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-deploying-a-smart-contract",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" thirdweb"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" deploy"})]})})}),`
`,e.jsx(n.p,{children:"Executing this command will trigger the following actions:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Compiling all the contracts in the current directory"}),`
`,e.jsx(n.li,{children:"Providing the option to select which contract(s) you wish to deploy"}),`
`,e.jsx(n.li,{children:"Uploading your contract source code (ABI) to IPFS"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-11.png",alt:"deploy"})}),`
`,e.jsxs(n.h3,{id:"4-network-selection",children:["4. ",e.jsx(n.strong,{children:"Network selection"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-network-selection",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"After running the above command, visit the provided dashboard URL and select Cyber or Cyber Testnet from the network dropdown."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-3.png",alt:"network"})}),`
`,e.jsx(n.p,{children:"The dashboard will also require you to fill out the parameters. For example, If you are deploying an ERC20 based smart contract, you will have to enter the _name(Contract Name) and _symbol(Token symbol or ticket)."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-2.png",alt:"dashboard"})}),`
`,e.jsx(n.p,{children:"For additional information on Deploy, please reference thirdweb’s documentation."}),`
`,e.jsx(n.p,{children:"For this particular example, I am naming the token to be ‘ThirdWeb Testing Token’ and the ticker symbol will be ‘TWTT’."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-1.png",alt:"dashboard-config"})}),`
`,e.jsx(n.p,{children:"Once the parameters are filled out, you will need to click on “Deploy Now” which will trigger the transaction and you will see the metamask pop-up to sign the transaction. The deploy process takes place in two steps. The first step is signing the transaction to deploy the smart contract, while the second step is a gasless transaction to add the smart contract in Thirdweb dashboard for further uses."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-4.png",alt:"signature-request"})}),`
`,e.jsx(n.p,{children:"Once the signature is verified, you'll be redirected to the dashboard."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-5.png",alt:"deployed-token"})}),`
`,e.jsx(n.p,{children:"You can verify the contract deployment by heading over to the explorer and searching for the deployed contract."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-6.png",alt:"verify"})}),`
`,e.jsxs(n.h3,{id:"5-minting-tokens",children:["5. ",e.jsx(n.strong,{children:"Minting tokens"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-minting-tokens",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Once the contract is deployed, you will need to navigate to “Extensions” to mint the tokens. Here you will have to simply click on the “+Mint” button and then decide the total supply of tokens and the number of tokens owned by the creator."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-7.png",alt:"minting"})}),`
`,e.jsx(n.p,{children:'Once the minting is successful you will see a prompt on the bottom notifying that "Tokens minted successfully".'}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-10.png",alt:"minting-success"})}),`
`,e.jsxs(n.h3,{id:"6-publishing-a-smart-contract",children:["6. ",e.jsx(n.strong,{children:"Publishing a smart contract"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#6-publishing-a-smart-contract",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"You can publish and share your contract onto thirdweb's registry."}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" thirdweb"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" publish"})]})})}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-8.png",alt:"publish"})}),`
`,e.jsx(n.p,{children:"You will get a prompt to visit the link to publish your contract, which will ask you for some information about the contract. This includes: Contract Name, description, Image and a Readme."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/tutorial-assets/thirdweb-9.png",alt:"publish-via-dashboard"})}),`
`,e.jsx(n.p,{children:"You can finish the publishing process by adding contract details."}),`
`,e.jsxs(n.h2,{id:"conclusion",children:["Conclusion",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusion",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["You've successfully deployed an ERC20 token on the Cyber mainnet using thirdweb tools. Continue to explore and leverage thirdweb's features to enhance your projects with Cyber and share your achievements within the developer community. If you face any issues, feel free to reach out to our engineers for ",e.jsx(n.a,{href:"/support",children:"Support"}),"."]})]})}function a(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{a as default,o as frontmatter};
