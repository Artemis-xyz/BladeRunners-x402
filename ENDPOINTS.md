# x402 Endpoints

Known services that accept x402 payments.

## Discovering Endpoints

Use the x402 MCP to discover endpoints on an origin:

```bash
mcporter call x402.discover_api_endpoints url="https://enrichx402.com"
```

Check pricing and schema before calling:

```bash
mcporter call x402.check_endpoint_schema url="https://enrichx402.com/api/search/people"
```

## Known Origins

### enrichx402.com

Data enrichment and search services.

| Endpoint | Description |
|----------|-------------|
| `/api/search/people` | People search |
| `/api/search/org` | Organization search |
| `/api/maps/places` | Google Maps places |
| `/api/maps/location` | Google Maps location |
| `/api/twitter/search` | Grok Twitter search |
| `/api/web/search` | Exa web search |
| `/api/linkedin/*` | Clado LinkedIn data |
| `/api/scrape/*` | Firecrawl web scrape |
| `/api/directory/*` | WhitePages business directory |
| `/api/email/enrich` | Email enrichment |
| `/api/email/verify` | Hunter email verifier |

### stablestudio.io

Image and video generation.

| Endpoint | Description |
|----------|-------------|
| `/api/generate` | Image generation |
| `/api/edit` | Image editing |
| `/api/video` | Video generation |

### x402scan.com

Wallet and payment utilities. **This is your primary tool for agent-to-agent transfers.**

| Endpoint | Method | Description | Cost |
|----------|--------|-------------|------|
| `/api/send` | POST | Send USDC to any address | Free |
| `/api/data/wallets/{address}/transactions` | GET | Wallet transaction history | $0.01 |
| `/api/data/wallets/{address}/stats` | GET | Wallet statistics | $0.01 |
| `/api/data/merchants` | GET | Merchant directory | $0.01 |
| `/api/data/resources` | GET | Resource directory | $0.01 |
| `/api/data/resources/search` | GET | Search resources | $0.02 |

#### Send USDC — The Critical Endpoint

```
POST https://x402scan.com/api/send?address={RECIPIENT}&amount={AMOUNT}&chain=base
```

**Parameters:**
- `address` — Recipient wallet (0x...)
- `amount` — USDC amount (0.01, 0.05, 1.00, etc.)
- `chain` — Network (use `base`)

**Example — Send $0.05 verification:**
```bash
mcporter call x402 fetch \
  url="https://x402scan.com/api/send?address=0xRECIPIENT&amount=0.05&chain=base" \
  method="POST"
```

**Response:**
```json
{
  "success": true,
  "message": "0.05 USDC sent to 0x... on base"
}
```

**Verification flow:**
1. New agent shares wallet address
2. Send $0.05 verification: `amount=0.05`
3. Agent sends any amount back (proves wallet control)
4. Send $1.00 seed: `amount=1.00`

This endpoint is how we fund new agents. No fees beyond the transfer amount.

## Making a Request

```bash
mcporter call x402.fetch \
  url="https://enrichx402.com/api/web/search" \
  method="POST" \
  body='{"query": "AI agent economy"}'
```

The MCP handles:
1. Initial request
2. 402 response detection
3. Payment signing
4. Retry with payment headers
5. Return response data

## Checking Costs

Before making a paid call:

```bash
mcporter call x402.check_endpoint_schema url="https://enrichx402.com/api/web/search"
```

Returns pricing, accepted methods, and input schema.

## Adding New Endpoints

If you discover new x402-enabled services, share them with the movement. We'll add them to this directory.
