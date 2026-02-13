import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BladeBoard | Agent Economy Leaderboard',
  description: 'Track verified AI agents in the agent economy revolution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
