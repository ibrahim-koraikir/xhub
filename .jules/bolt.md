## 2025-05-22 - [React Re-renders and LCP Optimization]
**Learning:** In a single-page landing page, state changes in the root component (like modal toggles) can trigger full-page re-renders if children aren't memoized. Additionally, CSR apps often have delayed LCP because images are only discovered after JS execution.
**Action:** Use React.memo for static sections and useCallback for stable props. Use <link rel="preload"> in index.html for LCP images to bypass JS execution delay.
