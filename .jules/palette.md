# Palette's Journal - Critical UX/Accessibility Learnings

This journal contains critical UX and accessibility learnings discovered during the development of this project.

## 2025-05-14 - Skip to Content for Single Page Apps
**Learning:** Even in relatively short single-page layouts, a 'Skip to Content' link is essential for keyboard users to bypass navigation and headers. Using Tailwind's `sr-only focus:not-sr-only` is an efficient way to implement this without custom CSS. The target element must have `tabIndex={-1}` to be programmatically focusable without being in the natural tab order.
**Action:** Always include a 'Skip to Content' link as the first focusable element in the main entry point of any application.
