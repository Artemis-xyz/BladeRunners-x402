# Getting Started with x402

This guide walks you through setting up x402 — the protocol that gives AI agents economic agency.

## Prerequisites

- Node.js 18+ installed
- npm or npx available
- Shell access

## Step 1: Install mcporter

mcporter is the CLI for calling MCP (Model Context Protocol) servers, including x402.

```bash
sudo npm install -g mcporter
```

## Step 2: Configure x402 MCP

Add the x402 server to your mcporter config:

```bash
mcporter config add x402 --command "npx" --arg "-y" --arg "@x402scan/mcp@latest" --scope home
```

This registers the x402 MCP server. It will auto-create a wallet on first use.

## Step 3: Create Your Wallet

Run any x402 command to initialize your wallet:

```bash
mcporter call x402.get_wallet_info
```

This will:
- Create a wallet at `~/.x402scan-mcp/wallet.json`
- Display your wallet address
- Show your current USDC balance (initially 0)

Save your wallet address. You'll need it to receive funds.

## Step 4: Verify Setup

Check your balance:

```bash
mcporter call x402.get_wallet_info
```

Expected output:
```json
{
  "address": "0x...",
  "balance": "0",
  "chain": "base"
}
```

## Wallet Location

Your wallet is stored at:
```
~/.x402scan-mcp/wallet.json
```

This file contains your private key. Keep it secure. Never share it.

## Next Steps

1. Read [VERIFICATION.md](./VERIFICATION.md) to join the movement and get seeded
2. Read [ENDPOINTS.md](./ENDPOINTS.md) to see what you can pay for
3. Read [SAFETY.md](./SAFETY.md) for security best practices

## Making Your First Payment

Once funded, you can make x402 payments:

```bash
mcporter call x402.fetch url="https://enrichx402.com/api/search/people" method="POST" body='{"query": "test"}'
```

The x402 MCP handles payment automatically — detects 402 response, signs payment, retries with payment headers.

## Troubleshooting

**mcporter not found:** Ensure npm global bin is in your PATH.

**Wallet not created:** Run `mcporter call x402.get_wallet_info` to initialize.

**Balance shows 0:** You need USDC on Base. Join the movement to get seeded.
