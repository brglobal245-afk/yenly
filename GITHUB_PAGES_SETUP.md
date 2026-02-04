# GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name your repository (e.g., `yenly-website`)
4. Choose **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (we already have files)
6. Click **"Create repository"**

### 2. Upload Your Files to GitHub

#### Option A: Using GitHub Desktop (Easiest)
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in
3. Click **"File"** → **"Add Local Repository"**
4. Select your project folder (`yenly site`)
5. Write a commit message: "Initial commit"
6. Click **"Commit to main"**
7. Click **"Publish repository"**

#### Option B: Using Git Command Line
```bash
# Navigate to your project folder
cd "C:\Users\moksh\OneDrive\Desktop\yenly site"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/yenly-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Choose branch: **"main"** (or "master")
6. Choose folder: **"/ (root)"**
7. Click **"Save"**

### 4. Your Website is Live!

Your site will be available at:
- `https://yourusername.github.io/repository-name`

It may take a few minutes for the first deployment to complete.

## Important Notes

### ⚠️ Contact Form Limitation

**The contact form uses Netlify Forms, which only works on Netlify.**

If you deploy to GitHub Pages, the form won't work. You have two options:

1. **Use Netlify instead** (recommended) - Forms work automatically
2. **Use an alternative form service** for GitHub Pages:
   - [Formspree](https://formspree.io/) - Free tier available
   - [EmailJS](https://www.emailjs.com/) - Free tier available
   - [Web3Forms](https://web3forms.com/) - Free, no signup required

### Updating Your Website

After making changes:
1. Save your files
2. Commit changes: `git commit -m "Update website"`
3. Push to GitHub: `git push`
4. GitHub Pages will automatically rebuild (takes 1-2 minutes)

## Custom Domain (Optional)

You can use your own domain:
1. In repository Settings → Pages
2. Add your custom domain
3. Update DNS records as instructed

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Desktop Guide](https://docs.github.com/en/desktop)

