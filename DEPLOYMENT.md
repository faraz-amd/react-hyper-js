# Deployment Guide - Netlify

This guide will help you deploy the React Portfolio application to Netlify.

## Prerequisites

- A Netlify account (sign up at [netlify.com](https://www.netlify.com))
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 18+ installed locally (for testing builds)

## Deployment Methods

### Method 1: Git-based Deployment (Recommended)

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

3. **Configure Build Settings**
   Netlify will auto-detect the settings from `netlify.toml`, but verify:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: `18` (set in netlify.toml)

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy automatically
   - Future pushes to your main branch will trigger automatic deployments

### Method 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

   For draft deployments (preview):
   ```bash
   netlify deploy
   ```

### Method 3: Drag & Drop

1. **Build the project locally**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `build` folder
   - Your site will be live in seconds

## Configuration Files

### netlify.toml
The `netlify.toml` file contains:
- Build configuration
- Redirect rules for SPA routing
- Security headers
- Cache control headers

### public/_redirects
Fallback redirect file for SPA routing (handles client-side routing).

## Environment Variables

If you need to use environment variables:

1. Go to Site settings → Environment variables
2. Add your variables (e.g., `REACT_APP_API_URL`)
3. Redeploy the site

**Note**: Variables prefixed with `REACT_APP_` are available in the React app.

## Custom Domain

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions
4. Netlify will provide SSL certificates automatically

## Continuous Deployment

Netlify automatically deploys when you push to your connected branch:
- **Production**: Deploys from `main` or `master` branch
- **Branch deploys**: Preview deployments for other branches
- **Deploy previews**: Automatic previews for pull requests

## Build Optimization

The build process:
1. Installs dependencies (`npm install`)
2. Builds the React app (`npm run build`)
3. Outputs optimized files to `build/` directory
4. Serves static files with proper caching headers

## Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs in Netlify dashboard

### 404 Errors on Routes
- Ensure `netlify.toml` has redirect rules
- Verify `public/_redirects` file exists
- Check that React Router is configured correctly

### Environment Variables Not Working
- Ensure variables are prefixed with `REACT_APP_`
- Redeploy after adding variables
- Check variable names match in code

## Performance Tips

1. **Enable Build Plugins** (optional):
   - Netlify Image Optimization
   - Netlify Edge Functions

2. **Monitor Performance**:
   - Use Netlify Analytics
   - Check Lighthouse scores

3. **Cache Strategy**:
   - Static assets are cached for 1 year (configured in netlify.toml)
   - HTML files are not cached (always fresh)

## Support

For issues:
- Check [Netlify Docs](https://docs.netlify.com)
- Review build logs in Netlify dashboard
- Check React Router documentation for routing issues

