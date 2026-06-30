## 2025-05-15 - Add "Skip to content" link for accessibility
**Learning:** For landing pages with fixed headers and many navigation links, a "Skip to content" link is a critical first-step for keyboard users to bypass redundant navigation. Using Tailwind's `sr-only focus:not-sr-only` provides a clean way to hide it until it receives focus.
**Action:** Always ensure a skip link is the first focusable element in the main application component, targeting the main content area with a properly set ID and tabIndex.
