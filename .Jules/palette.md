## 2024-11-20 - Accessible Modal and Navigation Polish

**Learning:** Custom modals in React frequently miss the "small things" that make them accessible: Escape key support, body scroll locking, and explicit ARIA roles. Additionally, grouping visual repeated elements (like star ratings) into a container with a single `aria-label` significantly improves the screen reader experience compared to individual icons.

**Action:** When building custom overlays, always implement `role="dialog"`, `aria-modal="true"`, and keyboard listeners for the `Escape` key. For high-content landing pages, a "Skip to content" link is a non-negotiable for keyboard accessibility.
