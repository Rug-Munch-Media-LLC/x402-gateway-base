# Rug Munch Intelligence — x402 Gateway (Base + EVM)

## What This Is

This Cloudflare Worker is the **x402 payment gateway** for Rug Munch Intelligence on Base, Ethereum, BSC, Arbitrum, Optimism, and Polygon. It enforces per-call USDC micropayments before forwarding requests to the backend.

This is infrastructure — not a standalone product. All 97 tools live in the [RMI backend](https://github.com/Rug-Munch-Media-LLC/rug-munch-intelligence-mcp). This worker just handles the money.

## Architecture

```
Client (MCP / OpenAI / LangChain / HTTP / App)
  │
  ▼
x402 Gateway (this worker)  ◄── checks USDC payment or trial balance
  │
  ▼
RMI Backend (97 tools)      ◄── actual intelligence processing
```

- **MCP clients** (Claude Desktop, Cursor) connect via the [rug-munch-intelligence-mcp](https://github.com/Rug-Munch-Media-LLC/rug-munch-intelligence-mcp) package
- **OpenAI / Anthropic / Gemini / LangChain** — fetch tool schemas directly, call via HTTP
- **HTTP clients** (curl, bots, apps) call this gateway directly
- **Web app** at [rugmunch.io](https://rugmunch.io) calls through this gateway

Same backend, same tools, same payment — regardless of how you access it.

## Payment Verification

**Base** — verified via PayAI facilitator (fast, federated)

**Ethereum, BSC, Arbitrum, Optimism, Polygon** — self-verified via local EIP-712 cryptographic verification. The worker checks the on-chain USDC receipt via Etherscan API. No external facilitator needed — pure cryptographic proof.

```
Client                              Gateway                             Backend
  │                                    │                                   │
  │  request + X-Payment-Authorization │                                   │
  │───────────────────────────────────►│                                   │
  │                                    │  Base: PayAI facilitator           │
  │                                    │  EVM: self-verify via Etherscan   │
  │                                    │  or check trial balance           │
  │                                    │                                   │
  │                                    │  forward verified request         │
  │                                    │──────────────────────────────────►│
  │                                    │                                   │
  │                                    │           result                   │
  │                                    │◄──────────────────────────────────│
  │           result                    │                                   │
  │◄───────────────────────────────────│                                   │
```

## Supported Chains

| Chain     | Symbol | Verification Method |
|-----------|--------|-------------------|
| Base      | BASE   | PayAI facilitator |
| Ethereum  | ETH    | Self-verified (EIP-712 + Etherscan) |
| BSC       | BSC    | Self-verified |
| Arbitrum  | ARB   | Self-verified |
| Optimism  | OP    | Self-verified |
| Polygon   | POL   | Self-verified |

## Trial Access

| Verification Level  | Free Requests per Tool |
|---------------------|----------------------|
| Fingerprint only    | 1                    |
| Wallet verified     | 3                    |

## Endpoints

- **Gateway**: `https://x402-base.rugmuncher.workers.dev`
- **Tools**: `POST /api/v1/x402-tools/{tool_name}`
- **OpenAI format**: `GET /api/v1/x402-tools/openai-tools`
- **Anthropic format**: `GET /api/v1/x402-tools/anthropic-tools`
- **LangChain format**: `GET /api/v1/x402-tools/langchain-tools`
- **Gemini format**: `GET /api/v1/x402-tools/gemini-tools`
- **Catalog**: `GET /api/v1/x402/tools-catalog`
- **Dashboard**: `GET /api/v1/x402/dashboard`
- **Discovery**: `GET /.well-known/x402`

## Payment Address (EVM)

```
0x1E3AC01d0fdb976179790BDD02823196A92705C9
```

## Related

- [rug-munch-intelligence-mcp](https://github.com/Rug-Munch-Media-LLC/rug-munch-intelligence-mcp) — MCP client for AI agents (97 tools)
- [x402-gateway-solana](https://github.com/Rug-Munch-Media-LLC/x402-gateway-solana) — Solana payment gateway
- [rugcharts](https://github.com/Rug-Munch-Media-LLC/rugcharts) — Professional charting & TA analysis
- [rugmunch.io](https://rugmunch.io) — Web app

## License

Proprietary — Copyright 2026 Rug Munch Media LLC. All rights reserved.