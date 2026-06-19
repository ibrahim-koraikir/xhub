## 2025-05-22 - Enhanced Modal Accessibility
**Learning:** For high-quality accessibility, custom React modals must implement focus trapping to prevent keyboard users from navigating outside the dialog while it is open. Simply handling the Escape key is not enough for a compliant dialog experience.
**Action:** Always use a `ref` to the modal container and implement a Tab-key listener within `useEffect` to loop focus between the first and last focusable elements.

## 2025-05-22 - Decorative SVG Pattern
**Learning:** Reusable SVG icon components in single-file React apps often default to being visible to screen readers, which can create noise for users.
**Action:** Proactively apply `aria-hidden="true"` to all icons that don't convey unique information, ensuring a cleaner screen reader experience.
