## 2025-05-15 - Modal Accessibility and Background Scroll Management
**Learning:** In React-based landing pages with fixed/absolute components, toggling a modal without locking the body scroll creates a confusing "scroll leak" where the background continues to move. Additionally, without ARIA roles and Escape key listeners, the modal is a trap for screen reader and keyboard users.
**Action:** Always implement a `useEffect` in modal components to toggle `document.body.style.overflow = 'hidden'` and add a global `keydown` listener for the `Escape` key.

## 2025-05-15 - Tactile Feedback for Web Interfaces
**Learning:** Users accustomed to mobile apps expect tactile feedback on touch/click. Static buttons on a web landing page can feel "dead" or unresponsive.
**Action:** Use Tailwind's `active:scale-95` (or 98) on primary CTA buttons to provide immediate, subtle physical feedback that mimics a real-world button press.
