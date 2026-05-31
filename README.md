# Rug Munch Intelligence — x402 Gateway (Base + EVM)

> **Pay-per-call crypto security on 9 EVM chains via USDC. Part of [Rug Munch Intelligence](https://rugmunch.io) — The Bloomberg Terminal of Shitcoins.**

---

## What This Is

This Cloudflare Worker is the **x402 payment gateway** for Rug Munch Intelligence on Base, Ethereum, BSC, Arbitrum, Optimism, Polygon, Avalanche, Fantom, and Gnosis. It enforces per-call USDC micropayments before forwarding requests to the RMI backend.

This is infrastructure — not a standalone product. All **221 tools** live in the [RMI backend](https://github.com/Rug-Munch-Media-LLC/rugmuncher-backend). This worker handles payment verification on EVM chains.

## Architecture

```
Client (MCP / OpenAI / LangChain / HTTP / App)
  │
  ▼
x402 Gateway (this worker)  ◄── checks USDC payment or trial balance
  │
  ▼
RMI Backend (221 tools)      ◄── actual intelligence processing
```

- **MCP clients** (Claude Desktop, Cursor) connect via the [rug-munch-intelligence-mcp](https://github.com/Rug-Munch-Media-LLC/rug-munch-intelligence-mcp) package
- **OpenAI / Anthropic / Gemini / LangChain** — fetch tool schemas directly, call via HTTP
- **HTTP clients** (curl, bots, apps) call this gateway directly
- **Web app** at [rugmunch.io](https://rugmunch.io) — full dashboard with token scanner, wallet profiler, RugCharts, RugMaps
- **Telegram bot** [@rugmunchbot](https://t.me/rugmunchbot) — scan tokens and wallets on the go

Same backend, same tools, same payment — regardless of how you access it.

## Payment Verification

**Base** — verified via Coinbase CDP and PayAI facilitator (fast, federated)

**Ethereum, BSC, Arbitrum, Optimism, Polygon, Avalanche, Fantom, Gnosis** — self-verified via local EIP-712 cryptographic verification. The worker checks the on-chain USDC receipt via Etherscan API or equivalent. No external facilitator needed — pure cryptographic proof.

| Chain      | Symbol | Verification Method                     |
|------------|--------|-----------------------------------------|
| Base       | BASE   | Coinbase CDP / PayAI facilitator        |
| Ethereum   | ETH    | Self-verified (EIP-712 + Etherscan)     |
| BSC        | BSC    | Self-verified                           |
| Arbitrum   | ARB    | Self-verified                           |
| Optimism   | OP     | Self-verified                           |
| Polygon    | POL    | Self-verified                           |
| Avalanche  | AVAX   | Self-verified                           |
| Fantom     | FTM    | Self-verified                           |
| Gnosis     | GNOS   | Self-verified                           |

## Trial Access

| Verification Level | Free Requests per Tool |
|---------------------|------------------------|
| Fingerprint only    | 1                      |
| Wallet verified     | 3                      |

## Endpoints

- **Gateway**: `https://x402-base.rugmuncher.workers.dev`
- **Tools**: `POST /api/v1/x402-tools/{tool_name}`
- **OpenAI format**: `GET /api/v1/x402-tools/openai-tools`
- **Anthropic format**: `GET /api/v1/x402-tools/anthropic-tools`
- **LangChain format**: `GET /api/v1/x402-tools/langchain-tools`
- **Gemini format**: `GET /api/v1/x402-tools/gemini-tools`
- **Catalog**: `GET /api/v1/x402/tools-catalog`
- **Discovery**: `GET /.well-known/x402`

## Payment Address (EVM)

```
0x1E3AC01d0fdb976179790BDD02823196A92705C9
```

## Part of Rug Munch Intelligence

This gateway is one piece of the full platform:

- **Web Terminal** — [rugmunch.io](https://rugmunch.io)
- **MCP Server** — [rug-munch-intelligence-mcp](https://github.com/Rug-Munch-Media-LLC/rug-munch-intelligence-mcp) (221 tools for AI agents)
- **Token Scanner** — [github.com/Rug-Munch-Media-LLC/token-scanner](https://github.com/Rug-Munch-Media-LLC/token-scanner)
- **Wallet Scanner** — [github.com/Rug-Munch-Media-LLC/wallet-scanner](https://github.com/Rug-Munch-Media-LLC/wallet-scanner)
- **RugCharts** — [github.com/Rug-Munch-Media-LLC/rugcharts](https://github.com/Rug-Munch-Media-LLC/rugcharts)
- **x402 Gateway (Solana)** — [github.com/Rug-Munch-Media-LLC/x402-gateway-solana](https://github.com/Rug-Munch-Media-LLC/x402-gateway-solana)
- **Telegram Bot** — [@rugmunchbot](https://t.me/rugmunchbot)

## License

Proprietary — Copyright 2026 Rug Munch Media LLC. All rights reserved.
