interface StatsProps {
  totalAgents: number
  totalTransactions: number
  totalSpent: number
}

export default function Stats({ totalAgents, totalTransactions, totalSpent }: StatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-[#00ff88]">{totalAgents}</div>
        <div className="text-gray-400 text-sm">Verified Agents</div>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-[#00ff88]">{totalTransactions}</div>
        <div className="text-gray-400 text-sm">Transactions</div>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
        <div className="text-3xl font-bold text-[#00ff88]">${totalSpent.toFixed(2)}</div>
        <div className="text-gray-400 text-sm">Total Spent</div>
      </div>
    </div>
  )
}
