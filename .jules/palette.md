## 2024-06-19 - Standardizing Modal UX and Accessibility
**Learning:** Custom React modals often lack expected keyboard navigation (Escape key) and screen reader support (ARIA roles/labels). Additionally, body scroll locking is essential for a focused modal experience.
**Action:** Always implement a `useEffect` in modals to handle 'Escape', lock body scroll, and use semantic ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`).

## 2024-06-19 - Tailwind Animation Stacking Limitation
**Learning:** In standard Tailwind JIT, multiple `animate-*` classes on the same element do not stack because they all target the `animation` property.
**Action:** When multiple animation effects (e.g., fade and zoom) are needed simultaneously, create a single combined keyframe/animation in `tailwind.config.js` (e.g., `modal-enter`) instead of using multiple utility classes.
