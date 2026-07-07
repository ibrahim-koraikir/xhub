## 2026-07-07 - Memoization of Major Layout Components
**Learning:** In a monolithic App.tsx where state (like a modal toggle) is managed at the root, the entire component tree re-renders unnecessarily unless major sections are memoized. Using React.memo on top-level layout components combined with useCallback for root-level event handlers yields a significant reduction in total re-renders.
**Action:** Always check for root-level state interactions and identify large, static sub-trees that can be memoized to improve UI responsiveness.
