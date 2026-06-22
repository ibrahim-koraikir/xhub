## 2025-05-14 - Modal Focus and Accessibility Pattern
**Learning:** For high-quality modal accessibility in React, isolating initial focus logic into a dedicated `useEffect` (dependent only on `isOpen`) prevents "focus yanking" if other lifecycle effects (like Escape key listeners) re-run due to unstable callback dependencies. Additionally, using semantic `<ol>`/`<li>` for installation steps provides better structure for screen readers than generic divs.
**Action:** Use the split-effect pattern for focus management and semantic lists for sequential UI guides.
