## 2025-05-14 - Accessible Navigation with Skip Links

**Learning:** Large landing pages with navigation headers create repetitive keyboard navigation hurdles for screen reader and keyboard-only users. A "Skip to content" link is a standard but often overlooked pattern that significantly improves accessibility by allowing users to bypass top-level navigation.

**Action:** Ensure a "Skip to content" link is the first focusable element in `App.tsx`, using Tailwind's `sr-only focus:not-sr-only` classes and a target element with `tabIndex={-1}` to ensure programmatic focus works correctly across browsers.
