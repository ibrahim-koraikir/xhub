## 2025-06-17 - Standardizing Modal Accessibility and Interaction
**Learning:** Custom React modals in this landing page lacked standard accessibility roles and interaction patterns (Escape key closing, scroll locking). Implementing these consistently improves the UX for both screen reader and keyboard users.
**Action:** Always implement a `useEffect` hook in modal components to handle the 'Escape' key and toggle `document.body.style.overflow = 'hidden'` to lock background scrolling while the modal is active. Ensure `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` are present.
