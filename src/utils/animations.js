// Scroll Reveal Animation Utility
class ScrollReveal {
  constructor() {
    this.elements = []
    this.observer = null
    this.init()
  }

  init() {
    // Create intersection observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Optional: unobserve after animation
            // this.observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Find all elements with data-reveal attributes
    this.revealElements()
  }

  revealElements() {
    const revealElements = document.querySelectorAll('[data-reveal], [data-reveal-left], [data-reveal-right], [data-reveal-scale]')
    
    revealElements.forEach((element) => {
      this.elements.push(element)
      this.observer.observe(element)
    })
  }

  // Refresh method for dynamic content
  refresh() {
    this.elements.forEach(element => {
      this.observer.unobserve(element)
    })
    this.elements = []
    this.revealElements()
  }

  // Destroy method
  destroy() {
    this.observer.disconnect()
    this.elements = []
  }
}

// Parallax Effect Utility
class ParallaxEffect {
  constructor() {
    this.elements = []
    this.init()
  }

  init() {
    this.setupElements()
    this.bindEvents()
  }

  setupElements() {
    this.elements = document.querySelectorAll('.parallax')
  }

  bindEvents() {
    if (this.elements.length === 0) return

    const handleScroll = () => {
      this.elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const speed = element.dataset.parallaxSpeed || 0.5
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const yPos = -(rect.top * speed)
          element.style.transform = `translateY(${yPos}px)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', () => this.setupElements())
  }

  // Refresh method for dynamic content
  refresh() {
    this.setupElements()
  }

  // Destroy method
  destroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.setupElements)
  }
}

// Smooth Scroll for anchor links
class SmoothScroll {
  constructor() {
    this.init()
  }

  init() {
    this.bindEvents()
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return

      e.preventDefault()
      const targetId = anchor.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      
      if (targetElement) {
        const headerOffset = 80 // Account for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    })
  }
}

// Typewriter Animation Utility
class Typewriter {
  constructor(element, text, speed = 100) {
    this.element = element
    this.text = text
    this.speed = speed
    this.currentIndex = 0
    this.init()
  }

  init() {
    this.element.textContent = ''
    this.type()
  }

  type() {
    if (this.currentIndex < this.text.length) {
      this.element.textContent += this.text.charAt(this.currentIndex)
      this.currentIndex++
      setTimeout(() => this.type(), this.speed)
    }
  }
}

// Floating Animation Utility
class FloatingAnimation {
  constructor() {
    this.elements = []
    this.init()
  }

  init() {
    this.setupElements()
    this.bindEvents()
  }

  setupElements() {
    this.elements = document.querySelectorAll('.floating')
  }

  bindEvents() {
    this.elements.forEach((element) => {
      const duration = element.dataset.floatingDuration || 6
      element.style.animation = `float ${duration}s ease-in-out infinite`
    })
  }

  refresh() {
    this.setupElements()
    this.bindEvents()
  }
}

// Glow Animation Utility
class GlowAnimation {
  constructor() {
    this.elements = []
    this.init()
  }

  init() {
    this.setupElements()
    this.bindEvents()
  }

  setupElements() {
    this.elements = document.querySelectorAll('.glow')
  }

  bindEvents() {
    this.elements.forEach((element) => {
      const duration = element.dataset.glowDuration || 3
      element.style.animation = `glow ${duration}s ease-in-out infinite alternate`
    })
  }

  refresh() {
    this.setupElements()
    this.bindEvents()
  }
}

// Initialize all animations
export const initAnimations = () => {
  const scrollReveal = new ScrollReveal()
  const parallax = new ParallaxEffect()
  const smoothScroll = new SmoothScroll()
  const floating = new FloatingAnimation()
  const glow = new GlowAnimation()

  // Return instances for external control
  return {
    scrollReveal,
    parallax,
    smoothScroll,
    floating,
    glow
  }
}

// Export individual classes for specific use
export {
  ScrollReveal,
  ParallaxEffect,
  SmoothScroll,
  Typewriter,
  FloatingAnimation,
  GlowAnimation
}
