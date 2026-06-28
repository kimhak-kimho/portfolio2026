<template>
  <section id="overview" class="hero section" :class="{ 'is-loaded': isLoaded }">
    <!-- Data Visualization Background -->
    <div class="data-bg">
      <div class="data-grid"></div>
      <div class="data-flow-lines">
        <div class="flow-line" v-for="i in 5" :key="i"></div>
      </div>
      <div class="data-points">
        <div
          v-for="point in dataPoints"
          :key="point.id"
          class="data-point"
          :style="{
            left: point.left,
            top: point.top,
            animationDelay: point.delay,
          }"
        ></div>
      </div>
    </div>

    <div class="container hero-grid">
      <!-- Left column: copy, CTA -->
      <div class="hero-copy" data-reveal>

        <h1 class="title hero-title hero-animate-item">
          <span class="hero-line">Hey! I'm</span>
          <span class="gradient-text hero-line">KIMHAK</span>
        </h1>

        <p class="pro-summary hero-animate-item">I am a Data Coordinator with experience in data management, reporting, and analysis. At the National University of Battambang, I work with student and academic data, ensuring data accuracy and creating reports to support decision-making. I use SQL, Python, Excel, and Power BI to analyze data and build dashboards. I am looking for an opportunity to apply my data skills in the banking sector as a Data Analyst, supporting business insights and strategic decisions.</p>

        <div class="hero-cta hero-animate-item">
          <a class="btn btn-primary hero-btn" href="#projects">Learn More</a>
          <a class="btn btn-secondary hero-btn" href="#contact">Hire Me</a>
        </div>
      </div>

      <!-- Right column: circular profile hero -->
      <aside class="hero-side hero-animate-side" data-reveal style="--reveal-delay: .08s">
        <div class="avatar-stage floating-stage">
          <div class="avatar-ring ring-outer"></div>
          <div class="avatar-ring ring-mid"></div>
          <div class="avatar-ring ring-inner"></div>

          <!-- Concept data shapes around the portrait (no text) -->
          <div class="ring-node node-1" aria-hidden="true"><div class="node-shape shape-circle"></div></div>
          <div class="ring-node node-2" aria-hidden="true"><div class="node-shape shape-square"></div></div>
          <div class="ring-node node-3" aria-hidden="true"><div class="node-shape shape-dot"></div></div>

          <img :src="profileImage" alt="Kimhak profile photo" class="avatar hero-avatar" />
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import profileImage from '../assets/profile2026.png'

const isLoaded = ref(false)

const dataPoints = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: `${8 + (index * 17) % 84}%`,
  top: `${6 + (index * 13) % 78}%`,
  delay: `${(index * 0.22) % 3.5}s`,
}))

onMounted(() => {
  requestAnimationFrame(() => {
    isLoaded.value = true
  })
})
</script>

<style scoped>
.hero {
  position: relative;
  padding-top: 3rem;
  padding-bottom: 2rem;
  overflow: hidden;
}

/* Data Visualization Background */
.data-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.data-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.data-flow-lines {
  position: absolute;
  inset: 0;
}

.flow-line {
  position: absolute;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.3), transparent);
  animation: flowMove 3s ease-in-out infinite;
}

.flow-line:nth-child(1) { left: 10%; animation-delay: 0s; }
.flow-line:nth-child(2) { left: 30%; animation-delay: 0.5s; }
.flow-line:nth-child(3) { left: 50%; animation-delay: 1s; }
.flow-line:nth-child(4) { left: 70%; animation-delay: 1.5s; }
.flow-line:nth-child(5) { left: 90%; animation-delay: 2s; }

@keyframes flowMove {
  0%, 100% { transform: translateY(-100%); opacity: 0; }
  50% { transform: translateY(100%); opacity: 1; }
}

.data-points {
  position: absolute;
  inset: 0;
}

.data-point {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(56, 189, 248, 0.5);
  border-radius: 50%;
  animation: pointFloat 4s ease-in-out infinite;
}

.data-point:nth-child(odd) { animation-delay: 0s; }
.data-point:nth-child(even) { animation-delay: 2s; }

@keyframes pointFloat {
  0%, 100% { transform: translate(0, 0); opacity: 0.3; }
  50% { transform: translate(10px, -10px); opacity: 0.8; }
}

.hero {
  position: relative;
  padding-bottom: 6rem;
  overflow: hidden;
}

