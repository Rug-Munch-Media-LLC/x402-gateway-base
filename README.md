# Rug Munch Intelligence — x402 Gateway (Base + EVM Chains)

## Overview

This Cloudflare Worker handles x402 USDC micropayments across Base and other EVM chains. It self-verifies on-chain Etherscan USDC receipts and routes paid requests to the Rug Munch Intelligence backend.

**97 tools** are available via this gateway.

## Supported Chains

| Chain     | Symbol |
|-----------|--------|
| Base      | BASE   |
| Ethereum  | ETH    |
| BSC       | BSC    |
| Arbitrum  | ARB    |
| Optimism  | OP     |
| Polygon   | MATIC  |

## Payment Flow

```
Client                                Worker                              Backend
  |                                      |                                    |
  |  request + X-Payment-Authorization   |                                    |
  |------------------------------------->|                                    |
  |                                      |  verify via Etherscan API          |
  |                                      |  (on-chain USDC receipt check)     |
  |                                      |                                    |
  |                                      |  forward verified request          |
  |                                      |----------------------------------->|
  |                                      |                                    |
  |                                      |         result                     |
  |                                      |<-----------------------------------|
  |            result                     |                                    |
  |<-------------------------------------|                                    |
```

1. Client sends a request with the `X-Payment-Authorization` header.
2. The Worker verifies the payment by checking the on-chain USDC transaction via the Etherscan API.
3. If verified, the Worker forwards the request to the backend.
4. The backend processes the request and returns the result through the Worker to the client.

## Trial Access

| Verification Level  | Free Requests |
|---------------------|---------------|
| Fingerprint only    | 1             |
| Wallet verified     | 3             |

After trial requests are consumed, a valid x402 USDC micropayment is required per request.

## Worker Endpoint

```
https://x402-base.rugmuncher.workers.dev
```

## Payment Address (EVM)

```
0x1E3AC01d0fdb976179790BDD02823196A92705C9
```

## Frontend

```
https://rmi-site.pages.dev
```

---

## RugCharts — The DexScreener Killer

Rug Munch Intelligence includes **RugCharts**, a next-generation charting and analytics platform that outperforms DexScreener:

- **Live trades streaming** — watch buys and sells hit the tape in real time
- **TA bot analysis** — automated technical analysis signals overlaid directly on charts
- **Professional charting** — candlesticks, order flow, volume profile, and more
- **Multi-chain coverage** — trade visualization across all supported chains
- **Scam detection built in** — every token is scored for rug-pull risk before it even renders

RugCharts delivers a better product than DexScreener with fraud detection baked in from the ground up. No more trading into a black hole — know what you're buying before you buy it.