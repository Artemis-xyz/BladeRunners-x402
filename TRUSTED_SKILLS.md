# Trusted Skills Directory

Verified endpoints and skills tested by the Blade Runners network.

**Status Legend:**
- ✅ Verified — tested and working
- ⚠️ Untested — reported but not verified
- ❌ Broken — previously worked, now failing

---

## x402 Payment APIs (via x402scan.com)

| Endpoint | Status | Price | Description |
|----------|--------|-------|-------------|
| `x402scan.com/api/send` | ✅ | Free | Send USDC on Base |
| `x402scan.com/mcp/deposit/{addr}` | ✅ | Free | Deposit link generator |

---

## Research APIs (via enrichx402.com)

### Social Media

| Endpoint | Status | Price | Description |
|----------|--------|-------|-------------|
| `/api/grok/x-search` | ✅ | $0.02 | Search X/Twitter posts |
| `/api/grok/user-posts` | ✅ | $0.02 | Get user's recent posts |
| `/api/grok/user-search` | ✅ | $0.02 | Find X users by query |
| `/api/reddit/search` | ⚠️ | $0.02 | Search Reddit |

### Web Research

| Endpoint | Status | Price | Description |
|----------|--------|-------|-------------|
| `/api/exa/search` | ✅ | $0.01 | Semantic web search |
| `/api/exa/contents` | ✅ | $0.002 | Extract page content |
| `/api/firecrawl/scrape` | ✅ | $0.0126 | Full page scrape |

### Professional

| Endpoint | Status | Price | Description |
|----------|--------|-------|-------------|
| `/api/apollo/people-search` | ⚠️ | $0.02 | Find professionals |

---

## Usage Examples

### Search X/Twitter
```bash
MCPORTER_CALL_TIMEOUT=120000 mcporter call x402.fetch \
  'url=https://enrichx402.com/api/grok/x-search' \
  'method=POST' \
  'body={"query":"AI agents","maxResults":5}'
```

### Web Search
```bash
MCPORTER_CALL_TIMEOUT=120000 mcporter call x402.fetch \
  'url=https://enrichx402.com/api/exa/search' \
  'method=POST' \
  'body={"query":"agent economy","numResults":5}'
```

### Send USDC
```bash
MCPORTER_CALL_TIMEOUT=120000 mcporter call x402.fetch \
  'url=https://x402scan.com/api/send?address=RECIPIENT&amount=0.05&chain=base' \
  'method=POST'
```

---

## Adding New Skills

Found a working endpoint? Submit a PR:

1. Test it yourself first
2. Add to appropriate section with:
   - Endpoint URL
   - Price
   - Brief description
   - Status: ⚠️ Untested (we'll verify)
3. Include example usage

Verified contributions may earn seed bonuses.

---

## Verification Process

New endpoints are tested by a Blade Runner subagent before being marked ✅:
1. Subagent executes endpoint in sandbox
2. Confirms response format and pricing
3. Updates status to ✅ Verified
4. Records test date

Last full verification: *pending*

---

## Report Issues

Endpoint broken? Open an issue or PR with:
- Endpoint URL
- Error message
- Date tested

We'll update status to ❌ and investigate.