.hero-copy {
  max-width: 570px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.hero-title {
  font-size: clamp(3rem, 5vw, 4.7rem);
  line-height: 1.02;
  margin: 0;
  letter-spacing: -0.04em;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.hero-line {
  display: block;
}

.hero-animate-item {
  opacity: 0;
  transform: translateY(28px);
}

.hero.is-loaded .hero-animate-item {
  animation: heroFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero.is-loaded .hero-title {
  animation-delay: 0.15s;
}

.hero.is-loaded .pro-summary {
  animation-delay: 0.38s;
}

.hero.is-loaded .hero-cta {
  animation-delay: 0.58s;
}

.hero-animate-side {
  opacity: 0;
  transform: translateX(36px) scale(0.94);
}

.hero.is-loaded .hero-animate-side {
  animation: heroSlideIn 1s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards;
}

.floating-stage {
  animation: stageFloat 7s ease-in-out infinite;
}

.hero-avatar {
  border: 4px solid rgba(255, 255, 255, 0.95);
  box-shadow:
    0 0 0 6px rgba(77, 163, 255, 0.12),
    0 22px 44px rgba(2, 6, 23, 0.5);
  opacity: 0;
  transform: scale(0.88);
}

.hero.is-loaded .hero-avatar {
  animation:
    avatarEnter 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards,
    avatarGlow 4s ease-in-out 1.4s infinite;
}

.hero-btn {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.hero-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.28) 50%, transparent 70%);
  transform: translateX(-130%);
  transition: transform 0.55s ease;
}

.hero-btn:hover {
  transform: translateY(-3px);
}

.hero-btn:hover::after {
  transform: translateX(130%);
}

@keyframes heroFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroSlideIn {
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes stageFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes avatarEnter {
  from {
    opacity: 0;
    transform: scale(0.88);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes avatarGlow {
  0%, 100% {
    box-shadow:
      0 0 0 6px rgba(77, 163, 255, 0.1),
      0 22px 44px rgba(2, 6, 23, 0.5);
  }
  50% {
    box-shadow:
      0 0 0 10px rgba(77, 163, 255, 0.18),
      0 26px 52px rgba(6, 182, 212, 0.22);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-animate-item,
  .hero-animate-side,
  .floating-stage,
  .hero-avatar,
  .data-grid,
  .flow-line,
  .data-point,
  .ring-outer,
  .ring-mid,
  .ring-inner,
  .ring-node,
  .gradient-text {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

.pro-summary {
  max-width: 42rem;
  line-height: 1.75;
  color: rgba(5, 28, 45, 0.82);
  font-size: 1rem;
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(320px, 420px);
  gap: 1.75rem;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-side {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}

.avatar-stage {
  position: relative;
  width: 420px;
  height: 420px;
  display: grid;
  place-items: center;
}

.avatar-stage::before,
.avatar-stage::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.avatar-stage::before {
  width: 180px;
  height: 180px;
  top: -14%;
  right: 4%;
  background: rgba(6, 182, 212, 0.14);
  filter: blur(20px);
}

.avatar-stage::after {
  width: 90px;
  height: 90px;
  bottom: 10%;
  left: 8%;
  background: rgba(56, 189, 248, 0.18);
}

.avatar-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  box-sizing: border-box;
}

.ring-outer {
  border: 2px solid rgba(6, 182, 212, 0.16);
  transform: scale(1.04);
  animation: ringRotate 20s linear infinite reverse;
}

.ring-mid {
  width: 85%;
  height: 85%;
  border: 1px dashed rgba(56, 189, 248, 0.18);
  animation: ringRotate 28s linear infinite;
}

.ring-inner {
  width: 64%;
  height: 64%;
  border: 2px solid rgba(255, 255, 255, 0.35);
  box-shadow: inset 0 0 0 1px rgba(56, 189, 248, 0.12);
}

/* Inner ring animation: subtle pulse and glow */
.ring-inner {
  animation: innerRingPulse 3s ease-in-out infinite;
  transform-origin: center center;
}

.avatar {
  position: relative;
  width: 143%;
  max-width: 447px;
  aspect-ratio: 1 / 1;
  border-radius: 96%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 34px rgba(2, 6, 23, 0.45);
  z-index: 2;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn-primary {
  background: linear-gradient(90deg, #0F606F, #0B4B5C);
  color: #f8fbff;
}

.btn-secondary {
  background: rgba(255,255,255,0.14);
  color: #082635;
  border: 1px solid rgba(255,255,255,0.24);
}

.hero-image-card {
  margin: 1rem 0 0.8rem 0;
  border-radius: 32px;
  overflow: hidden;
  border: 1.5px solid rgba(56, 189, 248, 0.25);
  box-shadow: 0 32px 80px rgba(56, 189, 248, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(6, 182, 212, 0.08));
  position: relative;
}

.hero-image-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.2), transparent);
  pointer-events: none;
  z-index: 1;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 30px;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-image-card:hover .hero-img {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(6, 182, 212, 0.12) 100%);
  pointer-events: none;
}

.subtitle-overlay {
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
  max-width: 480px;
  width: calc(56% - 2rem);
  background: linear-gradient(180deg, rgba(4,10,20,0.64), rgba(4,10,20,0.5));
  color: #eaf6ff;
  padding: 0.9rem 1rem;
  border-radius: 14px;
  box-shadow: 0 12px 36px rgba(2,6,23,0.55), inset 0 1px 0 rgba(255,255,255,0.03);
  backdrop-filter: blur(10px) saturate(120%);
  font-size: 0.94rem;
  line-height: 1.45;
  z-index: 4;
  border: 1px solid rgba(255,255,255,0.035);
  transform: translateY(12px);
  opacity: 0;
  animation: overlayEnter 560ms cubic-bezier(.2,.9,.2,1) 1 forwards;
}

.subtitle-overlay::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 14px;
  width: 6px;
  height: 40px;
  background: linear-gradient(180deg, var(--primary), var(--primary-2));
  border-radius: 4px;
  box-shadow: 0 8px 18px rgba(6,182,212,0.12);
}

.subtitle-overlay p { margin: 0.4rem 0; }
.subtitle-overlay p:first-child { margin-top: 0; font-weight: 600; color: #f6fbff; }
.subtitle-overlay p:last-child { margin-bottom: 0; color: rgba(224,242,254,0.94); font-size: 0.92rem; }

@keyframes overlayEnter { to { transform: translateY(0); opacity: 1; } }

@media (max-width: 900px) {
  .subtitle-overlay {
    position: static;
    width: 100%;
    max-width: none;
    margin-top: 1rem;
    backdrop-filter: none;
    background: linear-gradient(135deg, rgba(13,37,66,0.94), rgba(3,10,24,0.98));
    border-radius: 12px;
    padding: 0.95rem;
    transform: none;
    opacity: 1;
    animation: none;
  }
  .image-caption { bottom: 0.75rem; left: 0.75rem; }
}

.hero-image {
  grid-column: 1 / -1;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.18);
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-image {
  width: 100%;
  max-width: 100%;
  border-radius: 18px;
  object-fit: cover;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.22);
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--primary-2), var(--creative));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Metrics Bar */
.metrics-bar {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 1.25rem;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(6, 182, 212, 0.05));
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 12px;
}

.metric-item {
  text-align: center;
  flex: 1;
}

.metric-value {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.metric-label {
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 0.25rem;
}

.metric-divider {
  width: 1px;
  height: 40px;
  background: rgba(56, 189, 248, 0.3);
}

/* Tech Stack Visualization */
.tech-stack {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.tech-item .v-icon {
  color: var(--primary);
  width: 24px;
}

.tech-item span {
  width: 80px;
  font-size: 0.9rem;
  font-weight: 500;
}

.tech-bar {
  flex: 1;
  height: 8px;
  background: rgba(56, 189, 248, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.tech-bar::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, var(--primary), var(--primary-2));
  border-radius: 4px;
  animation: barGrow 1.5s ease-out forwards;
}

@keyframes barGrow {
  from { width: 0; }
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 1.1rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
}

.btn-primary {
  background: linear-gradient(90deg,var(--primary),var(--primary-2));
  color: white;
  box-shadow: 0 6px 18px rgba(6,182,212,0.08);
}

.btn-secondary {
  background: rgba(255,255,255,0.03);
  color: var(--primary);
  border: 1px solid rgba(255,255,255,0.04);
}

.hero-side {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}

/* Data Visualization Card */
.data-viz-card {
  padding: 1.5rem;
  background: linear-gradient(180deg, rgba(12, 30, 52, 0.65), rgba(8, 20, 40, 0.6));
  border: 1px solid rgba(56, 189, 248, 0.08);
  backdrop-filter: blur(6px) saturate(120%);
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(3,10,20,0.5);
}

.viz-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.viz-header .v-icon {
  color: var(--primary);
}

.viz-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.viz-content {
  background: linear-gradient(180deg, rgba(8,18,36,0.45), rgba(8,18,36,0.25));
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.main-chart {
  width: 100%;
  height: auto;
}

.viz-footer {
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
  border-top: 1px solid rgba(56, 189, 248, 0.2);
}

.viz-stat {
  text-align: center;
}

.stat-label {
  display: block;
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 0.25rem;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

/* Profile Card */
.hero-photo {
  padding: 1rem;
}

.profile-frame {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.profile-img {
  display: block;
  width: 100%;
  max-height: 380px;
  object-fit: cover;
  object-position: top center;
  border-radius: 12px;
}

.data-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), transparent);
  pointer-events: none;
}

.data-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.6), transparent);
  animation: dataLineMove 3s ease-in-out infinite;
}

.data-line:nth-child(1) { top: 25%; animation-delay: 0s; }
.data-line:nth-child(2) { top: 50%; animation-delay: 1s; }
.data-line:nth-child(3) { top: 75%; animation-delay: 2s; }

@keyframes dataLineMove {
  0%, 100% { transform: translateX(-100%); opacity: 0; }
  50% { transform: translateX(100%); opacity: 1; }
}

.photo-caption {
  margin-top: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;
}

.photo-caption strong {
  font-size: 1rem;
  letter-spacing: 0.05em;
}

.photo-caption span {
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 500;
}

/* Eyebrow and Title Styling */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 1.2rem;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(6, 182, 212, 0.08));
  color: #38bdf8;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  border: 1px solid rgba(56, 189, 248, 0.25);
  width: fit-content;
  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.1);
}

