# Yenly - Personal Finance Mobile App Landing Page

A modern, minimal landing website for Yenly, a personal finance mobile app.

## Features

- 🌍 **Bilingual Support**: Japanese (default) and English with language toggle
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎨 **Japanese Minimal Design**: Clean, modern UI with soft blue and green accents
- ⚡ **Fast Loading**: Optimized for performance
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and sitemap included

## Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a new repository on GitHub
2. Push this code to the repository
3. Go to repository Settings → Pages
4. Select source branch (usually `main` or `master`)
5. Your site will be live at: `https://yourusername.github.io/repository-name`

**Note**: The contact form uses Netlify Forms, which won't work on GitHub Pages. You'll need to use an alternative form service like Formspree, or deploy to Netlify instead.

### Option 2: Netlify (Recommended for Forms)

1. Push code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically deploy your site
4. Contact form submissions will appear in your Netlify dashboard

## Local Development

1. Clone the repository
2. Run a local server:
   ```bash
   node server.js
   ```
3. Open http://localhost:3000 in your browser

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # Language toggle and animations
├── logo.svg            # Logo file
├── thank-you.html      # Thank you page (for Netlify Forms)
├── _redirects          # Netlify SPA routing
├── netlify.toml        # Netlify configuration
├── robots.txt          # SEO robots file
└── sitemap.xml         # SEO sitemap
```

## Contact Form

- **Netlify**: Form submissions appear in Netlify dashboard
- **GitHub Pages**: Requires alternative service (Formspree, EmailJS, etc.)

## License

© 2026 Yenly. All rights reserved.

