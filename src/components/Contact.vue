<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="section-head" data-reveal>
        <h2 class="title">Contact</h2>
        <p class="subtitle">Open to Data Analyst opportunities — quick details for HR and recruiters</p>
        <div class="section-divider"></div>
      </div>

      <div class="contact-layout" data-reveal>
        <article class="contact-card card">
          <div class="contact-intro">
            <p class="eyebrow">Available for review</p>
            <h3>Kimhak Kimho</h3>
            <p class="role">Data Coordinator · Information Technology Graduate</p>
            <p class="location">
              <v-icon icon="mdi-map-marker-outline" size="16" />
              Battambang City, Cambodia
            </p>
          </div>

          <div class="contact-details">
            <a
              v-for="item in primaryContacts"
              :key="item.label"
              :href="item.href"
              class="detail-row"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
            >
              <span class="detail-icon">
                <v-icon :icon="item.icon" size="20" />
              </span>
              <span class="detail-copy">
                <span class="detail-label">{{ item.label }}</span>
                <span class="detail-value">{{ item.value }}</span>
              </span>
            </a>
          </div>

          <div class="contact-actions">
            <a href="mailto:hokimhak@gmail.com" class="btn btn-primary">
              <v-icon icon="mdi-email-outline" size="16" />
              Email Me
            </a>
            <a href="/cv.pdf" class="btn btn-secondary" download>
              <v-icon icon="mdi-download" size="16" />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/kimhak-kimho"
              class="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon icon="mdi-linkedin" size="16" />
              LinkedIn
            </a>
          </div>
        </article>

        <aside class="contact-side">
          <div class="side-card card" data-reveal style="--reveal-delay: .06s">
            <h4>HR Summary</h4>
            <ul class="summary-list">
              <li v-for="point in hrSummary" :key="point">{{ point }}</li>
            </ul>
          </div>

          <div class="side-card card" data-reveal style="--reveal-delay: .12s">
            <h4>Other Links</h4>
            <div class="link-list">
              <a
                v-for="link in otherLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-icon :icon="link.icon" size="16" />
                {{ link.label }}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
const primaryContacts = [
  {
    label: 'Email',
    value: 'hokimhak@gmail.com',
    href: 'mailto:hokimhak@gmail.com',
    icon: 'mdi-email-outline',
  },
  {
    label: 'Phone',
    value: '+855 97 859 7137',
    href: 'tel:+855978597137',
    icon: 'mdi-phone-outline',
  },
  {
    label: 'Telegram',
    value: '@Kimho_Kimhak',
    href: 'https://t.me/Kimho_Kimhak',
    icon: 'mdi-send-circle-outline',
    external: true,
  },
]

const hrSummary = [
  'Languages: Khmer, English',
  'Education: IT, National University of Battambang (Year 4)',
  'Certification: AWS Cloud Practitioner (2024)',
  'Certification: Data Analysis with Python (2026)',
  'Tools: SQL, Python, Excel, Power BI',
  'Experience: Data Coordinator at NUBB (2023 – Present)',
]

const otherLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/kimho.kimhak/',
    icon: 'mdi-facebook',
  },
]
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1.25rem;
  align-items: start;
}

.contact-card,
.side-card {
  padding: 1.5rem 1.6rem;
}

.contact-intro {
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.eyebrow {
  margin: 0 0 0.65rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary-2);
}

.contact-intro h3 {
  margin: 0 0 0.35rem;
  font-size: 1.5rem;
}

.role {
  margin: 0 0 0.55rem;
  color: var(--muted);
  font-size: 0.95rem;
}

.location {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text);
  font-size: 0.92rem;
}

.location :deep(.v-icon) {
  color: var(--primary);
}

.contact-details {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.9rem 1rem;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(9, 18, 38, 0.45);
  text-decoration: none;
  color: inherit;
  transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.detail-row:hover {
  border-color: var(--border-strong);
  background: rgba(109, 175, 255, 0.1);
  transform: translateX(4px);
}

.detail-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(77, 163, 255, 0.12);
  color: var(--primary-2);
  flex-shrink: 0;
}

.detail-copy {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
}

.detail-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

.detail-value {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text);
  word-break: break-word;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.contact-side {
  display: grid;
  gap: 1rem;
}

.side-card h4 {
  margin: 0 0 0.9rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--primary-2);
}

.summary-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.summary-list li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.55rem;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.92rem;
}

.summary-list li:last-child {
  margin-bottom: 0;
}

.summary-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
}

.link-list {
  display: grid;
  gap: 0.55rem;
}

.link-list a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text);
  background: rgba(9, 18, 38, 0.35);
  transition: all 0.3s ease;
}

.link-list a :deep(.v-icon) {
  color: var(--primary-2);
}

.link-list a:hover {
  border-color: var(--border-strong);
  background: rgba(109, 175, 255, 0.1);
}

@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .contact-actions {
    flex-direction: column;
  }

  .contact-actions .btn {
    width: 100%;
  }
}
</style>
