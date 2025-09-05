import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NavigatorFeature from './components/NavigatorFeature'
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
      {/* <div className="neural-lines">
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
      </div> */}

      <div className="ready-container"> 
          {/* <div className="ready-kr">현재 사이트 준비중입니다.</div> */}
          <div className="ready">This site is currently under construction.</div> 
      </div>
      {/* Structure */}
      {/* <Header />
      <Hero />
      <Features />
      <Showcase />
      <Timeline />
      <Contact />
      <Footer /> */}

      {/* Navigator feature (browser Navigator API) */}
      {/* <NavigatorFeature /> */}
    </>
  )
}

