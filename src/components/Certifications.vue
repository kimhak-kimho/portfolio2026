<template>
  <section id="certifications" class="section">
    <div class="container">
      <div class="section-head" data-reveal>
        <h2 class="title">Certifications</h2>
        <p class="subtitle">Professional credentials, staff recognition, and validated expertise</p>
        <div class="section-divider"></div>
      </div>

      <div class="cert-stats" data-reveal>
        <div class="stat-card">
          <div class="stat-icon">
            <v-icon icon="mdi-certificate-outline" size="32" />
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ certs.length }}</div>
            <div class="stat-label">Certificates</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">
            <v-icon icon="mdi-clock-outline" size="32" />
          </div>
          <div class="stat-content">
            <div class="stat-value">2026</div>
            <div class="stat-label">Latest</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">
            <v-icon icon="mdi-cloud-outline" size="32" />
          </div>
          <div class="stat-content">
            <div class="stat-value">AWS</div>
            <div class="stat-label">Cloud Certified</div>
          </div>
        </div>
      </div>

      <div class="cert-grid">
        <article
          v-for="(cert, index) in certs"
          :key="cert.id"
          class="cert-card card"
          data-reveal
          :style="{ '--reveal-delay': `${index * 0.06}s` }"
        >
          <div class="cert-image-wrap">
            <img
              v-if="cert.image"
              :src="cert.image"
              :alt="cert.name"
              class="cert-image"
            />
            <div v-else class="cert-image-placeholder">
              <v-icon :icon="cert.icon" size="40" />
              <span>Certificate image</span>
            </div>
            <span class="cert-date">{{ cert.date }}</span>
          </div>

          <div class="cert-body">
            <span class="cert-category">{{ cert.category }}</span>
            <h3>{{ cert.name }}</h3>
            <p class="org">{{ cert.org }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import nubbStaffCert from '../assets/certificate/NUBB_Staff_Certificate.png'
import nubbStaff2026 from '../assets/certificate/Nubb_Staff2026.jpg'
import nubbStaff2025 from '../assets/certificate/Nubb_Staff2025.jpg'
import englishCert from '../assets/certificate/English Certificate.jpg'
import dataAnalysisPython from '../assets/certificate/Data_Analysis_with_Python.png'
import dataSciencePython from '../assets/certificate/Data ScienceEssentialswith_Python.png'
import awsCertified2024 from '../assets/certificate/AWSCertified2024.png'

const certs = [
  {
    id: 1,
    name: 'NUBB Staff Certificate',
    org: 'National University of Battambang',
    date: 'Staff',
    category: 'Staff Recognition',
    icon: 'mdi-badge-account-outline',
    image: nubbStaffCert,
  },
  {
    id: 2,
    name: 'NUBB Staff 2026',
    org: 'National University of Battambang',
    date: '2026',
    category: 'Staff Recognition',
    icon: 'mdi-badge-account-outline',
    image: nubbStaff2026,
  },
  {
    id: 3,
    name: 'NUBB Staff 2025',
    org: 'National University of Battambang',
    date: '2025',
    category: 'Staff Recognition',
    icon: 'mdi-badge-account-outline',
    image: nubbStaff2025,
  },
  {
    id: 4,
    name: 'English Certificate',
    org: 'PUC',
    date: 'PUC',
    category: 'Language',
    icon: 'mdi-translate',
    image: englishCert,
  },
  {
    id: 5,
    name: 'Data Analysis with Python',
    org: 'Dichi Academy',
    date: '2026',
    category: 'Data Analytics',
    icon: 'mdi-language-python',
    image: dataAnalysisPython,
  },
  {
    id: 6,
    name: 'Data Science Essentials with Python',
    org: 'Professional Training',
    date: '2026',
    category: 'Data Science',
    icon: 'mdi-chart-scatter-plot',
    image: dataSciencePython,
  },
  {
    id: 7,
    name: 'AWS Certified Cloud Practitioner',
    org: 'Amazon Web Services',
    date: '2024',
    category: 'Cloud Computing',
    icon: 'mdi-cloud-check-outline',
    image: awsCertified2024,
  },
]
</script>

<style scoped>
.cert-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 0 0 2.5rem;
}

.stat-card {
  padding: 1.35rem 1.5rem;
  background: linear-gradient(135deg, rgba(77, 163, 255, 0.08), rgba(107, 196, 255, 0.05));
  border: 1px solid rgba(77, 163, 255, 0.22);
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
}

.stat-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 163, 255, 0.12);
  border-radius: 12px;
  color: var(--primary);
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--primary-2);
  line-height: 1;
}

.stat-label {
  margin-top: 0.3rem;
  font-size: 0.85rem;
  color: var(--muted);
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  align-items: stretch;
}

.cert-grid > :nth-child(7):last-child {
  grid-column: 2;
}

.cert-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  padding: 0 !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.cert-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-strong);
}

.cert-image-wrap {
  position: relative;
  width: 100%;
  height: 210px;
  min-height: 210px;
  flex-shrink: 0;
  overflow: hidden;
  background: rgba(9, 18, 38, 0.65);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.cert-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: transform 0.35s ease;
}

.cert-card:hover .cert-image {
  transform: scale(1.04);
}

.cert-image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  color: var(--primary);
  background: linear-gradient(160deg, rgba(77, 163, 255, 0.12), rgba(18, 28, 51, 0.95));
}

.cert-image-placeholder span {
  font-size: 0.75rem;
  color: var(--muted);
}

.cert-date {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: rgba(8, 15, 31, 0.82);
  border: 1px solid rgba(77, 163, 255, 0.35);
  color: var(--primary-2);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.cert-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 1.1rem 1.15rem;
}

.cert-category {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 0.55rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(77, 163, 255, 0.1);
  color: var(--primary-2);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.cert-body h3 {
  margin: 0 0 0.45rem;
  font-size: 1rem;
  line-height: 1.35;
}

.org {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
}

@media (max-width: 980px) {
  .cert-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cert-grid > :nth-child(7):last-child {
    grid-column: 1 / -1;
    max-width: 360px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 820px) {
  .cert-stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .cert-grid {
    grid-template-columns: 1fr;
  }

  .cert-grid > :nth-child(7):last-child {
    grid-column: auto;
    max-width: none;
  }

  .cert-image-wrap,
  .cert-image-placeholder {
    height: 190px;
    min-height: 190px;
  }
}
</style>
