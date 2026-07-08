# Palette Journal

## 2026-07-08 - Initial Modal Accessibility Pattern
**Learning:** Modals in this application are implemented as simple conditional renders without ARIA attributes or focus management, which breaks the experience for screen reader and keyboard users.
**Action:** Implement the 'Four-Pillar' modal pattern: ARIA roles, Escape key support, background scroll locking, and semantic list structure for instructions.
