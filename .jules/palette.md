## 2026-06-20 - Custom Modal Accessibility & UX
**Learning:** Custom React modals in this app lacked critical accessibility features such as focus trapping, Escape key support, and body scroll locking. These are essential for a polished user experience and screen reader compatibility.
**Action:** Always implement a `useEffect` hook in modal components to handle `Escape`, manage a Tab-based focus trap using `useRef`, and toggle `document.body.style.overflow` between `hidden` and `unset`.
