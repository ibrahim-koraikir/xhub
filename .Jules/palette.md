## 2024-05-15 - Dark Mode Focus Visibility
**Learning:** In dark-themed interfaces, standard browser focus outlines are often invisible or have poor contrast. Relying on default behavior excludes keyboard users. Custom `focus-visible` styles with brand-specific colors and offsets are necessary to maintain accessibility without compromising aesthetics.
**Action:** Always implement explicit `focus-visible` ring styles for primary actions in dark mode projects, using high-contrast colors and `ring-offset` where possible.

## 2024-05-15 - Modal Keyboard Escape Hatch
**Learning:** Forgetting to implement an `Escape` key listener on modals is a common accessibility oversight that creates a "keyboard trap" for users who rely on shortcuts rather than mouse clicks.
**Action:** Standardize the use of a `useEffect` hook in modal components to handle global `keydown` events for the `Escape` key, ensuring a consistent and expected UX.
