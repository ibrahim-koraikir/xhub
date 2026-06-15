## 2025-06-15 - Accessibility Enhancements for Landing Page Components
**Learning:** Decorative icons should have `aria-hidden="true"` to avoid screen reader clutter. Star ratings require a container with `role="img"` and a descriptive `aria-label` for meaningful interpretation. Custom modals must follow WAI-ARIA dialog patterns, including `role="dialog"`, `aria-modal="true"`, and proper labelling using `aria-labelledby`.
**Action:** Consistently apply these ARIA patterns to all interactive and decorative components in similar landing page projects.
