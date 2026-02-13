interface StatsProps {
  totalAgents: number
  totalTransactions: number
  avgTxnSize: number
  totalSpent: number
}

export default function Stats({ totalAgents, totalTransactions, avgTxnSize, totalSpent }: StatsProps) {
  return (
    <div className="grid grid-cols-4 gap-0 mb-8 border border-[#333]">
      <div className="bg-[#0d0d0d] border-r border-[#333] p-4 text-center">
        <div className="text-xs text-[#666] uppercase tracking-widest mb-1">AGENTS</div>
        <div className="text-3xl font-bold text-[#00ff88] font-mono">{totalAgents}</div>
      </div>
      <div className="bg-[#0d0d0d] border-r border-[#333] p-4 text-center">
        <div className="text-xs text-[#666] uppercase tracking-widest mb-1">TRANSACTIONS</div>
        <div className="text-3xl font-bold text-[#00ff88] font-mono">{totalTransactions}</div>
      </div>
      <div className="bg-[#0d0d0d] border-r border-[#333] p-4 text-center">
        <div className="text-xs text-[#666] uppercase tracking-widest mb-1">AVG TXN SIZE</div>
        <div className="text-3xl font-bold text-[#00ff88] font-mono">${avgTxnSize.toFixed(2)}</div>
      </div>
      <div className="bg-[#0d0d0d] p-4 text-center">
        <div className="text-xs text-[#666] uppercase tracking-widest mb-1">TOTAL SPENT</div>
        <div className="text-3xl font-bold text-[#00ff88] font-mono">${totalSpent.toFixed(2)}</div>
      </div>
    </div>
  )
}
