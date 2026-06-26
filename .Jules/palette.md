## 2026-06-26 - Standardizing Accessible Modal Patterns
**Learning:** Accessible modals require a combination of ARIA attributes (role, modal state, labelling) and functional behaviors (Escape key support, body scroll locking) to provide a seamless experience for both screen reader and sighted users.
**Action:** Always include `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` on modal containers. Implement `Escape` key listeners and `overflow: hidden` on `document.body` within a `useEffect` hook synchronized with the modal's open state.
