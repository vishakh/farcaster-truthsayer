# Truthsayer
**Distributed oracle on Farcaster for the Frameworks 2024 hackathon**

It's hard to bootstrap a source of esoteric truths for DeFi protocols, prediction markets and other onchain applications. Farcaster provides a large audience of engaged users. Truthsayer uses Farcaster frames to source truth for client applications. 

## Overview

This approach is different from existing solutions due to the heterogeneity of responders and the wide user base. Onchain protocols use either designated token holders (e.g. REP from the Augur protocol) who tend to represent a narrow sample of society or they use generic oracles (e.g. Chainlink) which are not suitable for matters which are not easily formalized. An audience of engaged, vetted humans of all hues can work better with nuanced truths and esoteric matters.

Creators of onchain protocols can issue an NFT collection with one token for each outcome they wish to adjudicate between. The NFT collection can be integrated into marketplaces such as Zora to draw more audience interest or left out of marketplaces to keep the audience disinterested in the specific NFTs. They can then create Farcaster frames which pose the question under consideration to the Farcaster community, with mint buttons to let them pick their answer. The number of mints within a given period decides the winning outcome. Farcaster users are incentivized to pick the correct outcomes in anticipation of receiving a reward from the deployer.

## How it works

1. Deploy an ERC-1155 NFT collection on Zora. This codebase assumed there are three outcomes so you will have to create three NFTs. 

2. Deploy this code to a host of your choice. The following is the env file format:

```angular2html
CONTRACT_ADDRESS=your_contract_address_here
TOKEN_LABELS=Token1,Token2,Token3
ALCHEMY_URL=your_alchemy_node_url_here
```

3. Create a Farcaster frame using Neynar or an equivalent service to let users mint NFTs corresponding to outcomes. To show results within the frame, use the generated image at https://your.deployed.app/mint-count. 

## Future Work

ERC-1155 contracts, by default, do not report the number of minters of each token. For now, this codebase hardcodes the results. In the future, a bespoke ERC-1155 contract will be used to report actual results.

By plugging in a reputation system for Farcaster, we can also weight the results by the reputation of the minter.

Token gating can easily be built into the system should a restricted set of voters be desirable. Similarly, voting can be restricted to members of certain channels.

This project can be integrated into nocode tools for Farcaster frames to provide a seamless experience for users.
