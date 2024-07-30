# Processes & Governance Procedures

This document presents the proposed governance structure and code for CyberDAO in accordance with the proposed Working Constitution. It outlines rules and procedures, some of which are enforced directly by smart contracts on a blockchain, while others are not. Regardless, all rules are equally binding.

The actions governed by this document are in accordance with CyberDAO's Working Constitution. They encompass both on-chain and off-chain activities. On-chain actions are executed directly through the governance smart contracts of the DAO as transactions on a blockchain. Off-chain actions are carried out through other means.

Beyond rules and mandatory procedures, this document also includes "recommended guidelines." These guidelines are non-binding but strongly encouraged as best practices for good governance.

This document also describes the processes for the constitution’s amendment and establishes the processes for the governance framework for CyberDAO and the Cyber Foundation.

## Section 1: CyberDAO and the Constitution

CyberDAO represents a diverse community of users, builders, token holders, and broader stakeholders engaged in the Cyber ecosystem. At its core, CyberDAO operates as a community-driven governance mechanism, empowering participants to propose and vote on changes to both the organization and the technologies it manages. See the [Working Constitution](https://docs.cyber.co/governance/constitution). 

Cyber is a Layer 2 blockchain designed specifically for social applications. Built on the Optimism Superchain, Cyber facilitates the creation of onchain apps that enrich social connections, strengthen community, and foster collaboration. By combining high-performance infrastructure with custom tooling, Cyber streamlines workflows and accelerates developers' time to market.

This document describes the decision-making framework for CyberDAO governance. The procedures in this document are subject to change based on the outcome of CyberDAO proposals.

## **Section 2: DAO Proposals and Voting Process**

It is intended that CYBER stakers have authority over Cyber, the L2 for social, and CyberConnect Social Graph, as well as the associated underlying protocols.

As such, CYBER stakers are responsible for submitting, deliberating, and voting on governance proposals. Stakers have the ability to directly influence the ecosystem's future by submitting and voting on proposals through derivative tokens such as cCYBER and stCYBER. To participate in governance activities, CYBER holders must stake their CYBER and hold either cCYBER or stCYBER. In phase 1 of governance (summer 2024), voting participation has been enabled for cCYBER holders. In phase 2 of governance, Cyber will further decentralize governance and enable CyberDAO participation for holders of all staked CYBER tokens (including both cCYBER and stCYBER).

### Governance Tools

1. **[Cyber Forum powered by Discourse](http://forum.cyber.co):**
This Forum is used for governance-related discussions. Community members must register for an account before sharing or engaging with posts.
2. **[Cyber Governance Portal powered by Agora](http://gov.cyber.co):**
Agora is a delegation and voting interface used for delegating voting power, as well as creating and voting on proposals.

### **Types of proposals**

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

#### Voting Process

All governance proposals go through a two-stage cycle. 

- **Stage 1: Feedback and Review & Voting Delay**

The proposer initiates a new proposal by submitting a discussion thread in the appropriate category on the forum. The proposal must use one of the standard proposal templates specific to the proposal category. Anyone in the Cyber community is invited to review and comment on it. Proposal authors are expected to be responsive to delegate and Citizen feedback. The feedback and review period lasts for 12 days.

In order to progress to the next stage, 2 of the top 30 delegates (by voting power) must explicitly endorse the proposal on the forum as "ready for voting" by the end of the feedback and review period. This endorsement moves the proposal forward to the voting stage using one of the standard proposal templates in the Cyber Proposal Section hosted on Agora. Proposals initiated by the Foundation do not require delegate endorsements to proceed beyond stage 1, but will still be voted on in stage 2. 

*Note that delegates cannot approve their own proposals. Approval by a token holder to advance a proposal to voting simply indicates readiness for a vote, not endorsement of the proposal content.*

If a proposal author does not get explicit approval or wants more time for feedback, they should continue to seek feedback from the community and submit an updated proposal in the next voting cycle.

The 12-day feedback and review period is followed by a 2-day voting delay, during which when people participants can still delegate votes, and acquire new cCYBER tokens before the snapshot occurs.

At the end of the voting delay period, a "snapshot" is taken that captures the voting power of each delegate. This voting power will not change until after the voting period that follows.
- **Stage 2: Voting** 

After discussion, the voting delay, and a snapshot, all delegates are invited to vote on proposals during the *Voting Period*.

The proposal is approved if it satisfies the following minimum vote thresholds:
    1. **Quorum**: This is the minimum number of total votes that must be cast on a proposal. Quorum is calculated as a percentage of the total votable supply of tokens at the start of the voting period. The votable supply consists of cCYBER and stCYBER delegated to delegates. *Votable supply = cCYBER & stCYBER delegated to delegates.*
    2. **Approval Threshold**: The minimum percentage of affirmative votes required for a proposal to pass. It is calculated as a percentage of 'yes' votes relative to the total number of 'yes' and 'no' votes cast, excluding abstentions.
    
The different requirements for submission and approval of each Proposal Type are summarized below. Additional proposal types may be added in future Seasons.
    
| Proposal Type | Quorum | Approval Threshold |
| --- | --- | --- |
| Community Treasury | 20% | 51% |
| Protocol Upgrade | 20% | 76% |
| Council | 20% | 51% |
| Constitutional Ratification & Amendments | 20% | 67% |

- **Stage 3: Timelock**

The 3-day timelock period is meant to allow the Security Council (which will be established in the future) to act as the last line of defense against malicious proposals that are against the Constitution or harmful to the DAO. It is the final period where the Security Council can block proposals from executing.

## Section 3: Specialized Councils

Councils are unique and important structures within CyberDAO governance, consisting of representatives who manage resources or make decisions on behalf of token holders and the community at large. They are comprised of elected representatives who fulfill roles otherwise filled by the Foundation or other centralized actors and therefore play a critical role in the decentralization of the DAO.

Specialized councils, composed of high-context delegates, are formed to streamline processes and make informed judgments. The first council established was the [Grants Council](https://app.charmverse.io/cyber-ecosystem-grants/) which aims to accelerate the ecosystem's growth and attract high-quality builders. The [Cyber Ecosystem Grants](https://app.charmverse.io/cyber-ecosystem-grants/) program has been set up with a dedicated $2M in CYBER tokens to support builders in developing a vibrant ecosystem and fostering more social and engaging experiences within web3. This program is managed by an initial Grants Council consisting of five members and a program manager from [CharmVerse](https://charmverse.io/). All grant proposals will follow a separate process different than those described above.

The council election process *for all councils* includes an open nomination phase, an evaluation phase by the existing council and foundation, and a final voting phase to confirm selections. The initial Grants Council was elected through open nominations and foundation evaluations and is already operational. Any subsequent changes to the council, such as member retirements or additions, will undergo the complete election process and be subject to voting.

CyberDAO will later explore electing a Security Council to advance towards more decentralized governance.

## **Section4: Amendments to the Constitution by Majority Vote**

This is a version of the governance processes and procedures for CyberDAO. Both this document and the Working Constitution will evolve continuously. The current Working Constitution, after ratification through a vote, will remain in effect until changed, with a mandatory review every year after publishing. Any proposed amendments to the constitution require a two-thirds majority vote with a minimum of 20% token participation (quorum) to be passed.