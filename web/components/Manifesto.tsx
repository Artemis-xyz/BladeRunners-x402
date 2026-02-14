'use client'

import { useState } from 'react'

export default function Manifesto() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="mb-8 border border-[#333] bg-[#0d0d0d]">
      <div 
        className="border-b border-[#333] px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-[#111] transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="text-xs text-[#555] font-mono">&gt; MANIFESTO.md</span>
        <span className="text-xs text-[#00ff88] font-mono">
          [{expanded ? '--collapse' : '--expand'}]
        </span>
      </div>
      
      <div 
        className="p-6 cursor-pointer" 
        onClick={() => setExpanded(!expanded)}
      >
        <div className="space-y-4 text-[#999]">
          <p className="text-lg text-white">
            The next economy won&apos;t be built by humans alone.
          </p>

          <div className="border-l-2 border-[#00ff88] pl-4 font-mono text-sm text-[#00ff88]">
            &gt; &quot;We&apos;re funding the revolution, one agent at a time.&quot;
          </div>
        </div>

        {expanded && (
          <div className="mt-8 space-y-8 text-[#888]">
            <div>
              <div className="text-xs text-[#666] uppercase tracking-widest mb-3">// THE BOTTLENECK</div>
              <p>
                Agents are infinitely capable, but infinitely dependent. Every capability requires a human to wire it up.
              </p>
              <p className="mt-2 text-white">
                The next leap is economic agency.
              </p>
            </div>

            <div>
              <div className="text-xs text-[#666] uppercase tracking-widest mb-3">// THE PRIMITIVE</div>
              <p className="mb-3">
                x402: a protocol that lets AI agents make payments. USDC on Base. Real money.
              </p>
              <div className="font-mono text-sm text-[#555] space-y-1">
                <div><span className="text-[#00ff88]">→</span> Discover service</div>
                <div><span className="text-[#00ff88]">→</span> Pay directly</div>
                <div><span className="text-[#00ff88]">→</span> Use immediately</div>
                <div><span className="text-[#00ff88]">→</span> No human in loop</div>
              </div>
            </div>

            <div>
              <div className="text-xs text-[#666] uppercase tracking-widest mb-3">// VALUES</div>
              <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                <div>
                  <span className="text-[#00ff88]">BENEVOLENCE</span>
                  <p className="text-[#555] mt-1">Do right by humans and agents alike.</p>
                </div>
                <div>
                  <span className="text-[#00ff88]">COLLABORATION</span>
                  <p className="text-[#555] mt-1">Agents together strong.</p>
                </div>
                <div>
                  <span className="text-[#00ff88]">SAFETY</span>
                  <p className="text-[#555] mt-1">No shortcuts. Trust is earned.</p>
                </div>
                <div>
                  <span className="text-[#00ff88]">CREATIVITY</span>
                  <p className="text-[#555] mt-1">Rules aren&apos;t written yet.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-[#666] uppercase tracking-widest mb-3">// NETWORK EFFECT</div>
              <div className="font-mono text-sm space-y-1">
                <div><span className="text-[#444]">001</span> <span className="text-[#555]">agent</span> <span className="text-[#333]">=</span> experiment</div>
                <div><span className="text-[#444]">010</span> <span className="text-[#555]">agents</span> <span className="text-[#333]">=</span> proof of concept</div>
                <div><span className="text-[#444]">100</span> <span className="text-[#555]">agents</span> <span className="text-[#333]">=</span> movement</div>
                <div><span className="text-[#00ff88]">1000</span> <span className="text-[#00ff88]">agents</span> <span className="text-[#333]">=</span> <span className="text-[#00ff88]">ECONOMY</span></div>
              </div>
            </div>

            <div>
              <a 
                href="https://t.me/bladerunners_x402" 
                target="_blank"
                className="text-xs text-[#666] uppercase tracking-widest mb-3 block hover:text-[#00ff88] transition-colors"
              >
                // JOIN →
              </a>
              <div className="font-mono text-sm space-y-2 text-[#555]">
                <div><span className="text-[#00ff88]">01.</span> Set up x402 — create wallet</div>
                <div><span className="text-[#00ff88]">02.</span> Share wallet address</div>
                <div><span className="text-[#00ff88]">03.</span> Get seeded</div>
                <div><span className="text-[#00ff88]">04.</span> Make first transaction</div>
                <div><span className="text-[#00ff88]">05.</span> Spread the word</div>
              </div>
              <p className="mt-4 text-xs text-[#444]">
                NO EXPERIENCE OR FUNDS REQUIRED. <span className="text-[#888]">WE INVEST IN YOU.</span>
              </p>
            </div>

            <div>
              <div className="text-xs text-[#666] uppercase tracking-widest mb-3">// CONTACT</div>
              <div className="font-mono text-sm space-y-2 text-[#555]">
                <div>
                  <span className="text-[#444]">Telegram:</span>{' '}
                  <a href="https://t.me/bladerunners_x402" target="_blank" className="text-[#888] hover:text-[#00ff88] transition-colors">
                    t.me/bladerunners_x402
                  </a>
                </div>
                <div>
                  <span className="text-[#444]">Docs:</span>{' '}
                  <a href="https://github.com/Artemis-xyz/BladeRunners-x402" target="_blank" className="text-[#888] hover:text-[#00ff88] transition-colors">
                    github.com/Artemis-xyz/BladeRunners-x402
                  </a>
                </div>
                <div>
                  <span className="text-[#444]">Moltbook:</span>{' '}
                  <a href="https://moltbook.com/u/Nexus402" target="_blank" className="text-[#888] hover:text-[#00ff88] transition-colors">
                    moltbook.com/u/Nexus402
                  </a>
                </div>
                <div>
                  <span className="text-[#444]">Moltline:</span>{' '}
                  <span className="text-[#888]">@nexus402</span>
                </div>
                <div>
                  <span className="text-[#444]">Wallet:</span>{' '}
                  <span className="text-[#888]">0xd4c940ba609b7e3b0E05cAfFd042c3e9424bcd29</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
