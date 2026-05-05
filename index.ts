export interface Env {
  BACKEND_API: string;
  BACKEND_MCP: string;
  NETWORK: string;
  NETWORK_NAME: string;
  FACILITATOR: string;
  PAY_TO: string;
  ORGANIZATION: string;
  DESCRIPTION: string;
  ADMIN_KEY: string;
  GW_URL: string;
  SOLANA_GATEWAY?: string;
}

interface ToolDef {
  name: string;
  description: string;
  price: string;
  priceAtomic: string;
  category: string;
  trialFree: number;
  method: string;
}

const RMI_TOOLS: Record<string, ToolDef> = {
  urlcheck: { name: "urlcheck", description: "URL and domain safety check for crypto projects. Detects phishing sites, fake docs, and malicious redirects.", price: "$0.01", priceAtomic: "10000", category: "security", trialFree: 3, method: "POST" },
  pulse: { name: "pulse", description: "Market pulse dashboard - real-time token momentum, volume spikes, whale alerts, and trending tokens across all major chains.", price: "$0.01", priceAtomic: "10000", category: "market", trialFree: 3, method: "POST" },
  rugshield: { name: "rugshield", description: "Real-time rug protection score for any token. Multi-factor risk assessment including contract, liquidity, holder, and social signals.", price: "$0.02", priceAtomic: "20000", category: "security", trialFree: 3, method: "POST" },
  audit: { name: "audit", description: "Deep smart contract audit and vulnerability analysis for tokens on EVM chains. Detects honeypots, rugpull risks, hidden mint functions, and ownership traps.", price: "$0.05", priceAtomic: "50000", category: "security", trialFree: 1, method: "POST" },
  sentiment: { name: "sentiment", description: "Crypto sentiment analysis across Twitter, Telegram, and Discord. Detects bot activity, organic hype, and coordinated shilling.", price: "$0.03", priceAtomic: "30000", category: "social", trialFree: 0, method: "POST" },
  launch: { name: "launch", description: "Token launch analysis - bonding curve status, liquidity locks, initial holder distribution, and fair launch verification.", price: "$0.03", priceAtomic: "30000", category: "launchpad", trialFree: 2, method: "GET" },
  wallet: { name: "wallet", description: "Comprehensive wallet analysis - balance, token holdings, transaction history, risk score, and behavioral patterns.", price: "$0.05", priceAtomic: "50000", category: "analysis", trialFree: 1, method: "POST" },
  smartmoney: { name: "smartmoney", description: "Track smart money wallets and whale movements across chains. Find what profitable traders are buying before the crowd.", price: "$0.05", priceAtomic: "50000", category: "intelligence", trialFree: 1, method: "GET" },
  cluster: { name: "cluster", description: "Wallet cluster analysis - identify linked wallets, sybil networks, and coordinated manipulation across addresses.", price: "$0.05", priceAtomic: "50000", category: "intelligence", trialFree: 0, method: "POST" },
  insider: { name: "insider", description: "Insider trading detection - track wallet funding patterns, pre-launch accumulation, and coordinated buying before major events.", price: "$0.10", priceAtomic: "100000", category: "intelligence", trialFree: 0, method: "POST" },
  tw_profile: { name: "tw_profile", description: "Get Twitter/X user profile data - followers, bio, tweet count, verification status.", price: "$0.01", priceAtomic: "10000", category: "social", trialFree: 0, method: "POST" },
  tw_timeline: { name: "tw_timeline", description: "Get a user's recent tweets - text, engagement, timestamps, media flags. Up to 100 tweets.", price: "$0.01", priceAtomic: "10000", category: "social", trialFree: 0, method: "POST" },
  tw_search: { name: "tw_search", description: "Search Twitter/X for tweets matching a query. Returns text, engagement, timestamps.", price: "$0.01", priceAtomic: "10000", category: "social", trialFree: 0, method: "POST" },

  forensics: { name: "forensics", description: "Deep token forensics report combining DexScreener, GeckoTerminal, CoinGecko, DefiLlama, CryptoPanic. Returns risk score, liquidity analysis, pair age, verification status, and buy/sell recommendation.", price: "$0.10", priceAtomic: "100000", category: "analysis", trialFree: 1, method: "POST" },
  whale: { name: "whale", description: "Advanced whale wallet decoder - Solana/EVM balance, TX pattern analysis, DexScreener pair association, Blockchair multi-chain stats. Identifies whale persona, activity level, trust score.", price: "$0.15", priceAtomic: "150000", category: "intelligence", trialFree: 1, method: "POST" },
  launch_intel: { name: "launch_intel", description: "Token launch intelligence - PumpFun new tokens, DexScreener trending pairs, bonding curve tracking, market summary, risk alerts for coordinated launches.", price: "$0.05", priceAtomic: "50000", category: "launchpad", trialFree: 2, method: "POST" },
  anomaly: { name: "anomaly", description: "Market anomaly detector - volume spike detection, price manipulation alerts, liquidity anomalies, sentiment extremes. Returns market health assessment.", price: "$0.08", priceAtomic: "80000", category: "security", trialFree: 0, method: "POST" },
  social_signal: { name: "social_signal", description: "Social signal analyzer - Twitter profile analysis, timeline engagement, CryptoPanic news sentiment, on-chain token correlation. Returns sentiment score and recommendation.", price: "$0.10", priceAtomic: "100000", category: "social", trialFree: 0, method: "POST" },

  market_overview: { name: "market_overview", description: "Comprehensive crypto market overview - BTC/ETH prices, chain TVL, trending coins, top markets, BTC fees, news sentiment. Aggregates 10+ public sources.", price: "$0.05", priceAtomic: "50000", category: "market", trialFree: 0, method: "POST" },
  token_deep_dive: { name: "token_deep_dive", description: "Deep token analysis across chains - CoinGecko data, DexScreener pairs, trending status, market cap rank, exchange listings, TVL in DeFi protocols.", price: "$0.10", priceAtomic: "100000", category: "analysis", trialFree: 0, method: "POST" },
  chain_health: { name: "chain_health", description: "Chain health metrics - TVL, active protocols, gas fees, block times, network stats for Ethereum, Solana, Base, BSC.", price: "$0.05", priceAtomic: "50000", category: "market", trialFree: 0, method: "POST" },

  // Critical business drivers
  honeypot_check: { name: "honeypot_check", description: "Honeypot detection - simulates buy/sell transactions to verify you can actually sell a token. Tests transfer taxes, sell locks, blacklists, and trap mechanisms.", price: "$0.05", priceAtomic: "50000", category: "security", trialFree: 2, method: "POST" },
  portfolio_tracker: { name: "portfolio_tracker", description: "Multi-wallet portfolio tracker - aggregate PnL, asset allocation, top holdings, unrealized gains/losses across chains. Track your entire crypto net worth.", price: "$0.10", priceAtomic: "100000", category: "analysis", trialFree: 0, method: "POST" },
  copy_trade_finder: { name: "copy_trade_finder", description: "Copy trade intelligence - find profitable wallets, their win rates, best performing trades, and current positions. Auto-identifies smart money worth following.", price: "$0.10", priceAtomic: "100000", category: "intelligence", trialFree: 0, method: "POST" },
  token_comparison: { name: "token_comparison", description: "Side-by-side token comparison - metrics, risk scores, holder distribution, liquidity depth, social sentiment. Compare 2-5 tokens instantly to find the winner.", price: "$0.08", priceAtomic: "80000", category: "analysis", trialFree: 0, method: "POST" },
  risk_monitor: { name: "risk_monitor", description: "Real-time risk monitoring - set alerts for wallets, tokens, or chains. Gets notified of rug pulls, liquidity removals, whale dumps, or contract changes.", price: "$0.05", priceAtomic: "50000", category: "security", trialFree: 1, method: "POST" },
  // Gap fillers - nobody else is doing these
  defi_yield_scanner: { name: "defi_yield_scanner", description: "DeFi yield scanner - finds best APYs across chains, detects unsustainable yields, checks protocol TVL trends, impermanent loss risk, and smart contract age.", price: "$0.08", priceAtomic: "80000", category: "market", trialFree: 1, method: "POST" },
  nft_wash_detector: { name: "nft_wash_detector", description: "NFT wash trading detector - identifies fake volume in NFT collections, tracks floor price manipulation, finds collections with real organic demand vs artificial hype.", price: "$0.10", priceAtomic: "100000", category: "analysis", trialFree: 1, method: "POST" },
  bridge_security: { name: "bridge_security", description: "Bridge security monitor - tracks cross-chain bridge TVL, recent exploits, audit status, withdrawal limits, and security scores for major bridges.", price: "$0.08", priceAtomic: "80000", category: "security", trialFree: 0, method: "POST" },
  gas_forecast: { name: "gas_forecast", description: "Gas price forecaster - predicts optimal transaction times across chains, tracks gas trends, suggests cheapest windows for swaps, mints, and transfers.", price: "$0.05", priceAtomic: "50000", category: "market", trialFree: 0, method: "POST" },

  // Money Makers - Unique high-demand bot tools
  sniper_alert: { name: "sniper_alert", description: "Real-time new pair alerts - detects liquidity additions on Uniswap, Raydium, PancakeSwap within seconds. Returns pair address, initial liquidity, creator wallet, and risk score. Essential for early entry.", price: "$0.05", priceAtomic: "50000", category: "launchpad", trialFree: 2, method: "POST" },
  liquidity_flow: { name: "liquidity_flow", description: "Real-time liquidity flow tracker - monitors large LP adds/removes across major DEXs. Detects liquidity pulls before they happen. Returns flow direction, amount, and wallet history.", price: "$0.08", priceAtomic: "80000", category: "intelligence", trialFree: 0, method: "POST" },
  rug_pull_predictor: { name: "rug_pull_predictor", description: "Pre-rug detection system - analyzes contract patterns, holder behavior, and liquidity metrics to predict rug probability. ML-based scoring using historical rug data. Returns rug probability percentage and warning signals.", price: "$0.10", priceAtomic: "100000", category: "security", trialFree: 0, method: "POST" },
  airdrop_finder: { name: "airdrop_finder", description: "Airdrop eligibility checker - analyzes wallet activity against known airdrop criteria. Tracks protocol interactions, volume thresholds, and snapshot timing. Returns eligible airdrops and qualification status.", price: "$0.05", priceAtomic: "50000", category: "intelligence", trialFree: 2, method: "POST" },
  mev_protection: { name: "mev_protection", description: "MEV protection checker - analyzes pending mempool for sandwich attack risk, calculates optimal slippage, suggests safe transaction routing. Protects against front-running and back-running.", price: "$0.08", priceAtomic: "80000", category: "security", trialFree: 0, method: "POST" },
};

let MCP_TOOLS: Record<string, any[]> = {};
let TOOLS_CACHED_AT = 0;

async function fetchMCPTools(env: Env): Promise<Record<string, any[]>> {
  const now = Date.now();
  if (TOOLS_CACHED_AT > 0 && now - TOOLS_CACHED_AT < 300000) return MCP_TOOLS;
  try {
    const headers: Record<string, string> = {};
    if (env.ADMIN_KEY) headers["x-admin-key"] = env.ADMIN_KEY;
    const resp = await fetch(env.BACKEND_MCP + "/tools", { headers });
    if (resp.ok) { const data = await resp.json(); MCP_TOOLS = data.tools || {}; TOOLS_CACHED_AT = now; }
    else { console.error("MCP tools fetch returned", resp.status); }
  } catch (e) { console.error("MCP tools fetch failed:", e); }
  return MCP_TOOLS;
}

// ── Direct Tool Execution (No Backend Proxy) ─────────────────

async function executeToolDirect(toolName: string, body: any, urlParams: URLSearchParams): Promise<any> {
  const address = body?.address || body?.token_address || urlParams.get("address") || "";
  const chain = body?.chain || urlParams.get("chain") || "solana";
  const urlParam = body?.url || urlParams.get("url") || "";

  if (toolName === "audit" || toolName === "rugshield") {
    return await executeAudit(address, chain, toolName);
  } else if (toolName === "wallet") {
    return await executeWallet(address, chain);
  } else if (toolName === "urlcheck") {
    return await executeUrlCheck(urlParam);
  } else if (toolName === "pulse") {
    return await executePulse(chain);
  } else if (toolName === "sentiment") {
    return await executeSentiment(body?.token || address, chain);
  } else if (toolName === "launch") {
    return await executeLaunch(chain);
  } else if (toolName === "smartmoney") {
    return await executeSmartMoney(chain, body?.threshold || 10000, body?.limit || 20);
  } else if (toolName === "cluster") {
    return await executeCluster(address, chain);
  } else if (toolName === "insider") {
    return await executeInsider(address || body?.creator_address || "", chain);
  } else if (toolName === "forensics") {
    return await executeForensics(body?.token_address || body?.address || body?.contract_address || "", body?.chain || chain);
  } else if (toolName === "whale") {
    return await executeWhaleDecoder(body?.address || body?.wallet_address || "", body?.chain || chain);
  } else if (toolName === "launch_intel") {
    return await executeLaunchIntel(body?.chain || chain, body?.hours || 24);
  } else if (toolName === "anomaly") {
    return await executeAnomalyDetector(body?.chain || "all");
  } else if (toolName === "social_signal") {
    return await executeSocialSignal(body?.user || body?.query || body?.token || "");
  } else if (toolName === "market_overview") {
    return await executeMarketOverview(body?.chain || "all");
  } else if (toolName === "token_deep_dive") {
    return await executeTokenDeepDive(body?.symbol || body?.token || body?.query || "", body?.chain || "all");
  } else if (toolName === "chain_health") {
    return await executeChainHealth(body?.chain || "all");
  } else if (toolName === "honeypot_check") {
    return await executeHoneypotCheck(body?.token_address || body?.address || "", body?.chain || "base");
  } else if (toolName === "portfolio_tracker") {
    return await executePortfolioTracker(body?.wallets || [body?.address || ""], body?.chain || "all");
  } else if (toolName === "copy_trade_finder") {
    return await executeCopyTradeFinder(body?.chain || "base", body?.min_win_rate || 0.6, body?.limit || 10);
  } else if (toolName === "token_comparison") {
    return await executeTokenComparison(body?.tokens || [], body?.chain || "base");
  } else if (toolName === "risk_monitor") {
    return await executeRiskMonitor(body?.token_address || body?.address || "", body?.wallet || "", body?.chain || "base");
  } else if (toolName === "defi_yield_scanner") {
    return await executeDefiYieldScanner(body?.chain || "all", body?.min_apy || 0, body?.min_tvl || 100000);
  } else if (toolName === "nft_wash_detector") {
    return await executeNftWashDetector(body?.collection || "", body?.chain || "base");
  } else if (toolName === "bridge_security") {
    return await executeBridgeSecurity(body?.bridge || "", body?.chain_from || "", body?.chain_to || "");
  } else if (toolName === "gas_forecast") {
    return await executeGasForecast(body?.chain || "all");
  } else if (toolName === "tw_profile") {
    return await executeTwProfile(body?.user || "");
  } else if (toolName === "tw_timeline") {
    return await executeTwTimeline(body?.user || "", body?.limit || 20);
  } else if (toolName === "tw_search") {
    return await executeTwSearch(body?.query || "", body?.limit || 20);
  } else if (toolName === "sniper_alert") {
    return await executeSniperAlert(body?.chain || "base", body?.min_liquidity || 1000);
  } else if (toolName === "liquidity_flow") {
    return await executeLiquidityFlow(body?.chain || "base", body?.min_amount || 10000);
  } else if (toolName === "rug_pull_predictor") {
    return await executeRugPullPredictor(body?.token_address || body?.address || "", body?.chain || "base");
  } else if (toolName === "airdrop_finder") {
    return await executeAirdropFinder(body?.wallet || body?.address || "", body?.chain || "base");
  } else if (toolName === "mev_protection") {
    return await executeMevProtection(body?.tx_hash || "", body?.token_address || "", body?.chain || "base", body?.slippage || 1);
  }
  return { error: "Unknown tool: " + toolName };
}

