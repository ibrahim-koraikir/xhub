## 2025-05-15 - [Accessible Multi-step Modals]
**Learning:** When implementing multi-step instructions (e.g., installation guides), using semantic `<ol>` and `<li>` elements provides natural structure for screen readers. Decorative step indices (like "01", "02") should be marked with `aria-hidden="true"` to prevent redundant numbering announcements.
**Action:** Always prefer semantic list elements for sequential steps and hide redundant visual indicators.

## 2025-05-15 - [Tactile Interactive Elements]
**Learning:** Adding a subtle scale reduction (`active:scale-95` or `active:scale-[0.98]`) with a smooth transition to primary buttons provides immediate, satisfying physical feedback that enhances the "premium" feel of the UI.
**Action:** Apply `active:scale-95 transition-transform` to key interactive elements (CTAs, primary links) as a standard UX polish.
