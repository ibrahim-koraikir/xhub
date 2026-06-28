## 2025-05-14 - Modal Accessibility and Navigation
**Learning:** Dark-themed landing pages often use custom div-based modals that are invisible to screen readers without explicit ARIA roles. Additionally, keyboard users are often trapped or lost when a modal opens if background scrolling isn't locked and focus isn't managed.

**Action:** Always implement `role="dialog"`, `aria-modal="true"`, and handle the `Escape` key for custom React modals. Ensure background scrolling is disabled using `document.body.style.overflow = 'hidden'` to prevent disorientation on mobile.
