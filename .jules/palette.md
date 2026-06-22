## 2026-06-22 - Accessible Modal Implementation
**Learning:** Custom React modals require explicit focus trapping and scroll locking to be truly accessible to keyboard and screen reader users. Simply rendering the modal is insufficient; one must manage the focus cycle (Tab/Shift+Tab) and handle the Escape key.
**Action:** Use a combination of `useRef` and `useEffect` to capture focusable elements and implement a trap loop within the modal component. Always pair with `aria-modal="true"` and `role="dialog"`.
