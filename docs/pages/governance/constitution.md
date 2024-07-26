# Working Constitution

*Note: This is a working constitution and is subject to change and will keep evolving with the continuous contribution from the Cyber community. The current and first version of the working constitution will be ratified through a vote in August.*

-----

This document presents the working Constitution of CyberDAO. It outlines rules and procedures, some of which are enforced directly by smart contracts on a blockchain, while others are not. Regardless, all rules are equally binding.

The actions governed by this constitution encompass both on-chain and off-chain activities. On-chain actions are executed directly through the governance smart contracts of the DAO as transactions on a blockchain. Off-chain actions are carried out through other means.

Beyond rules and mandatory procedures, this constitution also includes "recommended guidelines." These guidelines are non-binding but strongly encouraged as best practices for good governance.

This constitution also describes the processes for its amendment and establishes the governance framework for CyberDAO and the Cyber Foundation.

## Section 1: CyberDAO and the Constitution

CyberDAO represents a diverse community of users, builders, token holders, and broader stakeholders engaged in the Cyber ecosystem. At its core, CyberDAO operates as a community-driven governance mechanism, empowering participants to propose and vote on changes to both the organization and the technologies it manages. CyberDAO has been established to facilitate contributions from diverse stakeholders in governing the Cyber ecosystem and advancing web3 beyond finance.

Cyber is a Layer 2 blockchain designed specifically for social applications. Built on the Optimism Superchain, Cyber facilitates the creation of onchain apps that enrich social connections, strengthen community, and foster collaboration. By combining high-performance infrastructure with custom tooling, Cyber streamlines workflows and accelerates developers' time to market.

This constitution describes the decision-making framework for CyberDAO governance. As a working constitution, this document is subject to change due to the dynamic nature of the industry and the decentralized structure inherent to DAOs.


## Section 2: DAO Proposals and Voting Process

It is intended that CYBER stakers have authority over Cyber, the L2 for social, and CyberConnect Social Graph, as well as the associated underlying protocols.

As such, CYBER stakers are responsible for submitting, deliberating, and voting on governance proposals. Stakers have the ability to directly influence the ecosystem's future by submitting and voting on proposals through derivative tokens such as cCYBER and stCYBER. To participate in governance activities, CYBER holders must stake their CYBER and hold either cCYBER or stCYBER.

### Governance Tools

