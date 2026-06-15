## 2025-06-15 - [Modal UX & Focus Visibility]
**Learning:** For components on dark backgrounds (e.g., slate-900), using `focus-visible:ring-offset-slate-900` creates a visual 'gap' that makes focus rings significantly clearer for keyboard navigation. Additionally, implementing both `Escape` key handling and body scroll locking is essential for a professional modal experience.
**Action:** Always pair `focus-visible` with a theme-matching `ring-offset` and ensure custom modals manage body overflow.
