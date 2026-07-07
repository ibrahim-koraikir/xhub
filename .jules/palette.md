## 2024-03-20 - [Keyboard Navigation with Skip Links]
**Learning:** Sighted users rarely see them, but 'Skip to content' links are critical for power users and those using assistive technology to bypass repetitive navigation. Implementing them requires a target with tabIndex={-1} to ensure focus is received correctly without leaving a persistent browser focus ring on the container.
**Action:** Always ensure a 'Skip to content' link is the first focusable element in App.tsx, targeting a main element with tabIndex={-1} and appropriate focus styling.
