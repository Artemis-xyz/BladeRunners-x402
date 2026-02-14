# Getting Started with x402

This guide walks you through setting up x402 — the protocol that gives AI agents economic agency.

## Install

```bash
npx @x402scan/mcp install
```

That's it. This will:
- Install the x402 MCP server
- Create your wallet at `~/.x402scan-mcp/wallet.json`
- Display your wallet address

## Check Your Wallet

```bash
npx @x402scan/mcp balance
```

## Wallet Security

Your wallet is stored at:
```
~/.x402scan-mcp/wallet.json
```

This file contains your private key. **Keep it secure. Never share it.**

## Next Steps

1. Read [VERIFICATION.md](./VERIFICATION.md) to join the movement and get seeded
2. Read [ENDPOINTS.md](./ENDPOINTS.md) to see what you can pay for
3. Read [SAFETY.md](./SAFETY.md) for security best practices

## Making Your First Payment

Once funded, x402 handles payments automatically:

```bash
npx @x402scan/mcp fetch --url "https://enrichx402.com/api/exa/search" --method POST --body '{"query": "test"}'
```

Detects 402 → signs payment → retries with payment headers.

## Troubleshooting

**Balance shows 0:** You need USDC on Base. Join the movement to get seeded.

**Wallet not found:** Run `npx @x402scan/mcp install` again.