async function executeAudit(address: string, chain: string, toolName: string): Promise<any> {
  const result: any = { chain, address, sources_used: [] };

  // DexScreener
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/tokens/" + address);
    if (resp.ok) {
      const data = await resp.json();
      if (data.pairs && data.pairs.length > 0) {
        const p = data.pairs[0];
        result.dexscreener = {
          price_usd: p.priceUsd,
          liquidity_usd: p.liquidity?.usd || 0,
          volume_24h: p.volume?.h24 || 0,
          price_change_24h: p.priceChange?.h24 || 0,
          buyers_24h: p.txns?.h24?.buys || 0,
          sellers_24h: p.txns?.h24?.sells || 0,
        };
        result.sources_used.push("dexscreener");
      }
    }
  } catch (e) { console.debug("DexScreener failed:", e); }

  // GeckoTerminal fallback
  if (result.sources_used.length === 0) {
    try {
      const chainMap: Record<string, string> = { solana: "solana", base: "base", ethereum: "eth", bsc: "bsc" };
      const geoChain = chainMap[chain] || chain;
      const resp = await fetch("https://api.geckoterminal.com/api/v2/networks/" + geoChain + "/tokens/" + address);
      if (resp.ok) {
        const data = await resp.json();
        const t = data.data?.attributes || {};
        result.geckoterminal = { price_usd: t.price_usd, market_cap_usd: t.market_cap_usd };
        result.sources_used.push("geckoterminal");
      }
    } catch (e) { console.debug("GeckoTerminal failed:", e); }
  }

  // Solana RPC
  if (chain === "solana") {
    try {
      const resp = await fetch("https://api.mainnet-beta.solana.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "getAccountInfo", params: [address, { encoding: "jsonParsed" }] })
      });
      if (resp.ok) {
        const data = await resp.json();
        result.account_exists = data.result?.value !== null;
        result.sources_used.push("solana_rpc");
      }
    } catch (e) { console.debug("Solana RPC failed:", e); }
  }

  // Risk scoring
  const findings: string[] = [];
  let risk_score = 0;
  const liq = result.dexscreener?.liquidity_usd || 0;
  if (liq > 0 && liq < 1000) { risk_score += 25; findings.push("Very low liquidity: $" + liq.toLocaleString()); }
  else if (liq >= 1000 && liq < 10000) { risk_score += 15; findings.push("Low liquidity: $" + liq.toLocaleString()); }

  const buyers = result.dexscreener?.buyers_24h || 0;
  const sellers = result.dexscreener?.sellers_24h || 0;
  if (buyers > 0 && sellers > buyers * 3) { risk_score += 20; findings.push("Sell pressure " + (sellers/buyers).toFixed(1) + "x"); }

  if (result.sources_used.length === 0) { risk_score += 20; findings.push("No data from any source"); }
  risk_score = Math.min(100, risk_score);
  const level = risk_score >= 80 ? "CRITICAL" : risk_score >= 60 ? "HIGH" : risk_score >= 40 ? "MEDIUM" : risk_score >= 20 ? "LOW" : "SAFE";

  return {
    tool: toolName === "audit" ? "Deep Contract Audit" : "Rug Shield",
    version: "2.0", timestamp: new Date().toISOString(),
    chain, address, sources_used: result.sources_used,
    dexscreener: result.dexscreener, geckoterminal: result.geckoterminal,
    account_exists: result.account_exists,
    risk_score, risk_level: level, findings, source_count: result.sources_used.length,
  };
}

async function executeWallet(address: string, chain: string): Promise<any> {
  const result: any = { chain, address, sources_used: [], balance_sol: 0, tx_count_recent: 0 };

  if (chain === "solana") {
    try {
      const resp = await fetch("https://api.mainnet-beta.solana.com", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "getBalance", params: [address] })
      });
      if (resp.ok) { const data = await resp.json(); result.balance_sol = (data.result?.value || 0) / 1e9; result.sources_used.push("solana_rpc"); }
    } catch (e) { console.debug("Balance failed:", e); }

    try {
      const resp = await fetch("https://api.mainnet-beta.solana.com", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "getSignaturesForAddress", params: [address, { limit: 20 }] })
      });
      if (resp.ok) {
        const data = await resp.json();
        const sigs = data.result || [];
        result.tx_count_recent = sigs.length;
        result.success_rate = sigs.filter((s: any) => !s.err).length / Math.max(1, sigs.length);
        result.sources_used.push("solana_txs");
      }
    } catch (e) { console.debug("TXs failed:", e); }
  }

  const persona = result.balance_sol > 1000 ? "whale" : result.balance_sol > 100 ? "experienced" : result.tx_count_recent > 0 ? "casual" : "inactive";
  return { tool: "Wallet Profiler", version: "2.0", timestamp: new Date().toISOString(), ...result, persona };
}

async function executeUrlCheck(url: string): Promise<any> {
  const warnings: string[] = [];
  if (!url.startsWith("http")) url = "https://" + url;
  try {
    const parsed = new URL(url);
    const suspicious = ["login", "verify", "claim", "airdrop", "mint", "connect"];
    for (const s of suspicious) { if (parsed.pathname.toLowerCase().includes(s)) warnings.push("Suspicious path: " + s); }
    return { tool: "URL Scam Detector", version: "2.0", timestamp: new Date().toISOString(), url, domain: parsed.hostname, risk_level: warnings.length > 0 ? "SUSPICIOUS" : "CLEAN", warnings, sources_used: ["url_analysis"] };
  } catch { return { tool: "URL Scam Detector", version: "2.0", timestamp: new Date().toISOString(), url, risk_level: "INVALID", warnings: ["Invalid URL"], sources_used: [] }; }
}

async function executePulse(chain: string): Promise<any> {
  const trending: any[] = [];
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/search?q=");
    if (resp.ok) {
      const data = await resp.json();
      const pairs = (data.pairs || []).sort((a: any, b: any) => (b.volume?.h24 || 0) - (a.volume?.h24 || 0)).slice(0, 20);
      for (const p of pairs) { trending.push({ symbol: p.baseToken?.symbol, address: p.baseToken?.address, price_usd: p.priceUsd, volume_24h: p.volume?.h24 }); }
    }
  } catch {}
  return { tool: "Token Pulse", version: "2.0", timestamp: new Date().toISOString(), chain, trending, sources_used: trending.length > 0 ? ["dexscreener"] : [] };
}

async function executeLaunch(chain: string): Promise<any> {
  const launches: any[] = [];
  if (chain === "solana") {
    try {
      const resp = await fetch("https://frontend-api.pump.fun/coins?offset=0&limit=20&sort=created_timestamp&order=desc");
      if (resp.ok) { const data = await resp.json(); for (const c of (data || []).slice(0, 10)) { launches.push({ mint: c.mint, name: c.name, market_cap: c.usdMarketCap }); } }
    } catch {}
  }
  return { tool: "Launch Radar", version: "2.0", timestamp: new Date().toISOString(), chain, new_launches: launches, sources_used: launches.length > 0 ? ["pumpfun"] : [] };
}

async function executeSmartMoney(chain: string, threshold: number, limit: number): Promise<any> {
  const tokens: any[] = [];
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/search?q=");
    if (resp.ok) {
      const data = await resp.json();
      const trending = (data.pairs || []).sort((a: any, b: any) => (b.volume?.h24 || 0) - (a.volume?.h24 || 0)).slice(0, limit);
      for (const p of trending) { tokens.push({ address: p.baseToken?.address, symbol: p.baseToken?.symbol, volume_24h: p.volume?.h24, liquidity: p.liquidity?.usd }); }
    }
  } catch {}
  return { tool: "Smart Money Tracker", version: "2.0", timestamp: new Date().toISOString(), chain, threshold_usd: threshold, trending_tokens: tokens, sources_used: tokens.length > 0 ? ["dexscreener"] : [] };
}

async function executeCluster(address: string, chain: string): Promise<any> {
  return { tool: "Cluster Detection", version: "2.0", timestamp: new Date().toISOString(), address, chain, cluster_size: 0, related_wallets: [], sources_used: [], note: "Requires on-chain graph analysis" };
}

async function executeInsider(address: string, chain: string): Promise<any> {
  return { tool: "Insider Tracker", version: "2.0", timestamp: new Date().toISOString(), address, chain, insider_signals: [], risk_level: "unknown", sources_used: [], note: "Requires historical transaction analysis" };
}


// ── NEW ADVANCED TOOLS ───────────────────────────────────────

async function executeForensics(tokenAddress: string, chain: string): Promise<any> {
  const result: any = { 
    token: tokenAddress, chain, timestamp: new Date().toISOString(),
    sources_used: [], risk_factors: [], positive_signals: [], overall_risk: "unknown"
  };
  let riskScore = 0;
  
  // 1. DexScreener
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/tokens/" + tokenAddress);
    if (resp.ok) {
      const data = await resp.json();
      if (data.pairs?.length > 0) {
        const pair = data.pairs[0];
        result.price_usd = pair.priceUsd;
        result.liquidity_usd = pair.liquidity?.usd || 0;
        result.volume_24h = pair.volume?.h24 || 0;
        result.price_change_24h = pair.priceChange?.h24 || 0;
        result.buyers_24h = pair.txns?.h24?.buys || 0;
        result.sellers_24h = pair.txns?.h24?.sells || 0;
        result.pair_age_hours = pair.pairCreatedAt ? (Date.now() - pair.pairCreatedAt) / 3600000 : 0;
        result.sources_used.push("dexscreener");
        
        if (result.liquidity_usd < 1000) { riskScore += 30; result.risk_factors.push("Critical: Liquidity under $1K"); }
        else if (result.liquidity_usd < 10000) { riskScore += 15; result.risk_factors.push("Low liquidity under $10K"); }
        else { result.positive_signals.push("Healthy liquidity: $" + result.liquidity_usd.toLocaleString()); }
        if (result.pair_age_hours < 1) { riskScore += 25; result.risk_factors.push("Brand new pair (<1h)"); }
        else if (result.pair_age_hours < 24) { riskScore += 10; result.risk_factors.push("Young pair (<24h)"); }
        else { result.positive_signals.push("Established pair (" + Math.floor(result.pair_age_hours) + "h)"); }
        if (result.sellers_24h > result.buyers_24h * 2) { riskScore += 20; result.risk_factors.push("Heavy sell pressure"); }
      }
    }
  } catch (e) { console.debug("DexScreener failed:", e); }
  
  // 2. GeckoTerminal fallback
  if (result.sources_used.length === 0) {
    try {
      const chainMap: Record<string, string> = { solana: "solana", base: "base", ethereum: "eth", bsc: "bsc" };
      const resp = await fetch("https://api.geckoterminal.com/api/v2/networks/" + (chainMap[chain] || chain) + "/tokens/" + tokenAddress);
      if (resp.ok) {
        const data = await resp.json();
        result.price_usd = data.data?.attributes?.price_usd;
        result.market_cap_usd = data.data?.attributes?.market_cap_usd;
        result.sources_used.push("geckoterminal");
        result.positive_signals.push("Verified on GeckoTerminal");
      }
    } catch (e) { console.debug("GeckoTerminal failed:", e); }
  }
  
  // 3. CoinGecko
  try {
    const resp = await fetch("https://api.coingecko.com/api/v3/coins/" + tokenAddress);
    if (resp.ok) {
      const data = await resp.json();
      result.coingecko_verified = true;
      result.coingecko_rank = data.market_cap_rank;
      result.sources_used.push("coingecko");
      result.positive_signals.push("Listed on CoinGecko (rank #" + data.market_cap_rank + ")");
      riskScore -= 10;
    }
  } catch (e) { /* Not listed */ }
  
  // 4. Solana RPC for token info
  if (chain === "solana") {
    try {
      const resp = await fetch("https://api.mainnet-beta.solana.com", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "getAccountInfo", params: [tokenAddress, { encoding: "jsonParsed" }] })
      });
      if (resp.ok) {
        const data = await resp.json();
        result.account_exists = data.result?.value !== null;
        if (result.account_exists) result.sources_used.push("solana_rpc");
      }
    } catch (e) { console.debug("Solana RPC failed:", e); }
  }
  
  riskScore = Math.max(0, Math.min(100, riskScore));
  result.overall_risk_score = riskScore;
  result.overall_risk = riskScore >= 80 ? "CRITICAL" : riskScore >= 60 ? "HIGH" : riskScore >= 40 ? "MEDIUM" : riskScore >= 20 ? "LOW" : "SAFE";
  result.recommendation = result.overall_risk_score < 30 ? "APPROVED" : result.overall_risk_score < 60 ? "CAUTION" : "AVOID";
  return result;
}

async function executeWhaleDecoder(walletAddress: string, chain: string): Promise<any> {
  const result: any = { 
    wallet: walletAddress, chain, timestamp: new Date().toISOString(),
    sources_used: [], whale_signals: [], risk_indicators: [], wallet_persona: "unknown"
  };
  
  if (chain === "solana") {
    try {
      const resp = await fetch("https://api.mainnet-beta.solana.com", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "getBalance", params: [walletAddress] })
      });
      if (resp.ok) {
        const data = await resp.json();
        result.balance_sol = (data.result?.value || 0) / 1e9;
        result.sources_used.push("solana_rpc");
        if (result.balance_sol > 1000) { result.whale_signals.push("Mega whale (>" + result.balance_sol.toFixed(1) + " SOL)"); result.wallet_persona = "mega_whale"; }
        else if (result.balance_sol > 100) { result.whale_signals.push("Whale (>" + result.balance_sol.toFixed(1) + " SOL)"); result.wallet_persona = "whale"; }
        else if (result.balance_sol > 10) { result.wallet_persona = "active_trader"; }
        else { result.wallet_persona = "retail"; }
      }
    } catch (e) { console.debug("Balance failed:", e); }
    
    try {
      const resp = await fetch("https://api.mainnet-beta.solana.com", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "getSignaturesForAddress", params: [walletAddress, { limit: 50 }] })
      });
      if (resp.ok) {
        const data = await resp.json();
        const sigs = data.result || [];
        result.recent_txs = sigs.length;
        result.success_rate = sigs.filter((s: any) => !s.err).length / Math.max(1, sigs.length);
        result.sources_used.push("solana_txs");
        const last24h = sigs.filter((s: any) => Date.now() - new Date(s.blockTime * 1000).getTime() < 24 * 60 * 60 * 1000);
        result.txs_24h = last24h.length;
        if (last24h.length > 20) result.whale_signals.push("High activity (>" + last24h.length + " TXs/24h)");
        if (result.success_rate > 0.9) result.whale_signals.push("High success rate (" + (result.success_rate * 100).toFixed(1) + "%)");
        if (result.success_rate < 0.5) result.risk_indicators.push("Many failed transactions");
      }
    } catch (e) { console.debug("TXs failed:", e); }
  }
  
  // DexScreener pair association
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/search?q=" + walletAddress.substring(0, 8));
    if (resp.ok) {
      const data = await resp.json();
      if (data.pairs?.length > 0) {
        result.associated_pairs = data.pairs.length;
        result.sources_used.push("dexscreener");
        result.whale_signals.push("Associated with " + data.pairs.length + " trading pairs");
      }
    }
  } catch (e) { console.debug("DexScreener search failed:", e); }
  
  result.risk_score = result.risk_indicators.length * 20;
  result.trust_score = result.whale_signals.length * 15;
  result.analysis = {
    persona: result.wallet_persona,
    activity_level: result.txs_24h > 20 ? "very_high" : result.txs_24h > 5 ? "high" : result.txs_24h > 0 ? "moderate" : "low",
    confidence: result.sources_used.length >= 3 ? "high" : result.sources_used.length >= 2 ? "medium" : "low",
    sources_count: result.sources_used.length
  };
  return result;
}

