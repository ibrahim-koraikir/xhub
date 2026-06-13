## 2025-06-13 - Modal Accessibility and UX Patterns
**Learning:** All custom React modals in this dark-themed UI must implement `useEffect` for the 'Escape' key and body scroll locking (`overflow: hidden`). Additionally, proper ARIA attributes (role="dialog", aria-modal="true", aria-labelledby) and focus-visible ring offsets specific to the dark background (ring-offset-slate-900) are essential for accessibility and visual clarity.
**Action:** Apply these standard `useEffect` hooks and ARIA patterns to any new or existing modal components.
