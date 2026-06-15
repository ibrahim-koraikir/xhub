## 2025-05-15 - [Modal Accessibility and Decorative Icons]
**Learning:** Custom modals in React must explicitly manage focus, keyboard navigation (Escape key), and body scroll locking to meet professional accessibility standards. Additionally, SVG icons that are purely decorative should be marked with `aria-hidden="true"` to reduce noise for screen reader users.
**Action:** Always implement a `useEffect` in modal components for Escape key and body scroll management. Use `focus-visible` with appropriate ring-offsets for keyboard navigation on dark backgrounds.
