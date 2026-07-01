## 2026-07-01 - Skip to Content for Keyboard Accessibility
**Learning:** Fixed navigation headers can create significant friction for keyboard-only users by forcing them to tab through numerous menu items on every page load before reaching the main content.
**Action:** Always implement a "Skip to content" link as the first focusable element in `App.tsx`. Ensure it uses Tailwind's `sr-only focus:not-sr-only` for visual hiding and targets a `<main>` container with `id="main-content"` and `tabIndex={-1}` for reliable programmatic focus.
