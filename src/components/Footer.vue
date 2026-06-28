<template>
  <footer class="footer">
    <div class="container wrap">
      <p>© {{ year }} Kimhak - Data Analyst Portfolio</p>
      <div class="socials">
        <a href="https://www.facebook.com/kimho.kimhak/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <span>Facebook</span>
        </a>
        <a
          href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Btv7fBdN0ThKzqhi1mjVJdw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <span>LinkedIn</span>
        </a>
        <a href="https://t.me/Kimho_Kimhak" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <span>Telegram</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 2rem 0;
  margin-top: 1rem;
}

.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
}

.socials {
  display: flex;
  gap: 0.5rem;
}

.socials a {
  min-width: 84px;
  height: 34px;
  padding: 0 0.55rem;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  transition: all 0.3s ease;
  text-decoration: none;
}

.socials span {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.socials a:hover {
  color: var(--primary-2);
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .wrap {
    flex-direction: column;
  }
}
</style>
