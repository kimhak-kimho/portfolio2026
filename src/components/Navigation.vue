<template>
  <header class="nav-wrap" :class="{ 'is-scrolled': isScrolled }">
    <div class="container nav-inner">
      <a href="#overview" class="brand">KIMHO KIMHAK</a>

      <nav class="nav-links">
        <a
          v-for="item in links"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click="mobileOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="nav-actions">
        <a href="#projects" class="btn btn-secondary">View Work</a>
        <a href="/cv.pdf" class="btn btn-primary" download>Download CV</a>
      </div>

      <button class="menu-btn" @click="mobileOpen = !mobileOpen" aria-label="Toggle navigation">
        <v-icon :icon="mobileOpen ? 'mdi-close' : 'mdi-menu'" size="22" />
      </button>
    </div>

    <nav class="mobile-nav" :class="{ open: mobileOpen }">
      <a v-for="item in links" :key="`m-${item.id}`" :href="`#${item.id}`" @click="mobileOpen = false">
        {{ item.label }}
      </a>
      <a href="/cv.pdf" download @click="mobileOpen = false">Download CV</a>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const links = [
  { id: 'overview', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
]

const isScrolled = ref(false)
const activeSection = ref('overview')
const mobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 16
  const marker = window.scrollY + 120
  for (const link of links) {
    const section = document.getElementById(link.id)
    if (!section) continue
    if (marker >= section.offsetTop && marker < section.offsetTop + section.offsetHeight) {
      activeSection.value = link.id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-wrap {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 20;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.nav-wrap.is-scrolled {
  background: rgba(9, 16, 33, 0.72);
  backdrop-filter: blur(14px);
  border-color: var(--border);
}

.nav-inner {
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  text-decoration: none;
  font-size: 1.15rem;
  letter-spacing: 0.04em;
  font-weight: 700;
  color: var(--primary-2);
}

.nav-links {
  display: flex;
  gap: 1.2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.2rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text);
  border-bottom-color: var(--primary);
}

.nav-actions {
  display: flex;
  gap: 0.55rem;
}

.menu-btn {
  display: none;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 0.36rem;
  background: transparent;
  color: var(--text);
}

.mobile-nav {
  display: none;
}

@media (max-width: 920px) {
  .nav-links,
  .nav-actions {
    display: none;
  }

  .menu-btn {
    display: inline-flex;
  }

  .mobile-nav {
    display: grid;
    gap: 0.4rem;
    max-height: 0;
    overflow: hidden;
    border-top: 1px solid transparent;
    background: rgba(9, 16, 33, 0.95);
    transition: all 0.3s ease;
  }

  .mobile-nav.open {
    max-height: 320px;
    border-top-color: var(--border);
    padding: 0.6rem 1rem 1rem;
  }

  .mobile-nav a {
    text-decoration: none;
    color: var(--muted);
    padding: 0.6rem 0.4rem;
    border-radius: 12px;
  }

  .mobile-nav a:hover {
    color: var(--text);
    background: rgba(109, 175, 255, 0.12);
  }
}
</style>