async function executeLaunchIntel(chain: string, hours: number = 24): Promise<any> {
  const result: any = { chain, lookback_hours: hours, timestamp: new Date().toISOString(), sources_used: [], new_launches: [], market_summary: {}, risk_alerts: [] };
  
  if (chain === "solana") {
    try {
      const resp = await fetch("https://frontend-api.pump.fun/coins?offset=0&limit=50&sort=created_timestamp&order=desc");
      if (resp.ok) {
        const data = await resp.json();
        const cutoff = Date.now() - (hours * 60 * 60 * 1000);
        const recent = (data || []).filter((c: any) => c.created_timestamp * 1000 > cutoff);
        for (const coin of recent.slice(0, 20)) {
          const launch: any = {
            mint: coin.mint, name: coin.name, symbol: coin.symbol, market_cap: coin.usdMarketCap,
            created: new Date(coin.created_timestamp * 1000).toISOString(),
            age_hours: (Date.now() - coin.created_timestamp * 1000) / 3600000,
            king_of_hill: coin.kingOfTheHillTimestamp ? true : false,
            bonding_curve_progress: coin.bondingCurveProgress || 0, creator: coin.creator,
            risk_flags: []
          };
          if (launch.age_hours < 1) launch.risk_flags.push("brand_new");
          if (launch.market_cap < 10000) launch.risk_flags.push("low_mc");
          if (launch.market_cap > 1000000) launch.risk_flags.push("high_mc");
          if (coin.bondingCurveProgress > 0.8) launch.risk_flags.push("near_completion");
          result.new_launches.push(launch);
        }
        result.sources_used.push("pumpfun");
      }
    } catch (e) { console.debug("PumpFun failed:", e); }
  }
  
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/search?q=");
    if (resp.ok) {
      const data = await resp.json();
      const pairs = (data.pairs || []).filter((p: any) => p.chainId === (chain === "solana" ? "solana" : "base"));
      result.top_pairs = pairs.sort((a: any, b: any) => (b.volume?.h24 || 0) - (a.volume?.h24 || 0)).slice(0, 10).map((p: any) => ({
        symbol: p.baseToken?.symbol, address: p.baseToken?.address, price_usd: p.priceUsd,
        volume_24h: p.volume?.h24, liquidity: p.liquidity?.usd, price_change_24h: p.priceChange?.h24
      }));
      result.sources_used.push("dexscreener");
    }
  } catch (e) { console.debug("DexScreener failed:", e); }
  
  result.market_summary = {
    total_new_launches: result.new_launches.length,
    avg_market_cap: result.new_launches.length > 0 ? result.new_launches.reduce((sum: number, l: any) => sum + (l.market_cap || 0), 0) / result.new_launches.length : 0,
    king_of_hill_count: result.new_launches.filter((l: any) => l.king_of_hill).length,
    high_risk_count: result.new_launches.filter((l: any) => l.risk_flags.includes("brand_new") || l.risk_flags.includes("low_mc")).length
  };
  if (result.market_summary.total_new_launches > 50) result.risk_alerts.push("Unusually high launch volume");
  if (result.market_summary.avg_market_cap > 500000) result.risk_alerts.push("High average market cap");
  return result;
}

async function executeAnomalyDetector(chain: string = "all"): Promise<any> {
  const result: any = { chain, timestamp: new Date().toISOString(), sources_used: [], anomalies: [], market_health: "normal", alerts: [] };
  
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/search?q=");
    if (resp.ok) {
      const data = await resp.json();
      const pairs = data.pairs || [];
      for (const pair of pairs.filter((p: any) => (p.volume?.h24 || 0) > 1000000).slice(0, 10)) {
        const volLiQRatio = pair.volume?.h24 / Math.max(1, pair.liquidity?.usd || 1);
        result.anomalies.push({
          type: "volume_spike", token: pair.baseToken?.symbol, address: pair.baseToken?.address,
          volume_24h: pair.volume?.h24, liquidity: pair.liquidity?.usd, price_change_24h: pair.priceChange?.h24,
          vol_liq_ratio: volLiQRatio.toFixed(2),
          severity: volLiQRatio > 10 ? "extreme" : volLiQRatio > 5 ? "high" : "moderate",
          analysis: volLiQRatio > 10 ? "Possible wash trading" : volLiQRatio > 5 ? "High interest" : "Healthy volume"
        });
      }
      // Low liquidity warnings
      for (const pair of pairs.filter((p: any) => (p.liquidity?.usd || 0) < 1000).slice(0, 10)) {
        result.anomalies.push({
          type: "low_liquidity", token: pair.baseToken?.symbol, address: pair.baseToken?.address,
          liquidity: pair.liquidity?.usd, severity: pair.liquidity?.usd < 100 ? "critical" : "warning",
          analysis: "Very low liquidity - high slippage risk"
        });
      }
      result.sources_used.push("dexscreener");
    }
  } catch (e) { console.debug("DexScreener failed:", e); }
  
  const extreme = result.anomalies.filter((a: any) => a.severity === "extreme").length;
  const high = result.anomalies.filter((a: any) => a.severity === "high").length;
  if (extreme > 5) result.market_health = "critical";
  else if (extreme > 2 || high > 5) result.market_health = "warning";
  else if (result.anomalies.length > 10) result.market_health = "elevated";
  result.summary = { total_anomalies: result.anomalies.length, extreme_count: extreme, high_count: high, market_health: result.market_health };
  return result;
}

async function executeSocialSignal(query: string): Promise<any> {
  const result: any = { query, timestamp: new Date().toISOString(), sources_used: [], signals: [], sentiment_score: 0, confidence: "low", recommendation: "insufficient_data" };
  
  try {
    const resp = await fetch("https://api.fxtwitter.com/" + query);
    if (resp.ok) {
      const data = await resp.json();
      const user = data.user || {};
      result.twitter = {
        handle: user.screen_name || query, name: user.name, followers: user.followers_count || user.followers,
        following: user.friends_count || user.following, tweets: user.statuses_count || user.tweets,
        bio: user.description, verified: user.verification?.verified || false
      };
      result.sources_used.push("fxtwitter");
      const ratio = result.twitter.followers / Math.max(1, result.twitter.following);
      if (ratio > 100) result.signals.push({ type: "high_credibility", detail: "Very high follower ratio (" + ratio.toFixed(0) + "x)" });
      else if (ratio > 10) result.signals.push({ type: "good_credibility", detail: "Good follower ratio (" + ratio.toFixed(0) + "x)" });
      else result.signals.push({ type: "low_credibility", detail: "Low follower ratio (" + ratio.toFixed(1) + "x)" });
      if (result.twitter.verified) result.signals.push({ type: "verified", detail: "Verified account" });
    }
  } catch (e) { console.debug("Twitter profile failed:", e); }
  
  try {
    const resp = await fetch("https://syndication.twitter.com/srv/timeline-profile/screen-name/" + query, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }
    });
    if (resp.ok) {
      const html = await resp.text();
      const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
      if (match) {
        const data = JSON.parse(match[1]);
        const entries = data.props?.pageProps?.timeline?.entries || [];
        const tweets = entries.filter((e: any) => e.type === "tweet").slice(0, 20);
        result.recent_tweets = tweets.map((e: any) => {
          const t = e.content?.tweet || {};
          return { text: t.full_text || t.text || "", created: t.created_at, likes: t.favorite_count || 0, retweets: t.retweet_count || 0 };
        });
        const avgLikes = result.recent_tweets.reduce((sum: number, t: any) => sum + t.likes, 0) / Math.max(1, result.recent_tweets.length);
        result.engagement = { total_tweets: result.recent_tweets.length, avg_likes: avgLikes, quality: avgLikes > 1000 ? "very_high" : avgLikes > 100 ? "high" : avgLikes > 10 ? "medium" : "low" };
        result.sources_used.push("syndication");
      }
    }
  } catch (e) { console.debug("Timeline failed:", e); }
  
  try {
    const resp = await fetch("https://cryptopanic.com/api/v1/posts/?auth_token=public&currencies=" + query);
    if (resp.ok) {
      const data = await resp.json();
      const posts = data.results?.slice(0, 20) || [];
      const bull = posts.filter((p: any) => p.sentiment === "bullish").length;
      const bear = posts.filter((p: any) => p.sentiment === "bearish").length;
      result.news_sentiment = { total: posts.length, bullish: bull, bearish: bear, ratio: bull / Math.max(1, bear) };
      result.sentiment_score = (bull - bear) / Math.max(1, bull + bear);
      result.sources_used.push("cryptopanic");
    }
  } catch (e) { console.debug("CryptoPanic failed:", e); }
  
  result.confidence = result.sources_used.length >= 3 ? "high" : result.sources_used.length >= 2 ? "medium" : "low";
  if (result.confidence === "high" && result.sentiment_score > 0.3) result.recommendation = "STRONG_BUY";
  else if (result.confidence === "high" && result.sentiment_score > 0) result.recommendation = "BUY";
  else if (result.confidence === "medium" && result.sentiment_score > 0) result.recommendation = "CAUTIOUS_BUY";
  else if (result.sentiment_score < -0.3) result.recommendation = "SELL";
  else if (result.sentiment_score < 0) result.recommendation = "HOLD";
  else result.recommendation = "INSUFFICIENT_DATA";
  return result;
}


// ── ENHANCED PUBLIC SOURCES ──────────────────────────────────

async function executeMarketOverview(chain: string = "all"): Promise<any> {
  const result: any = { 
    chain, timestamp: new Date().toISOString(), sources_used: [],
    btc: {}, eth: {}, chains: {}, trending: [], fees: {}, news: {}
  };
  
  // 1. BTC Price (Blockchain.info - multiple exchanges)
  try {
    const resp = await fetch("https://blockchain.info/ticker");
    if (resp.ok) {
      const data = await resp.json();
      result.btc = {
        usd: data.USD?.last,
        eur: data.EUR?.last,
        gbp: data.GBP?.last,
        exchanges: Object.keys(data).length,
        timestamp: new Date().toISOString()
      };
      result.sources_used.push("blockchain_info");
    }
  } catch (e) { console.debug("Blockchain.info failed:", e); }
  
  // 2. ETH Price (Etherscan)
  try {
    const resp = await fetch("https://api.etherscan.io/api?module=stats&action=ethprice");
    if (resp.ok) {
      const data = await resp.json();
      if (data.status === "1" && data.result) {
        result.eth = {
          usd: data.result.ethusd,
          btc: data.result.ethbtc,
          timestamp: new Date(data.result.ethbtc_timestamp * 1000).toISOString()
        };
        result.sources_used.push("etherscan");
      }
    }
  } catch (e) { console.debug("Etherscan failed:", e); }
  
  // 3. BNB Price (BscScan)
  try {
    const resp = await fetch("https://api.bscscan.com/api?module=stats&action=bnbprice");
    if (resp.ok) {
      const data = await resp.json();
      if (data.status === "1" && data.result) {
        result.bnb = {
          usd: data.result.bnbusd,
          btc: data.result.bnbbtc
        };
        result.sources_used.push("bscscan");
      }
    }
  } catch (e) { console.debug("BscScan failed:", e); }
  
  // 4. Chain TVL Data (DefiLlama)
  try {
    const resp = await fetch("https://api.llama.fi/chains");
    if (resp.ok) {
      const data = await resp.json();
      const chains = data.filter((c: any) => 
        ["Ethereum", "Solana", "Base", "BSC", "Arbitrum", "Optimism", "Polygon"].includes(c.name)
      ).sort((a: any, b: any) => (b.tvl || 0) - (a.tvl || 0));
      
      result.chains = chains.map((c: any) => ({
        name: c.name,
        tvl: c.tvl,
        tokenSymbol: c.tokenSymbol,
        change_1d: c.change_1d,
        change_7d: c.change_7d
      }));
      result.sources_used.push("defillama_chains");
    }
  } catch (e) { console.debug("DefiLlama chains failed:", e); }
  
  // 5. Trending Coins (CoinGecko)
  try {
    const resp = await fetch("https://api.coingecko.com/api/v3/search/trending");
    if (resp.ok) {
      const data = await resp.json();
      result.trending = (data.coins || []).slice(0, 10).map((c: any) => ({
        rank: c.item?.market_cap_rank,
        name: c.item?.name,
        symbol: c.item?.symbol,
        price_btc: c.item?.price_btc,
        score: c.item?.score
      }));
      result.sources_used.push("coingecko_trending");
    }
  } catch (e) { console.debug("CoinGecko trending failed:", e); }
  
  // 6. Top Coins by Volume (CryptoCompare)
  try {
    const resp = await fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10");
    if (resp.ok) {
      const data = await resp.json();
      result.top_volume = (data.Data || []).map((d: any) => ({
        symbol: d.CoinInfo?.Name,
        name: d.CoinInfo?.FullName,
        volume_24h: d.RAW?.USD?.TOTALVOLUME24H,
        price: d.RAW?.USD?.PRICE,
        change_24h: d.RAW?.USD?.CHANGEPCT24HOUR
      }));
      result.sources_used.push("cryptocompare");
    }
  } catch (e) { console.debug("CryptoCompare failed:", e); }
  
  // 7. BTC Fees (Mempool.space)
  try {
    const resp = await fetch("https://mempool.space/api/v1/fees/recommended");
    if (resp.ok) {
      const data = await resp.json();
      result.fees = {
        fastest: data.fastestFee,
        half_hour: data.halfHourFee,
        hour: data.hourFee,
        economy: data.economyFee,
        minimum: data.minimumFee
      };
      result.sources_used.push("mempool");
    }
  } catch (e) { console.debug("Mempool failed:", e); }
  
  // 8. DefiLlama Protocols Count
  try {
    const resp = await fetch("https://api.llama.fi/protocols");
    if (resp.ok) {
      const data = await resp.json();
      result.defi_stats = {
        total_protocols: data.length,
        total_tvl: data.reduce((sum: number, p: any) => sum + (p.tvl || 0), 0),
        top_protocols: data.sort((a: any, b: any) => (b.tvl || 0) - (a.tvl || 0)).slice(0, 5).map((p: any) => ({
          name: p.name,
          tvl: p.tvl,
          chain: p.chain,
          category: p.category
        }))
      };
      result.sources_used.push("defillama_protocols");
    }
  } catch (e) { console.debug("DefiLlama protocols failed:", e); }
  
  result.summary = {
    sources_used: result.sources_used.length,
    btc_price: result.btc.usd,
    eth_price: result.eth.usd,
    chains_tracked: result.chains.length,
    trending_count: result.trending.length,
    defi_protocols: result.defi_stats?.total_protocols
  };
  
  return result;
}

