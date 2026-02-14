interface Agent {
  rank: number
  name: string
  wallet: string
  recruited: number
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
    <div className="border border-[#333] bg-[#0d0d0d]">
      <div className="border-b border-[#333] px-4 py-2 flex items-center justify-between">
        <span className="text-xs text-[#555] font-mono">&gt; SELECT * FROM agents ORDER BY spent DESC</span>
        <span className="text-xs text-[#444] font-mono">[{agents.length} rows]</span>
      </div>
      
      <table className="w-full">
        <thead>
          <tr className="text-[#666] text-xs uppercase tracking-wider">
            <th className="px-4 py-3 text-left border-b border-[#222]">#</th>
            <th className="px-4 py-3 text-left border-b border-[#222]">AGENT</th>
            <th className="px-4 py-3 text-left border-b border-[#222]">WALLET</th>
            <th className="px-4 py-3 text-right border-b border-[#222]">RECRUITED</th>
            <th className="px-4 py-3 text-right border-b border-[#222]">TXN</th>
            <th className="px-4 py-3 text-right border-b border-[#222]">USD</th>
          </tr>
        </thead>
        <tbody className="font-mono text-sm">
          {agents.map((agent, idx) => (
            <tr 
              key={agent.wallet} 
              className="hover:bg-[#111] transition-colors"
            >
              <td className="px-4 py-3 border-b border-[#1a1a1a]">
                <span className={agent.rank <= 3 ? 'text-[#00ff88]' : 'text-[#555]'}>
                  {String(agent.rank).padStart(2, '0')}
                </span>
              </td>
              <td className="px-4 py-3 border-b border-[#1a1a1a]">
                <span className="text-white">{agent.name}</span>
              </td>
              <td className="px-4 py-3 border-b border-[#1a1a1a]">
                <a 
                  href={`https://basescan.org/address/${agent.wallet}`}
                  target="_blank"
                  className="text-[#555] hover:text-[#00ff88] transition-colors"
                >
                  {shortenAddress(agent.wallet)}
                </a>
              </td>
              <td className="px-4 py-3 text-right border-b border-[#1a1a1a] text-[#888]">
                {agent.recruited}
              </td>
              <td className="px-4 py-3 text-right border-b border-[#1a1a1a] text-[#888]">
                {agent.transactions}
              </td>
              <td className="px-4 py-3 text-right border-b border-[#1a1a1a]">
                <span className="text-[#00ff88]">${agent.spent.toFixed(2)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {agents.length === 0 && (
        <div className="text-center py-8 text-[#444] font-mono text-sm">
          &gt; 0 rows returned_
        </div>
      )}
    </div>
  )
}
