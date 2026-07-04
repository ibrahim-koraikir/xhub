## 2025-05-14 - SPA Skip Links and Focus Management
**Learning:** In Single Page Applications (SPAs), using a "Skip to content" link requires more than just an anchor tag. To ensure assistive technologies correctly shift focus to the target section, the target element (e.g., `<main>`) must have a `tabIndex={-1}` and potentially `outline-none` to prevent unwanted visual focus rings while allowing programmatic focus.
**Action:** Always verify that skip link targets are programmatically focusable by checking `document.activeElement` after activation in verification scripts.