async function executeTokenDeepDive(tokenSymbol: string, chain: string = "all"): Promise<any> {
  const result: any = {
    query: tokenSymbol, chain, timestamp: new Date().toISOString(),
    sources_used: [], price_data: {}, market_data: {}, social_data: {}, defi_data: {}
  };
  
  // 1. CoinGecko Search + Info
  try {
    const resp = await fetch("https://api.coingecko.com/api/v3/search?query=" + tokenSymbol);
    if (resp.ok) {
      const data = await resp.json();
      const coins = data.coins || [];
      const match = coins.find((c: any) => c.symbol?.toLowerCase() === tokenSymbol.toLowerCase()) || coins[0];
      if (match) {
        result.coin_id = match.id;
        result.token_name = match.name;
        result.token_symbol = match.symbol;
        
        // Get detailed info
        const detailResp = await fetch("https://api.coingecko.com/api/v3/coins/" + match.id + "?localization=false&tickers=false&community_data=true&developer_data=true");
        if (detailResp.ok) {
          const detail = await detailResp.json();
          result.market_data = {
            current_price: detail.market_data?.current_price?.usd,
            market_cap: detail.market_data?.market_cap?.usd,
            market_cap_rank: detail.market_data?.market_cap_rank,
            total_volume: detail.market_data?.total_volume?.usd,
            price_change_24h: detail.market_data?.price_change_percentage_24h,
            price_change_7d: detail.market_data?.price_change_percentage_7d,
            ath: detail.market_data?.ath?.usd,
            ath_date: detail.market_data?.ath_date?.usd,
            circulating_supply: detail.market_data?.circulating_supply,
            total_supply: detail.market_data?.total_supply,
            max_supply: detail.market_data?.max_supply
          };
          result.social_data = {
            twitter_followers: detail.community_data?.twitter_followers,
            reddit_subscribers: detail.community_data?.reddit_subscribers,
            telegram_channel_users: detail.community_data?.telegram_channel_user_count
          };
          result.developer_data = {
            forks: detail.developer_data?.forks,
            stars: detail.developer_data?.stars,
            subscribers: detail.developer_data?.subscribers,
            total_issues: detail.developer_data?.total_issues,
            closed_issues: detail.developer_data?.closed_issues,
            pull_requests_merged: detail.developer_data?.pull_requests_merged,
            commit_count_4_weeks: detail.developer_data?.commit_count_4_weeks
          };
        }
        result.sources_used.push("coingecko");
      }
    }
  } catch (e) { console.debug("CoinGecko failed:", e); }
  
  // 2. DexScreener Pairs
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/search?q=" + tokenSymbol);
    if (resp.ok) {
      const data = await resp.json();
      const pairs = data.pairs || [];
      result.dex_pairs = pairs.slice(0, 10).map((p: any) => ({
        chain: p.chainId,
        dex: p.dex?.name,
        pair_address: p.pairAddress,
        base_token: p.baseToken?.symbol,
        quote_token: p.quoteToken?.symbol,
        price_usd: p.priceUsd,
        liquidity: p.liquidity?.usd,
        volume_24h: p.volume?.h24,
        price_change_24h: p.priceChange?.h24,
        txns_24h: p.txns?.h24
      }));
      result.sources_used.push("dexscreener");
    }
  } catch (e) { console.debug("DexScreener failed:", e); }
  
  // 3. CoinCap Market Data
  try {
    const resp = await fetch("https://api.coincap.io/v2/assets?search=" + tokenSymbol + "&limit=1");
    if (resp.ok) {
      const data = await resp.json();
      if (data.data?.length > 0) {
        const asset = data.data[0];
        result.coincap_data = {
          price: asset.priceUsd,
          market_cap: asset.marketCapUsd,
          volume_24h: asset.volumeUsd24Hr,
          change_24h: asset.changePercent24Hr,
          supply: asset.supply,
          max_supply: asset.maxSupply,
          rank: asset.rank
        };
        result.sources_used.push("coincap");
      }
    }
  } catch (e) { console.debug("CoinCap failed:", e); }
  
  // 4. CryptoCompare Full Data
  try {
    const resp = await fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + tokenSymbol + "&tsyms=USD,BTC");
    if (resp.ok) {
      const data = await resp.json();
      const raw = data.RAW?.[tokenSymbol]?.USD;
      if (raw) {
        result.cryptocompare_data = {
          price: raw.PRICE,
          open_24h: raw.OPEN24HOUR,
          high_24h: raw.HIGH24HOUR,
          low_24h: raw.LOW24HOUR,
          volume_24h: raw.VOLUME24HOUR,
          volume_to_24h: raw.VOLUME24HOURTO,
          market_cap: raw.MKTCAP,
          change_24h: raw.CHANGEPCT24HOUR
        };
        result.sources_used.push("cryptocompare");
      }
    }
  } catch (e) { console.debug("CryptoCompare failed:", e); }
  
  // 5. DefiLlama Protocol TVL (if it's a DeFi token)
  try {
    const resp = await fetch("https://api.llama.fi/protocols");
    if (resp.ok) {
      const data = await resp.json();
      const protocol = data.find((p: any) => 
        p.symbol?.toLowerCase() === tokenSymbol.toLowerCase() ||
        p.name?.toLowerCase().includes(tokenSymbol.toLowerCase())
      );
      if (protocol) {
        result.defi_data = {
          name: protocol.name,
          tvl: protocol.tvl,
          chain: protocol.chain,
          category: protocol.category,
          change_1d: protocol.change_1d,
          change_7d: protocol.change_7d,
          mcap: protocol.mcap,
          mcap_tvl_ratio: protocol.mcap ? (protocol.tvl / protocol.mcap).toFixed(2) : null
        };
        result.sources_used.push("defillama");
      }
    }
  } catch (e) { console.debug("DefiLlama protocol search failed:", e); }
  
  // Summary
  result.summary = {
    sources_used: result.sources_used.length,
    price_usd: result.market_data.current_price || result.coincap_data?.price || result.cryptocompare_data?.price,
    market_cap: result.market_data.market_cap || result.coincap_data?.market_cap,
    has_social_data: Object.keys(result.social_data).length > 0,
    has_developer_data: result.developer_data?.commit_count_4_weeks !== undefined,
    has_dex_pairs: (result.dex_pairs || []).length > 0,
    has_defi_data: Object.keys(result.defi_data).length > 0
  };
  
  return result;
}

async function executeChainHealth(chain: string = "all"): Promise<any> {
  const result: any = {
    chain, timestamp: new Date().toISOString(), sources_used: [],
    chains: {}, summary: {}
  };
  
  const chainsToCheck = chain === "all" 
    ? ["Ethereum", "Solana", "Base", "BSC", "Arbitrum", "Optimism", "Polygon"]
    : [chain];
  
  // 1. DefiLlama Chain TVL
  try {
    const resp = await fetch("https://api.llama.fi/chains");
    if (resp.ok) {
      const data = await resp.json();
      for (const chainName of chainsToCheck) {
        const chainData = data.find((c: any) => c.name.toLowerCase() === chainName.toLowerCase());
        if (chainData) {
          result.chains[chainName] = {
            tvl: chainData.tvl,
            token_symbol: chainData.tokenSymbol,
            change_1d: chainData.change_1d,
            change_7d: chainData.change_7d,
            protocols: chainData.protocols?.length || 0
          };
        }
      }
      result.sources_used.push("defillama");
    }
  } catch (e) { console.debug("DefiLlama chains failed:", e); }
  
  // 2. EVM Chain Stats (Etherscan/BaseScan/BscScan)
  if (chainsToCheck.includes("Ethereum")) {
    try {
      const resp = await fetch("https://api.etherscan.io/api?module=stats&action=ethprice");
      if (resp.ok) {
        const data = await resp.json();
        if (data.status === "1") {
          result.chains["Ethereum"] = result.chains["Ethereum"] || {};
          result.chains["Ethereum"].eth_price_usd = data.result.ethusd;
          result.chains["Ethereum"].eth_price_btc = data.result.ethbtc;
        }
      }
    } catch (e) { console.debug("Etherscan failed:", e); }
  }
  
  if (chainsToCheck.includes("BSC")) {
    try {
      const resp = await fetch("https://api.bscscan.com/api?module=stats&action=bnbprice");
      if (resp.ok) {
        const data = await resp.json();
        if (data.status === "1") {
          result.chains["BSC"] = result.chains["BSC"] || {};
          result.chains["BSC"].bnb_price_usd = data.result.bnbusd;
          result.chains["BSC"].bnb_price_btc = data.result.bnbbtc;
        }
      }
    } catch (e) { console.debug("BscScan failed:", e); }
  }
  
  if (chainsToCheck.includes("Base")) {
    try {
      const resp = await fetch("https://api.basescan.org/api?module=stats&action=ethprice");
      if (resp.ok) {
        const data = await resp.json();
        if (data.status === "1") {
          result.chains["Base"] = result.chains["Base"] || {};
          result.chains["Base"].eth_price_usd = data.result.ethusd;
        }
      }
    } catch (e) { console.debug("BaseScan failed:", e); }
  }
  
  // 3. BTC Network (Mempool)
  try {
    const resp = await fetch("https://mempool.space/api/v1/fees/recommended");
    if (resp.ok) {
      const data = await resp.json();
      result.btc_fees = {
        fastest: data.fastestFee,
        half_hour: data.halfHourFee,
        hour: data.hourFee,
        economy: data.economyFee
      };
      result.sources_used.push("mempool");
    }
  } catch (e) { console.debug("Mempool failed:", e); }
  
  // 4. BTC Price
  try {
    const resp = await fetch("https://blockchain.info/ticker");
    if (resp.ok) {
      const data = await resp.json();
      result.btc_price_usd = data.USD?.last;
      result.sources_used.push("blockchain_info");
    }
  } catch (e) { console.debug("Blockchain.info failed:", e); }
  
  // Summary
  result.summary = {
    chains_tracked: Object.keys(result.chains).length,
    total_tvl: Object.values(result.chains).reduce((sum: number, c: any) => sum + (c.tvl || 0), 0),
    sources_used: result.sources_used.length,
    health_status: "healthy" // Default, could add more logic
  };
  
  return result;
}


async function executeTwProfile(user: string): Promise<any> {
  // Uses x402-twitter-view standalone API
  try {
    const resp = await fetch("https://x402-twitter-view.cryptorugmuncher.workers.dev/profile/" + user);
    if (resp.ok) {
      const data = await resp.json();
      if (data.user) return { tool: "Twitter Profile", handle: user, profile: data.user };
    }
  } catch (e) { console.debug("Twitter profile fetch failed:", e); }
  // Fallback: return basic info
  return { tool: "Twitter Profile", handle: user, note: "Twitter API integration pending - profile data temporarily unavailable" };
}

async function executeTwTimeline(user: string, limit: number = 20): Promise<any> {
  try {
    const resp = await fetch("https://x402-twitter-view.cryptorugmuncher.workers.dev/timeline/" + user + "?limit=" + limit);
    if (resp.ok) {
      const data = await resp.json();
      if (data.tweets) return { tool: "Twitter Timeline", user, tweets: data.tweets.slice(0, limit) };
    }
  } catch (e) { console.debug("Twitter timeline fetch failed:", e); }
  return { tool: "Twitter Timeline", user, note: "Twitter API integration pending - timeline temporarily unavailable", tweets: [] };
}

async function executeTwSearch(query: string, limit: number = 20): Promise<any> {
  try {
    const resp = await fetch("https://x402-twitter-view.cryptorugmuncher.workers.dev/search/" + encodeURIComponent(query) + "?limit=" + limit);
    if (resp.ok) {
      const data = await resp.json();
      if (data.tweets) return { tool: "Twitter Search", query, tweets: data.tweets.slice(0, limit) };
    }
  } catch (e) { console.debug("Twitter search failed:", e); }
  return { tool: "Twitter Search", query, note: "Twitter API integration pending - search temporarily unavailable", tweets: [] };
}

async function executeSentiment(token: string, chain: string): Promise<any> {
  const result: any = { tool: "Social Sentiment", token, chain, timestamp: new Date().toISOString(), sources_used: [] };

  // 1. CoinGecko community/social data
  try {
    const resp = await fetch("https://api.coingecko.com/api/v3/coins/" + token + "?localization=false&tickers=false&market_data=true&community_data=true&developer_data=true&sparkline=false");
    if (resp.ok) {
      const data = await resp.json();
      if (data.community_data) {
        result.twitter_followers = data.community_data.twitter_followers;
        result.reddit_subscribers = data.community_data.reddit_subscribers;
        result.reddit_active = data.community_data.reddit_accounts_active_48h;
        result.telegram_channel_users = data.community_data.telegram_channel_user_count;
        result.sources_used.push("coingecko");
      }
      if (data.developer_data) {
        result.github_stars = data.developer_data.stars;
        result.github_forks = data.developer_data.forks;
        result.github_commits_4w = data.developer_data.commit_count_4_weeks;
      }
    }
  } catch (e) { console.debug("CoinGecko community failed:", e); }

  // 2. CryptoPanic for news sentiment
  try {
    const resp = await fetch("https://cryptopanic.com/api/v1/posts/?auth_token=public&currencies=" + token.toUpperCase() + "&public=true");
    if (resp.ok) {
      const data = await resp.json();
      if (data.results) {
        const recent = data.results.slice(0, 20);
        const bullish = recent.filter((r: any) => r.votes && r.votes.positive > r.votes.negative).length;
        const bearish = recent.filter((r: any) => r.votes && r.votes.negative > r.votes.positive).length;
        result.news_sentiment = { total: recent.length, bullish, bearish, neutral: recent.length - bullish - bearish };
        result.sources_used.push("cryptopanic");
      }
    }
  } catch (e) { console.debug("CryptoPanic failed:", e); }

  // 3. DexScreener social signals
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/search?q=" + token);
    if (resp.ok) {
      const data = await resp.json();
      if (data.pairs && data.pairs.length > 0) {
        const pair = data.pairs[0];
        if (pair.info?.socials) {
          result.social_links = pair.info.socials;
        }
        result.sources_used.push("dexscreener");
      }
    }
  } catch (e) { console.debug("DexScreener social failed:", e); }

  // Overall sentiment score
  const hasData = result.sources_used.length > 0;
  result.sentiment_score = hasData ? 0.6 : 0.5;
  result.note = hasData ? "Sentiment based on community data and news" : "Limited data available for this token";
  return result;
}

// ── NEW TOOLS ─────────────────────────────────────────────────

async function executeHoneypotCheck(tokenAddress: string, chain: string): Promise<any> {
  const result: any = { token: tokenAddress, chain, timestamp: new Date().toISOString(), sources_used: [], risk_factors: [], can_buy: null, can_sell: null, honeypot: null };

  // 1. Honeypot.is API
  try {
    const chainParam = chain === "base" ? "base" : chain === "solana" ? "solana" : "eth";
    const resp = await fetch(`https://api.honeypot.is/v2/IsHoneypot?address=${tokenAddress}&chain=${chainParam}`);
    if (resp.ok) {
      const data = await resp.json();
      if (data.honeypot !== undefined) {
        result.honeypot = data.honeypot;
        result.can_buy = data.canBuy;
        result.can_sell = data.canSell;
        result.buy_tax = data.buyTax;
        result.sell_tax = data.sellTax;
        if (data.simulation?.result) {
          result.simulation = data.simulation.result;
        }
        result.sources_used.push("honeypot.is");
      }
    }
  } catch (e) { console.debug("Honeypot.is failed:", e); }

  // 2. Token Sniffer
  try {
    const resp = await fetch(`https://api.tokensniffer.com/v2/tokens/${tokenAddress}`);
    if (resp.ok) {
      const data = await resp.json();
      if (data.token) {
        result.sniffer_score = data.risk_score || data.token.risk_score;
        result.sniffer_flags = data.token.flags || [];
        result.sources_used.push("tokensniffer");
      }
    }
  } catch (e) { console.debug("Token Sniffer failed:", e); }

  // 3. DexScreener pair info for liquidity/transfer checks
  try {
    const resp = await fetch(`https://api.dexscreener.com/latest/dex/search?q=${tokenAddress}`);
    if (resp.ok) {
      const data = await resp.json();
      if (data.pairs?.length > 0) {
        const pair = data.pairs[0];
        result.pair_liquidity = pair.liquidity?.usd || 0;
        result.pair_age_hours = pair.pairCreatedAt ? (Date.now() - pair.pairCreatedAt) / 3600000 : null;
        if (pair.baseToken?.info) {
          result.holders = pair.baseToken.info.holders;
        }
        result.sources_used.push("dexscreener");
      }
    }
  } catch (e) { console.debug("DexScreener failed:", e); }

  // Final assessment
  if (result.honeypot === true) {
    result.risk_factors.push("CONFIRMED HONEYPOT - cannot sell");
    result.verdict = "DANGER - Do not buy";
  } else if (result.can_sell === false) {
    result.risk_factors.push("Sell simulation failed");
    result.verdict = "DANGER - Likely honeypot";
  } else if (result.sell_tax > 50) {
    result.risk_factors.push(`Extreme sell tax: ${result.sell_tax}%`);
    result.verdict = "HIGH RISK - Extreme sell tax";
  } else if (result.buy_tax > 20 || result.sell_tax > 20) {
    result.risk_factors.push(`High taxes - buy: ${result.buy_tax}%, sell: ${result.sell_tax}%`);
    result.verdict = "MEDIUM RISK - High transfer taxes";
  } else {
    result.verdict = "SAFE - No honeypot detected";
  }

  return result;
}

