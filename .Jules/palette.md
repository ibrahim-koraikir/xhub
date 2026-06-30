# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Implementing Skip to Content
**Learning:** A "Skip to content" link is a critical accessibility feature for keyboard and screen reader users, allowing them to bypass navigation menus. It must be the first focusable element in the DOM. To avoid disrupting the visual design, it should be visually hidden using `sr-only` and only become visible on focus.
**Action:** Implement "Skip to content" as the first focusable element in `App.tsx`, targeting a `main` element with `id="main-content"` and `tabIndex={-1}`.
