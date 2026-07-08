## 2026-07-08 - [Memoization in Monolithic App]
**Learning:** In a monolithic React application where the root component manages UI state (like modal visibility), toggling that state triggers a full-tree re-render of all child components by default. For heavy sections (Hero, Features, etc.), this causes redundant DOM diffing and execution.
**Action:** Use `React.memo` for major layout components and `useCallback` for event handlers passed as props to prevent unnecessary re-renders during root state transitions.