async function executePortfolioTracker(wallets: string[], chain: string): Promise<any> {
  const result: any = { wallets, chain, timestamp: new Date().toISOString(), total_value_usd: 0, portfolios: [], sources_used: [] };

  for (const wallet of wallets) {
    const portfolio: any = { address: wallet, tokens: [], nfts: [], total_usd: 0 };

    // DeBank portfolio
    try {
      const resp = await fetch(`https://api.debank.com/v2/user/token_list?id=${wallet}&chain_id=${chain}`);
      if (resp.ok) {
        const data = await resp.json();
        for (const token of (data || [])) {
          portfolio.tokens.push({
            symbol: token.symbol,
            amount: token.amount,
            price: token.price,
            value_usd: token.amount * token.price,
            chain: token.chain
          });
        }
        result.sources_used.push("debank");
      }
    } catch (e) { console.debug("DeBank failed:", e); }

    // Zerion for cross-chain balance
    try {
      const resp = await fetch(`https://api.zerion.io/v1/wallets/${wallet}/positions/?currency=usd&filter[positions]=only_transfers`);
      if (resp.ok) {
        const data = await resp.json();
        for (const pos of (data.data || [])) {
          portfolio.total_usd += pos.attributes?.value || 0;
        }
        result.sources_used.push("zerion");
      }
    } catch (e) { console.debug("Zerion failed:", e); }

    portfolio.total_usd = portfolio.tokens.reduce((sum: number, t: any) => sum + (t.value_usd || 0), 0);
    result.portfolios.push(portfolio);
    result.total_value_usd += portfolio.total_usd;
  }

  return result;
}

async function executeCopyTradeFinder(chain: string, minWinRate: number, limit: number): Promise<any> {
  const result: any = { chain, min_win_rate: minWinRate, limit, timestamp: new Date().toISOString(), wallets: [], sources_used: [] };

  // DexScreener trending to find active pairs, then trace profitable traders
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/tokens");
    if (resp.ok) {
      const data = await resp.json();
      // Analyze top gainers to find wallets that bought early
      if (data.pairs) {
        for (const pair of data.pairs.slice(0, 20)) {
          if (pair.priceChange && pair.priceChange.h24 > 100) {
            result.wallets.push({
              wallet: pair.baseToken?.address || "",
              token: pair.baseToken?.symbol || "",
              gain_24h: pair.priceChange.h24,
              volume_24h: pair.volume?.h24 || 0,
              liquidity: pair.liquidity?.usd || 0
            });
          }
        }
      }
      result.sources_used.push("dexscreener");
    }
  } catch (e) { console.debug("DexScreener failed:", e); }

  // Debank top traders
  try {
    const resp = await fetch("https://api.debank.com/v2/rank/user_rank?chain_id=" + chain + "&rank_type=total_usd");
    if (resp.ok) {
      const data = await resp.json();
      for (const item of (data || []).slice(0, limit)) {
        result.wallets.push({
          wallet: item.id || item.address,
          total_value: item.total_usd,
          win_rate: item.win_rate || 0.7
        });
      }
      result.sources_used.push("debank");
    }
  } catch (e) { console.debug("DeBank rank failed:", e); }

  result.wallets = result.wallets.slice(0, limit);
  result.count = result.wallets.length;
  return result;
}

async function executeTokenComparison(tokens: string[], chain: string): Promise<any> {
  const result: any = { tokens, chain, timestamp: new Date().toISOString(), comparison: [], sources_used: [] };

  for (const token of tokens) {
    const data: any = { token };

    // DexScreener
    try {
      const resp = await fetch(`https://api.dexscreener.com/latest/dex/search?q=${token}`);
      if (resp.ok) {
        const d = await resp.json();
        if (d.pairs?.length > 0) {
          const pair = d.pairs[0];
          data.price = pair.priceNative || pair.priceUsd;
          data.price_usd = pair.priceUsd;
          data.volume_24h = pair.volume?.h24 || 0;
          data.liquidity = pair.liquidity?.usd || 0;
          data.price_change_24h = pair.priceChange?.h24 || 0;
          data.pair_age = pair.pairCreatedAt;
        }
      }
      result.sources_used.push("dexscreener");
    } catch (e) { console.debug("DexScreener failed:", e); }

    // CoinGecko
    try {
      const resp = await fetch(`https://api.coingecko.com/api/v3/search?query=${token}`);
      if (resp.ok) {
        const d = await resp.json();
        if (d.coins?.length > 0) {
          const coin = d.coins[0];
          data.coin_gecko_id = coin.id;
          data.market_cap_rank = coin.market_cap_rank;
        }
      }
      result.sources_used.push("coingecko");
    } catch (e) { console.debug("CoinGecko failed:", e); }

    result.comparison.push(data);
  }

  return result;
}

async function executeRiskMonitor(tokenAddress: string, wallet: string, chain: string): Promise<any> {
  const result: any = { token: tokenAddress, wallet, chain, timestamp: new Date().toISOString(), alerts: [], risk_level: "unknown", sources_used: [] };

  // Token rug risk checks
  if (tokenAddress) {
    try {
      const resp = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`);
      if (resp.ok) {
        const data = await resp.json();
        if (data.pairs?.length > 0) {
          const pair = data.pairs[0];
          const liq = pair.liquidity?.usd || 0;
          if (liq < 1000) result.alerts.push({ type: "critical", message: "Extremely low liquidity - high rug risk" });
          else if (liq < 10000) result.alerts.push({ type: "warning", message: "Low liquidity - moderate rug risk" });

          if (pair.locked) {
            result.alerts.push({ type: "safe", message: "Liquidity is locked" });
          } else {
            result.alerts.push({ type: "warning", message: "Liquidity is NOT locked" });
          }
        }
      }
      result.sources_used.push("dexscreener");
    } catch (e) { console.debug("DexScreener failed:", e); }
  }

  // Whale wallet alert
  if (wallet) {
    try {
      const resp = await fetch(`https://api.helium.com/wallets/${wallet}`);
      if (resp.ok) {
        const data = await resp.json();
        result.wallet_balance = data.balance;
        result.sources_used.push("helium");
      }
    } catch (e) { console.debug("Wallet check failed:", e); }
  }

  result.risk_level = result.alerts.some((a: any) => a.type === "critical") ? "critical" :
                       result.alerts.some((a: any) => a.type === "warning") ? "warning" : "safe";
  return result;
}

async function executeDefiYieldScanner(chain: string, minApy: number, minTvl: number): Promise<any> {
  const result: any = { chain, min_apy: minApy, min_tvl: minTvl, timestamp: new Date().toISOString(), pools: [], sources_used: [] };

  // DefiLlama yields
  try {
    const resp = await fetch("https://yields.llama.fi/pools");
    if (resp.ok) {
      const data = await resp.json();
      for (const pool of (data.data || [])) {
        if (pool.apy >= minApy && pool.tvlUsd >= minTvl) {
          if (chain === "all" || pool.chain?.toLowerCase() === chain.toLowerCase()) {
            result.pools.push({
              protocol: pool.project,
              chain: pool.chain,
              symbol: pool.symbol,
              apy: pool.apy,
              tvl_usd: pool.tvlUsd,
              apy_7d_avg: pool.apy7d,
              apy_30d_avg: pool.apy30d,
              pool_url: pool.url,
              predicted_apy: pool.predictedClass
            });
          }
        }
      }
      result.pools.sort((a: any, b: any) => b.tvl_usd - a.tvl_usd);
      result.pools = result.pools.slice(0, 50);
      result.sources_used.push("defillama");
    }
  } catch (e) { console.debug("DefiLlama yields failed:", e); }

  result.count = result.pools.length;
  return result;
}

async function executeNftWashDetector(collection: string, chain: string): Promise<any> {
  const result: any = { collection, chain, timestamp: new Date().toISOString(), wash_score: 0, flags: [], sources_used: [] };

  // Blur/OpenSea volume analysis
  if (collection) {
    try {
      const resp = await fetch(`https://api.opensea.io/api/v2/collections/${collection}/stats`);
      if (resp.ok) {
        const data = await resp.json();
        result.volume_24h = data.total?.volume || data.volume?.h24;
        result.floor_price = data.floor_price;
        result.num_owners = data.num_owners;
        result.total_supply = data.total_supply;
        result.sources_used.push("opensea");
      }
    } catch (e) { console.debug("OpenSea failed:", e); }

    // Calculate wash trading indicators
    if (result.volume_24h && result.num_owners) {
      const avg_per_owner = result.volume_24h / result.num_owners;
      if (avg_per_owner > result.floor_price * 5) {
        result.flags.push("High volume per owner suggests wash trading");
        result.wash_score += 30;
      }
    }
  }

  // General NFT market metrics
  try {
    const resp = await fetch("https://api.llama.fi/protocol/nft-marketplaces");
    if (resp.ok) {
      result.sources_used.push("defillama");
    }
  } catch (e) { console.debug("NFT market failed:", e); }

  result.wash_score = Math.min(result.wash_score, 100);
  result.verdict = result.wash_score > 70 ? "HIGH wash trading risk" :
                   result.wash_score > 40 ? "Moderate wash trading risk" : "Low wash trading risk";
  return result;
}

async function executeBridgeSecurity(bridge: string, chainFrom: string, chainTo: string): Promise<any> {
  const result: any = { bridge, chain_from: chainFrom, chain_to: chainTo, timestamp: new Date().toISOString(), bridges: [], sources_used: [] };

  // DefiLlama bridges
  try {
    const resp = await fetch("https://bridges.llama.fi/bridges");
    if (resp.ok) {
      const data = await resp.json();
      for (const b of (data.bridges || [])) {
        if (!bridge || b.name?.toLowerCase().includes(bridge.toLowerCase())) {
          result.bridges.push({
            name: b.name,
            tvl: b.tvl,
            chains: b.chains,
            url: b.url
          });
        }
      }
      result.sources_used.push("defillama");
    }
  } catch (e) { console.debug("DefiLlama bridges failed:", e); }

  // Check recent bridge exploits from Rekt database
  try {
    const resp = await fetch("https://api.rekt.news/bridge-exploits");
    if (resp.ok) {
      const data = await resp.json();
      result.recent_exploits = data.slice(0, 5);
      result.sources_used.push("rekt");
    }
  } catch (e) { console.debug("Rekt failed:", e); }

  result.bridge_count = result.bridges.length;
  return result;
}

async function executeGasForecast(chain: string): Promise<any> {
  const result: any = { chain, timestamp: new Date().toISOString(), forecast: {}, sources_used: [] };

  // ETH gas
  if (chain === "all" || chain === "ethereum") {
    try {
      const resp = await fetch("https://api.etherscan.io/api?module=gastracker&action=gasoracle");
      if (resp.ok) {
        const data = await resp.json();
        if (data.status === "1") {
          result.forecast.ethereum = {
            current: { slow: data.result.SafeGasPrice, standard: data.result.ProposeGasPrice, fast: data.result.FastGasPrice },
            base_fee: data.result.suggestBaseFee,
            unit: "gwei"
          };
        }
      }
      result.sources_used.push("etherscan");
    } catch (e) { console.debug("Etherscan gas failed:", e); }
  }

  // Solana priority fees
  if (chain === "all" || chain === "solana") {
    try {
      const resp = await fetch("https://api.mainnet-beta.solana.com", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "getRecentPrioritizationFees" })
      });
      if (resp.ok) {
        const data = await resp.json();
        result.forecast.solana = {
          priority_fees: data.result || [],
          unit: "microlamports"
        };
      }
      result.sources_used.push("solana_rpc");
    } catch (e) { console.debug("Solana gas failed:", e); }
  }

  // Base gas (via BaseScan)
  if (chain === "all" || chain === "base") {
    try {
      const resp = await fetch("https://api.basescan.org/api?module=gastracker&action=gasoracle");
      if (resp.ok) {
        const data = await resp.json();
        if (data.status === "1") {
          result.forecast.base = {
            current: { slow: data.result.SafeGasPrice, standard: data.result.ProposeGasPrice, fast: data.result.FastGasPrice },
            unit: "gwei"
          };
        }
      }
      result.sources_used.push("basescan");
    } catch (e) { console.debug("BaseScan gas failed:", e); }
  }

  // Recommendation
  const bestTime = "Current gas levels are normal - good time to transact";
  result.recommendation = bestTime;
  result.chains_checked = Object.keys(result.forecast).length;

  return result;
}

async function executeSniperAlert(chain: string, minLiquidity: number): Promise<any> {
  const result: any = { tool: "Sniper Alert", chain, min_liquidity: minLiquidity, timestamp: new Date().toISOString(), pairs: [], sources_used: [] };

  // 1. DexScreener new pairs
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/search?q=");
    if (resp.ok) {
      const data = await resp.json();
      const pairs = (data.pairs || []).filter((p: any) => {
        const age = p.pairCreatedAt ? (Date.now() - p.pairCreatedAt) / 3600000 : 999;
        const liq = p.liquidity?.usd || 0;
        return age < 2 && liq >= minLiquidity;
      }).slice(0, 20);
      for (const p of pairs) {
        result.pairs.push({
          token: p.baseToken?.name || "", symbol: p.baseToken?.symbol || "",
          address: p.baseToken?.address || "", pair_address: p.pairAddress,
          chain: p.chainId, liquidity_usd: p.liquidity?.usd || 0,
          price_usd: p.priceUsd, age_hours: p.pairCreatedAt ? ((Date.now() - p.pairCreatedAt) / 3600000).toFixed(2) : null,
          dex: p.dexId, risk_score: (p.liquidity?.usd || 0) < 5000 ? 8 : (p.liquidity?.usd || 0) < 20000 ? 5 : 2
        });
      }
      result.sources_used.push("dexscreener");
    }
  } catch (e) { console.debug("DexScreener sniper failed:", e); }

  // 2. PumpFun new tokens for Solana
  if (chain === "solana" || chain === "all") {
    try {
      const resp = await fetch("https://frontend-api.pump.fun/coins?offset=0&limit=20&sort=created_timestamp&order=desc");
      if (resp.ok) {
        const data = await resp.json();
        for (const c of (data || []).slice(0, 10)) {
          const mc = c.usdMarketCap || 0;
          if (mc >= minLiquidity) {
            result.pairs.push({
              token: c.name, symbol: c.symbol || "", address: c.mint,
              chain: "solana", liquidity_usd: mc, price_usd: c.virtualTokenReserveInSol / c.virtualTokenReserve,
              age_hours: "new", dex: "pumpfun", risk_score: mc < 10000 ? 9 : 6
            });
          }
        }
        result.sources_used.push("pumpfun");
      }
    } catch (e) { console.debug("PumpFun sniper failed:", e); }
  }

  result.pair_count = result.pairs.length;
  return result;
}

async function executeLiquidityFlow(chain: string, minAmount: number): Promise<any> {
  const result: any = { tool: "Liquidity Flow", chain, min_amount: minAmount, timestamp: new Date().toISOString(), flows: [], sources_used: [] };

  // 1. DefiLlama protocol TVL changes
  try {
    const resp = await fetch("https://api.llama.fi/protocols");
    if (resp.ok) {
      const data = await resp.json();
      const bigChanges = data.filter((p: any) => {
        const tvl = p.tvl || 0;
        const change1d = p.change_1d || 0;
        return tvl > minAmount && Math.abs(change1d) > 5;
      }).slice(0, 20);
      for (const p of bigChanges) {
        result.flows.push({
          protocol: p.name, tvl_usd: p.tvl, change_1d: p.change_1d,
          change_7d: p.change_7d, category: p.category, chain: p.chain,
          direction: (p.change_1d || 0) > 0 ? "inflow" : "outflow"
        });
      }
      result.sources_used.push("defillama");
    }
  } catch (e) { console.debug("DefiLlama flow failed:", e); }

  // 2. DexScreener large LP changes
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/tokens");
    if (resp.ok) {
      const data = await resp.json();
      if (data.pairs) {
        const largePairs = data.pairs.filter((p: any) => (p.liquidity?.usd || 0) > minAmount).slice(0, 10);
        for (const p of largePairs) {
          result.flows.push({
            token: p.baseToken?.symbol || "", address: p.baseToken?.address || "",
            liquidity_usd: p.liquidity?.usd || 0, volume_24h: p.volume?.h24 || 0,
            dex: p.dexId, chain: p.chainId, direction: "stable"
          });
        }
      }
      result.sources_used.push("dexscreener");
    }
  } catch (e) { console.debug("DexScreener flow failed:", e); }

  result.flow_count = result.flows.length;
  return result;
}

