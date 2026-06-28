# Deployment Guide

## Overview
This is a modern Vue 3 + Vuetify portfolio website for a Data Analyst/IT graduate. The portfolio is built with Vite and is ready for deployment to various hosting platforms.

## Tech Stack
- **Framework**: Vue 3 (Composition API with `<script setup>`)
- **UI Library**: Vuetify 3
- **Build Tool**: Vite 5
- **Styling**: Scoped CSS with CSS variables
- **Icons**: Material Design Icons (MDI)

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Local Development

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
The development server will start at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## Deployment Options

### 1. Netlify (Recommended)

#### Automatic Deployment
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

#### Manual Deployment
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### 2. Vercel

#### Automatic Deployment
1. Push your code to GitHub/GitLab/Bitbucket
2. Import your project in Vercel
3. Vercel will auto-detect Vite configuration
4. Deploy!

#### Manual Deployment
```bash
npm run build
vercel --prod
```

### 3. GitHub Pages

1. Install `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

2. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

3. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

### 4. Traditional Web Hosting

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist/` folder to your web server
3. Ensure your server is configured to serve static files

## Environment Variables

Currently, no environment variables are required. If you need to add them:

1. Create `.env` file in project root:
```
VITE_API_URL=your_api_url
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Performance Optimization

The build configuration includes:
- Code splitting for Vue and Vuetify
- Minification with esbuild
- Asset optimization
- No source maps in production

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome for Android

## Troubleshooting

### Build Errors
If you encounter build errors:
1. Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Clear Vite cache:
```bash
rm -rf node_modules/.vite
```

### Deployment Issues
- Ensure `base` path in `vite.config.js` matches your deployment URL
- Check that all assets are properly referenced
- Verify server supports single-page application routing

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify mobile responsiveness
- [ ] Check all images load correctly
- [ ] Test contact form (if applicable)
- [ ] Verify social media links
- [ ] Check performance with Lighthouse
- [ ] Test on multiple browsers

## Maintenance

### Updating Dependencies
```bash
npm update
```

### Adding New Content
- Components are located in `src/components/`
- Pages are in `src/pages/`
- Assets are in `src/assets/`

### Customization
- Colors: Modify CSS variables in `src/App.vue`
- Fonts: Update font imports in `src/App.vue`
- Content: Edit component files directly

## Support

For issues or questions:
- Check Vue 3 documentation: https://vuejs.org/
- Check Vuetify documentation: https://vuetifyjs.com/
- Check Vite documentation: https://vitejs.dev/

## License

This portfolio is for personal use. Modify as needed for your requirements.
