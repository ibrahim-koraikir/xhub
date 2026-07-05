## 2025-05-14 - Modal Accessibility and Semantics
**Learning:** The 'Four-Pillar' modal pattern (ARIA roles, Escape key support, background scroll locking, and semantic list structure) significantly improves screen reader navigation and keyboard usability. Specifically, using `aria-hidden="true"` on decorative list indices (like "01") avoids redundant announcements when the container is already a semantic `<ol>`.
**Action:** Apply the 'Four-Pillar' pattern to all new modal components and ensure multi-step instructions use semantic `<ol>`/`<li>` tags with hidden decorative elements.
