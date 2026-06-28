import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { initAnimations } from './utils/animations'
import './styles/design-system.css'

const app = createApp(App)
  .use(vuetify)

// Initialize animations after mounting
app.mount('#app')

// Wait for DOM to be ready before initializing animations
setTimeout(() => {
  initAnimations()
}, 100)