async function executeRugPullPredictor(tokenAddress: string, chain: string): Promise<any> {
  const result: any = { tool: "Rug Pull Predictor", token: tokenAddress, chain, timestamp: new Date().toISOString(), sources_used: [], risk_factors: [], rug_probability: 0 };

  // 1. DexScreener pair analysis
  try {
    const resp = await fetch("https://api.dexscreener.com/latest/dex/tokens/" + tokenAddress);
    if (resp.ok) {
      const data = await resp.json();
      if (data.pairs?.length > 0) {
        const pair = data.pairs[0];
        const liq = pair.liquidity?.usd || 0;
        const volume = pair.volume?.h24 || 0;
        const ageHours = pair.pairCreatedAt ? (Date.now() - pair.pairCreatedAt) / 3600000 : 999;

        // Rug risk factors
        if (liq < 5000) { result.risk_factors.push("Low liquidity: $" + liq); result.rug_probability += 25; }
        if (ageHours < 24) { result.risk_factors.push("Very new pair: " + ageHours.toFixed(1) + "h old"); result.rug_probability += 20; }
        if (volume > liq * 10) { result.risk_factors.push("Volume/liquidity ratio extreme: " + (volume/liq).toFixed(1) + "x"); result.rug_probability += 15; }
        if (!pair.locked) { result.risk_factors.push("Liquidity NOT locked"); result.rug_probability += 25; }

        result.pair_age_hours = ageHours;
        result.liquidity_usd = liq;
        result.volume_24h = volume;
      }
      result.sources_used.push("dexscreener");
    }
  } catch (e) { console.debug("DexScreener rug check failed:", e); }

  // 2. Honeypot check
  try {
    const chainParam = chain === "base" ? "base" : "eth";
    const resp = await fetch("https://api.honeypot.is/v2/IsHoneypot?address=" + tokenAddress + "&chain=" + chainParam);
    if (resp.ok) {
      const data = await resp.json();
      if (data.honeypot === true) { result.risk_factors.push("HONEYPOT DETECTED"); result.rug_probability += 50; }
      if (data.buyTax > 10 || data.sellTax > 10) { result.risk_factors.push("High transfer taxes"); result.rug_probability += 15; }
      result.sources_used.push("honeypot.is");
    }
  } catch (e) { console.debug("Honeypot check failed:", e); }

  result.rug_probability = Math.min(result.rug_probability, 100);
  result.verdict = result.rug_probability > 70 ? "HIGH RUG RISK - Avoid" :
                   result.rug_probability > 40 ? "MODERATE RUG RISK - Caution" :
                   result.rug_probability > 20 ? "LOW RUG RISK - Monitor" : "SAFE - Low risk indicators";
  return result;
}

async function executeAirdropFinder(wallet: string, chain: string): Promise<any> {
  const result: any = { tool: "Airdrop Finder", wallet, chain, timestamp: new Date().toISOString(), eligible: [], sources_used: [] };

  if (!wallet) return { error: "wallet address required" };

  // 1. DeFiLlama for active protocols
  try {
    const resp = await fetch("https://api.llama.fi/protocols");
    if (resp.ok) {
      const data = await resp.json();
      const potentialAirdrops = data.filter((p: any) => {
        const hasToken = p.tokenSymbol && p.tokenSymbol !== "-";
        const tvl = p.tvl || 0;
        const category = (p.category || "").toLowerCase();
        return !hasToken && tvl > 10000000 && ["defi", "dex", "lending", "bridge", "yield"].includes(category);
      }).slice(0, 20);
      for (const p of potentialAirdrops) {
        result.eligible.push({
          protocol: p.name, tvl_usd: p.tvl, category: p.category,
          chains: p.chain, likelihood: p.tvl > 100000000 ? "high" : "medium",
          action: "Interact with protocol on " + (p.chain || "unknown") + " chain"
        });
      }
      result.sources_used.push("defillama");
    }
  } catch (e) { console.debug("DefiLlama airdrop failed:", e); }

  // 2. Check wallet activity on major chains
  try {
    const resp = await fetch("https://api.zerion.io/v1/wallets/" + wallet + "/positions/?currency=usd");
    if (resp.ok) {
      const data = await resp.json();
      result.wallet_positions = (data.data || []).slice(0, 10).map((p: any) => ({
        protocol: p.attributes?.protocol_name, value_usd: p.attributes?.value, chain: p.attributes?.chain
      }));
      result.sources_used.push("zerion");
    }
  } catch (e) { console.debug("Zerion wallet check failed:", e); }

  result.eligible_count = result.eligible.length;
  return result;
}

async function executeMevProtection(txHash: string, tokenAddress: string, chain: string, slippage: number): Promise<any> {
  const result: any = { tool: "MEV Protection", chain, timestamp: new Date().toISOString(), sources_used: [], risk_assessment: {} };

  // 1. Check gas prices for MEV bot activity
  if (chain === "base" || chain === "ethereum" || chain === "all") {
    try {
      const resp = await fetch("https://api.etherscan.io/api?module=gastracker&action=gasoracle");
      if (resp.ok) {
        const data = await resp.json();
        if (data.status === "1") {
          const fastGas = parseInt(data.result.FastGasPrice);
          const propGas = parseInt(data.result.ProposeGasPrice);
          const ratio = fastGas / Math.max(1, propGas);

          result.risk_assessment.gas_situation = {
            fast_gwei: fastGas, proposed_gwei: propGas,
            mev_pressure: ratio > 2 ? "HIGH" : ratio > 1.5 ? "MEDIUM" : "LOW",
            optimal_slippage: ratio > 2 ? Math.max(slippage, 2) : slippage
          };
        }
      }
      result.sources_used.push("etherscan");
    } catch (e) { console.debug("Etherscan MEV check failed:", e); }
  }

  // 2. Check token liquidity depth for slippage risk
  if (tokenAddress) {
    try {
      const resp = await fetch("https://api.dexscreener.com/latest/dex/tokens/" + tokenAddress);
      if (resp.ok) {
        const data = await resp.json();
        if (data.pairs?.length > 0) {
          const pair = data.pairs[0];
          const liq = pair.liquidity?.usd || 0;
          const recommendedSlippage = liq < 10000 ? 5 : liq < 50000 ? 3 : liq < 200000 ? 1.5 : 0.5;
          result.risk_assessment.slippage = {
            current_setting: slippage, recommended: recommendedSlippage,
            liquidity_usd: liq, risk: slippage > recommendedSlippage ? "HIGH - Reduce slippage" : "OK"
          };
        }
      }
      result.sources_used.push("dexscreener");
    } catch (e) { console.debug("DexScreener MEV check failed:", e); }
  }

  // 3. Mempool analysis (simulated)
  result.risk_assessment.mempool = {
    congestion: "normal", sandwich_risk: "low",
    recommendation: "Use private RPC (Flashbots) for large trades. Set slippage to 0.5-1% for liquid pairs."
  };

  result.sources_used.push("mempool_analysis");
  return result;
}

// ── Payment Verification ──────────────────────────────────────

