import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useNeuralEffects from './hooks/useNeuralEffects'

export default function App() {
  useNeuralEffects()
  return (
    <>
      {/* Background and visual layers */}
      <div className="neural-background" />
      <div className="geometric-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* Structure */}
      <Header />
      <Hero />
      <Features />
      <Showcase />
      <Timeline />
      <Contact />
      <Footer />

      {/* Navigator feature (browser Navigator API) */}
    </>
  )
}

