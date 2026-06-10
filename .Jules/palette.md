# Palette Journal - XHub

## 2024-05-22 - Modal Accessibility and Tactile Feedback
**Learning:** Modern landing pages often prioritize visual "glassmorphic" design over core accessibility. The `InstallModal` was missing keyboard support (Escape key) and proper ARIA roles, which are critical for users relying on assistive technology or keyboard navigation. Additionally, high-contrast dark themes benefit significantly from tactile micro-interactions like `active:scale-95` to confirm user intent on touch and click.
**Action:** Always implement `useEffect` hooks for global keyboard listeners and body scroll locking when building custom modals, and ensure star ratings use the "container label + hidden icons" pattern for screen reader clarity.
