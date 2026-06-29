## 2026-06-29 - Skip to Content Implementation
**Learning:** When implementing a "Skip to content" link, simply scrolling to the target is insufficient for all screen readers and keyboard users. The target element (usually `<main>`) must also receive programmatic focus to ensure the next Tab key press starts from the correct location.
**Action:** Always add `id="main-content"` and `tabIndex={-1}` to the target element when adding a skip link, and ensure the skip link itself is the first focusable element in the DOM.
