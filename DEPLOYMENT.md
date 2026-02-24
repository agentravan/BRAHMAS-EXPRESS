---
description: How to Preview and Deploy the Brahmas Express Website
---

# Preview & Deployment Guide

## 1. How to Preview Locally
Since this is a static website, you have several ways to view it:

### Option A: Direct Open (Easiest)
1. Go to your folder: `c:\Users\Harshit Bhardwaj\Desktop\Bhiw\V2`
2. Right-click on `index.html`.
3. Select **Open with > Google Chrome** (or your preferred browser).

### Option B: VS Code Live Server (Recommended for Development)
If you are using VS Code:
1. Install the **"Live Server"** extension.
2. Open the project folder in VS Code.
3. Click **"Go Live"** in the bottom right corner.
4. The website will open at `http://127.0.0.1:5500/index.html` and refresh automatically as you make changes.

---

## 2. How to Make It Live (Production)

### Option A: Vercel (Fastest & Most Professional)
Vercel is the recommended platform for static sites.
1. Create a free account at [vercel.com](https://vercel.com).
2. Install the Vercel CLI: `npm i -g vercel` (if you have Node.js).
3. Run `vercel` in your project folder.
4. **OR:** Connect your GitHub repository to Vercel for automatic deployments every time you push code.

### Option B: GitHub Pages (Free Hosting)
1. Push your code to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select the `main` branch and `/root` folder.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Option C: Manual FTP
If you have a traditional hosting provider (like Hostinger, GoDaddy, Bluehost):
1. Use an FTP client (like FileZilla).
2. Upload all files and the `assets` folder to your `public_html` directory.

---

## 3. Deployment Checklist
- [ ] Check `index.html` for correct meta titles.
- [ ] Ensure `assets/js/main.js` and `assets/css/style.css` are loading.
- [ ] Verify the phone number `9667084988` is clickable on mobile.
- [ ] Verify the "Get Free Quote" form redirects or has a backend handler (currently a static form).
