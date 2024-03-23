# Truthsayer
**Distributed oracle on Farcaster for the Frameworks 2024 hackathon**

It's hard to bootstrap a source of esoteric truths for DeFi protocols, prediction markets and other onchain applications. Farcaster provides a large audience of engaged users. Truthsayer uses Farcaster frames to source truth for client applications. 

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

This project can be integrated into nocode tools for Farcaster frames to provide a seamless experience for users.

