## 2024-06-24 - Accessible Modal Focus Management
**Learning:** For React modals with transitions, programmatic focus (e.g., `element.focus()`) should be placed in a `useEffect` with only `isOpen` as a dependency, and potentially a small delay (via `setTimeout`) to ensure the browser has finished any layout shifts or visibility transitions. Separating the focus logic from the lifecycle logic (event listeners, scroll lock) prevents "focus yanking" during subsequent re-renders of the modal's parent.

**Action:** Always use a split-useEffect pattern for modals: one for the stable lifecycle and one specifically for the entry-focus interaction.