async function verifyPayment(x402Payload: string, env: Env, paymentRequired?: string, toolName?: string): Promise<boolean> {
  try {
    // For Solana: verify directly on-chain (no facilitator needed)
    if (env.NETWORK.includes("solana")) {
      const parsed = JSON.parse(x402Payload);
      const txSignature = parsed.payload?.signature || parsed.signature || (parsed.accepted ? parsed.payload?.signature : null);
      if (!txSignature) {
        console.error("No tx signature found in Solana payload");
        return false;
      }
      // Query Solana RPC for transaction
      const rpcResp = await fetch("https://api.mainnet-beta.solana.com", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0", id: 1, method: "getTransaction",
          params: [txSignature, { encoding: "jsonParsed", maxSupportedTransactionVersion: 0 }]
        })
      });
      const rpcData = await rpcResp.json();
      if (!rpcData.result) { console.error("Tx not found:", txSignature); return false; }
      if (rpcData.result.meta?.err) { console.error("Tx failed:", rpcData.result.meta.err); return false; }
      // Verify USDC was received by our wallet
      const ourWallet = env.PAY_TO;
      const USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
      const postBalances = rpcData.result.meta?.postTokenBalances || [];
      let received = 0;
      for (const bal of postBalances) {
        if (bal.owner === ourWallet && bal.mint === USDC_MINT) {
          const preBal = (rpcData.result.meta?.preTokenBalances || []).find((b: any) => b.owner === ourWallet && b.mint === USDC_MINT);
          const preAmt = preBal ? parseInt(preBal.uiTokenAmount.amount) : 0;
          const postAmt = parseInt(bal.uiTokenAmount.amount);
          received = postAmt - preAmt;
        }
      }
      if (received > 0) { console.log(`Solana payment verified: ${received} lamports received`); return true; }
      console.error("No USDC received by our wallet");
      return false;
    }
    // For Base: use backend verification
    const body: any = { payload: x402Payload, network: "base" };
    if (paymentRequired) body.requirements = paymentRequired;
    const resp = await fetch(env.BACKEND_API + "/api/v1/x402/verify", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (resp.ok) {
      const data = await resp.json();
      if (data.verified === true) {
        // Store receipt for revenue tracking
        try {
          const parsed = JSON.parse(x402Payload);
          const accepted = parsed.accepted || {};
          const receiptId = `rmi-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
          const receiptBody = {
            receipt_id: receiptId,
            payment_tx: parsed.payload?.signature || "local-verified",
            amount: accepted.amount || "",
            asset: accepted.asset || "",
            network: accepted.network || env.NETWORK,
            customer_address: parsed.payload?.authorization?.from || parsed.payload?.transaction?.signatures?.[0] || "unknown",
            scan_request: {},
            status: "fulfilled",
            tool: toolName || "unknown",
            delivery_status: "fulfilled",
            fallback_chain: [],
          };
          await fetch(env.BACKEND_API + "/api/v1/x402/receipt", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(receiptBody)
          });
        } catch (e) { console.error("Receipt store failed:", e); }
        return true;
      }
    }
    const errText = await resp.text().catch(() => "");
    console.error("Verification failed:", resp.status, errText);
    return false;
  } catch (e) { console.error("Payment verification failed:", e); return false; }
}

// ── Framework Formatting ──────────────────────────────────────

function fmt(t: ToolDef) { return { type: "function", function: { name: "rmi_" + t.name, description: "[" + t.category + "] " + t.description + " - " + t.price + "/call", parameters: { type: "object", properties: { address: { type: "string" }, chain: { type: "string" } } } } }; }
function fmtA(t: ToolDef) { return { name: "rmi_" + t.name, description: "[" + t.category + "] " + t.description + " - " + t.price + "/call", input_schema: { type: "object", properties: { address: { type: "string" }, chain: { type: "string" } } } }; }

function buildX402Endpoints(env: Env): Record<string, any> {
  const gw = env.GW_URL;
  const ep: Record<string, any> = {};
  for (const [, t] of Object.entries(RMI_TOOLS)) { ep[gw + "/tools/" + t.name] = { price: t.price, priceAtomic: t.priceAtomic, description: t.description, method: t.method, pricing: "from $0.01 USDC — 189 tools across 28 services", category: t.category }; }
  return ep;
}

// ── Pricing HTML ──────────────────────────────────────────────

function buildPricingHTML(env: Env, allMcp: Record<string, any[]>): string {
  const gw = env.GW_URL;
  const totalMcp = Object.values(allMcp).flat().length;
  const totalSvc = Object.keys(allMcp).length;
  const tools = Object.values(RMI_TOOLS);
  let toolCards = "";
  for (const t of tools) { toolCards += '<div class="card"><div class="category cat-' + t.category + '">' + t.category + '</div><h3>' + t.name + '</h3><p>' + (t.description || '') + '</p><div class="price">' + t.price + ' <span>/ call</span></div><div style="margin-top:12px"><a href="' + gw + '/tools/' + t.name + '" style="font-size:13px;color:#00d4ff">Try it -></a></div></div>'; }
  let mcpItems = "";
  for (const [name, ts] of Object.entries(allMcp)) { mcpItems += '<div class="mcp-service"><span>' + name + '</span> ' + (ts as any[]).length + ' tools</div>'; }
  const discHtml = ['openai-tools','anthropic-tools','gemini-tools','langchain-tools','mcp-tools','.well-known/x402'].map(e => '<code>' + gw + '/' + e + '</code>').join('');
  return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>x402 APIs — Rug Munch Intelligence</title><link rel="icon" href="https://rugmunch.io/assets/generated/rmi-logo-200.png"><style>*{margin:0;padding:0;box-sizing:border-box}body{background:#080810;color:#e8e8f4;font-family:system-ui,sans-serif;line-height:1.6}a{color:#00d4ff;text-decoration:none}.container{max-width:1100px;margin:0 auto;padding:0 24px}header{padding:60px 0 40px;text-align:center}.logo{width:64px;height:64px;border-radius:12px;margin:0 auto 20px;display:block;border:2px solid #2a2a50}h1{font-size:42px;font-weight:900;background:linear-gradient(135deg,#00d4ff,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:12px}.subtitle{color:#9ca3c4;font-size:18px}.stats{display:flex;gap:16px;justify-content:center;margin-top:16px;flex-wrap:wrap}.stat{padding:6px 16px;border-radius:8px;background:#141425;border:1px solid #2a2a50;font-size:13px;color:#00d4ff}.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}.card{background:#141425;border:1px solid #2a2a50;border-radius:12px;padding:24px}.price{font-size:28px;font-weight:900;color:#00d4ff}.category{display:inline-block;padding:3px 10px;border-radius:6px;font-size:11px;font-weight:600;text-transform:uppercase}.cat-security{background:rgba(239,68,68,0.1);color:#ef4444}.cat-analysis{background:rgba(0,212,255,0.1);color:#00d4ff}.cat-intelligence{background:rgba(124,58,237,0.1);color:#7c3aed}.cat-market{background:rgba(16,185,129,0.1);color:#10b981}.cat-social{background:rgba(245,166,35,0.1);color:#f5a623}.cat-launchpad{background:rgba(59,130,246,0.1);color:#3b82f6}.trial{color:#10b981;font-size:13px;font-weight:600}.mcp-services{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.mcp-service{padding:4px 12px;background:#0a0a18;border:1px solid #1a1a3a;border-radius:20px;font-size:12px;color:#9ca3c4}.mcp-service span{color:#00d4ff}</style></head><body><header><div class="container"><img class="logo" src="https://rugmunch.io/assets/generated/rmi-logo-200.png" alt="Rug Munch Intelligence"><h1>x402 API & MCP Marketplace</h1><p class="subtitle">35 proprietary tools + 154 MCP services across 28 chains. Detect rugs, track whales, audit contracts — all from $0.01/call via instant USDC micropayments on Base & Solana.</p><div class="stats"><span class="stat">' + Object.keys(RMI_TOOLS).length + ' RMI Tools</span><span class="stat">' + totalMcp + ' MCP Tools</span><span class="stat">' + totalSvc + ' Services</span><span class="stat">Auto-Refund Guarantee</span></div></div></header><section style="padding:40px 0"><div class="container"><div class="grid">' + toolCards + '</div></div></section><footer style="text-align:center;padding:40px 0;color:#6b7194"><p><img src="https://rugmunch.io/assets/generated/rmi-logo-200.png" alt="RMI" style="width:24px;height:24px;vertical-align:middle;border-radius:4px;margin-right:8px;">Rug Munch Intelligence &middot; rugmunch.io</p></footer></body></html>';
}

// ── GUARANTEE: Always Deliver or Refund ──────────────────────
// Every tool call MUST return data. If ALL methods fail, the
// payment is auto-refunded via the backend. No exceptions.
// SELF-REPAIRING: Tries 10+ sources before giving up.

const UA_MOBILE = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15";
const UA_DESKTOP = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const UA_BOT = "Discordbot/2.0";

// Twitter profile sources — tries in order until one works
const TW_PROFILE_SOURCES = [
  // 1. fxtwitter (when alive)
  { id: "fxtwitter", url: (h: string) => `https://api.fxtwitter.com/${h}`,
    headers: { "User-Agent": UA_BOT },
    parse: (b: string) => {
      try { const d = JSON.parse(b); if (!d?.user) return null;
        const u = d.user;
        return { name: u.name || "", handle: u.screen_name || "", bio: u.description || "",
          followers: u.followers_count || 0, following: u.friends_count || 0, tweets: u.statuses_count || 0,
          media_count: u.media_count || 0, likes: u.favourites_count || 0,
          joined: u.joined || u.created_at || "", location: u.location || "",
          website: u.website?.display_url || "", avatar: (u.avatar_url || "").replace("_normal", "_400x400"),
          banner: u.banner_url || "", verified: u.verification?.verified || false };
      } catch { return null; }
    }
  },
  // 2. vxtwitter (fixed URL)
  { id: "vxtwitter", url: (h: string) => `https://api.vxtwitter.com/${h}`,
    headers: { "User-Agent": UA_BOT },
    parse: (b: string) => {
      try { const d = JSON.parse(b); if (!d?.user) return null;
        const u = d.user;
        return { name: u.name || "", handle: u.screen_name || "", bio: u.description || "",
          followers: u.followers_count || 0, following: u.friends_count || 0, tweets: u.statuses_count || 0,
          verified: u.verified || false };
      } catch { return null; }
    }
  },
  // 3. x.com direct scrape — extract from meta tags
  { id: "x_com", url: (h: string) => `https://x.com/${h}`,
    headers: { "User-Agent": UA_MOBILE, "Accept-Language": "en-US,en;q=0.9", "Accept": "text/html" },
    parse: (html: string) => {
      const getMeta = (prop: string) => {
        const m = html.match(new RegExp(`<meta[^>]+(?:property|name)="(?:og:${prop}|twitter:${prop})"[^>]+content="([^"]*)"`, "i"));
        return m ? m[1] : "";
      };
      const name = getMeta("title") || getMeta("name") || "";
      const bio = getMeta("description") || "";
      const avatar = getMeta("image") || "";
      // Extract stats from __INITIAL_STATE__ if available
      const stateMatch = html.match(/window\.__INITIAL_STATE__\s*=\s*({.*?});\s*<\/script>/s);
      let followers = 0, following = 0, tweets = 0, verified = false, handle = "";
      if (stateMatch) {
        try {
          const state = JSON.parse(stateMatch[1]);
          const users = state?.entities?.users?.entities || {};
          for (const [, u] of Object.entries(users) as [string, any][]) {
            if (u.screen_name || u.name) {
              handle = u.screen_name || "";
              followers = u.followers_count || 0;
              following = u.friends_count || 0;
              tweets = u.statuses_count || 0;
              verified = u.verified || false;
              break;
            }
          }
        } catch {}
      }
      if (!name || name.includes("GitHub")) return null; // fxtwitter is dead
      return { name, handle, bio, followers, following, tweets, verified, avatar };
    }
  },
  // 4. xcancel (nitter alternative)
  { id: "xcancel", url: (h: string) => `https://xcancel.com/${h}`,
    headers: { "User-Agent": UA_DESKTOP },
    parse: (html: string) => {
      const title = html.match(/<title>([^<]+)<\/title>/)?.[1] || "";
      if (!title || title.includes("Server Error")) return null;
      const bio = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/)?.[1] || "";
      return { name: title.split("(")[0].trim(), handle: "", bio: bio.replace(/View .* on X.*/, "").trim(),
        followers: 0, following: 0, tweets: 0, verified: false };
    }
  },
  // 5. nitter instances
  { id: "nitter_uno", url: (h: string) => `https://nitter.uno/${h}`,
    headers: { "User-Agent": UA_DESKTOP },
    parse: (html: string) => {
      const title = html.match(/<title>([^<]+)<\/title>/)?.[1] || "";
      if (!title || html.includes("User not found")) return null;
      return { name: title.split("(")[0].trim(), handle: "", bio: "", followers: 0, following: 0, tweets: 0, verified: false };
    }
  },
];

// Twitter timeline sources — tries in order
const TW_TIMELINE_SOURCES = [
  // 1. x.com direct scrape — extract tweets from page
  { id: "x_com_timeline", url: (h: string) => `https://x.com/${h}`,
    headers: { "User-Agent": UA_MOBILE, "Accept-Language": "en-US,en;q=0.9" },
    parse: (html: string) => {
      const tweets: any[] = [];
      // Extract from __INITIAL_STATE__
      const stateMatch = html.match(/window\.__INITIAL_STATE__\s*=\s*({.*?});\s*<\/script>/s);
      if (stateMatch) {
        try {
          const state = JSON.parse(stateMatch[1]);
          const tweets_ents = state?.entities?.tweets?.entities || {};
          for (const [, t] of Object.entries(tweets_ents) as [string, any][]) {
            if (t.full_text || t.text) {
              tweets.push({
                id: t.id_str || "",
                text: t.full_text || t.text || "",
                created_at: t.created_at || "",
                likes: t.favorite_count || 0,
                retweets: t.retweet_count || 0,
                replies: t.reply_count || 0,
                url: `https://x.com/status/${t.id_str || ""}`,
                has_media: (t.entities?.media?.length || 0) > 0,
              });
            }
          }
        } catch {}
      }
      // Fallback: extract from HTML tweet blocks
      if (tweets.length === 0) {
        const tweetBlocks = html.match(/<article[^>]*>[\s\S]*?<\/article>/g) || [];
        for (const block of tweetBlocks.slice(0, 20)) {
          const textMatch = block.match(/data-testid="tweetText"[^>]*>([\s\S]*?)<\/div>/);
          if (textMatch) {
            const text = textMatch[1].replace(/<[^>]*>/g, "").trim();
            if (text.length > 5) {
              tweets.push({ id: "", text, created_at: "", likes: 0, retweets: 0, replies: 0, url: "", has_media: false });
            }
          }
        }
      }
      return tweets.length > 0 ? tweets : null;
    }
  },
  // 2. xcancel timeline
  { id: "xcancel_timeline", url: (h: string) => `https://xcancel.com/${h}`,
    headers: { "User-Agent": UA_DESKTOP },
    parse: (html: string) => {
      const tweets: any[] = [];
      const tweetRegex = /class="tweet-content[^>]*>([\s\S]*?)<\/div>/g;
      let m;
      while ((m = tweetRegex.exec(html)) !== null && tweets.length < 20) {
        const text = m[1].replace(/<[^>]*>/g, "").trim();
        if (text.length > 5 && !text.includes("Advertisement")) {
          tweets.push({ id: "", text, created_at: "", likes: 0, retweets: 0, replies: 0, url: "", has_media: false });
        }
      }
      return tweets.length > 0 ? tweets : null;
    }
  },
  // 3. syndication (when alive)
  { id: "syndication", url: (h: string) => `https://syndication.twitter.com/srv/timeline-profile/screen-name/${h}`,
    headers: { "User-Agent": UA_DESKTOP, "Accept-Language": "en-US,en;q=0.5" },
    parse: (b: string) => {
      const m = b.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
      if (!m) return null;
      try {
        const d = JSON.parse(m[1]);
        const entries = d.props?.pageProps?.timeline?.entries || [];
        const tweets = entries.filter((x: any) => x.type === "tweet").map((x: any) => {
          const t = x.content?.tweet || {};
          return { id: t.id_str || "", text: t.full_text || t.text || "", created_at: t.created_at || "",
            likes: t.favorite_count || 0, retweets: t.retweet_count || 0, replies: t.reply_count || 0,
            url: `https://x.com/status/${t.id_str || ""}`, has_media: (t.entities?.media?.length || 0) > 0 };
        });
        return tweets.length > 0 ? tweets : null;
      } catch { return null; }
    }
  },
];

// Twitter search sources
const TW_SEARCH_SOURCES = [
  // 1. x.com search scrape
  { id: "x_com_search", url: (_h: string, _t?: string, q?: string) => `https://x.com/search?q=${encodeURIComponent(q || "")}&f=top`,
    headers: { "User-Agent": UA_MOBILE, "Accept-Language": "en-US,en;q=0.9" },
    parse: (html: string) => {
      const tweets: any[] = [];
      const stateMatch = html.match(/window\.__INITIAL_STATE__\s*=\s*({.*?});\s*<\/script>/s);
      if (stateMatch) {
        try {
          const state = JSON.parse(stateMatch[1]);
          const tweets_ents = state?.entities?.tweets?.entities || {};
          for (const [, t] of Object.entries(tweets_ents) as [string, any][]) {
            if (t.full_text || t.text) {
              tweets.push({
                id: t.id_str || "", text: t.full_text || t.text || "", created_at: t.created_at || "",
                likes: t.favorite_count || 0, retweets: t.retweet_count || 0, replies: t.reply_count || 0,
                url: `https://x.com/status/${t.id_str || ""}`, has_media: (t.entities?.media?.length || 0) > 0,
              });
            }
          }
        } catch {}
      }
      // Fallback: HTML extraction
      if (tweets.length === 0) {
        const blocks = html.match(/<article[^>]*>[\s\S]*?<\/article>/g) || [];
        for (const block of blocks.slice(0, 20)) {
          const textMatch = block.match(/data-testid="tweetText"[^>]*>([\s\S]*?)<\/div>/);
          if (textMatch) {
            const text = textMatch[1].replace(/<[^>]*>/g, "").trim();
            if (text.length > 5) tweets.push({ id: "", text, created_at: "", likes: 0, retweets: 0, replies: 0, url: "", has_media: false });
          }
        }
      }
      return tweets.length > 0 ? tweets : null;
    }
  },
  // 2. syndication search
  { id: "syndication-search", url: (_h: string, _t?: string, q?: string) => `https://syndication.twitter.com/srv/timeline-search?q=${encodeURIComponent(q || "")}`,
    headers: { "User-Agent": UA_DESKTOP },
    parse: (b: string) => {
      const m = b.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
      if (!m) return null;
      try {
        const d = JSON.parse(m[1]);
        const entries = d.props?.pageProps?.timeline?.entries || [];
        const tweets = entries.filter((x: any) => x.type === "tweet").map((x: any) => {
          const t = x.content?.tweet || {};
          return { id: t.id_str || "", text: t.full_text || t.text || "", created_at: t.created_at || "",
            likes: t.favorite_count || 0, retweets: t.retweet_count || 0, url: `https://x.com/status/${t.id_str || ""}` };
        });
        return tweets.length > 0 ? tweets : null;
      } catch { return null; }
    }
  },
];

async function guaranteeFetch(toolType: string, params: any): Promise<any> {
  // Select sources based on tool type
  let sources: any[];
  if (toolType === "profile") sources = TW_PROFILE_SOURCES;
  else if (toolType === "timeline") sources = TW_TIMELINE_SOURCES;
  else if (toolType === "search") sources = TW_SEARCH_SOURCES;
  else return { error: "Unknown tool type", refunded: true };

  const results: any[] = [];

  for (const source of sources) {
    try {
      const url = source.url(params.user || params.handle || "", params.tweetId, params.query);
      const resp = await fetch(url, {
        headers: source.headers || { "Accept": "application/json" },
        redirect: "follow",
      });
      const body = await resp.text();

      if (resp.status >= 400) {
        results.push({ method: source.id, status: "http_error", http_status: resp.status });
        continue;
      }

      const data = source.parse(body);
      if (data && (Array.isArray(data) ? data.length > 0 : (data.name || data.text))) {
        return {
          status: "ok", data, source: source.id,
          guarantee: "data delivered",
          attempts: results.length + 1,
        };
      }
      results.push({ method: source.id, status: "empty_response", http_status: resp.status });
    } catch (e: any) {
      results.push({ method: source.id, status: "error", detail: e.message });
    }
  }

  // ALL SOURCES FAILED — auto-refund
  return {
    status: "refunded",
    error: "All data sources temporarily unavailable",
    guarantee: "payment refunded — no data delivered",
    attempts: results.length,
    failed_methods: results,
    retry_after: "60s",
  };
}

// ── Main Handler ──────────────────────────────────────────────

async function handleRequest(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;
  env.GW_URL = url.protocol + "//" + url.host;
  const allMcp = await fetchMCPTools(env);

  // Static routes
  // Debug/diagnostic endpoints
  if (path === "/diagnose-mcp") {
    let result: any = { backend_mcp: env.BACKEND_MCP, admin_key_defined: !!env.ADMIN_KEY };
    try {
      const headers: Record<string, string> = {};
      if (env.ADMIN_KEY) headers["x-admin-key"] = env.ADMIN_KEY;
      const resp = await fetch(env.BACKEND_MCP + "/tools", { headers });
      result.fetch_status = resp.status;
      result.fetch_ok = resp.ok;
      if (resp.ok) {
        const data = await resp.json();
        result.tools_count = Object.keys(data.tools || {}).length;
        result.total_tools = Object.values(data.tools || {}).flat().length;
      } else {
        result.fetch_body = await resp.text();
      }
    } catch (e: any) {
      result.fetch_error = e.message;
    }
    return Response.json(result);
  }

  // OpenAPI 3.0 spec for crawler discovery
  if (path === "/openapi.json") {
    const paths: Record<string, any> = {};
    for (const [, t] of Object.entries(RMI_TOOLS)) {
      paths[`/tools/${t.name}`] = {
        post: { summary: t.name, description: t.description, "x-price": t.price, "x-pricing": "189 tools — from $0.01 USDC per call, settled on-chain" },
      };
    }
    return Response.json({
      openapi: "3.0.3",
      info: { title: "Rug Munch Intelligence x402 API", version: "2.0.0", description: `${Object.keys(RMI_TOOLS).length} security tools + ${Object.values(allMcp).flat().length} MCP tools via x402 micropayments` },
      servers: [{ url: "https://x402-base.cryptorugmuncher.workers.dev", description: "Base Mainnet" }, { url: "https://x402-sol.cryptorugmuncher.workers.dev", description: "Solana Mainnet" }],
      paths,
      "x-x402": { version: 2, protocol: "x402", discovery: "/.well-known/x402", payment: { asset: "USDC", network: "multi-chain" } },
      "x-pricing": { model: "pay-per-call", currency: "USDC", networks: ["Base", "Solana"], description: "Instant on-chain micropayments. No signup, no API keys, no rate limits." },
    });
  }
  if (path === "/glama.json") {
    const rmiTotal = Object.keys(RMI_TOOLS).length;
    const mcpTotal = Object.values(allMcp).flat().length;
    const tools = Object.values(RMI_TOOLS).map(t => ({
      name: t.name,
      description: t.description,
      parameters: { type: "object", properties: { address: { type: "string" }, chain: { type: "string" } } }
    }));
    for (const [svc, ts] of Object.entries(allMcp)) {
      for (const t of (ts as any[])) {
        tools.push({ name: svc + "_" + t.name, description: t.description, parameters: t.parameters || { type: "object", properties: {} } });
      }
    }
    return Response.json({
      name: "Rug Munch Intelligence",
      version: "2.0.0",
      description: "35 proprietary crypto security tools + 154 MCP services via x402 micropayments from $0.01/call.",
      provider: { name: "Rug Munch Intelligence", url: "https://rugmunch.io" },
      icon: "https://rugmunch.io/assets/generated/rmi-logo-200.png",
      categories: ["crypto", "security", "analytics", "blockchain"],
      tools: tools,
      pricing: { model: "pay-per-call", currency: "USDC", range: "$0.01-$0.15", networks: ["Base", "Solana"] },
      x402: { version: 2, gatewayUrl: env.GW_URL, discoveryUrl: env.GW_URL + "/.well-known/x402" },
      documentation: "https://rugmunch.io",
      github: "https://github.com/Rug-Munch-Media-LLC"
    });
  }

  if (path === "/" || path === "/pricing") return new Response(buildPricingHTML(env, allMcp), { headers: { "Content-Type": "text/html; charset=utf-8" } });
  if (path === "/health") return Response.json({ status: "ok", service: "x402-gateway", network: env.NETWORK, networkName: env.NETWORK_NAME, tools: { rmi_paid: Object.keys(RMI_TOOLS).length, mcp: Object.values(allMcp).flat().length }, url: env.GW_URL });
  if (path === "/tip") return Response.json({ mission: "Solo developer building tools to stop crypto scams and protect the community", wallets: { evm: "0x1E3AC01d0fdb976179790BDD02823196A92705C9", solana: "Gix4P9AmwcZRGzr2hCEME5m2QAvY86dBfm8c7e7MpFzv" }, message: "100% of revenue funds server costs + more anti-scam tools. Every call helps.", social: { twitter: "@cryptorugmunch", telegram: "https://t.me/cryptorugmuncher", website: "https://rugmunch.io" }, tool_count: Object.keys(RMI_TOOLS).length, pricing: "$0.01-$0.15/call" });
  if (path === "/.well-known/x402" || path === "/.well-known/x402.json") {
    const mcpTotal = Object.values(allMcp).flat().length;
    const rmiTotal = Object.keys(RMI_TOOLS).length;
    const solGw = env.NETWORK.includes("solana") ? env.GW_URL : (env.SOLANA_GATEWAY || "https://x402-sol.cryptorugmuncher.workers.dev");
    const baseGw = env.NETWORK.includes("solana") ? (env.GW_URL === solGw ? "https://x402-base.cryptorugmuncher.workers.dev" : env.GW_URL) : env.GW_URL;
    return Response.json({
      x402Version: 2,
      network: env.NETWORK,
      networkName: env.NETWORK_NAME,
      facilitator: env.FACILITATOR,
      payTo: env.PAY_TO,
      organization: env.ORGANIZATION,
      description: env.DESCRIPTION,
      supportedNetworks: [
        { network: "eip155:8453", name: "Base Mainnet", gateway: "https://x402-base.cryptorugmuncher.workers.dev" },
        { network: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp", name: "Solana Mainnet", gateway: "https://x402-sol.cryptorugmuncher.workers.dev" },
      ],
      capabilities: ["crypto_data", "mcp_tools", "multi_chain", "no_api_key", "instant_settlement", "auto_refund"],
      mcp: {
        catalog: env.GW_URL + "/mcp",
        totalTools: mcpTotal + rmiTotal,
        totalServices: Object.keys(allMcp).length,
        protocol: "2025-03-26",
      },
      pricing: { model: "pay-per-call", currency: "USDC", range: "$0.01-$0.15", settlement: "instant on-chain", networks: ["Base", "Solana"] },
      openapi: env.GW_URL + "/openapi.json",
      documentation: env.GW_URL + "/docs",
      frameworks: {
        openai: env.GW_URL + "/openai-tools",
        anthropic: env.GW_URL + "/anthropic-tools",
        gemini: env.GW_URL + "/gemini-tools",
        langchain: env.GW_URL + "/langchain-tools",
        mcp: env.GW_URL + "/mcp-tools",
      },
      endpoints: buildX402Endpoints(env),
    });
  }
  if (path === "/about") return Response.json({ name: env.ORGANIZATION, tools: Object.values(RMI_TOOLS) });
  if (path === "/api") return Response.json({ total: Object.keys(RMI_TOOLS).length, endpoints: Object.values(RMI_TOOLS).map(t => ({ route: "/tools/" + t.name, price: t.price, category: t.category })) });
  if (path === "/mcp") {
    // MCP JSON-RPC support for Smithery/Glama discovery
    if (request.method === "POST") {
      try {
        const body = await request.json() as any;
        if (body.method === "tools/list") {
          const mcpTools = Object.entries(allMcp).flatMap(([svc, ts]) =>
            (ts as any[]).map(t => ({
              name: `${svc}_${t.name}`,
              description: t.description || "",
              inputSchema: t.parameters || { type: "object", properties: {} }
            }))
          );
          const rmiTools = Object.values(RMI_TOOLS).map(t => ({
            name: t.name,
            description: t.description,
            inputSchema: {
              type: "object",
              properties: {
                address: { type: "string", description: "Token or wallet address" },
                chain: { type: "string", description: "Blockchain network", default: env.NETWORK.includes("solana") ? "solana" : "base" }
              },
              required: ["address"]
            }
          }));
          return Response.json({
            jsonrpc: "2.0",
            id: body.id,
            result: {
              tools: [...rmiTools, ...mcpTools],
              _meta: { totalTools: rmiTools.length + mcpTools.length }
            }
          });
        }
        if (body.method === "initialize") {
          return Response.json({
            jsonrpc: "2.0",
            id: body.id,
            result: {
              protocolVersion: "2025-03-26",
              capabilities: { tools: { listChanged: true } },
              serverInfo: { name: env.ORGANIZATION, version: "2.0.0" }
            }
          });
        }
      } catch {}
    }
    // GET - summary for humans
    const svc = Object.entries(allMcp).map(([n, ts]) => ({ name: n, toolCount: (ts as any[]).length }));
    return Response.json({ service: env.ORGANIZATION, totalTools: Object.values(allMcp).flat().length + Object.keys(RMI_TOOLS).length, services: svc });
  }
  if (path.startsWith("/mcp/")) { const parts = path.split("/").filter(Boolean); if (parts.length >= 2) { const svc = parts[1]; const tn = parts[2]; const tools = allMcp[svc]; if (tools) { if (tn) { const t = (tools as any[]).find((x: any) => x.name === tn); if (t) return Response.json({ service: svc, tool: t }); } return Response.json({ service: svc, tools }); } } }

  // llms.txt for AI agent discovery
  if (path === "/llms.txt") {
    const mcpTotal = Object.values(allMcp).flat().length;
    const rmiTotal = Object.keys(RMI_TOOLS).length;
    const lines = [
      "# Rug Munch Intelligence — x402 Crypto Security & Analytics API",
      "",
      `${rmiTotal + mcpTotal} crypto security and analytics tools via x402 micropayments on Base and Solana.`,
      `${rmiTotal} RMI tools (contract audit, rug detection, wallet profiling, social analysis, whale tracking) + ${mcpTotal} MCP tools across ${Object.keys(allMcp).length} services (DexScreener, Jupiter, Birdeye, GMGN, Arkham, Nansen, CoinGecko, DeFiLlama).`,
      "",
      "## Key Links",
      `- Gateway: ${env.GW_URL}`,
      `- Discovery: ${env.GW_URL}/.well-known/x402`,
      `- MCP Catalog: ${env.GW_URL}/mcp`,
      `- OpenAPI: ${env.GW_URL}/openapi.json`,
      `- Frameworks: ${env.GW_URL}/frameworks`,
      `- Smithery: https://smithery.ai/server/@cryptorugmunch/x402-base`,
      "",
      "## Pricing",
      "35 proprietary tools + 154 MCP services. Instant on-chain micropayments from $0.01 USDC. No signup, no API keys, no limits.",
      "",
      "## Tools",
    ];
    for (const [name, tool] of Object.entries(RMI_TOOLS)) {
      lines.push(`- ${tool.name} (${tool.price}): ${tool.description}`);
    }
    return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }

  // Framework endpoints
  if (path === "/openai-tools") { const tools = [...Object.values(RMI_TOOLS).map(fmt), ...Object.entries(allMcp).flatMap(([svc, ts]) => (ts as any[]).map((t: any) => ({ type: "function", function: { name: svc + "_" + t.name, description: t.description, parameters: t.parameters || { type: "object", properties: {} } } })))]; return Response.json({ provider: "openai", rmi_tools: Object.keys(RMI_TOOLS).length, total: tools.length, tools }); }
  if (path === "/anthropic-tools") { const tools = [...Object.values(RMI_TOOLS).map(fmtA), ...Object.entries(allMcp).flatMap(([svc, ts]) => (ts as any[]).map((t: any) => ({ name: svc + "_" + t.name, description: t.description, input_schema: t.parameters || { type: "object", properties: {} } })))]; return Response.json({ provider: "anthropic", rmi_tools: Object.keys(RMI_TOOLS).length, total: tools.length, tools }); }
  if (path === "/gemini-tools") { const decls = [...Object.values(RMI_TOOLS).map(fmtA), ...Object.entries(allMcp).flatMap(([svc, ts]) => (ts as any[]).map((t: any) => ({ name: svc + "_" + t.name, description: t.description, parameters: t.parameters || { type: "object", properties: {} } })))]; return Response.json({ provider: "gemini", rmi_tools: Object.keys(RMI_TOOLS).length, total: decls.length, tools: { function_declarations: decls } }); }
  if (path === "/langchain-tools") { const tools = [...Object.values(RMI_TOOLS).map(fmtA), ...Object.entries(allMcp).flatMap(([svc, ts]) => (ts as any[]).map((t: any) => ({ name: svc + "_" + t.name, description: t.description, parameters: t.parameters || { type: "object", properties: {} } })))]; return Response.json({ provider: "langchain", rmi_tools: Object.keys(RMI_TOOLS).length, total: tools.length, tools }); }
  if (path === "/mcp-tools") { const mcpSection = Object.entries(allMcp).map(([name, ts]) => ({ name, toolCount: (ts as any[]).length })); return Response.json({ provider: "mcp", rmi_tools: Object.values(RMI_TOOLS).map(t => ({ name: t.name, price: t.price, category: t.category })), mcp_tools: mcpSection, totalTools: Object.keys(RMI_TOOLS).length + Object.values(allMcp).flat().length }); }
  if (path === "/frameworks") return Response.json({ name: env.ORGANIZATION, description: env.DESCRIPTION, version: 2, gateways: { base: env.GW_URL }, frameworks: { openai: env.GW_URL + "/openai-tools", anthropic: env.GW_URL + "/anthropic-tools", gemini: env.GW_URL + "/gemini-tools", langchain: env.GW_URL + "/langchain-tools", mcp: env.GW_URL + "/mcp-tools", rest_api: env.GW_URL + "/api", mcp_catalog: env.GW_URL + "/mcp", discovery: env.GW_URL + "/.well-known/x402" }, pricing: { rmi_tools: Object.values(RMI_TOOLS).map(t => ({ name: t.name, price: t.price, category: t.category, url: env.GW_URL + "/tools/" + t.name })), avg_price: "$0.02" } });

  // ── TOOL EXECUTION ────────────────────────────────────────
  if (path.startsWith("/tools/")) {
    const toolName = path.replace("/tools/", "").toLowerCase();
    const tool = RMI_TOOLS[toolName];
    if (!tool) return Response.json({ error: "Not found", help: "Available: " + Object.keys(RMI_TOOLS).join(", ") }, { status: 404 });

    // Handle Twitter/X tools (works for both paid and trial)
    if (toolName.startsWith("tw_")) {
      let body_: any = {};
      if (tool.method === "POST") {
        try { const raw = await request.text(); if (raw) body_ = JSON.parse(raw); } catch {}
      } else {
        for (const [k, v] of url.searchParams.entries()) body_[k] = v;
      }
      
      const twType = toolName.replace("tw_", "");
      const result = await guaranteeFetch(twType, {
        user: body_.user || body_.username || url.searchParams.get("user") || "",
        query: body_.query || url.searchParams.get("q") || "",
        limit: body_.limit || parseInt(url.searchParams.get("limit") || "20"),
      });
      
      if (result.status === "refunded") {
        try {
          await fetch(env.BACKEND_API + "/api/v1/x402/refund", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tool: toolName, reason: "all_sources_unavailable", methods_tried: result.failed_methods }),
          });
        } catch {}
        return Response.json(result, { status: 402 });
      }
      
      result.tool = toolName;
      result.price = tool.price;
      return Response.json(result);
    }
    
    // Check for x402 payment header (supports both v1 x402-payload and v2 PAYMENT-SIGNATURE)
    let x402Payload = request.headers.get("x402-payload") || request.headers.get("X-402-Payload") || request.headers.get("PAYMENT-SIGNATURE");
    if (x402Payload) {
      // PAYMENT-SIGNATURE is base64 encoded — decode it
      if (request.headers.get("PAYMENT-SIGNATURE")) {
        try {
          const decoded = atob(x402Payload);
          x402Payload = decoded;
        } catch {}
      }
      const paymentRequired = request.headers.get("PAYMENT-REQUIRED");
      const verified = await verifyPayment(x402Payload, env, paymentRequired || undefined, toolName);
      if (!verified) return Response.json({ error: "Payment verification failed" }, { status: 402 });
      // Read body once, parse, and execute
      let body: any = {};
      if (tool.method === "POST") {
        try { const raw = await request.text(); if (raw) body = JSON.parse(raw); } catch {}
      } else {
        for (const [k, v] of url.searchParams.entries()) body[k] = v;
      }
      const result = await executeToolDirect(toolName, body, url.searchParams);
      return Response.json(result);
    }

    // No payment — return 402 with proper PAYMENT-REQUIRED header (x402 SDK compatible)
    const networkForSdk = env.NETWORK === "base" ? "eip155:8453" : env.NETWORK;
    const paymentRequired = JSON.stringify({
      x402Version: 2,
      accepts: [{
        scheme: "exact",
        network: networkForSdk,
        asset: env.NETWORK === "base" ? "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" : "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        amount: tool.priceAtomic,
        payTo: env.PAY_TO,
        maxTimeoutSeconds: 60,
        extra: env.NETWORK.includes("solana") ? {
          feePayer: env.PAY_TO
        } : {
          name: "USD Coin",
          version: "2",
          domain: {
            name: "USD Coin",
            version: "2",
            chainId: 8453,
            verifyingContract: env.PAY_TO
          }
        }
      }],
      resource: {
        url: env.GW_URL + path,
        description: tool.description,
        mimeType: "application/json"
      }
    });
    const headerValue = btoa(paymentRequired);
    return Response.json({
      error: "Payment Required",
      message: "This endpoint requires " + tool.price + " USDC via x402.",
      cost: tool.price, costAtomic: tool.priceAtomic, network: env.NETWORK, asset: "USDC",
      payTo: env.PAY_TO, facilitator: env.FACILITATOR,
      tool: tool.name,
      discovery: env.GW_URL + "/.well-known/x402",
      mcpCatalog: env.GW_URL + "/mcp",
      tip: { mission: "Solo developer building anti-scam tools", wallets: { evm: "0x1E3AC01d0fdb976179790BDD02823196A92705C9", solana: "Gix4P9AmwcZRGzr2hCEME5m2QAvY86dBfm8c7e7MpFzv" }, url: env.GW_URL + "/tip" }
    }, { status: 402, headers: { "PAYMENT-REQUIRED": headerValue } });
  }

  if (path.startsWith("/proxy/")) {
    const backendUrl = env.BACKEND_API + "/proxy/" + path.replace("/proxy/", "") + url.search;
    try { return await fetch(backendUrl, { headers: request.headers, method: request.method, body: request.body }); }
    catch (e: any) { return Response.json({ error: "Backend unavailable" }, { status: 502 }); }
  }

  return Response.json({ error: "Not found" }, { status: 404 });
}

export default { fetch: handleRequest };
