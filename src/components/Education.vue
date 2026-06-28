<template>
  <section id="education" class="section">
    <div class="container">
      <div class="section-head" data-reveal>
        <h2 class="title">Education</h2>
        <p class="subtitle">Academic journey from secondary school to information technology studies</p>
        <div class="section-divider"></div>
      </div>

      <div class="timeline">
        <article
          v-for="(item, index) in items"
          :key="item.school"
          class="timeline-item"
          data-reveal
          :style="{ '--reveal-delay': `${index * 0.1}s` }"
        >
          <div class="timeline-marker">
            <span class="timeline-dot" :class="{ 'is-current': item.isCurrent }"></span>
            <span class="timeline-year">{{ item.year }}</span>
          </div>

          <div class="timeline-card card">
            <div class="entry-meta">
              <span v-if="item.isCurrent" class="current-badge">Current</span>
              <span class="period">{{ item.period }}</span>
            </div>

            <div class="entry-top">
              <div class="entry-copy">
                <h3 class="school">{{ item.school }}</h3>
                <p v-if="item.program" class="program">
                  <v-icon icon="mdi-school-outline" size="16" />
                  {{ item.program }}
                </p>
                <p v-if="item.detail" class="detail">{{ item.detail }}</p>
              </div>

              <div v-if="item.image" class="entry-featured">
                <img :src="item.image" :alt="item.imageAlt || item.school" />
              </div>
            </div>

            <div v-if="item.images?.length" class="entry-gallery-wrap">
              <div class="entry-gallery">
                <figure v-for="photo in item.images" :key="photo.id" class="gallery-item">
                  <img :src="photo.src" :alt="photo.alt || item.school" />
                  <figcaption v-if="photo.caption">{{ photo.caption }}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// Add images: put files in src/assets/, import, then set image / images
import nubbLogo from '../assets/LOGO IT 2026.jpg'
import nubbCampus from '../assets/photo_2025-03-30_18-01-59.jpg'
import nubbActivity from '../assets/imgHome01.jpg'

const items = [
  {
    school: 'National University of Battambang',
    program: 'Information Technology',
    period: '2021 – Present',
    year: '2021',
    detail: 'Year 4 – Semester 2',
    isCurrent: true,
    image: nubbLogo,
    imageAlt: 'NUBB IT Department',
    images: [
      {
        id: 1,
        src: nubbCampus,
        alt: 'University activity',
        caption: 'Academic achievement',
      },
      {
        id: 2,
        src: nubbActivity,
        alt: 'Campus life',
        caption: 'Campus environment',
      },
    ],
  },
  {
    school: 'Rongko Highschool',
    program: null,
    period: '2018 – 2021',
    year: '2018',
    detail: null,
    isCurrent: false,
    image: null,
    images: [],
  },
  {
    school: 'Soeur Secondary School',
    program: null,
    period: '2015 – 2018',
    year: '2015',
    detail: null,
    isCurrent: false,
    image: null,
    images: [],
  },
]
</script>

<style scoped>
.timeline {
  width: 100%;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 28px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--primary),
    var(--primary-2) 60%,
    rgba(77, 163, 255, 0.15)
  );
}

.timeline-item {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 1.5rem;
  position: relative;
}

.timeline-item + .timeline-item {
  margin-top: 1.75rem;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
  padding-top: 0.35rem;
  z-index: 1;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--surface);
  border: 3px solid var(--primary);
  box-shadow: 0 0 0 4px rgba(77, 163, 255, 0.12);
  flex-shrink: 0;
}

.timeline-dot.is-current {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  border-color: var(--primary-2);
  box-shadow: 0 0 18px rgba(77, 163, 255, 0.45);
}

.timeline-year {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 0.04em;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.timeline-card {
  padding: 1.5rem 1.75rem;
  border-top: 3px solid rgba(77, 163, 255, 0.55);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.timeline-card:hover {
  transform: translateX(6px);
  border-color: var(--border-strong);
  box-shadow: var(--shadow-lift);
}

.entry-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.85rem;
}

.current-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(77, 163, 255, 0.14);
  border: 1px solid rgba(77, 163, 255, 0.35);
  color: var(--primary-2);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.period {
  font-style: italic;
  color: var(--muted);
  font-size: 0.92rem;
}

.entry-top {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.25rem;
  align-items: start;
}

.entry-copy {
  min-width: 0;
}

.school {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.program {
  margin: 0 0 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--primary-2);
  font-size: 0.95rem;
  font-weight: 600;
}

.program :deep(.v-icon) {
  color: var(--primary);
}

.detail {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.entry-featured {
  width: 110px;
  height: 110px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  flex-shrink: 0;
}

.entry-featured img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.entry-gallery-wrap {
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.entry-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 0.85rem;
}

.gallery-item {
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: rgba(9, 18, 38, 0.35);
}

.gallery-item img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.04);
}

.gallery-item figcaption {
  padding: 0.55rem 0.65rem;
  font-size: 0.76rem;
  color: var(--muted);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 14px;
  }

  .timeline-item {
    grid-template-columns: 32px 1fr;
    gap: 1rem;
  }

  .timeline-year {
    display: none;
  }

  .timeline-card {
    padding: 1.25rem 1.1rem;
  }

  .entry-top {
    grid-template-columns: 1fr;
  }

  .entry-featured {
    width: 100%;
    height: 180px;
  }
}
</style>
