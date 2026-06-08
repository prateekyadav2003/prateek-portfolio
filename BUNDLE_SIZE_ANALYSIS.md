# Bundle Size Analysis

**Generated:** June 7, 2026  
**Project:** Prateek Yadav Portfolio  
**Build Tool:** Vite 8.0.16

---

## Build Output

| File | Size | Gzip | Percentage |
|------|------|------|------------|
| index.html | 2.40 kB | 0.90 kB | 0.5% |
| index-BuArLric.css | 28.61 kB | 6.76 kB | 5.8% |
| ProjectDetail-Dq96Op1G.js | 5.24 kB | 1.58 kB | 1.1% |
| Home-DOstm7FL.js | 58.59 kB | 13.25 kB | 11.9% |
| SEO-CBcg2Qkz.js | 140.33 kB | 46.83 kB | 28.5% |
| index-BpbiBbKk.js | 260.17 kB | 85.21 kB | 52.9% |
| **Total** | **495.34 kB** | **154.53 kB** | **100%** |

---

## Analysis

### Overall Assessment
- **Total Bundle Size:** 495.34 kB (uncompressed)
- **Total Gzip Size:** 154.53 kB (compressed)
- **Status:** Good for a portfolio site, but SEO component is oversized

### Issues Identified

1. **SEO Component (140.33 kB - 28.5%)**
   - This is disproportionately large
   - Likely importing entire PROJECTS array for structured data
   - Should be optimized to only include necessary data

2. **Main Bundle (260.17 kB - 52.9%)**
   - Includes React, Framer Motion, React Router DOM
   - This is expected for a SPA with animations
   - Could benefit from better tree-shaking

### Positive Findings

1. **Code Splitting Working** ✅
   - ProjectDetail is split (5.24 kB)
   - Home is split (58.59 kB)
   - This proves lazy loading is working correctly

2. **CSS Size Reasonable** ✅
   - 28.61 kB is acceptable for Tailwind with custom styles
   - Gzip reduces to 6.76 kB

3. **ProjectDetail Very Small** ✅
   - Only 5.24 kB shows good separation of concerns

---

## Recommendations

### High Priority
1. **Optimize SEO Component** - Move PROJECTS import to only when needed, or lazy load the data
2. **Analyze SEO-CBcg2Qkz.js** - This chunk is too large and needs investigation

### Medium Priority
1. **Bundle Analyzer** - Install rollup-plugin-visualizer to see detailed breakdown
2. **Tree Shaking** - Ensure Framer Motion imports are optimized
3. **External Libraries** - Consider if any dependencies can be removed or replaced

### Low Priority
1. **CSS Purge** - Verify unused Tailwind classes are being removed
2. **Font Optimization** - Consider using font-display: swap

---

## Target Metrics

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Total Bundle | 495 kB | < 400 kB | ⚠️ Needs Work |
| Gzip Size | 155 kB | < 150 kB | ⚠️ Close |
| Largest Chunk | 260 kB | < 200 kB | ⚠️ Needs Work |
| CSS Size | 29 kB | < 30 kB | ✅ Good |

---

## Next Steps

1. Investigate SEO component size issue
2. Implement bundle analyzer
3. Optimize Framer Motion imports
4. Consider code splitting for heavy components
