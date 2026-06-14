## 2025-05-14 - Modal and Icon Accessibility Audit
**Learning:** React modals in landing pages often overlook WAI-ARIA standards (role, modal state, labelling) and keyboard lifecycle management (Escape key, scroll locking), creating barriers for screen reader and keyboard users. Additionally, decorative icons without aria-hidden="true" clutter the accessibility tree.
**Action:** Always implement role="dialog", aria-modal="true", and clear aria-labels for modal controls. Ensure all decorative SVGs are explicitly hidden from screen readers.
