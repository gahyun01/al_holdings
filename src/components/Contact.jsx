import React from 'react'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info glass">
          <h3>ESTABLISH CONNECTION</h3>
          <p>Ready to interface with the future? Our neural network specialists are standing by to guide you through the quantum realm of possibilities.</p>
          <p>Connect through the dimensional gateway and let us initialize your journey into the digital consciousness matrix.</p>
          <div className="social-links">
            <a href="#" className="glass" aria-label="Social 1">📡</a>
            <a href="#" className="glass" aria-label="Social 2">🌐</a>
            <a href="#" className="glass" aria-label="Social 3">💬</a>
            <a href="#" className="glass" aria-label="Social 4">📨</a>
          </div>
        </div>
        <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Neural ID (Name)" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Quantum Channel (Email)" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Mission Objective (Subject)" required />
          </div>
          <div className="form-group">
            <textarea rows="5" placeholder="Transmission Data (Message)" required></textarea>
          </div>
          <button type="submit" className="submit-btn">TRANSMIT TO MATRIX</button>
        </form>
      </div>
    </section>
  )
}

