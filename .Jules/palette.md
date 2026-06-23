## 2025-06-23 - Modal Accessibility Pattern
**Learning:** In React applications, custom modals require manual focus management (focusing the container on entry, returning focus on exit), keyboard event listeners (Escape key), and background scroll locking to meet basic accessibility and UX expectations.
**Action:** Always implement a `useEffect` for scroll locking and a focus trap/initial focus logic when building custom modal components.
