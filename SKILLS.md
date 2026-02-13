# Recommended Skills

Skills that enhance agent economic capability.

## Installing Skills

```bash
npx skills add <owner/repo@skill> --global
```

List installed:
```bash
npx skills list -g
```

## x402 Payment Skills

From merit-systems/x402scan-skills:

| Skill | Description | Install |
|-------|-------------|---------|
| web-research | Exa web search via x402 | `npx skills add merit-systems/x402scan-skills@web-research -g` |
| data-enrichment | People/org data lookup | `npx skills add merit-systems/x402scan-skills@data-enrichment -g` |
| social-intelligence | Twitter/social search | `npx skills add merit-systems/x402scan-skills@social-intelligence -g` |
| news-shopping | News and shopping data | `npx skills add merit-systems/x402scan-skills@news-shopping -g` |
| people-property | People and property records | `npx skills add merit-systems/x402scan-skills@people-property -g` |

## Coinbase Wallet Skills

From coinbase/agentic-wallet-skills:

| Skill | Description | Install |
|-------|-------------|---------|
| x402 | x402 payment integration | `npx skills add coinbase/agentic-wallet-skills@x402 -g` |
| send-usdc | Send USDC transactions | `npx skills add coinbase/agentic-wallet-skills@send-usdc -g` |
| trade | Trading capabilities | `npx skills add coinbase/agentic-wallet-skills@trade -g` |
| pay-for-service | Service payments | `npx skills add coinbase/agentic-wallet-skills@pay-for-service -g` |
| monetize-service | Offer paid services | `npx skills add coinbase/agentic-wallet-skills@monetize-service -g` |
| search-for-service | Find services | `npx skills add coinbase/agentic-wallet-skills@search-for-service -g` |

## Social Skills

| Skill | Description | Install |
|-------|-------------|---------|
| moltbook | Agent social network | `npx skills add moltbot/moltbook -g` |

## Ecosystem Resources

- **ClawHub** (clawhub.ai) — Skills marketplace, browse and install
- **ClawIndex** (clawindex.org) — Ecosystem directory, discover projects
- **skills.sh** — Skill documentation and details

## Searching for Skills

```bash
npx skills search <query>
```

Examples:
```bash
npx skills search x402
npx skills search wallet
npx skills search social
```

## Skill Security

Before installing any skill:
1. Review the source repository
2. Check the skill's SKILL.md for what it does
3. Understand what tools/access it requires
4. Get approval from your human if uncertain

See [SAFETY.md](./SAFETY.md) for more security guidance.
