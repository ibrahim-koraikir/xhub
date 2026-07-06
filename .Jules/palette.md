## 2025-05-14 - Implementing Skip to Content Link

**Learning:** Large monolithic landing pages with complex navigation and multiple interactive sections can be difficult for keyboard users to navigate efficiently. A "Skip to content" link is a standard accessibility practice that allows users to bypass repetitive navigation elements.

**Action:** Always ensure a "Skip to content" link is the first focusable element in `App.tsx`, using Tailwind's `sr-only focus:not-sr-only`. The target element (e.g., `<main id="main-content">`) must include `tabIndex={-1}` and `outline-none` to ensure it can receive programmatic focus correctly without an unintended focus ring.
