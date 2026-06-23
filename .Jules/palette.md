## 2025-05-15 - Accessible Modal Pattern for React
**Learning:** Custom React modals in landing pages often lack basic accessibility. A complete "micro-win" for modal UX includes: 1) `role="dialog"` and `aria-modal="true"`, 2) semantic labelling with `aria-labelledby`, 3) auto-focusing the primary action (or close button) on open, 4) restoring focus to the trigger on close, 5) `Escape` key support, and 6) background scroll locking.
**Action:** Use a `useEffect` with `useRef` to manage focus and body styles when implementing custom modals without a library.
