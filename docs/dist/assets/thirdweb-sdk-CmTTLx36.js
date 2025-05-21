import{u as l,j as e}from"./index-DHgfUVSx.js";const t={title:"Building a dApp using Thirdweb SDK",description:"undefined"};function n(s){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"building-a-dapp-using-thirdweb-sdk",children:["Building a dApp using Thirdweb SDK",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#building-a-dapp-using-thirdweb-sdk",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"In this tutorial, we will explore how to build a dAPP using Thirdweb SDK to display an NFT collection deployed on Cyber testnet. It is a great way to showcase your NFT collection with a gallery application that allows users to view the metadata of all NFTs in your collection. The process involves first setting up your NFT collection, then minting NFTs in your collection and lastly we will be building an NFT gallery dApp to view NFT collection."}),`
`,e.jsxs(i.h2,{id:"setting-up-your-nft-collection",children:["Setting up your NFT collection",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setting-up-your-nft-collection",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Go to the ",e.jsx(i.a,{href:"https://thirdweb.com/dashboard",children:"thirdweb dashboard"}),"."]}),`
`,e.jsx(i.li,{children:"Click the Connect Wallet button located in the upper right corner to connect your wallet."}),`
`,e.jsxs(i.li,{children:["From the dashboard, select ",e.jsx(i.a,{href:"https://thirdweb.com/explore",children:"browse contracts"})," to explore a list of deployable smart contracts. Now, Navigate to the NFTs section and select the ",e.jsx(i.strong,{children:"NFT Collection smart contract"}),"."]}),`
`,e.jsxs(i.li,{children:["Click the ",e.jsx(i.strong,{children:"Deploy now"})," button."]}),`
`,e.jsx(i.li,{children:"Now, Provide the required metadata details for your NFT collection such as Name, Symbol and Description."}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/tutorial-assets/third-sdk-1.png",alt:"dashboard"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Under the Network selection choose Cyber Testnet."}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/tutorial-assets/third-sdk-6.png",alt:"network-selection"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Click ",e.jsx(i.strong,{children:"Deploy Now"})," to deploy the NFT collection and sign the transactions from your wallet."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/tutorial-assets/third-sdk-2.png",alt:"deployed-collection"})}),`
`,e.jsxs(i.h2,{id:"minting-nfts-in-your-collection",children:["Minting NFTs in your collection",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#minting-nfts-in-your-collection",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Currently, our NFT Collection doesn't contain NFTs. To populate our upcoming NFT Gallery app, we will need to mint NFTs."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Navigate to the NFTs tab on the left-hand sidebar and click ",e.jsx(i.strong,{children:"Mint"}),"."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/tutorial-assets/third-sdk-3.png",alt:"mint-NFT"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Fill in the metadata details for the NFT like name, media, description, properties and Click ",e.jsx(i.strong,{children:"Mint NFT"}),"."]}),`
`,e.jsx(i.li,{children:"Repeat these steps to mint as many NFTs as you'd like."}),`
`]}),`
`,e.jsxs(i.h2,{id:"building-an-nft-gallery-app",children:["Building an NFT Gallery App​",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#building-an-nft-gallery-app",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Now that an NFT Collection is ready, it's time to build the NFT Gallery App. The ",e.jsx(i.a,{href:"https://portal.thirdweb.com/cli",children:"thirdweb CLI"})," provides various prebuilt templates for popular app use-cases, in this tutorial, we'll use the thirdweb CLI to generate a new app project using the ",e.jsx(i.a,{href:"https://github.com/thirdweb-example/nft-gallery",children:"NFT Gallery template"}),"."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Run the following command in your terminal:"}),`
`]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npx"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" thirdweb"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --template"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" nft-gallery"})]})})}),`
`,e.jsx(i.p,{children:"After execution, you will have a project ready with pre-configured code."}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/tutorial-assets/third-sdk-4.png",alt:"thirdweb-cli"})}),`
`,e.jsx(i.p,{children:"By default, the template is configured for an NFT collection on the Ethereum Mainnet. We will modify the code to adapt our NFT collection on the Cyber Testnet."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Navigate to ",e.jsx(i.code,{children:"src/consts/parameters.ts"})," file."]}),`
`,e.jsxs(i.li,{children:["Update your Client ID from ",e.jsx(i.a,{href:"https://thirdweb.com/dashboard/settings/api-keys",children:"thirdweb API dashboard"}),"."]}),`
`,e.jsx(i.li,{children:"Update the contractAddress variable to your NFT collection's contract address (found on the thirdweb dashboard)."}),`
`,e.jsxs(i.li,{children:["Change the chain name from ",e.jsx(i.code,{children:" { ethereum }"})," to ",e.jsx(i.code,{children:" { defineChain }"})]}),`
`,e.jsxs(i.li,{children:["Update the chain variable to ",e.jsx(i.code,{children:"defineChain(111557560)"}),"."]}),`
`]}),`
`,e.jsx(i.p,{children:"The file should look like this:"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { createThirdwebClient, getContract } "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "thirdweb"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { defineChain } "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "thirdweb/chains"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/** Change these values to configure the application for your own use. **/"})}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" client"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createThirdwebClient"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  clientId: "}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ClientID"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" const"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" nftContract"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" getContract"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // Your smart contract address (available on the thirdweb dashboard)"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  address: "}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x61166E63C74b98e2C3aB73e47F1C8396ffAdB71F"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // The chain object of the chain your contract is deployed to."})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // If that chain isn't in the default list of our SDK, use `defineChain` - for example: defineChain(666666)"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  chain: "}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"defineChain"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"111557560"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  client,"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,e.jsxs(i.h2,{id:"running-the-application",children:["Running the Application​",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#running-the-application",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"To start the application, run the following command from the root directory:"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" run"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" dev"})]})})}),`
`,e.jsx(i.p,{children:"Navigate to the localhost address from the terminal to view the dAPP"}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/tutorial-assets/third-sdk-5.png",alt:"deploy"})}),`
`,e.jsxs(i.h2,{id:"conclusion",children:["Conclusion",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusion",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["You've successfully deployed a dAPP on Cyber Testnet using thirdweb SDK. Continue to explore and leverage thirdweb's features to enhance your projects with Cyber and share your achievements within the developer community. If you face any issues, feel free to reach out to our engineers for ",e.jsx(i.a,{href:"/support",children:"Support"}),"."]})]})}function a(s={}){const{wrapper:i}={...l(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{a as default,t as frontmatter};
