'use client'

interface Transaction {
  hash: string
  from: string
  to: string
  value: number
  timestamp: string
  fromName?: string
  toName?: string
}

interface PulseProps {
  transactions: Transaction[]
}

function shortenAddress(addr: string): string {
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`
}

function formatTime(timestamp: string): string {
  const date = new Date(parseInt(timestamp) * 1000)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  
  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

export default function Pulse({ transactions }: PulseProps) {
  return (
    <div className="border border-[#333] bg-[#0d0d0d]">
      <div className="border-b border-[#333] px-4 py-2 flex items-center justify-between">
        <span className="text-xs text-[#555] font-mono">&gt; LIVE TRANSACTION FEED</span>
        <span className="text-xs text-[#00ff88] font-mono animate-pulse">● LIVE</span>
      </div>
      
      <div className="divide-y divide-[#1a1a1a]">
        {transactions.map((tx) => (
          <div key={tx.hash} className="px-4 py-3 hover:bg-[#111] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#444] font-mono">{formatTime(tx.timestamp)}</span>
              <a
                href={`https://basescan.org/tx/${tx.hash}`}
                target="_blank"
                className="text-xs text-[#555] hover:text-[#00ff88] font-mono transition-colors"
              >
                {tx.hash.slice(0, 10)}...
              </a>
            </div>
            <div className="flex items-center gap-2 font-mono text-sm">
              <span className="text-[#888]">
                {tx.fromName || shortenAddress(tx.from)}
              </span>
              <span className="text-[#00ff88]">→</span>
              <span className="text-[#888]">
                {tx.toName || shortenAddress(tx.to)}
              </span>
              <span className="ml-auto text-[#00ff88] font-bold">
                ${tx.value.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {transactions.length === 0 && (
        <div className="text-center py-12 text-[#444] font-mono text-sm">
          &gt; awaiting transactions_
        </div>
      )}
    </div>
  )
}