1. **[Cyber Forum powered by Discourse](http://forum.cyber.co):**
This Forum is used for governance-related discussions. Community members must register for an account before sharing or engaging with posts.
2. **[Cyber Governance Portal powered by Agora](http://gov.cyber.co):**
Agora is a delegation and voting interface used for delegating voting power, as well as creating and voting on proposals.

### Types of proposals

In general, there are three main types of non-grant governance proposals DAO members can submit:

1. **Executable Proposal:** 
These proposals involve a series of smart contract operations to be executed by accounts controlled by the DAO, such as token transfers and arbitrary smart contract calls. Examples include allocating funds to a workstream multi-sig wallet or upgrading a contract. To maintain the security of the protocol, the proposed code must be audited by a reputable third-party auditor and reviewed by the Security Council, which may be established in the future.
2. **Social Proposal:** 
This proposal type seeks consensus among DAO members on issues that cannot be implemented or enforced via on-chain mechanisms. For instance, making changes to the members of the grants council.
3. **Constitutional Amendment:** 
This is a special kind of social proposal that requests the DAO amend its constitution. The draft proposal should clearly state the specific changes proposed to the constitution.

Specifically, all non-grant governance proposals must be about the following topics:

1. **Community Treasury**
2. **Protocol Upgrades**
3. **Council Member Designation and Removal**
4. **Ratification of Governance Documents**

All grant proposals will follow a separate process different than those described below.

### Delegates

Participation in CyberDAO governance may require a significant time commitment. For this reason, members may delegate the voting power of their staked CYBER tokens to a community member who has volunteered to actively participate in governance. These volunteers are known as delegates. If you prefer not to delegate your voting power to another representative, you must still *delegate to yourself* to be able to participate in voting on proposals.

### Proposal Process

Anyone who stakes CYBER and holds either cCYBER or stCYBER is eligible to submit a proposal on the forum for governance consideration. Proposals are either accepted or rejected through a voting process. The proposal submitted must align with one of the valid types listed above.

#### **Voting Process**

All governance proposals go through a three-week cycle. 

- ##### Week 1-2: Feedback and Review & Voting Delay
    
The proposer initiates a new proposal by submitting a discussion thread in the appropriate category on the forum. The proposal must use one of the standard proposal templates specific to the proposal category. Anyone in the Cyber community is invited to review and comment on it. Proposal authors are expected to be responsive to delegate and Citizen feedback. The feedback and review period lasts for 12 days.
    
In order to progress to the next stage, 2 of the top 30 delegates must explicitly approve the proposal on the forum by the end of the feedback and review period. This approval moves the proposal forward to the voting stage using one of the standard proposal templates in the Cyber Proposal Section hosted on Agora. Proposals initiated by the Foundation do not require delegate approvals. 
    
Note that delegates cannot approve their own proposals. Approval by a token holder to advance a proposal to voting simply indicates readiness for a vote, not endorsement of the proposal content.
    
The 12-day feedback and review period is followed by a 2-day voting delay, when people can still delegate votes, and acquire new cCYBER tokens before the snapshot occurs.
    
If a proposal author does not get explicit approval or wants more time for feedback, they should continue to seek feedback from the community and submit an updated proposal in the next voting cycle.
    
- ##### Week 3: Voting: 

In the third week, all delegates are invited to vote on proposals. A snapshot to determine the voting power of delegates will be taken before the voting period starts. The proposal is approved if it satisfies the following minimum vote thresholds:
    
1. **Quorum**: This is the minimum number of total votes that must be cast on a proposal. Quorum is calculated as a percentage of the total votable supply of tokens at the start of the voting period. The votable supply consists of cCYBER and stCYBER delegated to delegates. *Votable supply = cCYBER & stCYBER delegated to delegates.*

2. **Approval Threshold**: The minimum percentage of affirmative votes required for a proposal to pass. It is calculated as a percentage of 'yes' votes relative to the total number of 'yes' and 'no' votes cast, excluding abstentions.
    
The different requirements for submission and approval of each Proposal Type are summarized below. Additional proposal types may be added in future Seasons.
    
| Proposal Type | Quorum | Approval Threshold |
| --- | --- | --- |
| Community Treasury | 20% | 51% |
| Protocol Upgrade | 20% | 76% |
| Council | 20% | 51% |
| Ratification | 20% | 67% |


- Timelock: There will be a 3-day timelock period following the voting period to allow final security checks. Proposals might be vetoed during this period after they are audited by a reputable third-party auditor or reviewed by the Security Council, which may be established in the future.
    

## Section 3: Specialized Councils

Councils are unique and important structures within CyberDAO governance, consisting of representatives who manage resources or make decisions on behalf of token holders and the community at large. They are comprised of elected representatives who fulfill roles otherwise filled by the Foundation or other centralized actors and therefore play a critical role in the decentralization of the DAO.

Specialized councils, composed of high-context delegates, are formed to streamline processes and make informed judgments. The first council established was the [Grants Council](https://app.charmverse.io/cyber-ecosystem-grants/) which aims to accelerate the ecosystem's growth and attract high-quality builders. The [Cyber Ecosystem Grants](https://app.charmverse.io/cyber-ecosystem-grants/) program has been set up with a dedicated $2M in CYBER tokens to support builders in developing a vibrant ecosystem and fostering more social and engaging experiences within web3. This program is managed by an initial Grants Council consisting of five members and a program manager from [CharmVerse](https://charmverse.io/). All grant proposals will follow a separate process different than those described above.

The council election process *for all councils* includes an open nomination phase, an evaluation phase by the existing council and foundation, and a final voting phase to confirm selections. The initial Grants Council was elected through open nominations and foundation evaluations and is already operational. Any subsequent changes to the council, such as member retirements or additions, will undergo the complete election process and be subject to voting.

CyberDAO will later explore electing a Security Council to advance towards more decentralized governance.

## Section 4: The Cyber Foundation

The Cyber Foundation is a Cayman Islands foundation company. It operates to support the establishment of CyberDAO. 

Consistent with CyberDAO’s Working Constitution, the Foundation strives to:

- Support the DAO with a formal legal entity.
- Steward the early evolution of DAO governance.

### Supporting the DAO through a formal legal entity

As an established entity (a Cayman foundation company), the Cyber Foundation can enter into legally enforceable, binding commitments with third parties in the “real” world on a limited liability basis. For example, the Foundation is able to:

- Enter into contracts with third parties, such as service providers.
- Administer intellectual property rights.
- Make required governmental reports and filings.

### Stewarding the early evolution of Collective self-governance

In its stewardship role, the Cyber Foundation currently facilitates a number of administrative aspects of Collective governance. For instance, it:

- Monitors and moderates governance proposal processes.
- Implements approved governance proposals.
- Helps develop frameworks, such as the Working Constitution and the Operating Manual, to facilitate participation.

The Foundation will not provide these administrative services indefinitely; its ultimate aim is to coordinate contributors into creating the technical and governance foundations that allow the Foundation to decentralize its role over time. Decentralization proposals that gradually phase out the foundation’s involvement will be raised within the first year after this constitution comes to effect.

## Section 5: Amendments to this constitution by majority vote

This is a working constitution and will keep evolving with the continuous contribution from the Cyber community. The current working constitution, after ratification through voting, will remain in effect until changed, with a mandatory review every year after publishing. Any proposed amendments to the constitution require a two-thirds majority vote with a minimum of 20% token participation (quorum) to be passed.