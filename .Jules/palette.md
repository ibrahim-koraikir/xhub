# Palette's Journal - XHub

## 2025-05-14 - Modal Accessibility and Interactive Polish
**Learning:** Modals without keyboard escape listeners and body scroll locks create a disjointed experience for power users and screen reader users alike. Standardizing `role="dialog"` and `aria-modal` ensures the OS/Browser treats the component with the priority it requires.
**Action:** Always implement `Escape` key listeners and `overflow: hidden` on the body when mounting a modal. Ensure all icon-only buttons have descriptive `aria-label` attributes.
