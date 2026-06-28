<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-head" data-reveal>
        <h2 class="title">Technical Skills</h2>
        <p class="subtitle">Core analytics tools and methodologies used to deliver data-driven outcomes.</p>
        <div class="section-divider"></div>
      </div>

      <div class="skills-listing">
        <article v-for="skill in skills" :key="skill.name" class="skill-card" data-reveal>
          <div class="skill-card-header">
            <div class="skill-pill">{{ skill.abbrev }}</div>
            <h3>{{ skill.name }}</h3>
          </div>
          <p>{{ skill.details }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    name: 'Excel',
    abbrev: 'XL',
    details: 'Pivot Tables, VLOOKUP, Data Cleaning & Reporting',
  },
  {
    name: 'Python',
    abbrev: 'Py',
    details: 'Pandas, Matplotlib, Data Analysis',
  },
  {
    name: 'SQL',
    abbrev: 'SQL',
    details: 'Queries, Data Retrieval, Database Management',
  },
  {
    name: 'Power BI',
    abbrev: 'BI',
    details: 'Dashboards, Data Visualization',
  }
]
</script>

<style scoped>
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(56, 189, 248, 0.2);
  background: rgba(56, 189, 248, 0.08);
  color: var(--primary);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.title {
  margin-top: 0;
}

.subtitle {
  margin: 1rem auto 0;
  color: var(--muted);
  font-size: 0.96rem;
  max-width: 680px;
}

.skills-listing {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.skill-card {
  padding: 1.75rem;
  background: rgba(10, 20, 45, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.12);
  border-radius: 22px;
  box-shadow: 0 18px 40px rgba(6, 17, 55, 0.18);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.28);
  box-shadow: 0 28px 70px rgba(6, 17, 55, 0.2);
}

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.skill-pill {
  min-width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(56, 189, 248, 0.16);
  color: var(--primary);
  font-weight: 700;
  letter-spacing: 0.06em;
}

.skill-card h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
}

.skill-card p {
  margin: 0;
  line-height: 1.75;
  color: var(--muted);
  font-size: 1rem;
}

@media (max-width: 980px) {
  .skills-listing {
    grid-template-columns: 1fr;
  }
}
</style>
