## 2025-06-11 - Modal Accessibility and UX
**Learning:** For manually implemented modals (without a library like Headless UI), ensuring background scroll locking and Escape key support is critical for a polished UX and accessibility.
**Action:** Always implement a `useEffect` hook in custom modals to toggle `overflow: hidden` on the body and listen for the `Escape` key.
