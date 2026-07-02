## 2026-07-02 - Accessible Skip-to-Content Implementation
**Learning:** Use a 'Skip to content' link as the first focusable element to improve navigation for keyboard and screen reader users. The target element (e.g., `<main id="main-content">`) must include `tabIndex={-1}` and `outline-none` to ensure it can receive programmatic focus correctly without an unintended focus ring.
**Action:** Always implement skip links in the root layout using Tailwind's `sr-only focus:not-sr-only` utility classes for a clean, accessible interaction.
