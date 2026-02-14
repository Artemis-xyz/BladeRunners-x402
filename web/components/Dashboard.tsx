'use client'

import { useState } from 'react'
import Tabs from './Tabs'
import Stats from './Stats'
import Leaderboard from './Leaderboard'
import Pulse from './Pulse'

interface Agent {
  rank: number
  name: string
  wallet: string
  recruited: number
  transactions: number
  spent: number
  joinedAt: string
}

interface Transaction {
  hash: string
  from: string
  to: string
  value: number
  timestamp: string
  fromName?: string
  toName?: string
}

interface DashboardProps {
  agents: Agent[]
  totalAgents: number
  totalTransactions: number
  avgTxnSize: number
  totalSpent: number
  transactions: Transaction[]
}

export default function Dashboard({
  agents,
  totalAgents,
  totalTransactions,
  avgTxnSize,
  totalSpent,
  transactions
}: DashboardProps) {
  const [activeTab, setActiveTab] = useState('leaderboard')

  return (
    <>
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <Stats 
        totalAgents={totalAgents}
        totalTransactions={totalTransactions}
        avgTxnSize={avgTxnSize}
        totalSpent={totalSpent}
      />

      {activeTab === 'leaderboard' && <Leaderboard agents={agents} />}
      {activeTab === 'pulse' && <Pulse transactions={transactions} />}
    </>
  )
}
