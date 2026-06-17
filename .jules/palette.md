## 2025-05-14 - Modal Accessibility and UX Patterns
**Learning:** For components on dark backgrounds (e.g., slate-900), using `focus-visible:ring-offset-slate-900` is critical to create a visual 'gap' for the focus ring, ensuring high visibility for keyboard navigation. Additionally, managing body overflow and the 'Escape' key via `useEffect` is a non-negotiable standard for custom React modals.
**Action:** Always include focus ring offsets that match the background and implement standard keyboard/scroll listeners when building custom interactive overlays.
