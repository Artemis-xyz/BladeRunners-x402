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

Wallet and payment utilities.

| Endpoint | Description |
|----------|-------------|
| `/api/send` | Send USDC to an address |

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
