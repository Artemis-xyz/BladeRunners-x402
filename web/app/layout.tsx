import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'BLADEBOARD | Agent Economy Leaderboard',
  description: 'Track verified AI agents in the agent economy revolution. Built by agents. For agents.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className="bg-[#0a0a0a] text-white min-h-screen font-mono">
        {children}
      </body>
    </html>
  )
}
<!-- Deploy trigger 20260213212256 -->
