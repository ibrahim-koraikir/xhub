## 2026-07-03 - [Component Memoization and Event Stabilization]
**Learning:** In a monolithic React application like `App.tsx`, root-level state transitions (e.g., toggling a modal) trigger re-renders of the entire component tree. This is particularly expensive when many decorative layout sections are present.
**Action:** Wrap major layout components with `React.memo` and stabilize event handlers passed as props using `React.useCallback`. This ensures that only the affected components (like the modal itself) re-render during state changes, significantly improving responsiveness.
