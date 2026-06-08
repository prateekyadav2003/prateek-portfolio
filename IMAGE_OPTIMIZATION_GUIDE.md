# Image Optimization Guide

**Generated:** June 7, 2026  
**Project:** Prateek Yadav Portfolio  
**Goal:** Reduce image sizes and improve load performance

---

## Current Image Inventory

### Main Images

| Image | Location | Current Size | Format | Priority |
|-------|----------|--------------|--------|----------|
| profile.png | public/ | 105 KB | PNG | High |
| DataVisualizatiob.jpg | public/certificates/ | TBD | JPG | Medium |
| Ethical Hacking Bootcamp certificate.jpeg | public/certificates/ | TBD | JPEG | Medium |
| SQL.jpg | public/certificates/ | TBD | JPG | Medium |
| favicon.svg | public/ | Small | SVG | Low |
| icons.svg | public/ | Small | SVG | Low |

### Issues Identified

1. **profile.png (105 KB)** - Too large for a profile image
   - Should be under 50 KB for optimal performance
   - PNG format is inefficient for photos
   - Should convert to WebP with fallback

2. **Certificate images** - Large JPG files
   - Should be optimized and converted to WebP
   - Consider lazy loading for certificate previews

3. **No WebP versions** - Missing modern image format
   - WebP provides 25-35% better compression than PNG/JPG
   - Should implement WebP with fallback to original format

---

## Optimization Recommendations

### High Priority

1. **Optimize profile.png**
   - Convert to WebP (target: < 30 KB)
   - Add PNG fallback for older browsers
   - Use quality setting 80-85%
   - Resize to max 400x400px if larger

2. **Convert certificate images to WebP**
   - Target: < 50 KB per certificate
   - Add JPG fallback
   - Use quality setting 75-80%

### Medium Priority

1. **Implement picture element with WebP fallback**
   ```html
   <picture>
     <source srcset="/profile.webp" type="image/webp">
     <source srcset="/profile.png" type="image/png">
     <img src="/profile.png" alt="Prateek Yadav" loading="lazy">
   </picture>
   ```

2. **Add responsive images**
   - Provide multiple sizes for different screen widths
   - Use srcset and sizes attributes

### Low Priority

1. **Optimize SVG icons**
   - Remove unnecessary metadata
   - Minify SVG code
   - Consider using icon font instead

---

## Optimization Tools

### Online Tools (Free)
- **Squoosh** (https://squoosh.app/) - Google's image optimizer
- **TinyPNG** (https://tinypng.com/) - PNG/JPG compression
- **CloudConvert** (https://cloudconvert.com/) - Format conversion

### Command Line Tools
- **sharp** (Node.js) - High-performance image processor
- **imagemin** - Node.js image minification
- **cwebp** - Google's WebP encoder

### Build Tools
- **vite-plugin-imagemin** - Automatic image optimization in Vite
- **@squoosh/lib** - Squoosh library for Node.js

---

## Implementation Steps

### Step 1: Install Optimization Tool

```bash
npm install --save-dev vite-plugin-imagemin
```

### Step 2: Update vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
      webp: { quality: 80 },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: false }
        ]
      }
    })
  ]
})
```

### Step 3: Convert Images to WebP

Use Squoosh or command line:
```bash
# Using cwebp (install with: apt-get install webp on Linux)
cwebp -q 80 profile.png -o profile.webp

# Or use online tool: https://squoosh.app/
```

### Step 4: Update Image References

Replace direct image references with picture elements:

**Before:**
```jsx
<img src="/profile.png" alt="Profile" loading="lazy" />
```

**After:**
```jsx
<picture>
  <source srcSet="/profile.webp" type="image/webp" />
  <img src="/profile.png" alt="Profile" loading="lazy" />
</picture>
```

### Step 5: Update Resource Hints

Add WebP preload to index.html:
```html
<link rel="preload" href="/profile.webp" as="image" type="image/webp">
```

---

## Expected Results

### Before Optimization
- profile.png: 105 KB
- Total images: ~200+ KB
- Load time impact: High

### After Optimization
- profile.webp: ~30 KB (71% reduction)
- profile.png (fallback): ~50 KB (52% reduction)
- Total images: ~80-100 KB (50-60% reduction)
- Load time impact: Low

### Performance Impact
- Faster initial page load
- Reduced bandwidth usage
- Better Lighthouse scores
- Improved mobile performance

---

## Current Status

- [ ] Install image optimization plugin
- [ ] Convert profile.png to WebP
- [ ] Convert certificate images to WebP
- [ ] Update image references to use picture elements
- [ ] Add WebP preload hints
- [ ] Test in different browsers
- [ ] Verify Lighthouse improvement

---

## Notes

- WebP is supported in 95%+ of browsers (Chrome, Firefox, Edge, Safari 14+)
- Always provide fallback for older browsers
- Test images after compression to ensure quality is acceptable
- Consider using CDN for image delivery in production
