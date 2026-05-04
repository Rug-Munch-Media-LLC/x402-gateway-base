# Rug Munch Intelligence - Smithery Integration Examples

## CLI Installation

```bash
npm install -g smithery
```

## Create a Namespace

```bash
smithery namespace create {your-namespace}
```

## Use the Server

```bash
# Add this server
smithery mcp add cryptorugmuncher/rugmunch-base

# List available tools
smithery tool list {connection}

# Call a tool
smithery tool call {connection} {tool_name} '''{"key": "value"}'''
```

## AI SDK Integration (Vercel AI SDK)

```typescript
import { createMCPClient } from "@ai-sdk/mcp"
import { generateText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"
import { createConnection } from "@smithery/api/mcp"

const { transport } = await createConnection({
  mcpUrl: "https://rugmunch-base--cryptorugmuncher.run.tools",
})

const mcpClient = await createMCPClient({ transport })
const tools = await mcpClient.tools()

const { text } = await generateText({
  model: anthropic("claude-sonnet-4-20250514"),
  tools,
  prompt: "Use the available tools to help me.",
})

await mcpClient.close()
```

## TypeScript SDK Integration

```typescript
import Smithery from "@smithery/api"
import { RugmunchBase } from "https://api.smithery.ai/sdks/typescript/cryptorugmuncher/rugmunch-base/latest"

const smithery = new Smithery()

// One connection per end-user; reuse the connectionId to keep OAuth credentials sticky.
const conn = await smithery.connections.create("{your-namespace}", {
  mcpUrl: "https://rugmunch-base--cryptorugmuncher.run.tools",
})

const rugmunchBase = new RugmunchBase({
  smithery,
  namespace: "{your-namespace}",
  connectionId: conn.connectionId,
})

// Type-checked tool calls
const result = await rugmunchBase.tools.urlcheck({ url: "https://example.com" })
```

## Available Endpoints

| Endpoint | URL |
|----------|-----|
| MCP (Smithery) | `https://rugmunch-base--cryptorugmuncher.run.tools` |
| MCP (Direct) | `https://rmi-mcp-gateway-base.cryptorugmuncher.workers.dev/mcp` |
| x402 Gateway | `https://x402-base.cryptorugmuncher.workers.dev` |
| OpenAI Format | `https://x402-base.cryptorugmuncher.workers.dev/openai-tools` |
| Anthropic Format | `https://x402-base.cryptorugmuncher.workers.dev/anthropic-tools` |

## Tool Categories

- **Security**: urlcheck, rugshield, audit, honeypot_check, anomaly, risk_monitor, nft_wash_detector, mev_protection
- **Market**: pulse, market_overview, chain_health, gas_forecast, defi_yield_scanner, bridge_security
- **Intelligence**: smartmoney, cluster, insider, whale, copy_trade_finder, liquidity_flow, airdrop_finder
- **Social**: sentiment, tw_profile, tw_timeline, tw_search, social_signal
- **Analysis**: forensics, token_deep_dive, portfolio_tracker, token_comparison, social_signal
- **Launchpad**: launch, launch_intel, sniper_alert
