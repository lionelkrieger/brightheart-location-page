# GitHub Pages Deployment Guide

This guide will help you deploy your Bright Heart location page mockup to GitHub Pages.

## Quick Setup (Automated)

I've already set up the GitHub Actions workflow for you! Here's what to do:

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/lionelkrieger/brightheart-location-page
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar under "Code and automation")
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 2: Push the Changes

The deployment workflow is already in your repository. Just push the latest changes:

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow running called "Deploy static content to Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, your site will be live!

### Step 4: Access Your Site

Your mockup will be available at:
```
https://lionelkrieger.github.io/brightheart-location-page/
```

## What Was Configured

### 1. GitHub Actions Workflow (`.github/workflows/static.yml`)

I noticed you already have a workflow file in your repository! It's configured to:
- Trigger on every push to `main` branch
- Build the project using Node.js and pnpm
- Deploy to GitHub Pages automatically

### 2. Vite Configuration (`vite.config.ts`)

Updated to set the correct base path for GitHub Pages:
```typescript
base: process.env.NODE_ENV === "production" ? "/brightheart-location-page/" : "/"
```

This ensures all assets load correctly when deployed to a subdirectory.

## Troubleshooting

### Issue: 404 Page Not Found

**Solution**: Make sure you've enabled GitHub Pages in repository settings and selected "GitHub Actions" as the source.

### Issue: CSS/JS Not Loading

**Solution**: The base path in `vite.config.ts` must match your repository name. If you renamed the repository, update this line:
```typescript
base: process.env.NODE_ENV === "production" ? "/YOUR-REPO-NAME/" : "/"
```

### Issue: Workflow Fails

**Solution**: Check the Actions tab for error messages. Common issues:
- Node.js version mismatch (should be 22)
- Missing dependencies (run `pnpm install` locally first)
- Build errors (run `pnpm run build` locally to test)

## Custom Domain (Optional)

To use a custom domain like `locations.brightheart.co.uk`:

### Step 1: Add CNAME File

Create a file named `CNAME` in `/client/public/` with your domain:
```
locations.brightheart.co.uk
```

### Step 2: Configure DNS

Add a CNAME record in your DNS settings:
```
Type: CNAME
Name: locations (or your subdomain)
Value: lionelkrieger.github.io
TTL: 3600
```

### Step 3: Enable in GitHub

1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Check "Enforce HTTPS"

**Note**: DNS propagation can take up to 24 hours.

## Updating the Site

Every time you push changes to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site. No manual steps needed!

## Local Testing

To test the production build locally:

```bash
# Build the project
pnpm run build

# Preview the build
pnpm run preview
```

This will show you exactly how the site will look on GitHub Pages.

## Multiple Location Pages

To create pages for different locations (Surrey, Manchester, etc.):

### Option 1: Multiple Routes (Recommended)

1. Create new page components:
   - `client/src/pages/London.tsx`
   - `client/src/pages/Surrey.tsx`
   - `client/src/pages/Manchester.tsx`

2. Update `client/src/App.tsx` to add routes:
```typescript
<Route path="/london" component={London} />
<Route path="/surrey" component={Surrey} />
<Route path="/manchester" component={Manchester} />
```

3. Each page will be accessible at:
   - `https://lionelkrieger.github.io/brightheart-location-page/london`
   - `https://lionelkrieger.github.io/brightheart-location-page/surrey`
   - etc.

### Option 2: Separate Repositories

Create a separate repository for each location:
- `brightheart-london`
- `brightheart-surrey`
- `brightheart-manchester`

Each will have its own GitHub Pages URL.

## Performance Optimization

For production, consider:

1. **Image Optimization**: All images are already optimized and served via CDN
2. **Lazy Loading**: Images below the fold are lazy-loaded
3. **Code Splitting**: Vite automatically splits code for optimal loading
4. **Caching**: GitHub Pages automatically caches static assets

## SEO Considerations

After deployment:

1. **Submit to Google Search Console**
   - Add your GitHub Pages URL
   - Submit the sitemap (you may need to create one)

2. **Update robots.txt**
   - Create `/client/public/robots.txt` if needed

3. **Add meta tags**
   - Already included in the mockup
   - Update for each location page

## Support

If you encounter issues:

1. Check the Actions tab for build logs
2. Review the workflow file (`.github/workflows/static.yml`)
3. Test the build locally with `pnpm run build`
4. Ensure all dependencies are installed

## Next Steps

After successful deployment:

1. ✅ Test the live site on multiple devices
2. ✅ Run Lighthouse audit for performance/SEO
3. ✅ Set up Google Analytics (if needed)
4. ✅ Create additional location pages
5. ✅ Consider custom domain setup

---

**Your site should be live at**: https://lionelkrieger.github.io/brightheart-location-page/

Enjoy your new location page mockup! 🎉
