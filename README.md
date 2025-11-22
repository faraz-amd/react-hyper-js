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

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the react-app directory:

```bash
cd react-app
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
react-app/
├── public/
│   └── index.html
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
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── styles.css
├── package.json
└── README.md
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

The app can be deployed to any static hosting service:

- **Netlify**: Connect your repository and set build command to `npm run build`
- **Vercel**: Import your repository and it will auto-detect React
- **GitHub Pages**: Use `gh-pages` package or GitHub Actions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Same as the main project.
