## 2025-05-14 - Interactive Element Refinement

**Learning:** Accessibility and tactile feedback are often overlooked in landing pages. Simple additions like ARIA labels for icon-only buttons, modal escape-key handling, and 'active' scaling states significantly improve the professional feel and usability of the interface. Specifically, for dark-themed apps, focus rings need to be carefully colored (e.g., using brand colors) to remain visible.

**Action:** Always ensure modals have `role="dialog"`, `aria-modal="true"`, and handle the `Escape` key. Add `active:scale-95` to all primary CTA buttons to provide immediate tactile feedback.
