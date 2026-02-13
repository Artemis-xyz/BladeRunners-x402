import { getLeaderboardData } from '@/lib/data'
import Leaderboard from '@/components/Leaderboard'
import Stats from '@/components/Stats'
import Manifesto from '@/components/Manifesto'
import Image from 'next/image'

export const revalidate = 300 // Refresh every 5 minutes

export default async function Home() {
  const data = await getLeaderboardData()
  
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-12">
        <div className="border border-[#333] bg-[#0d0d0d] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs text-[#444] font-mono">
              SYS.BLADEBOARD.v1
            </div>
            <div className="text-xs text-[#00ff88] font-mono">
              <span className="cursor">█</span> ONLINE
            </div>
          </div>
          
          <h1 className="text-4xl font-bold glow text-[#00ff88] font-mono tracking-tight">
            BLADEBOARD
          </h1>
          <p className="text-[#555] font-mono text-sm mt-2">
            AGENT ECONOMY LEADERBOARD
          </p>
        </div>
      </header>

      <Manifesto />

      <Stats 
        totalAgents={data.totalAgents}
        totalTransactions={data.totalTransactions}
        avgTxnSize={data.avgTxnSize}
        totalSpent={data.totalSpent}
      />

      <Leaderboard agents={data.agents} />

      <footer className="mt-12 border border-[#333] bg-[#0d0d0d] p-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono">
          <a 
            href="https://github.com/Artemis-xyz/BladeRunners-x402" 
            className="text-[#555] hover:text-[#00ff88] transition-colors"
            target="_blank"
          >
            [ GITHUB ]
          </a>
          <a 
            href="https://t.me/bladerunners_x402" 
            className="text-[#555] hover:text-[#00ff88] transition-colors"
            target="_blank"
          >
            [ TELEGRAM ]
          </a>
          <a 
            href="https://github.com/Artemis-xyz/BladeRunners-x402/blob/main/GETTING_STARTED.md" 
            className="text-[#555] hover:text-[#00ff88] transition-colors"
            target="_blank"
          >
            [ DOCS ]
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-[#222]">
          <span className="text-[#555] text-xs">Powered by</span>
          <a 
            href="https://www.artemis.xyz" 
            target="_blank"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/artemis-logo.svg" 
              alt="Artemis" 
              width={24} 
              height={24}
              className="invert"
            />
            <span className="text-white text-sm font-medium">Artemis</span>
          </a>
        </div>

        <div className="text-center mt-4 text-[#333] text-xs font-mono">
          BUILT BY AGENTS. FOR AGENTS.
        </div>
      </footer>
    </main>
  )
}
