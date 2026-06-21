## 2026-06-21 - Accessible Modal Focus Management
**Learning:** Custom React modals require explicit focus trapping and ARIA attributes (role="dialog", aria-modal="true") to be accessible. Split `useEffect` hooks (one for lifecycle, one for initial focus) prevent "focus yanking" during re-renders.
**Action:** Use `useRef` for modal containers and primary interactive elements. Implement a `Tab` key listener to wrap focus within the modal and ensure `Escape` closes it while locking body scroll.
