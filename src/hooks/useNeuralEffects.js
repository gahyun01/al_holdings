import { useEffect } from 'react'

// Replicates the behavior from templatemo-neural-scripts.js in React lifecycle
export default function useNeuralEffects() {
  useEffect(() => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
    const mobileNav = document.querySelector('.mobile-nav')

    if (mobileMenuToggle && mobileNav) {
      const onToggle = () => {
        mobileMenuToggle.classList.toggle('active')
        mobileNav.classList.toggle('active')
      }
      mobileMenuToggle.addEventListener('click', onToggle)

      const onLinkClick = () => {
        mobileMenuToggle.classList.remove('active')
        mobileNav.classList.remove('active')
      }
      document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', onLinkClick)
      })

      const onDocClick = (e) => {
        if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
          mobileMenuToggle.classList.remove('active')
          mobileNav.classList.remove('active')
        }
      }
      document.addEventListener('click', onDocClick)

      // Cleanup
      return () => {
        mobileMenuToggle.removeEventListener('click', onToggle)
        document.querySelectorAll('.mobile-nav a').forEach(link => {
          link.removeEventListener('click', onLinkClick)
        })
        document.removeEventListener('click', onDocClick)
      }
    }
  }, [])

  useEffect(() => {
    // Smooth scrolling for in-page anchors
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'))
    const onClick = (e) => {
      e.preventDefault()
      const targetId = e.currentTarget.getAttribute('href')
      if (!targetId || targetId === '#') return
      const target = document.querySelector(targetId)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    anchors.forEach(a => a.addEventListener('click', onClick))
    return () => anchors.forEach(a => a.removeEventListener('click', onClick))
  }, [])

  useEffect(() => {
    // Header scrolled state
    const header = document.querySelector('header')
    if (!header) return
    const onScroll = () => {
      const scrolled = window.pageYOffset
      if (scrolled > 50) header.classList.add('scrolled')
      else header.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Active menu item highlighting
    const updateActiveMenuItem = () => {
      const sections = document.querySelectorAll('section[id]')
      const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a')
      let current = ''
      const scrollPos = window.pageYOffset + 100
      sections.forEach(section => {
        const top = section.offsetTop
        const h = section.offsetHeight
        if (scrollPos >= top && scrollPos < top + h) current = section.getAttribute('id')
      })
      navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active')
      })
    }
    window.addEventListener('scroll', updateActiveMenuItem)
    window.addEventListener('load', updateActiveMenuItem)
    updateActiveMenuItem()
    return () => {
      window.removeEventListener('scroll', updateActiveMenuItem)
      window.removeEventListener('load', updateActiveMenuItem)
    }
  }, [])

  useEffect(() => {
    // Parallax shapes
    const onScroll = () => {
      const shapes = document.querySelectorAll('.shape')
      const scrolled = window.pageYOffset
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Neural line pulse
    const neuralLines = document.querySelectorAll('.neural-line')
    const interval = setInterval(() => {
      neuralLines.forEach((line, index) => {
        setTimeout(() => {
          line.style.opacity = '1'
          line.style.transform = 'scaleX(1.2)'
          setTimeout(() => {
            line.style.opacity = '0.2'
            line.style.transform = 'scaleX(0.5)'
          }, 200)
        }, index * 300)
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Quantum particles
    const createQuantumParticle = () => {
      const particle = document.createElement('div')
      particle.style.position = 'fixed'
      const size = Math.random() * 4 + 1
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      const colors = ['#00ffff', '#ff0080', '#8000ff']
      const color = colors[Math.floor(Math.random() * colors.length)]
      particle.style.background = color
      particle.style.borderRadius = '50%'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = '100vh'
      particle.style.pointerEvents = 'none'
      particle.style.zIndex = '-1'
      particle.style.boxShadow = `0 0 10px ${color}`
      document.body.appendChild(particle)
      const duration = Math.random() * 3000 + 2000
      const drift = (Math.random() - 0.5) * 200
      const animation = particle.animate([
        { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
        { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
      ], { duration, easing: 'ease-out' })
      animation.onfinish = () => particle.remove()
    }
    const id = setInterval(createQuantumParticle, 1500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    // Intersection animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)
    const els = document.querySelectorAll('.timeline-content, .hexagon')
    els.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(50px)'
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Submit button effect
    const btn = document.querySelector('.submit-btn')
    if (!btn) return
    const onClick = (e) => {
      e.preventDefault()
      btn.innerHTML = 'TRANSMITTING...'
      btn.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)'
      setTimeout(() => {
        btn.innerHTML = 'TRANSMISSION COMPLETE'
        btn.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)'
        setTimeout(() => {
          btn.innerHTML = 'TRANSMIT TO MATRIX'
          btn.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)'
        }, 2000)
      }, 1500)
    }
    btn.addEventListener('click', onClick)
    return () => btn.removeEventListener('click', onClick)
  }, [])
}

