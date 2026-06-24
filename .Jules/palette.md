## 2025-06-24 - High-Contrast Focus Indicators for Dark Themes
**Learning:** In dark-themed landing pages with high-intensity brand colors (like Rose-500), default browser focus outlines are often visually jarring or have poor contrast. Using `focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black outline-none` provides a cohesive, high-contrast indicator that respects the design system while remaining fully accessible.
**Action:** Always pair `outline-none` with custom `focus-visible` ring and offset styles in this repository to ensure keyboard navigation is both visible and aesthetically integrated.

## 2025-06-24 - Semantic Modal Accessibility Pattern
**Learning:** Custom React modals often lack baseline accessibility features like Escape-key closing and background scroll locking, which are critical for users with motor or cognitive disabilities.
**Action:** Implement a standard "Accessible Modal" pattern using `role="dialog"`, `aria-modal="true"`, and a `useEffect` hook to manage `keydown` listeners and `document.body.style.overflow` state.
