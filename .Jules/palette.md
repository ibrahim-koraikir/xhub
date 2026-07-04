## 2025-05-14 - Modal Accessibility and UX Patterns
**Learning:** In React-based landing pages, modals often overlook standard keyboard accessibility and background scroll management. A complete accessible modal pattern requires:
1. `Escape` key handling via `keydown` listeners.
2. Background scroll locking using `document.body.style.overflow = 'hidden'`.
3. ARIA roles and attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`) to establish programmatic relationships for assistive technology.
4. Proper cleanup in `useEffect` to restore global states (listeners, scroll).

**Action:** Always implement this "Four-Pillar" modal pattern (Keydown, ScrollLock, ARIA, Cleanup) whenever adding or refactoring dialog components to ensure a seamless experience for all users.
