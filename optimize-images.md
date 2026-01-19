# Image Optimization Guide

## Problem
Your repository is over 25MB due to large image files, which exceeds GitHub's file size limits.

## Solutions

### Option 1: Use Git LFS (Recommended)
1. Install Git LFS: `git lfs install`
2. The `.gitattributes` file is already created to track image files
3. Add files: `git add .gitattributes`
4. Commit: `git commit -m "Add Git LFS tracking for images"`
5. Push: `git push origin main`

### Option 2: Use External Image Hosting
Host images on services like:
- **GitHub Pages** (separate repository)
- **Cloudinary** (free tier: 25GB)
- **ImgBB** (free image hosting)
- **AWS S3** (pay-as-you-use)
- **Google Drive** (public links)

### Option 3: Optimize Images Locally
Use tools to compress images:
- **Online**: TinyPNG, Squoosh.app
- **CLI**: ImageMagick, Sharp
- **Batch**: Reduce all images to 80% quality, max 1920px width

### Option 4: Use Placeholder Images
Replace large images with:
- Smaller placeholder images
- CSS gradients
- SVG placeholders
- External stock photo URLs

## Quick Fix Commands

### Compress all JPG images (if you have ImageMagick):
```bash
magick mogrify -quality 80 -resize 1920x1920> images/*.jpg
```

### Compress all PNG images:
```bash
magick mogrify -quality 80 -resize 1920x1920> images/*.png
```

### Check repository size:
```bash
du -sh .
```

## Implementation Steps
1. Choose one of the solutions above
2. Test locally first
3. Commit and push to GitHub
4. Verify the repository size is under 25MB