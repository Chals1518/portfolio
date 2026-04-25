# Sai Bharath Gopinath - Cybersecurity Analyst Portfolio

A professional portfolio website showcasing cybersecurity skills, projects, and experience.

## 🚀 Quick Start

### Option 1: Local Development

```bash
# Navigate to the folder
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Option 2: Deploy to Vercel

1. Push this folder to a new GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

## 📁 Project Structure

```
portfolio/
├── index.html          # HTML entry point
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Main portfolio component
    └── App.css         # All styling
```

## ✏️ Customization

### Update Your Information

Edit `src/App.jsx`:

- **Line 90-100**: Hero section (name, title, tagline)
- **Line 120-140**: About section (bio paragraphs)
- **Line 20-25**: Skills (add/remove as needed)
- **Line 27-50**: Projects (add your own)
- **Line 52-55**: Certifications

### Add LinkedIn

Find this line in `src/App.jsx` and add your LinkedIn:

```jsx
<a href="https://linkedin.com/in/YOUR-USERNAME" target="_blank" rel="noopener noreferrer" className="contact-item">
  <span className="contact-icon">💼</span>
  <span>LinkedIn</span>
</a>
```

### Change Colors

Edit `src/App.css` variables at the top:

```css
:root {
  --primary: #00d4ff;      /* Main accent color */
  --secondary: #7c3aed;    /* Secondary color */
  --bg-dark: #0a0a0f;      /* Background */
}
```

## 🛠️ Built With

- React 18
- Vite 5
- Pure CSS (no frameworks)

## 📱 Features

- ✅ Responsive design
- ✅ Smooth scrolling
- ✅ Contact form (mailto)
- ✅ Animated hero section
- ✅ Skills showcase
- ✅ Project gallery
- ✅ SEO optimized

## 📄 License

Personal portfolio - Feel free to use as a template!
