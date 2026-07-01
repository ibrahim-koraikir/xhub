# Bolt's Journal - Critical Learnings

## 2026-07-01 - Preventing Global Re-renders in Monolithic App Components
**Learning:** In applications where the entire page is contained within a single `App.tsx` file, local state changes (like toggling a modal) can trigger a full re-render of heavy static sections (Hero, Features, Gallery) if they aren't memoized and if event handlers passed to them aren't stabilized.
**Action:** Always use `React.memo` for major layout sections and `React.useCallback` for any event handlers passed down from the root state to prevent the entire DOM from being reconciled on simple state transitions.
