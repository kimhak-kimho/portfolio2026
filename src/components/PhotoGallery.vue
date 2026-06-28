<template>
  <section id="gallery" class="section">
    <div class="container">
      <div class="section-head" data-reveal>
        <h2 class="title">Photo Gallery</h2>
        <p class="subtitle">Volunteer work, activities, and moments from my professional and academic journey</p>
        <div class="section-divider"></div>
      </div>

      <div class="gallery-stats" data-reveal>
        <div class="stat-item">
          <div class="stat-value">{{ photos.length }}</div>
          <div class="stat-label">Photos</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ volunteerCount }}</div>
          <div class="stat-label">Volunteer</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ activityCount }}</div>
          <div class="stat-label">Activities</div>
        </div>
      </div>

      <div class="gallery-filters" data-reveal>
        <button
          v-for="filter in filters"
          :key="filter.id"
          type="button"
          class="filter-btn"
          :class="{ active: activeFilter === filter.id }"
          @click="activeFilter = filter.id"
        >
          <v-icon :icon="filter.icon" size="16" />
          {{ filter.label }}
        </button>
      </div>

      <div class="photo-grid">
        <article
          v-for="(photo, index) in filteredPhotos"
          :key="photo.id"
          class="photo-card"
          data-reveal
          :style="{ '--reveal-delay': `${index * 0.06}s` }"
        >
          <div class="photo-wrapper">
            <img
              v-if="photo.src"
              :src="photo.src"
              :alt="photo.title"
              class="photo-img"
            />
            <div v-else class="photo-placeholder">
              <v-icon icon="mdi-image-plus-outline" size="36" />
              <span>Add photo in src/assets</span>
            </div>

            <span class="photo-category">{{ categoryLabel(photo.category) }}</span>

            <div class="photo-overlay">
              <div class="overlay-content">
                <h4>{{ photo.title }}</h4>
                <p>{{ photo.description }}</p>
                <span class="photo-date">{{ photo.date }}</span>
              </div>
            </div>
          </div>

          <div class="photo-caption">
            <h4>{{ photo.title }}</h4>
            <p>{{ photo.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import photo1 from '../assets/DSC05158.JPG'
import photo2 from '../assets/photo_2023-10-12_21-59-46.jpg'
import photo3 from '../assets/photo_2025-03-30_18-01-59.jpg'
import photo4 from '../assets/LOGO IT 2026.jpg'
import photo5 from '../assets/imgHome01.jpg'

// Add images: put file in src/assets/, import it, then set src below
// Example: import volunteer01 from '../assets/volunteer-01.jpg'

const filters = [
  { id: 'all', label: 'All', icon: 'mdi-view-grid-outline' },
  { id: 'volunteer', label: 'Volunteer', icon: 'mdi-hand-heart-outline' },
  { id: 'activity', label: 'Activity', icon: 'mdi-run-fast' },
  { id: 'professional', label: 'Professional', icon: 'mdi-briefcase-outline' },
  { id: 'academic', label: 'Academic', icon: 'mdi-school-outline' },
]

const activeFilter = ref('all')

const photos = [
  {
    id: 1,
    src: photo2,
    title: 'Weekend Volunteer',
    description: 'Volunteer service at National University of Battambang',
    date: '2023',
    category: 'volunteer',
  },
  {
    id: 2,
    src: null,
    title: 'Community Volunteer Event',
    description: 'Add your volunteer activity photo here',
    date: '2024',
    category: 'volunteer',
  },
  {
    id: 3,
    src: photo1,
    title: 'Campus Activity',
    description: 'University activity and team participation',
    date: '2025',
    category: 'activity',
  },
  {
    id: 4,
    src: photo5,
    title: 'Student Activity',
    description: 'Moments from student life and campus events',
    date: '2025',
    category: 'activity',
  },
  {
    id: 5,
    src: null,
    title: 'Volunteer Team Work',
    description: 'Add a group volunteer or activity photo here',
    date: '2024',
    category: 'activity',
  },
  {
    id: 6,
    src: photo3,
    title: 'Professional Moment',
    description: 'Important milestone in my professional journey',
    date: '2025',
    category: 'professional',
  },
  {
    id: 7,
    src: photo4,
    title: 'IT Program',
    description: 'National University of Battambang IT Department',
    date: '2026',
    category: 'academic',
  },
]

const categoryLabels = {
  volunteer: 'Volunteer',
  activity: 'Activity',
  professional: 'Professional',
  academic: 'Academic',
}

const categoryLabel = (category) => categoryLabels[category] || category

const filteredPhotos = computed(() => {
  if (activeFilter.value === 'all') return photos
  return photos.filter((photo) => photo.category === activeFilter.value)
})

const volunteerCount = computed(() => photos.filter((p) => p.category === 'volunteer').length)
const activityCount = computed(() => photos.filter((p) => p.category === 'activity').length)
</script>

<style scoped>
.gallery-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 0 0 1.75rem;
}

.stat-item {
  padding: 1.25rem;
  background: linear-gradient(135deg, rgba(77, 163, 255, 0.08), rgba(107, 196, 255, 0.05));
  border: 1px solid rgba(77, 163, 255, 0.2);
  border-radius: 14px;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
}

.stat-value {
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--primary-2);
  line-height: 1;
}

.stat-label {
  margin-top: 0.45rem;
  font-size: 0.85rem;
  color: var(--muted);
}

.gallery-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 0.95rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(9, 18, 38, 0.45);
  color: var(--muted);
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  color: var(--text);
  border-color: var(--border-strong);
  background: rgba(109, 175, 255, 0.12);
}

.filter-btn.active {
  color: var(--primary-2);
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.photo-card {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: rgba(9, 18, 38, 0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.photo-card:hover {
  transform: translateY(-5px);
  border-color: var(--border-strong);
  box-shadow: var(--shadow-lift);
}

.photo-wrapper {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--surface);
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}

.photo-card:hover .photo-img {
  transform: scale(1.06);
}

.photo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  color: var(--primary);
  background: linear-gradient(160deg, rgba(77, 163, 255, 0.1), rgba(18, 28, 51, 0.95));
}

.photo-placeholder span {
  font-size: 0.75rem;
  color: var(--muted);
  text-align: center;
  padding: 0 1rem;
}

.photo-category {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.28rem 0.65rem;
  border-radius: 999px;
  background: rgba(8, 15, 31, 0.82);
  border: 1px solid rgba(77, 163, 255, 0.35);
  color: var(--primary-2);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  z-index: 2;
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.82), transparent 55%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  z-index: 1;
}

.photo-card:hover .photo-overlay {
  opacity: 1;
}

.overlay-content {
  color: white;
}

.overlay-content h4 {
  margin: 0 0 0.35rem;
  font-size: 1rem;
  font-weight: 600;
}

.overlay-content p {
  margin: 0 0 0.45rem;
  font-size: 0.82rem;
  opacity: 0.92;
  line-height: 1.5;
}

.photo-date {
  display: inline-block;
  font-size: 0.72rem;
  background: rgba(77, 163, 255, 0.22);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}

.photo-caption {
  padding: 0.9rem 1rem 1rem;
}

.photo-caption h4 {
  margin: 0 0 0.3rem;
  font-size: 0.95rem;
}

.photo-caption p {
  margin: 0;
  color: var(--muted);
  font-size: 0.84rem;
  line-height: 1.5;
}

@media (max-width: 980px) {
  .photo-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .gallery-stats,
  .photo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
