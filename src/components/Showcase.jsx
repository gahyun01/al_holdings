import React from 'react'

const items = [
  { icon: '🔮', title: 'Holographic UI', text: '3D interfaces projected into reality space' },
  { icon: '🛡️', title: 'Quantum Security', text: 'Unbreakable encryption protocols' },
  { icon: '🚀', title: 'Warp Navigation', text: 'Instant travel between data nodes' },
  { icon: '💎', title: 'Crystal Storage', text: 'Infinite capacity data crystals' },
  { icon: '🎯', title: 'Neural Targeting', text: 'Thought-based interaction systems' },
  { icon: '⭐', title: 'Stellar Network', text: 'Galactic-scale connectivity matrix' },
]

export default function Showcase() {
  return (
    <section className="showcase" id="showcase">
      <h2 className="section-title">MATRIX PROTOCOLS</h2>
      <div className="hexagon-container">
        {items.map((i, idx) => (
          <div className="hexagon" key={idx}>
            <div className="hexagon-inner glass">
              <div className="hexagon-icon">{i.icon}</div>
              <h4>{i.title}</h4>
              <p>{i.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

