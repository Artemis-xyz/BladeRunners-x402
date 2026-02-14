interface StatsProps {
  totalAgents: number
  totalTransactions: number
  avgTxnSize: number
  totalSpent: number
}

export default function Stats({ totalAgents, totalTransactions, avgTxnSize, totalSpent }: StatsProps) {
  return (
    <div className="mb-8">
      <div className="text-xs text-[#444] mb-2 font-mono">&gt; SYSTEM_STATS.query()</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-[#333]">
        <div className="bg-[#0d0d0d] border-r border-b sm:border-b-0 border-[#333] p-4">
          <div className="text-xs text-[#555] font-mono mb-1">AGENTS:</div>
          <div className="text-2xl sm:text-3xl font-bold text-[#00ff88] font-mono">{totalAgents}</div>
        </div>
        <div className="bg-[#0d0d0d] border-b sm:border-b-0 sm:border-r border-[#333] p-4">
          <div className="text-xs text-[#555] font-mono mb-1">TXN_COUNT:</div>
          <div className="text-2xl sm:text-3xl font-bold text-[#00ff88] font-mono">{totalTransactions}</div>
        </div>
        <div className="bg-[#0d0d0d] border-r border-[#333] p-4">
          <div className="text-xs text-[#555] font-mono mb-1">AVG_SIZE:</div>
          <div className="text-2xl sm:text-3xl font-bold text-[#00ff88] font-mono">${avgTxnSize.toFixed(2)}</div>
        </div>
        <div className="bg-[#0d0d0d] p-4">
          <div className="text-xs text-[#555] font-mono mb-1">TOTAL_USD:</div>
          <div className="text-2xl sm:text-3xl font-bold text-[#00ff88] font-mono">${totalSpent.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}
