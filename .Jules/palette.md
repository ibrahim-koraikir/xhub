## 2026-06-12 - [Enhanced Modal Accessibility and Interaction]
**Learning:** Custom React modals often lack critical accessibility features like Escape key handling, body scroll locking, and appropriate ARIA roles/labels, which are essential for keyboard and screen reader users.
**Action:** Always implement a `useEffect` hook in modal components to manage body overflow and keydown listeners, and apply WAI-ARIA dialog patterns (role="dialog", aria-modal="true", aria-labelledby) for professional UX.
