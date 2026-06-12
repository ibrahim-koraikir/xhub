## 2025-05-14 - Modal Accessibility and Tactile Feedback
**Learning:** Custom React modals in this codebase lacked standard WAI-ARIA attributes (role="dialog", aria-modal="true") and descriptive labels for icon-only buttons, which hinders screen reader usability. Additionally, buttons felt "flat" without tactile feedback.
**Action:** Always implement `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` for modals. Ensure icon-only buttons have an `aria-label`. Use Tailwind's `active:scale-95` (or similar) to provide tactile visual feedback on click.
