## 2025-06-14 - Modal UX and Accessibility
**Learning:** Custom React modals must implement 'Escape' key closure and body scroll locking to meet professional standards and avoid 'trapping' users. ARIA attributes (`role="dialog"`, `aria-modal`, `aria-labelledby`) are essential for screen reader context. Tactile feedback like `active:scale-95` on CTAs significantly improves the perceived responsiveness of interactive elements.
**Action:** Always include a `useEffect` hook for keyboard/scroll management and full WAI-ARIA suite when implementing or touching modal components.
