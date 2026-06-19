## 2025-05-14 - Modal Accessibility and UX Patterns
**Learning:** Custom React modals in landing pages often lack standard keyboard interaction (Escape key) and proper ARIA labeling, which hinders accessibility. Additionally, decorative SVG icons can clutter screen reader output if not explicitly hidden.
**Action:** Always implement `useEffect` for 'Escape' key handling and body scroll locking in modals. Ensure decorative icons have `aria-hidden="true"` and modal containers use `role="dialog"` with `aria-modal="true"`.
