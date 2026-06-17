## 2025-06-17 - [Modal Accessibility and UX]
**Learning:** Custom React modals often lack standard behavioral expectations like Escape key closing and scroll locking. Accessibility can be significantly improved by adding ARIA roles (`dialog`, `aria-modal`) and explicit focus ring offsets for dark backgrounds.
**Action:** Always implement a `useEffect` for Escape key and `overflow: hidden` on the body. Use `focus-visible:ring-offset-2` with the background color (e.g., `ring-offset-slate-900`) for high-contrast focus indicators on dark themes.
