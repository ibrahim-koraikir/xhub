## 2025-05-14 - Modal Accessibility and Dynamic Footer
**Learning:** Custom React modals in this flat component structure require explicit lifecycle management for accessibility (ARIA roles, Escape key) and UX (body scroll locking) to feel professional. Additionally, hardcoded years in footers are a common micro-UX debt that can be easily automated.
**Action:** Use the `useEffect` pattern with `document.body.style.overflow` and `window.addEventListener('keydown')` for all future modal implementations. Replace static years with `new Date().getFullYear()`.
