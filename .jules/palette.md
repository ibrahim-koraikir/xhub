## 2025-07-08 - Modal Accessibility Pattern
**Learning:** A complete modal UX enhancement (the 'Four-Pillar' pattern) requires coordinating multiple browser behaviors: (1) ARIA attributes for screen readers, (2) keyboard listeners for navigation, (3) background scroll locking for focus containment, and (4) semantic content structure.
**Action:** Always implement `useEffect` hooks in React modals to manage side effects like `Escape` key listeners and `document.body.style.overflow` to ensure a polished and accessible experience.
