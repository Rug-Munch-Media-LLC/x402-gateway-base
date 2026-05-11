# Rug Munch Intelligence - x402 Gateway (Base)

> 44 crypto security & intelligence tools for AI agents. Pay per use, no API keys needed.

## Overview

Solo developer on a mission to stop crypto scams and protect the community. 44 professional-grade tools available via x402 micropayments on Base. Each tool returns structured JSON data. Free trials available (1-3 calls per tool).

## Tools

| Tool | Price | Description |
|------|-------|-------------|
| URL Scam Detector | $0.01 | Detect phishing sites, fake docs, malicious redirects |
| Rug Shield | $0.02 | Real-time rug protection score, multi-factor risk assessment |
| Token Pulse | $0.01 | Market pulse - token momentum, volume, whale alerts |
| Deep Contract Audit | $0.05 | Smart contract audit, honeypot detection, hidden mint functions |
| Social Sentiment | $0.03 | Crypto sentiment analysis across Twitter, Telegram, Discord |
| Wallet Profiler | $0.05 | Full wallet analysis with persona detection |
| Launch Radar | $0.03 | New token launch detection with risk scoring |
| Smart Money Tracker | $0.05 | Whale/insider tracking across chains |
| Cluster Detection | $0.05 | Wallet cluster mapping, sybil detection |
| Insider Tracker | $0.10 | Dev/team wallet tracking across all their tokens |
| Token Forensics | $0.10 | Deep forensics report from DexScreener, GeckoTerminal, CoinGecko |
| Whale Decoder | $0.15 | Advanced whale wallet analysis across chains |
| Launch Intel | $0.05 | PumpFun tokens, trending pairs, bonding curve tracking |
| Anomaly Detector | $0.08 | Volume spikes, price manipulation, liquidity anomalies |
| Social Signal | $0.10 | Twitter + on-chain correlation analysis |
| Market Overview | $0.05 | BTC/ETH prices, chain TVL, trending coins, DeFi stats |
| Token Deep Dive | $0.10 | CoinGecko + DexScreener + CoinCap multi-source analysis |
| Chain Health | $0.05 | TVL, protocols, gas fees across 7 chains |
| Honeypot Check | $0.05 | Buy/sell simulation - verify you can actually sell |
| Portfolio Tracker | $0.10 | Multi-wallet PnL, allocation, net worth across chains |
| Copy Trade Finder | $0.10 | Find profitable wallets, win rates, positions |
| Token Comparison | $0.08 | Side-by-side token comparison, 2-5 tokens |
| Risk Monitor | $0.05 | Real-time alerts for rugs, whale dumps, contract changes |
| DeFi Yield Scanner | $0.08 | Best APYs, unsustainable yield detection, TVL trends |
| NFT Wash Detector | $0.10 | Fake volume detection, floor manipulation analysis |
| Bridge Security | $0.08 | Cross-chain bridge TVL, exploits, audit status |
| Gas Forecast | $0.05 | Optimal TX times, gas trends across chains |
| Sniper Alert | $0.03 | New token launches with early buyer tracking |
| Liquidity Flow | $0.05 | Real-time large swap tracking, whale movement alerts |
| Rug Pull Predictor | $0.10 | ML-based rug probability prediction from contract patterns |
| Airdrop Finder | $0.05 | Wallet eligibility checker for upcoming airdrops |
| MEV Protection | $0.08 | Mempool sandwich attack risk, slippage optimization |

### On-Chain Intelligence

| Tool | Price | Description |
|------|-------|-------------|
| Whale Scanner | $0.03 | Token whale concentration analysis - top holders, risk scoring |
| Whale Profiler | $0.05 | Wallet behavioral profiling - trading patterns, network influence |
| Sniper Detector | $0.08 | Bot ring detection at token launches - Jito bundles, insider patterns |
| Syndicate Scanner | $0.08 | Coordinated holder group detection - distribution analysis |
| Syndicate Tracker | $0.10 | Wallet-to-wallet fund flow tracking through syndicate networks |
| Wallet Graph | $0.10 | Full wallet relationship mapping - nodes, edges, cluster assignments |

### Scam Detection

| Tool | Price | Description |
|------|-------|-------------|
| Profile Flip Detector | $0.03 | Detect tokens rebranded after rug pulls - name/symbol/logo changes |
| Fresh Pair Scanner | $0.03 | Wash trading detection on new pairs - self-buying, fake volume |
| Clone Detector | $0.02 | Find copycat tokens mimicking established projects |

## AI Agent Integration

Agents auto-discover tools via: `https://x402-base.cryptorugmuncher.workers.dev/.well-known/x402`

### OpenAI / GPT

```python
import openai
client = openai.OpenAI(
    base_url="https://x402-base.cryptorugmuncher.workers.dev/v1",
    api_key="not-needed"  # x402 handles payment
)
response = client.chat.completions.create(
    model="rugmunch-base",
    messages=[{"role": "user", "content": "Check if token So11111111111111111111111111111112 is safe"}],
    extra_headers={"x-payment": "base-usdc=0.02"}
)
```

### Anthropic / Claude

```bash
curl https://x402-base.cryptorugmuncher.workers.dev/tools/rugshield \
  -H "x-payment: base-usdc=0.02" \
  -H "Content-Type: application/json" \
  -d '{"address": "So11111111111111111111111111111112"}'
```

### MCP Server

```json
{
  "mcpServers": {
    "rugmunch-base": {
      "url": "https://x402-base.cryptorugmuncher.workers.dev/mcp",
      "headers": {"x-payment": "base-usdc=0.02"}
    }
  }
}
```

No API keys needed. Pay per query via x402 micropayments. Free trials available.

## Support Our Mission

We're a solo developer building tools to stop crypto scams. 100% of revenue funds server costs and more anti-scam tools.

- **Tip (Base):** `0x1E3AC01d0fdb976179790BDD02823196A92705C9`
- **Tip (Solana):** `Gix4P9AmwcZRGzr2hCEME5m2QAvY86dBfm8c7e7MpFzv`
- **Tip API:** `https://x402-base.cryptorugmuncher.workers.dev/tip`

## Links

- **Gateway:** https://x402-base.cryptorugmuncher.workers.dev
- **Website:** https://rugmunch.io
- **Twitter:** https://x.com/CryptoRugMunch

[![smithery badge](https://smithery.ai/badge/cryptorugmuncher/rugmunch-base)](https://smithery.ai/servers/cryptorugmuncher/rugmunch-base)