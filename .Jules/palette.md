## 2024-06-16 - Modal Accessibility and Focus Visibility
**Learning:** For components on dark backgrounds (like `slate-900`), using `focus-visible:ring-offset-slate-900` creates a critical visual 'gap' that makes focus rings significantly more discoverable for keyboard-only users.
**Action:** Always implement `focus-visible` with appropriate `ring-offset` and matching background color on interactive elements in dark-themed apps.

## 2024-06-16 - Decorative Icon Redundancy
**Learning:** Screen readers often stutter on unlabelled SVGs or read out cryptic path data. `aria-hidden="true"` is essential for all decorative icons that don't convey unique information not already present in nearby text.
**Action:** Perform a global pass on icon components to ensure they are hidden from the accessibility tree unless they are strictly functional and labelled.
