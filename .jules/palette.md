## 2025-05-14 - Modal and Testimonial Accessibility
**Learning:** Custom React modals often lack standard accessibility features like ARIA roles, labels, and keyboard navigation (Escape key), which are critical for screen reader and keyboard-only users. Similarly, icon-based ratings need semantic wrappers.
**Action:** Always include `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` on modals. Implement a `useEffect` for Escape key handling and scroll locking. Wrap icon ratings in a `div` with `role="img"` and a descriptive `aria-label`.
