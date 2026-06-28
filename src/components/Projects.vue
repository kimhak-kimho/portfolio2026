<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-head" data-reveal>
        <h2 class="title">Data Analysis Projects</h2>
        <p class="subtitle">Measurable impact through data-driven solutions and visual storytelling</p>
        <div class="section-divider"></div>
      </div>

      <div class="project-grid">
        <article v-for="(project, index) in projects" :key="project.title" class="card project-card" data-reveal :style="{ '--reveal-delay': `${index * 0.07}s` }">
          <div class="project-header">
            <div class="project-icon">
              <img v-if="project.logo" :src="project.logo" :alt="project.title" class="project-logo" />
              <v-icon v-else :icon="project.icon" size="32" />
            </div>
            <div class="project-type">{{ project.type }}</div>
          </div>
          
          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            
            <!-- Project Metrics -->
            <div class="project-metrics">
              <div class="metric" v-for="metric in project.metrics" :key="metric.label">
                <span class="metric-value">{{ metric.value }}</span>
                <span class="metric-label">{{ metric.label }}</span>
              </div>
            </div>

            <!-- Tech Stack -->
            <div class="tech-stack">
              <span v-for="tool in project.tools" :key="tool" class="tech-item">
                <v-icon icon="mdi-circle-small" size="8" />
                {{ tool }}
              </span>
            </div>

            <a class="btn btn-primary" :href="project.link" target="_blank" rel="noopener noreferrer">
              View Details
              <v-icon icon="mdi-arrow-right" size="16" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import logoMobileApplication from '../assets/projects/logoMobileApplication.png'

const projects = [
  {
    title: 'Interest Calculator',
    description:
      'A Play Store mobile app that helps users quickly calculate interest, credit, and savings. Supports simple and compound interest, monthly or annual rates, Khmer UI, and clear result summaries for everyday users and finance professionals.',
    type: 'Mobile Application',
    icon: 'mdi-calculator-variant-outline',
    logo: logoMobileApplication,
    tools: ['Mobile App', 'Khmer UI', 'Finance Calculator'],
    metrics: [
      { value: '500+', label: 'Downloads' },
      { value: '4.5', label: 'Rating' }
    ],
    link: 'https://play.google.com/store/apps/details?id=com.jkinformation.interest_calculator'
  },
  {
    title: 'Enrollment Performance Dashboard',
    description: 'Tracked retention and intake trends for leadership decisions across multiple faculties.',
    type: 'Data Dashboard',
    icon: 'mdi-chart-line',
    tools: ['Power BI', 'Excel', 'SQL'],
    metrics: [
      { value: '5', label: 'Faculties' },
      { value: 'Weekly', label: 'Updates' }
    ],
    link: '#'
  },
  {
    title: 'Retail Sales Insight Report',
    description: 'Segmented product and region performance to identify high-margin growth opportunities.',
    type: 'Analytics Report',
    icon: 'mdi-cash-multiple',
    tools: ['Python', 'Pandas', 'Power BI'],
    metrics: [
      { value: '25%', label: 'Growth' },
      { value: '12', label: 'Regions' }
    ],
    link: '#'
  },
  {
    title: 'Operational KPI Automation',
    description: 'Reduced repetitive reporting by automating weekly KPI extraction and transformation.',
    type: 'Automation',
    icon: 'mdi-cogs',
    tools: ['Excel', 'VBA', 'Power Query'],
    metrics: [
      { value: '40%', label: 'Time Saved' },
      { value: 'Weekly', label: 'Automation' }
    ],
    link: '#'
  }
]
</script>

<style scoped>
/* Project Grid */
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.project-card {
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-primary);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.05), rgba(6, 182, 212, 0.08));
}

.project-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(56, 189, 248, 0.1);
  border-radius: 12px;
  color: var(--primary);
  overflow: hidden;
}

.project-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-type {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--primary-2);
  background: rgba(56, 189, 248, 0.1);
  padding: 0.4rem 0.75rem;
  border-radius: 20px;
}

.project-body {
  padding: 1.5rem;
}

.project-body h3 {
  margin: 0 0 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.project-body p {
  margin: 0 0 1rem;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Project Metrics */
.project-metrics {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(56, 189, 248, 0.05);
  border-radius: 8px;
}

.metric {
  flex: 1;
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

.metric-label {
  font-size: 0.75rem;
  color: var(--muted);
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.tech-item {
  font-size: 0.85rem;
  color: var(--text);
  background: rgba(56, 189, 248, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.tech-item .v-icon {
  color: var(--primary);
}

.project-body .btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

@media (max-width: 980px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .project-grid {
    grid-template-columns: 1fr;
  }

  .project-metrics {
    flex-direction: column;
  }
}
</style>
