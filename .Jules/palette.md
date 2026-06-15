## 2025-05-14 - Modal and Button Accessibility in Dark Mode
**Learning:** For components on dark backgrounds (e.g., slate-900), use `focus-visible:ring-offset-slate-900` to create a visual 'gap' that makes focus rings significantly clearer for keyboard navigation. Custom React modals must also explicitly handle the 'Escape' key and body scroll locking to meet professional UX standards.
**Action:** Always include a `useEffect` for keyboard listeners and scroll management in modals, and use appropriate ring-offsets for high-contrast focus states.
