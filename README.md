# Ahmad Faraz - Portfolio React App

A modern portfolio website built with React, featuring the same UI and functionality as the static HTML version.

## Features

- **Dark Mode Toggle** - Persistent theme switching with system preference detection
- **Interactive Contact Form** - Form validation and submission handling
- **Expandable Experience Cards** - Click to reveal additional details
- **Copy-to-Clipboard** - Easy email copying functionality
- **Smooth Scroll Navigation** - Enhanced navigation with smooth scrolling
- **Responsive Design** - Fully responsive across all device sizes
- **Component Library** - Reusable UI components showcase
- **Parallax Effects** - Subtle parallax background animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-hyper-js
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
react-hyper-js/
├── public/
│   ├── index.html
│   └── _redirects          # Netlify SPA routing fallback
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Footer.js
│   │   └── Parallax.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Resume.js
│   │   └── Components.js
│   ├── hooks/
│   │   ├── useDarkMode.js
│   │   └── useParallax.js
│   ├── constants/
│   │   ├── experienceData.js
│   │   └── siteConfig.js
│   ├── utils/
│   │   ├── scrollUtils.js
│   │   └── formUtils.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── styles.css
├── .gitignore              # Git ignore rules
├── netlify.toml            # Netlify deployment configuration
├── package.json
├── README.md
└── DEPLOYMENT.md           # Detailed deployment guide
```

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **CSS3** - Styling (same stylesheet as static version)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run deploy` - Deployment helper script (see DEPLOYMENT.md)

## Features Implementation

### Dark Mode

- Uses React Context API for global state management
- Persists preference in localStorage
- Respects system color scheme preference

### Contact Form

- Client-side validation
- Form state management with React hooks
- Success/error message display

### Expandable Cards

- State management for expanded/collapsed states
- Smooth animations using CSS transitions

### Smooth Scroll

- Custom scroll behavior for anchor links
- Accounts for fixed navigation bar height

## Deployment

### Netlify (Recommended)

This project is configured for easy deployment on Netlify. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Deploy:**
1. Push your code to a Git repository
2. Connect to Netlify and import your repository
3. Netlify will auto-detect settings from `netlify.toml`
4. Deploy!

**Configuration:**
- Build command: `npm run build`
- Publish directory: `build`
- Node version: `18` (configured in netlify.toml)
- SPA routing: Handled via `netlify.toml` and `public/_redirects`

### Other Platforms

- **Vercel**: Import your repository and it will auto-detect React
- **GitHub Pages**: Use `gh-pages` package or GitHub Actions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Project Improvements

### Code Organization
- **Constants**: Extracted data to `src/constants/` for better maintainability
- **Utilities**: Reusable functions in `src/utils/` for scroll and form handling
- **Configuration**: Centralized site configuration in `siteConfig.js`

### Deployment Ready
- **Netlify Configuration**: Complete `netlify.toml` with build settings, redirects, and security headers
- **SPA Routing**: Proper redirect rules for client-side routing
- **Environment Variables**: Support for environment-based configuration

### Best Practices
- Clean separation of concerns
- Reusable utility functions
- Centralized configuration
- Proper Git ignore rules
- Security headers configured

## License

MIT License - See LICENSE file for details
