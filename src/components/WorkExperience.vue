<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="section-head" data-reveal>
        <h2 class="title">Work Experience</h2>
        <p class="subtitle">
          Data-driven career progression with measurable impact and continuous growth
        </p>
        <div class="section-divider"></div>
      </div>

      <div class="timeline">
        <article
          v-for="(item, index) in items"
          :key="item.role"
          class="timeline-item"
          data-reveal
          :style="{ '--reveal-delay': `${index * 0.12}s` }"
        >
          <div class="timeline-marker">
            <span class="timeline-dot" :class="{ 'is-current': item.isCurrent }"></span>
            <span class="timeline-year">{{ item.year }}</span>
          </div>

          <div class="timeline-card card">
            <header class="entry-header">
              <div class="entry-meta">
                <span v-if="item.isCurrent" class="current-badge">Current Role</span>
                <span class="period">{{ item.period }}</span>
              </div>
              <div class="entry-top">
                <div class="entry-copy">
                  <h3 class="role">{{ item.role }}</h3>
                  <p class="company">
                    <v-icon icon="mdi-domain" size="16" />
                    {{ item.company }}
                  </p>
                </div>
                <div v-if="item.image" class="entry-featured">
                  <img :src="item.image" :alt="item.imageAlt || item.role" />
                </div>
              </div>
            </header>

            <div v-if="item.progression?.length" class="entry-block">
              <h4 class="block-title">Career Progression</h4>
              <div class="progression-track">
                <div
                  v-for="(step, stepIndex) in item.progression"
                  :key="step.title"
                  class="progression-step"
                >
                  <div class="step-node">
                    <span class="step-dot" :class="{ 'is-active': stepIndex === item.progression.length - 1 }"></span>
                    <span v-if="stepIndex < item.progression.length - 1" class="step-line"></span>
                  </div>
                  <div class="step-content">
                    <strong>{{ step.title }}</strong>
                    <span>{{ step.duration }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="item.responsibilityGroups?.length" class="entry-block">
              <h4 class="block-title">Key Responsibilities</h4>
              <div class="responsibility-groups">
                <div
                  v-for="group in item.responsibilityGroups"
                  :key="group.title"
                  class="responsibility-group"
                >
                  <h5 class="group-title">
                    <v-icon :icon="group.icon" size="18" />
                    {{ group.title }}
                  </h5>
                  <ul>
                    <li v-for="point in group.items" :key="point">{{ point }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div v-else-if="item.responsibilities?.length" class="entry-block">
              <h4 class="block-title">Key Responsibilities</h4>
              <ul>
                <li v-for="point in item.responsibilities" :key="point">{{ point }}</li>
              </ul>
            </div>

            <div v-if="item.images?.length" class="entry-block">
              <h4 class="block-title">Work Photos</h4>
              <div class="entry-gallery">
                <figure v-for="photo in item.images" :key="photo.id" class="gallery-item">
                  <img :src="photo.src" :alt="photo.alt || item.role" />
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
// 1. Put your image in src/assets/
// 2. Import it here
// 3. Add image / images to the item below
import workPhoto from '../assets/photo_2023-10-12_21-59-46.jpg'
import officePhoto from '../assets/DSC05158.JPG'
import achievementPhoto from '../assets/photo_2025-03-30_18-01-59.jpg'
import logoPhoto from '../assets/LOGO IT 2026.jpg'
import homePhoto from '../assets/imgHome01.jpg'

const workGallery = [
  { id: 1, src: officePhoto, alt: 'Professional workplace moment', caption: 'Professional moment' },
  { id: 2, src: workPhoto, alt: 'Team collaboration', caption: 'Team collaboration' },
  { id: 3, src: achievementPhoto, alt: 'Academic achievement', caption: 'Academic achievement' },
  { id: 4, src: homePhoto, alt: 'Campus environment', caption: 'Campus environment' },
  { id: 5, src: logoPhoto, alt: 'IT Department logo', caption: 'IT Department' },
  { id: 6, src: officePhoto, alt: 'Data reporting session', caption: 'Reporting session' },
  { id: 7, src: workPhoto, alt: 'Staff meeting', caption: 'Staff meeting' },
  { id: 8, src: achievementPhoto, alt: 'Project milestone', caption: 'Project milestone' },
  { id: 9, src: homePhoto, alt: 'University workspace', caption: 'University workspace' },
  { id: 10, src: logoPhoto, alt: 'NUBB IT program', caption: 'NUBB IT program' },
]

const items = [
  {
    role: 'Data Coordinator / Staff',
    company: 'National University of Battambang, Battambang',
    period: 'September 2023 – Present',
    year: '2023',
    isCurrent: true,
    image: workPhoto,
    imageAlt: 'Team collaboration at National University of Battambang',
    images: workGallery,
    progression: [
      { title: 'Weekend Volunteer', duration: '1 year 3 months' },
      { title: 'Weekend Staff', duration: '9 months' },
      { title: 'Full-Time Staff', duration: 'Based on strong performance' },
    ],
    responsibilityGroups: [
      {
        title: 'Data Collection & Management',
        icon: 'mdi-database-outline',
        items: [
          'Collected, cleaned, and analyzed student enrollment data for reporting and decision-making',
          'Assisted in student enrollment data entry and maintained accurate database records',
          'Maintained data accuracy, consistency, and proper record management within the system',
          'Validated operational datasets before submission to ensure completeness and quality',
          'Supported daily data entry workflows and corrected inconsistencies across records',
        ],
      },
      {
        title: 'Reporting & Analytics',
        icon: 'mdi-chart-bar',
        items: [
          'Prepared reports and data summaries using Excel Pivot Tables and charts',
          'Built Excel and Power BI dashboards to support management decision-making',
          'Produced weekly and monthly enrollment and performance summaries for leadership review',
          'Tracked key metrics such as intake, retention, and enrollment trends across departments',
          'Turned raw data into clear visual insights for staff and management presentations',
        ],
      },
      {
        title: 'Operations & Process Improvement',
        icon: 'mdi-cog-outline',
        items: [
          'Supported data tracking, performance monitoring, and daily operational processes',
          'Improved reporting efficiency by reducing manual preparation time through better workflows',
          'Helped streamline data collection, validation, and reporting procedures across teams',
          'Contributed to better data consistency by following and improving internal standards',
          'Supported operational reporting needs during peak enrollment and academic periods',
        ],
      },
      {
        title: 'Collaboration & Support',
        icon: 'mdi-account-group-outline',
        items: [
          'Collaborated with team members to improve reporting efficiency and workflow processes',
          'Worked with staff across departments to resolve data issues and reporting requests',
          'Supported supervisors and colleagues with data lookups, summaries, and report preparation',
          'Helped maintain smooth communication between data entry staff and reporting teams',
          'Assisted in preparing materials for meetings, reviews, and internal planning sessions',
        ],
      },
    ],
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
  margin-top: 2.5rem;
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
  padding: 1.75rem 2rem;
  border-top: 3px solid rgba(77, 163, 255, 0.55);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.timeline-card:hover {
  transform: translateX(6px);
  border-color: var(--border-strong);
  box-shadow: var(--shadow-lift);
}

.entry-header {
  margin-bottom: 1.5rem;
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

.entry-featured {
  width: 120px;
  height: 120px;
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

.entry-gallery {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
}

.gallery-item {
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: rgba(9, 18, 38, 0.45);
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
  padding: 0.65rem 0.75rem;
  font-size: 0.8rem;
  color: var(--muted);
}

.entry-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.75rem;
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

.role {
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
}

.company {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--muted);
  font-size: 0.95rem;
}

.company :deep(.v-icon) {
  color: var(--primary);
}

.entry-block + .entry-block {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.block-title {
  margin: 0 0 1rem;
  font-size: 0.95rem;
  font-weight: 700;
  font-style: italic;
  color: var(--text);
}

.progression-track {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.progression-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
}

.step-node {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}

.step-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--surface-2);
  border: 2px solid rgba(77, 163, 255, 0.45);
  flex-shrink: 0;
  z-index: 1;
}

.step-dot.is-active {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  border-color: var(--primary-2);
  box-shadow: 0 0 12px rgba(77, 163, 255, 0.4);
}

.step-line {
  flex: 1;
  height: 2px;
  margin-left: 0.35rem;
  background: linear-gradient(to right, var(--primary), rgba(77, 163, 255, 0.2));
}

.step-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.5;
}

.step-content strong {
  color: var(--text);
  font-size: 0.9rem;
}

.responsibility-groups {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.responsibility-group {
  padding: 1rem 1.1rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(9, 18, 38, 0.35);
}

.group-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 0.75rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--primary-2);
}

.group-title :deep(.v-icon) {
  color: var(--primary);
}

.responsibility-group ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.responsibility-group li {
  position: relative;
  padding-left: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--muted);
  line-height: 1.65;
  font-size: 0.92rem;
}

.responsibility-group li:last-child {
  margin-bottom: 0;
}

.responsibility-group li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
}

.entry-block ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.entry-block li {
  position: relative;
  padding-left: 1.1rem;
  margin-bottom: 0.55rem;
  color: var(--muted);
  line-height: 1.7;
}

.entry-block li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
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
    padding: 1.35rem 1.2rem;
  }

  .entry-top {
    grid-template-columns: 1fr;
  }

  .entry-featured {
    width: 100%;
    height: 180px;
  }

  .responsibility-groups {
    grid-template-columns: 1fr;
  }

  .entry-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .progression-track {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .progression-step {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }

  .step-node {
    width: auto;
    flex-direction: column;
    align-items: center;
    padding-top: 0.2rem;
  }

  .step-line {
    width: 2px;
    height: 100%;
    min-height: 28px;
    margin: 0.35rem 0 0;
    background: linear-gradient(to bottom, var(--primary), rgba(77, 163, 255, 0.2));
  }
}
</style>
