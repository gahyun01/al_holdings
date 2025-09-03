import React from 'react'

export default function Header() {
  return (
    <header className="glass">
      <nav>
        <a href="#home" className="logo" aria-label="NeuralGlass Home">
          <svg className="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#e0a3ff' }}/>
                <stop offset="50%" style={{ stopColor: '#ff69b4' }}/>
                <stop offset="100%" style={{ stopColor: '#9370db' }}/>
              </linearGradient>
            </defs>
            <circle cx="50" cy="30" r="8" fill="url(#logoGradient)" opacity="0.8" />
            <circle cx="30" cy="60" r="6" fill="url(#logoGradient)" opacity="0.6" />
            <circle cx="70" cy="65" r="7" fill="url(#logoGradient)" opacity="0.7" />
            <line x1="50" y1="30" x2="30" y2="60" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6" />
            <line x1="50" y1="30" x2="70" y2="65" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6" />
            <line x1="30" y1="60" x2="70" y2="65" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.6" />
          </svg>
          NEURALGLASS
        </a>
        <ul className="nav-links">
          <li><a href="#features">Neural</a></li>
          <li><a href="#showcase">Matrix</a></li>
          <li><a href="#timeline">Evolution</a></li>
          <li><a href="#contact">Connect</a></li>
          <li><a href="https://example.com" target="_blank" rel="noopener" className="external-link">External</a></li>
        </ul>
        <div className="mobile-menu-toggle" role="button" aria-label="Toggle menu" tabIndex={0}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </nav>
      <div className="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <a href="#features">Neural</a>
        <a href="#showcase">Matrix</a>
        <a href="#timeline">Evolution</a>
        <a href="#contact">Connect</a>
        <a href="https://example.com" target="_blank" rel="noopener" className="external-link">External</a>
      </div>
    </header>
  )
}

