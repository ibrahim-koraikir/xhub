## 2025-05-15 - Enhancing Application Accessibility

**Learning:** Large React-based landing pages often neglect core accessibility features like skip-to-content links and proper ARIA labeling for custom modals. Decorative SVG icons, if not explicitly hidden with `aria-hidden="true"`, can create a noisy experience for screen reader users. Refactoring icon components to spread SVG props simplifies the application of accessibility attributes across the codebase.

**Action:** Always include a 'Skip to content' link as the first focusable element. Ensure custom modals use `role="dialog"`, `aria-modal="true"`, and have a title linked via `aria-labelledby`. Refactor icon components early to support props spreading, allowing easy use of `aria-hidden` and `aria-label`.
