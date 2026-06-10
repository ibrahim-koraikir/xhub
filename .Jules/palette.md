## 2025-06-10 - Standardizing Modal Accessibility
**Learning:** Standardizing modal accessibility requires a combination of WAI-ARIA roles (`dialog`, `aria-modal`) for screen readers, keyboard listeners (`Escape` key) for navigation, and background scroll locking (`overflow: hidden`) to maintain visual and functional focus.
**Action:** Use a `useEffect` hook in all modal components to centralize the management of global event listeners and body style overrides.
