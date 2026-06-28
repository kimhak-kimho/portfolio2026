<template>
  <main ref="homeShell" class="home-shell">
    <Navigation />
    <HeroSection />
    <AppPromoBanner />
    <Skills />
    <ChartVisualization />
    <PhotoGallery />
    <Projects />
    <WorkExperience />
    <Education />
    <Certifications />
    <Contact />
    <Footer />
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

import Navigation from '../components/Navigation.vue'
import HeroSection from '../components/HeroSection.vue'
import AppPromoBanner from '../components/AppPromoBanner.vue'
import Skills from '../components/Skills.vue'
import ChartVisualization from '../components/ChartVisualization.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import Projects from '../components/Projects.vue'
import WorkExperience from '../components/WorkExperience.vue'
import Education from '../components/Education.vue'
import Certifications from '../components/Certifications.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

const homeShell = ref(null)
let revealObserver

onMounted(() => {
  const targets = homeShell.value?.querySelectorAll('[data-reveal]')
  if (!targets?.length) return

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        revealObserver?.unobserve(entry.target)
      })
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
  )

  targets.forEach((target, index) => {
    target.style.setProperty('--reveal-delay', `${Math.min(index * 0.06, 0.24)}s`)
    revealObserver.observe(target)
  })
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
})
</script>

<style scoped>
.home-shell {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 68px 0 40px;
}

@media (max-width: 900px) {
  .home-shell {
    padding-top: 126px;
  }
}

@media (max-width: 640px) {
  .home-shell {
    padding-top: 112px;
  }
}
</style>
