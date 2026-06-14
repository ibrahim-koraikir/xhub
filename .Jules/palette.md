## 2026-06-14 - [Modal Accessibility and Footer Maintenance]
**Learning:** All custom React modals must implement a `useEffect` to handle the 'Escape' key and body scroll locking (`overflow: hidden`) to ensure professional accessibility. Dynamic copyright years in the footer prevent the app from appearing outdated without manual maintenance.
**Action:** Always include ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`) and keyboard/scroll logic when creating or auditing modals. Use `{new Date().getFullYear()}` for footers.
