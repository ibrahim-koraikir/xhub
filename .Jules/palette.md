# Palette Agent UX & Accessibility Patterns

## 2024-05-22 - Accessible Modal Pattern
**Learning:** Modals must not only be visually distinct but also keyboard-accessible and screen-reader-friendly. Implementing WAI-ARIA roles (`dialog`, `aria-modal`) and ensuring background scroll locking prevents "background noise" for both sighted and screen-reader users.
**Action:** Always implement `role="dialog"`, `aria-modal="true"`, background scroll locking, and an `Escape` key listener for modal components.

## 2024-05-22 - Standardized Focus States
**Learning:** In dark-themed, glassmorphic UIs, standard browser focus rings are often invisible or inconsistent. Using a brand-aligned `focus-visible` style with an offset ensures clarity for keyboard-only users without compromising the visual design.
**Action:** Use `focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black` for primary interactive elements in dark mode.
