# Palette Journal - XHub

## 2024-05-15 - Modal Accessibility Pattern
**Learning:** High-polish landing pages often overlook basic keyboard and screen reader support in modals. Implementing a "Four-Pillar" pattern (Escape key, scroll lock, ARIA roles, and label association) ensures a smooth experience for all users without compromising design.
**Action:** Always apply `role="dialog"`, `aria-modal="true"`, and manage focus/scroll when introducing modal overlays.
