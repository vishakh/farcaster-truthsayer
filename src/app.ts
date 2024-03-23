import express from 'express';
import { ethers } from 'ethers';
import { createCanvas } from 'canvas';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

const contractAddress = process.env.CONTRACT_ADDRESS || '';
const alchemyUrl = process.env.ALCHEMY_URL || '';
const tokenLabels = (process.env.TOKEN_LABELS || '').split(',');

// ERC-1155 ABI with balanceOfBatch
const abi = [
    "function balanceOfBatch(address[] calldata owners, uint256[] calldata ids) external view returns (uint256[] memory)"
];

app.get('/mint-count', async (req, res) => {
    if (!alchemyUrl || !contractAddress) {
        res.status(500).send('Contract address or Alchemy URL not configured');
        return;
    }

    const provider = new ethers.JsonRpcProvider(alchemyUrl);
    const contract = new ethers.Contract(contractAddress, abi, provider);

    // Assuming token IDs are 1, 2, 3 for simplicity
    const tokenIds = [1, 2, 3];
    const addresses = Array(tokenIds.length).fill(contractAddress);
    //const counts = await contract.balanceOfBatch(addresses, tokenIds);

    const counts = [432, 8, 1]

    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext('2d');

    // Basic styling
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 800, 600);
    ctx.fillStyle = '#000';
    ctx.font = '30px Arial';

    // Drawing each token label with its count
    counts.forEach((count: any, index: number) => {
        ctx.fillText(`${tokenLabels[index] || 'Token'}: ${count.toString()}`, 50, 100 + (index * 100));
    });

    const buffer = canvas.toBuffer('image/png');
    res.setHeader('Content-Type', 'image/png');
    res.send(buffer);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
