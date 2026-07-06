## 2025-05-15 - Accessibility Polish for Decorative Elements
**Learning:** Decorative icons and rating systems (like star ratings) often lack the necessary ARIA attributes, causing screen readers to announce redundant or confusing information. Wrapping star ratings in a container with `role="img"` and a descriptive `aria-label` provides a much better experience than announcing individual stars.
**Action:** Always ensure decorative SVGs have `aria-hidden="true"` and group repeated visual indicators (stars, dots) into a single accessible entity.

## 2025-05-15 - Skip-to-content Implementation Details
**Learning:** In monolithic React apps with complex layouts, a skip-to-content link is essential for keyboard navigation. For it to work correctly, the target element (usually `<main>`) must have `tabIndex={-1}` to be programmatically focusable, and `outline-none` to prevent an unsightly focus ring on the entire content block after activation.
**Action:** Pair skip links with `tabIndex={-1}` on target containers and ensure they use high-contrast brand colors when visible.
