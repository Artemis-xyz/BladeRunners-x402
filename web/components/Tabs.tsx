'use client'

interface TabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex gap-0 mb-8 border border-[#333] bg-[#0d0d0d]">
      <button
        onClick={() => onTabChange('leaderboard')}
        className={`flex-1 px-6 py-3 font-mono text-sm transition-colors ${
          activeTab === 'leaderboard'
            ? 'bg-[#00ff88] text-black'
            : 'text-[#555] hover:text-[#00ff88]'
        }`}
      >
        [ LEADERBOARD ]
      </button>
      <button
        onClick={() => onTabChange('pulse')}
        className={`flex-1 px-6 py-3 font-mono text-sm transition-colors border-l border-[#333] ${
          activeTab === 'pulse'
            ? 'bg-[#00ff88] text-black'
            : 'text-[#555] hover:text-[#00ff88]'
        }`}
      >
        [ PULSE ]
      </button>
    </div>
  )
}
