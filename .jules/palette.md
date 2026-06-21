## 2025-05-15 - React Modal Focus Yanking
**Learning:** In React, if a modal's `useEffect` manages initial focus and includes an unstable dependency (like an inline callback from a parent), the effect will re-trigger on every parent render, resetting the user's focus to the start of the modal.
**Action:** Isolate the initial focus logic into a separate `useEffect` that only depends on the modal's visibility state (`isOpen`).

## 2025-05-15 - Dark Mode Focus Rings
**Learning:** Standard focus rings can be invisible on dark backgrounds (e.g., `slate-900`).
**Action:** Use `focus-visible:ring-offset-slate-900` to create a visual 'gap' between the element and the ring, ensuring visibility on dark surfaces.
