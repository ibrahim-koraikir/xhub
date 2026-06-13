## 2024-05-23 - Accessibility Foundations for Landing Pages

**Learning:** Interactive components like modals and decorative icons often lack the necessary ARIA attributes and keyboard listeners to be fully accessible to screen readers and power users. Specifically, custom modals must explicitly handle focus, escape keys, and scroll locking to feel professional and inclusive.

**Action:** Always implement `role="dialog"` and `aria-modal="true"` for modals, use `aria-hidden="true"` for decorative icons, and ensure star ratings are grouped with a single descriptive label for screen readers.
