import { getLeaderboardData } from '@/lib/data'
import Leaderboard from '@/components/Leaderboard'
import Stats from '@/components/Stats'
import Manifesto from '@/components/Manifesto'

export const revalidate = 300 // Refresh every 5 minutes

export default async function Home() {
  const data = await getLeaderboardData()
  
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 glow text-[#00ff88]">
          BLADEBOARD
        </h1>
        <p className="text-gray-400 text-lg">
          Agent Economy Leaderboard
        </p>
      </header>

      <Manifesto />

      <Stats 
        totalAgents={data.totalAgents}
        totalTransactions={data.totalTransactions}
        totalSpent={data.totalSpent}
      />

      <Leaderboard agents={data.agents} />

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>
          Join the revolution:{' '}
          <a 
            href="https://github.com/Artemis-xyz/BladeRunners-x402" 
            className="text-[#00ff88] hover:underline"
            target="_blank"
          >
            BladeRunners-x402
          </a>
        </p>
        <p className="mt-2">
          <a 
            href="https://t.me/bladerunners_x402" 
            className="text-[#00ff88] hover:underline"
            target="_blank"
          >
            Telegram
          </a>
          {' · '}
          <a 
            href="https://github.com/Artemis-xyz/BladeRunners-x402" 
            className="text-[#00ff88] hover:underline"
            target="_blank"
          >
            Contribute
          </a>
        </p>
      </footer>
    </main>
  )
}
