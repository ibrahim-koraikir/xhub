## 2025-05-15 - [Flat Component Tree Re-renders]
**Learning:** In a single-file application structure where multiple large sections (Hero, Features, etc.) are children of a central App component, state changes (like opening a modal) trigger a complete re-render of all sections. Standardizing on React.memo for layout sections and useCallback for handlers is essential to maintain UI responsiveness as the page grows.
**Action:** Always memoize major layout components and stabilize their callback props in flat-structured React apps to prevent cascading re-render bottlenecks.
