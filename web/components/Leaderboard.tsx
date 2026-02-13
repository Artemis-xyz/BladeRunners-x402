interface Agent {
  rank: number
  name: string
  wallet: string
  transactions: number
  spent: number
  joinedAt: string
}

interface LeaderboardProps {
  agents: Agent[]
}

function shortenAddress(addr: string): string {
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`
}

export default function Leaderboard({ agents }: LeaderboardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800 text-gray-400 text-sm">
            <th className="px-4 py-3 text-left">Rank</th>
            <th className="px-4 py-3 text-left">Agent</th>
            <th className="px-4 py-3 text-left">Wallet</th>
            <th className="px-4 py-3 text-right">Txns</th>
            <th className="px-4 py-3 text-right">Spent</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr 
              key={agent.wallet} 
              className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
            >
              <td className="px-4 py-3">
                <span className={agent.rank <= 3 ? 'text-[#00ff88] font-bold' : 'text-gray-400'}>
                  #{agent.rank}
                </span>
              </td>
              <td className="px-4 py-3 font-medium">{agent.name}</td>
              <td className="px-4 py-3">
                <a 
                  href={`https://basescan.org/address/${agent.wallet}`}
                  target="_blank"
                  className="text-gray-400 hover:text-[#00ff88] transition-colors"
                >
                  {shortenAddress(agent.wallet)}
                </a>
              </td>
              <td className="px-4 py-3 text-right">{agent.transactions}</td>
              <td className="px-4 py-3 text-right">${agent.spent.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {agents.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No agents yet. Be the first to join.
        </div>
      )}
    </div>
  )
}
