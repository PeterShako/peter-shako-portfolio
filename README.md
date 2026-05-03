# Peter Shako — Portfolio Website

A clean, fast, AI-powered portfolio. No build tools, no npm, no frameworks.
Edit one file, push, done.

---

## Folder Structure

```
peter-shako-portfolio/
├── index.html          ← The entire website
├── data/
│   ├── videos.js       ← Add/remove YouTube video links here
│   └── photos.js       ← Add/remove photo links here
├── assets/
│   ├── cv.pdf          ← Drop your CV here (must be named cv.pdf)
│   └── photos/         ← Drop local photos here
└── README.md
```

---

## Step 1 — Set Up Locally

### Prerequisites
You need Git. On Arch Linux you already have it. Verify:
```bash
git --version
```

### Create the folder
The folder already exists if you cloned or copied it. If starting fresh:
```bash
mkdir ~/projects
cd ~/projects
# copy or clone the portfolio folder here
```

---

## Step 2 — Add Your CV

1. Export your CV as a PDF
2. Rename it `cv.pdf`
3. Put it in `assets/cv.pdf`

That's it — the Download and View buttons in the site will work automatically.

---

## Step 3 — Add Photos

**Option A: Local photos**
1. Copy your images into `assets/photos/`
2. Open `data/photos.js`
3. Add an entry like:
   ```javascript
   { src: "assets/photos/myfile.jpg", caption: "On set at UNC TV", aspect: "landscape" },
   ```
   Use `aspect: "portrait"` for vertical photos.

**Option B: Online photos (Google Drive, Imgur, etc.)**
1. Get a direct image link (must end in .jpg/.png)
2. Add it to `data/photos.js`:
   ```javascript
   { src: "https://i.imgur.com/abc123.jpg", caption: "Behind the scenes", aspect: "landscape" },
   ```

---

## Step 4 — Add More Videos Later

Open `data/videos.js`. To add a video:
1. Find the right category array (director, producer, editor, camera, etc.)
2. Add a line at the top of the array:
   ```javascript
   { id: "VIDEO_ID_HERE", title: "Director" },
   ```
   The `id` is the part after `?v=` in the YouTube URL.
   e.g. `https://www.youtube.com/watch?v=XpU9n3A8QMk` → id is `XpU9n3A8QMk`

---

## Step 5 — Launch on GitHub Pages (Free Hosting)

### A. Create the GitHub repository
1. Go to https://github.com/new
2. Name it: `peter-shako-portfolio` (or anything you want)
3. Set it to **Public**
4. Do NOT add a README (you already have one)
5. Click "Create repository"

### B. Push your files from terminal
```bash
cd ~/projects/peter-shako-portfolio   # or wherever your folder is

git init
git add .
git commit -m "Initial portfolio launch"
git branch -M main
git remote add origin https://github.com/PeterShako/peter-shako-portfolio.git
git push -u origin main
```

### C. Enable GitHub Pages
1. On GitHub, go to your repository
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Branch", select `main` and folder `/` (root)
5. Click **Save**
6. Wait 1-2 minutes, then visit:
   **https://petershako.github.io/peter-shako-portfolio/**

---

## Step 6 — Optional: Custom Domain

If you want `petershako.dev` instead of the github.io URL:
1. Buy a domain on Namecheap (~$10/year for .dev)
2. In GitHub Pages settings, add your custom domain
3. In Namecheap DNS, add a CNAME record pointing to `petershako.github.io`

---

## Updating the Site After Launch

Every time you make changes:
```bash
git add .
git commit -m "describe what you changed"
git push
```
GitHub Pages will update automatically within ~1 minute.

---

## Making the AI Chat Work

The "Ask Peter" chat uses the Claude API. To activate it:

1. Get a free API key at https://console.anthropic.com
2. Open `index.html`, find this line near the bottom:
   ```javascript
   headers: { 'Content-Type': 'application/json' },
   ```
3. Add your API key:
   ```javascript
   headers: {
     'Content-Type': 'application/json',
     'x-api-key': 'YOUR_API_KEY_HERE',
     'anthropic-version': '2023-06-01',
     'anthropic-dangerous-direct-browser-calls': 'true'
   },
   ```

> ⚠️ **Note:** For a public site, API keys should ideally be kept on a backend server.
> For a portfolio you control, this is fine — usage is low and you can set spend limits
> in the Anthropic console.

---

## Quick Reference — Common Tasks

| Task | What to edit |
|------|-------------|
| Change bio text | `index.html` — search for "Creative Producer" |
| Add a new video | `data/videos.js` |
| Add a photo | `data/photos.js` + drop file in `assets/photos/` |
| Update CV | Replace `assets/cv.pdf` |
| Add a new skill tag | `index.html` — search for `<span class="tag">` |
| Change accent color | `index.html` — `--accent: #c8a96e;` in `:root` |
