## 2025-05-14 - Modal Accessibility and UX
**Learning:** Custom React modals must explicitly handle focus trapping, scroll locking, and keyboard events (Escape key) to meet accessibility standards. Relying on default browser behavior is insufficient for a polished experience.
**Action:** Always implement a `useEffect` hook in modal components to manage body `overflow` and `keydown` listeners, and ensure proper ARIA roles (`dialog`) and labels are present.
