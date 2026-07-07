# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - Skip-to-content accessibility pattern
**Learning:** For monolithic single-page layouts (like this landing page), keyboard users and screen-reader users can become frustrated navigating through a large number of header links on every page load. A "Skip to content" link is a critical but often overlooked micro-UX improvement that provides a shortcut to the main content area.
**Action:** Always include a "Skip to content" link as the first focusable element in the application. Use Tailwind's `sr-only focus:not-sr-only` to keep it hidden until focused. Ensure the target `main` element has a matching `id` and `tabIndex={-1}` to receive programmatic focus without an unintended outline.
