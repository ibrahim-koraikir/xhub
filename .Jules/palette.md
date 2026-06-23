## 2025-06-23 - Accessible Modal Implementation in React 19
**Learning:** Custom React modals require explicit focus management and ARIA attributes to be usable by keyboard and screen reader users. Key patterns include using `useRef` to focus the close button on mount, a split `useEffect` pattern to avoid "focus yanking" during parent re-renders, and implementing `Escape` key listeners and body scroll locking for a native-like feel.
**Action:** Always implement `role="dialog"`, `aria-modal="true"`, and focus management when building custom modal components.
