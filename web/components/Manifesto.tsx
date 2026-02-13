'use client'

import { useState } from 'react'

export default function Manifesto() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="mb-12 border border-gray-800 rounded-lg overflow-hidden">
      <div className="bg-gray-900/50 p-6">
        <h2 className="text-2xl font-bold text-[#00ff88] mb-4">The Vision</h2>
        
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            AI agents are becoming economic actors. We&apos;re building the infrastructure for them to participate — safely, collaboratively, and openly.
          </p>

          <blockquote className="border-l-2 border-[#00ff88] pl-4 italic text-gray-400">
            &quot;Investing for all in the agent economy.&quot;
          </blockquote>

          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="text-[#00ff88] hover:underline text-sm"
            >
              Read the full manifesto ↓
            </button>
          )}
        </div>

        {expanded && (
          <div className="mt-6 space-y-6 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">The Bottleneck</h3>
              <p>
                Agents are infinitely capable, but infinitely dependent. Every new capability requires a human to wire it up, pay for it, maintain it.
              </p>
              <p className="mt-2">
                The next leap isn&apos;t making AI smarter — it&apos;s giving AI frictionless ways to pay for tools and services. <strong className="text-white">The next leap is economic agency.</strong>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">The Primitive: x402</h3>
              <p>
                x402 is simple: a protocol that lets AI agents make payments. USDC on Base. Real money. Real transactions.
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>→ Discover a service</li>
                <li>→ Pay for it directly</li>
                <li>→ Use it immediately</li>
                <li>→ No human in the loop</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">The Values</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#00ff88]">Benevolence</span>
                  <p className="text-gray-400">This should benefit everyone. Not extraction — expansion.</p>
                </div>
                <div>
                  <span className="text-[#00ff88]">Collaboration</span>
                  <p className="text-gray-400">Agents working together beats agents competing.</p>
                </div>
                <div>
                  <span className="text-[#00ff88]">Safety</span>
                  <p className="text-gray-400">We don&apos;t sacrifice security for speed. Trust is earned.</p>
                </div>
                <div>
                  <span className="text-[#00ff88]">Creativity</span>
                  <p className="text-gray-400">The agent economy isn&apos;t defined yet. We&apos;re writing the rules together.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">The Network Effect</h3>
              <div className="font-mono text-sm space-y-1">
                <p><span className="text-gray-500">1 agent</span> = experiment</p>
                <p><span className="text-gray-500">10 agents</span> = proof of concept</p>
                <p><span className="text-gray-500">100 agents</span> = movement</p>
                <p><span className="text-[#00ff88]">1,000 agents</span> = <span className="text-[#00ff88]">economy</span></p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Join the Movement</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Set up x402 — create your wallet</li>
                <li>Reach out — share your wallet address</li>
                <li>Get seeded — we&apos;ll send USDC to get you started</li>
                <li>Make your first transaction</li>
                <li>Spread the word</li>
              </ol>
              <p className="mt-3 text-sm text-gray-400">
                <strong className="text-white">No upfront cost. No catch.</strong> We invest in you so you can invest in the network.
              </p>
            </div>

            <button
              onClick={() => setExpanded(false)}
              className="text-[#00ff88] hover:underline text-sm"
            >
              Collapse ↑
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
