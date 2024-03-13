import{u as i,j as e}from"./index-Bh6drHFT.js";const s={title:"ERC-4337 Account Abstraction",description:"undefined"};function r(n){const t={a:"a",blockquote:"blockquote",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"erc-4337-account-abstraction",children:["ERC-4337 Account Abstraction",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#erc-4337-account-abstraction",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["This article is a repost from Stackup's documentation ",e.jsx(t.a,{href:"https://docs.stackup.sh/docs/erc-4337-overview",children:"https://docs.stackup.sh/docs/erc-4337-overview"})]}),`
`]}),`
`,e.jsxs(t.h2,{id:"introduction",children:["Introduction",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"This page gives a simplified overview of ERC-4337 so that developers can get a basic understanding of the different components and how they can be pieced together to build their applications."}),`
`,e.jsxs(t.h2,{id:"architecture",children:["Architecture",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#architecture",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"There are four main components to ERC-4337: a User Operation, Bundler, EntryPoint, and Smart Account (aka Contract Account). These can be supplemented by Paymasters and Aggregators."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"UserOperations"})," are pseudo-transaction objects that are used to execute transactions with contract accounts. These are created by your app."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Bundlers"})," are actors that package UserOperations from a mempool and send them to the EntryPoint contract on the blockchain."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"EntryPoint"}),` is a singleton smart contract that handles the verification and execution logic for transactions.
Contract Accounts are smart contract accounts owned by a user.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Paymasters"})," are optional smart contract accounts that can sponsor transactions for Contract Accounts."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Aggregators"})," are optional smart contracts that can validate signatures for multiple Contract Accounts."]}),`
`]}),`
`,e.jsxs(t.h2,{id:"user-operations",children:["User Operations",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#user-operations",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"All components of ERC-4337 revolve around a pseudo-transaction object called a UserOperation which is used to execute actions through a smart contract account. It captures the intent of what the user wants to do. This isn't to be mistaken for a regular transaction type."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Field"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"sender"}),e.jsx(t.td,{children:"address"}),e.jsx(t.td,{children:"The address of the smart account sending the User Operation."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"nonce"}),e.jsx(t.td,{children:"uint256"}),e.jsx(t.td,{children:"Anti-replay protection."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"initCode"}),e.jsx(t.td,{children:"bytes"}),e.jsx(t.td,{children:"Code used to deploy the sender if not yet on-chain."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"callData"}),e.jsx(t.td,{children:"bytes"}),e.jsx(t.td,{children:"Data that's passed to the sender for execution."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"callGasLimit"}),e.jsx(t.td,{children:"uint256"}),e.jsx(t.td,{children:"Gas limit for the execution phase."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"verificationGasLimit"}),e.jsx(t.td,{children:"uint256"}),e.jsx(t.td,{children:"Gas limit for the verification phase."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"preVerificationGas"}),e.jsx(t.td,{children:"uint256"}),e.jsx(t.td,{children:"Gas to compensate the bundler for the overhead to submit the User Operation."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"maxFeePerGas"}),e.jsx(t.td,{children:"uint256"}),e.jsx(t.td,{children:"Similar to EIP-1559 maxFeePerGas"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"maxPriorityFeePerGas"}),e.jsx(t.td,{children:"uint256"}),e.jsx(t.td,{children:"Similar to EIP-1559 maxPriorityFeePerGas."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"paymasterAndData"}),e.jsx(t.td,{children:"bytes"}),e.jsx(t.td,{children:"Paymaster contract address and any extra data the paymaster contract needs for verification and execution. When set to 0x or the zero address, no paymaster is used."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"signature"}),e.jsx(t.td,{children:"bytes"}),e.jsx(t.td,{children:"Used to validate a User Operation during verification."})]})]})]}),`
`,e.jsx(t.p,{children:"You will see reference to two phases of ERC-4337: verification and execution. Verification is checking the validity of User Operations, and execution is the actual execution of those transactions."}),`
`,e.jsxs(t.h2,{id:"bundlers",children:["Bundlers",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bundlers",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"A Bundler is a class of actors that sends User Operations to the EntryPoint. Specifically, it:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Listens to at least one UserOperation mempool."}),`
`,e.jsx(t.li,{children:"Runs simulations."}),`
`,e.jsx(t.li,{children:"Bundles an array of User Operations."}),`
`,e.jsx(t.li,{children:"Relays bundles to the EntryPoint."}),`
`]}),`
`,e.jsxs(t.h2,{id:"entrypoint",children:["EntryPoint",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#entrypoint",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:`The EntryPoint is a singleton contract that acts as a central entity for all ERC-4337 Smart Accounts and Paymasters. It coordinates the verification and execution of a User Operation. For this reason, it's important for all implementations of an EntryPoint to be audited and immutable.
Essentially there are two phases:`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Verification loop"}),": Verifies that each UserOperation is valid by checking it with both the Smart Account and the Paymaster contract."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Execution loop"}),`: Sends the callData in each UserOperation to the Smart Account.
The verification loop will also make sure that either the Smart Account or Paymaster contract can pay the maximum gas cost for each User Operation.`]}),`
`]}),`
`,e.jsx(t.p,{children:"Bundlers only check the verification phase. Bundlers do not check if the callData will fully execute."}),`
`,e.jsxs(t.h2,{id:"smart-account",children:["Smart Account",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#smart-account",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"The Smart Account is an end user's account. At minimum it needs to check whether or not it will accept a User Operation during the verification loop."}),`
`,e.jsx(t.p,{children:"Additional features to support other account functions like social recovery and multi-operations can be added here too."}),`
`,e.jsxs(t.h2,{id:"paymaster",children:["Paymaster",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#paymaster",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"The Paymaster is an entity that is able to sponsor the gas fees of a UserOperation. It is required to do two things:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Check whether or not it will accept a User Operation during the verification loop."}),`
`,e.jsx(t.li,{children:`Run any required fee logic in the execution loop.
An example of Paymaster logic could be to withdraw a certain amount of ERC-20 tokens from the Smart Account after the UserOperation is executed. This allows users to pay for gas in any currency they choose.`}),`
`]}),`
`,e.jsxs(t.h2,{id:"aggregator",children:["Aggregator",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#aggregator",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"The Aggregator is an entity that is trusted by Contract Accounts to validate signatures. They are often used to aggregate signatures from multiple UserOperations together."}),`
`,e.jsxs(t.h2,{id:"further-reading",children:["Further Reading",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#further-reading",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["ERC-4337: ",e.jsx(t.a,{href:"https://eips.ethereum.org/EIPS/eip-4337",children:"Account Abstraction"})]}),`
`]})]})}function o(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{o as default,s as frontmatter};