.hero-title {
  margin: 1.5rem 0 0 0;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.8px;
  color: #f0f9ff;
}

/* Role badge */
.role-badge {
  display: inline-block;
  background: rgba(56,189,248,0.12);
  color: #b5e7ff;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.08em;
  border: 1px solid rgba(56,189,248,0.22);
}

.hero-copy {
  padding: 2rem 2.2rem 2rem 2rem;
  border-radius: 32px;
  backdrop-filter: blur(18px);
}

/* Short professional summary */
.pro-summary {
  margin-top: 1rem;
  color: rgba(233, 244, 255, 0.95);
  max-width: 56ch;
  font-size: 1rem;
  line-height: 1.8;
  line-height: 1.5;
}

/* KPI grid */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
  margin-top: 1.25rem;
}
.kpi-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.03);
  padding: 0.9rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(2,6,23,0.4);
}
.kpi-value { font-size: 1.2rem; font-weight: 800; color: var(--primary); }
.kpi-label { font-size: 0.78rem; color: var(--muted); margin-top: 0.25rem; }

/* Pro card (glassmorphism) */
.pro-card {
  background: #050B1F;
  border-radius: 24px;
  padding: 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  border: 1px solid rgba(56,189,248,0.12);
  box-shadow: 0 12px 30px rgba(2,6,23,0.55);
  position: relative;
}

