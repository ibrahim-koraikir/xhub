## 2025-05-14 - [Modal Accessibility and Interaction Patterns]
**Learning:** Standardizing modal interactions (scroll locking, Escape key to close) and semantic structure (ordered lists for steps, ARIA roles) significantly improves the perceived quality and accessibility of the UI.
**Action:** Always implement `document.body.style.overflow = 'hidden'` (with cleanup) and an 'Escape' key listener for any custom modal component. Use semantic `<ol>`/`<li>` for step-based content and ensure `aria-labelledby` is correctly linked to a modal title.
