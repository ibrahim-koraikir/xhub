# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-06-23 - Focus Trapping in React Modals
**Learning:** Implementing a robust focus trap in React requires managing the tab order and ensuring the initial focus is set correctly when the modal opens. A split `useEffect` pattern (one for listeners, one for initial focus) prevents "focus yanking" during re-renders.
**Action:** Use `useRef` to track the modal container and a dedicated `useEffect` with `[isOpen]` as a dependency to set initial focus and handle the focus trap logic.