.avatar-wrap {
  position: relative;
  width: 100%;
  max-width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2rem;
}
.avatar-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(56,189,248,0.18);
}
.avatar-ring.ring-large {
  width: 240px;
  height: 240px;
}
.avatar-ring.ring-small {
  width: 200px;
  height: 200px;
  border-style: dotted;
  border-color: rgba(56,189,248,0.22);
}
.avatar {
  position: relative;
  width: 143%;
  max-width: 447px;
  aspect-ratio: 1 / 1;
  border-radius: 96%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 34px rgba(2, 6, 23, 0.45);
  z-index: 2;
}

.card-status {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  padding: 0.28rem 0.75rem;
  border-radius: 999px;
  font-weight: 700;
  color: #042029;
  background: linear-gradient(90deg, #06b6d4, #0891b2);
  box-shadow: 0 6px 22px rgba(6,182,212,0.13);
  border: 1px solid rgba(255,255,255,0.06);
  font-size: 0.88rem;
}

/* Brand text */
.brand { text-align: center; margin-top: 0.4rem; }
.brand .name { font-size: 0.98rem; font-weight: 800; color: #E2E8F0; letter-spacing: 0.05em; }
.brand .title { font-size: 1.35rem; font-weight: 800; color: #38bdf8; margin-top: 0.15rem; line-height: 1.1; }
.brand .tagline { color: rgba(226,232,240,0.75); font-size: 0.88rem; margin-top: 0.25rem; }

/* KPI small cards under the brand */
.kpi-row { display:flex; gap:0.5rem; margin-top:0.5rem; justify-content:center; }
.kpi { background: rgba(255,255,255,0.015); padding:0.4rem 0.65rem; border-radius:12px; display:flex; flex-direction:column; align-items:center; border:1px solid rgba(56,189,248,0.08); }
.kpi-text strong { display:block; font-weight:800; color:var(--primary); font-size:0.95rem; }
.kpi-text span { display:block; font-size:0.75rem; color:var(--muted); margin-top:0.1rem; }

.skill-row { margin-top: 0.35rem; color: rgba(226,232,240,0.78); font-weight:600; font-size:0.88rem; }

.social-row { display:flex; gap:0.7rem; align-items:center; justify-content:center; margin-top:0.75rem; }
.social { display:inline-flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:14px; background: rgba(255,255,255,0.05); color: #dff6ff; border:1px solid rgba(255,255,255,0.08); transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease; }
.social:hover { transform: translateY(-2px); background: rgba(56,189,248,0.16); border-color: rgba(56,189,248,0.22); }

/* Responsive adjustments */
@media (max-width: 900px) {
  .kpi-grid { grid-template-columns: repeat(2, 1fr); }
  .avatar-wrap { width: 200px; height: 200px; }
  .avatar-ring.ring-large { width: 190px; height: 190px; }
  .avatar-ring.ring-small { width: 155px; height: 155px; }
  .avatar { width: 80%; max-width: 160px; }
}

@keyframes innerRingPulse {
  0% { transform: scale(1); box-shadow: inset 0 0 0 1px rgba(56,189,248,0.08); border-color: rgba(255,255,255,0.28); }
  50% { transform: scale(1.04); box-shadow: 0 0 24px rgba(6,182,212,0.16), inset 0 0 0 2px rgba(56,189,248,0.16); border-color: rgba(56,189,248,0.38); }
  100% { transform: scale(1); box-shadow: inset 0 0 0 1px rgba(56,189,248,0.08); border-color: rgba(255,255,255,0.28); }
}

/* Slow rotation for outer/mid rings */
@keyframes ringRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Concept data nodes */
.ring-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  pointer-events: none;
  transform-origin: center center;
  animation: nodeFloat 4.5s ease-in-out infinite;
  color: #eaf6ff;
}
.node-shape {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), rgba(56,189,248,0.12));
  border: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(6,182,212,0.06);
}
.shape-circle { border-radius: 50%; width: 62px; height: 62px; }
.shape-square { border-radius: 8px; width: 52px; height: 52px; transform: rotate(8deg); }
.shape-dot { width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(90deg, #06b6d4, #0891b2); box-shadow: 0 6px 18px rgba(6,182,212,0.18); border: 1px solid rgba(255,255,255,0.09); }

.node-1 { top: 8%; right: 18%; transform: translate(0,0); }
.node-2 { bottom: 6%; right: 22%; transform: translate(0,0); animation-delay: 0.25s; }
.node-3 { left: 14%; top: 28%; transform: translate(0,0); animation-delay: 0.5s; }

@keyframes nodeFloat {
  0% { transform: translateY(0) scale(1); opacity: 0.95; }
  50% { transform: translateY(-6px) scale(1.02); opacity: 1; }
  100% { transform: translateY(0) scale(1); opacity: 0.95; }
}

/* Animated gradient for emphasized words */
.gradient-text {
  background: linear-gradient(135deg, #38bdf8 0%, #06b6d4 50%, #0891b2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  background-size: 200% 200%;
  animation: gradientShift 6s linear infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Subtitle multi-column layout on wide screens */
.subtitle {
  max-width: 72ch;
  margin-top: 1rem;
  column-gap: 2rem;
}

@media (min-width: 900px) {
  .subtitle { columns: 2; -webkit-columns: 2; -moz-columns: 2; }
}

/* Image caption overlay */
.image-caption {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  z-index: 3;
  background: rgba(2, 6, 23, 0.6);
  color: rgba(255, 255, 255, 0.92);
  padding: 0.38rem 0.6rem;
  border-radius: 8px;
  font-size: 0.78rem;
  backdrop-filter: blur(6px);
}

/* CTA button polish */
.btn.btn-primary {
  background: linear-gradient(90deg, var(--primary), var(--primary-2));
  color: #042029;
  box-shadow: 0 8px 24px rgba(6, 182, 212, 0.14);
  border: none;
}
.btn.btn-primary:hover { transform: translateY(-2px); filter: brightness(1.03); }

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
  .image-wrapper {
    height: 280px;
  }
  .hero-side {
    order: -1;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .hero-copy {
    text-align: center;
  }

  .hero-cta {
    justify-content: center;
  }

  .metrics-bar {
    flex-direction: column;
    gap: 1rem;
  }

  .metric-divider {
    width: 100%;
    height: 1px;
  }
}
</style>
