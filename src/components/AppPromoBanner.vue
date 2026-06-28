<template>
  <section class="app-promo-section">
    <div class="container">
      <div class="promo-banner" data-reveal>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleDownload = () => {
  // Handle download action
  console.log('Download clicked')
}
</script>

<style scoped>
@import '../styles/design-system.css';

.app-promo-section {
  padding: var(--space-20) 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%);
  position: relative;
  overflow: hidden;
}

.app-promo-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.3) 0%, transparent 50%);
  pointer-events: none;
}

.promo-banner {
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 24px;
  padding: var(--space-12);
  backdrop-filter: blur(20px);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(59, 130, 246, 0.1);
  position: relative;
}

.promo-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6);
  border-radius: 24px 24px 0 0;
}



@media (max-width: 768px) {
  .app-promo-section {
    padding: var(--space-12) 0;
  }

  .promo-banner {
    padding: var(--space-8);
    border-radius: 20px;
  }
}
</style>
