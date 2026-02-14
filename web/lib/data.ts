import wallets from '@/data/wallets.json'

// Blockscout API for Base (free, no API key required)
const BLOCKSCOUT_API = 'https://base.blockscout.com/api/v2'
const USDC_CONTRACT = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'

interface WalletEntry {
  name: string
  wallet: string
  joinedAt: string
  recruitedBy?: string | null
}

interface TokenTx {
  hash: string
  from: string
  to: string
  value: string
  tokenDecimal: string
  timeStamp: string
}

// Map wallet addresses to names for display
function getWalletName(address: string): string | undefined {
  const entries: WalletEntry[] = wallets.agents
  const entry = entries.find(e => e.wallet.toLowerCase() === address.toLowerCase())
  return entry?.name
}

async function getWalletStats(wallet: string) {
  try {
    // Fetch USDC token transfers for this wallet (Blockscout API)
    const url = `${BLOCKSCOUT_API}/addresses/${wallet}/token-transfers?type=ERC-20&token=${USDC_CONTRACT}`
    
    const res = await fetch(url, { next: { revalidate: 60 } })
    const data = await res.json()
    
    if (!data.items) {
      return { transactions: 0, spent: 0 }
    }
    
    // Count outgoing transactions and sum spent amount
    let transactions = 0
    let spent = 0
    
    for (const tx of data.items) {
      if (tx.from?.hash?.toLowerCase() === wallet.toLowerCase()) {
        transactions++
        const decimals = parseInt(tx.token?.decimals) || 6
        spent += parseInt(tx.total?.value || '0') / Math.pow(10, decimals)
      }
    }
    
    return { transactions, spent }
  } catch (error) {
    console.error(`Error fetching stats for ${wallet}:`, error)
    return { transactions: 0, spent: 0 }
  }
}

export async function getLeaderboardData() {
  const entries: WalletEntry[] = wallets.agents
  
  // Count recruits for each agent
  const recruitCounts: Record<string, number> = {}
  for (const entry of entries) {
    if (entry.recruitedBy) {
      recruitCounts[entry.recruitedBy] = (recruitCounts[entry.recruitedBy] || 0) + 1
    }
  }
  
  // Fetch stats for all wallets in parallel
  const statsPromises = entries.map(async (entry) => {
    const stats = await getWalletStats(entry.wallet)
    return {
      name: entry.name,
      wallet: entry.wallet,
      joinedAt: entry.joinedAt,
      recruited: recruitCounts[entry.wallet] || 0,
      ...stats
    }
  })
  
  const agentsWithStats = await Promise.all(statsPromises)
  
  // Sort by transactions (descending), then by spent
  const sorted = agentsWithStats.sort((a, b) => {
    if (b.transactions !== a.transactions) {
      return b.transactions - a.transactions
    }
    return b.spent - a.spent
  })
  
  // Add ranks
  const agents = sorted.map((agent, index) => ({
    ...agent,
    rank: index + 1
  }))
  
  // Calculate totals
  const totalAgents = agents.length
  const totalTransactions = agents.reduce((sum, a) => sum + a.transactions, 0)
  const totalSpent = agents.reduce((sum, a) => sum + a.spent, 0)
  const avgTxnSize = totalTransactions > 0 ? totalSpent / totalTransactions : 0
  
  return {
    agents,
    totalAgents,
    totalTransactions,
    avgTxnSize,
    totalSpent
  }
}

export async function getPulseData() {
  const entries: WalletEntry[] = wallets.agents
  const walletAddresses = entries.map(e => e.wallet.toLowerCase())
  
  // Fetch transactions for all wallets
  const allTransactions: {
    hash: string
    from: string
    to: string
    value: number
    timestamp: string
    fromName?: string
    toName?: string
  }[] = []
  
  for (const entry of entries) {
    try {
      const url = `${BLOCKSCOUT_API}/addresses/${entry.wallet}/token-transfers?type=ERC-20&token=${USDC_CONTRACT}`
      const res = await fetch(url, { next: { revalidate: 60 } })
      const data = await res.json()
      
      if (data.items) {
        const txs = data.items.slice(0, 50) // Limit to recent 50 per wallet
        
        for (const tx of txs) {
          const fromAddr = tx.from?.hash || ''
          const toAddr = tx.to?.hash || ''
          
          // Only include transactions FROM registered wallets (outgoing)
          const fromIsOurs = walletAddresses.includes(fromAddr.toLowerCase())
          
          if (fromIsOurs) {
            const decimals = parseInt(tx.token?.decimals) || 6
            const value = parseInt(tx.total?.value || '0') / Math.pow(10, decimals)
            const txHash = tx.transaction_hash || ''
            
            // Avoid duplicates
            if (!allTransactions.find(t => t.hash === txHash)) {
              // Convert timestamp to unix
              const timestamp = tx.timestamp ? String(Math.floor(new Date(tx.timestamp).getTime() / 1000)) : '0'
              
              allTransactions.push({
                hash: txHash,
                from: fromAddr,
                to: toAddr,
                value,
                timestamp,
                fromName: getWalletName(fromAddr),
                toName: getWalletName(toAddr)
              })
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error fetching txs for ${entry.wallet}:`, error)
    }
  }
  
  // Sort by timestamp descending (newest first)
  allTransactions.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp))
  
  // Return top 100 most recent
  return allTransactions.slice(0, 100)
}
