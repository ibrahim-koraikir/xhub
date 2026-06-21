## 2026-06-21 - Modal Accessibility and Focus Management
**Learning:** Custom React modals often lack critical accessibility features like focus traps, semantic roles (`role="dialog"`), and ARIA attributes (`aria-modal`), making them difficult or impossible for keyboard and screen reader users to navigate.
**Action:** Always implement a focus trap using `useRef` and `useEffect` and apply semantic ARIA attributes to any custom modal component to ensure inclusivity.
