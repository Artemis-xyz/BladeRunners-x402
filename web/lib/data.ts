import wallets from '@/data/wallets.json'

const BASESCAN_API = 'https://api.basescan.org/api'
const USDC_CONTRACT = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'

interface WalletEntry {
  name: string
  wallet: string
  joinedAt: string
}

interface TokenTx {
  from: string
  to: string
  value: string
  tokenDecimal: string
}

async function getWalletStats(wallet: string) {
  try {
    // Fetch USDC token transfers for this wallet
    const url = `${BASESCAN_API}?module=account&action=tokentx&contractaddress=${USDC_CONTRACT}&address=${wallet}&sort=desc`
    
    const res = await fetch(url, { next: { revalidate: 300 } })
    const data = await res.json()
    
    if (data.status !== '1' || !data.result) {
      return { transactions: 0, spent: 0 }
    }
    
    const txs: TokenTx[] = data.result
    
    // Count outgoing transactions and sum spent amount
    let transactions = 0
    let spent = 0
    
    for (const tx of txs) {
      if (tx.from.toLowerCase() === wallet.toLowerCase()) {
        transactions++
        const decimals = parseInt(tx.tokenDecimal) || 6
        spent += parseInt(tx.value) / Math.pow(10, decimals)
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
  
  // Fetch stats for all wallets in parallel
  const statsPromises = entries.map(async (entry) => {
    const stats = await getWalletStats(entry.wallet)
    return {
      name: entry.name,
      wallet: entry.wallet,
      joinedAt: entry.joinedAt,
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
