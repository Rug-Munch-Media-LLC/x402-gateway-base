# Rug Munch Intelligence — x402 Gateway (Base + EVM)

## What This Is

This Cloudflare Worker is the **x402 payment gateway** for Rug Munch Intelligence on Base, Ethereum, BSC, Arbitrum, Optimism, and Polygon. It sits between clients and the backend, enforcing per-call USDC micropayments before forwarding requests.

This is infrastructure — not a standalone product. All 97 tools live in the [RMI backend](https://github.com/Rug-Munch-Media-LLC/rug-munch-intelligence-mcp). This worker just handles the money.

## Architecture

```
Client (MCP / HTTP / App)
  │
  ▼
x402 Gateway (this worker)  ◄── checks USDC payment or trial balance
  │
  ▼
RMI Backend (97 tools)      ◄── actual intelligence processing
```

- **MCP clients** (Claude Desktop, Cursor) connect via the [rug-munch-intelligence-mcp](https://github.com/Rug-Munch-Media-LLC/rug-munch-intelligence-mcp) package, which calls this gateway
- **HTTP clients** (curl, bots, apps) call this gateway directly at `POST /api/v1/x402-tools/{tool}`
- **Web app** at [rugmunch.io](https://rugmunch.io) calls through this gateway

Same backend, same tools, same payment — regardless of how you access it.

## Supported Chains

| Chain     | Symbol | Verification Method |
|-----------|--------|-------------------|
| Base      | BASE   | Self-verified (Etherscan on-chain USDC receipt) |
| Ethereum  | ETH    | Self-verified |
| BSC       | BSC    | Self-verified |
| Arbitrum  | ARB   | Self-verified |
| Optimism  | OP    | Self-verified |
| Polygon   | POL   | Self-verified |

## Payment Flow

```
Client                              Gateway                             Backend
  │                                    │                                   │
  │  request + X-Payment-Authorization │                                   │
  │───────────────────────────────────►│                                   │
  │                                    │  verify USDC via Etherscan API      │
  │                                    │  or check trial balance            │
  │                                    │                                   │
  │                                    │  forward verified request          │
  │                                    │──────────────────────────────────►│
  │                                    │                                   │
  │                                    │           result                   │
  │                                    │◄──────────────────────────────────│
  │           result                    │                                   │
  │◄───────────────────────────────────│                                   │
```

1. Client sends a request with the `X-Payment-Authorization` header
2. Gateway verifies the USDC payment on-chain via Etherscan, or checks trial balance
3. If valid, forwards the request to the backend
4. Backend returns result through the gateway

## Trial Access

| Verification Level  | Free Requests per Tool |
|---------------------|----------------------|
| Fingerprint only    | 1                    |
| Wallet verified     | 3                    |

After trial requests are consumed, a valid x402 USDC micropayment is required per request.

## Endpoints

- **Gateway**: `https://x402-base.rugmuncher.workers.dev`
- **Tools**: `POST /api/v1/x402-tools/{tool_name}`
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