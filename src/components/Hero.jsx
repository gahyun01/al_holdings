import React from 'react'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-subtitle">Welcome to the Future</div>
        <h1>NEURAL INTERFACE</h1>
        <div className="hero-description">
          <p>
            Experience the convergence of consciousness and technology through quantum-enhanced glassmorphism interfaces. Step into a reality where digital dreams become tangible experiences, transcending the boundaries between mind and machine.
          </p>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">99.9%</span>
            <span className="hero-stat-label">Neural Sync Rate</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">∞</span>
            <span className="hero-stat-label">Processing Power</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">0.001</span>
            <span className="hero-stat-label">Latency (ms)</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">24/7</span>
            <span className="hero-stat-label">Neural Access</span>
          </div>
        </div>
        <div className="cta-buttons">
          <a href="#features" className="cta-button">Initialize Neural Link</a>
          <a href="#showcase" className="cta-button secondary">Explore Matrix</a>
        </div>
      </div>
    </section>
  )
}

