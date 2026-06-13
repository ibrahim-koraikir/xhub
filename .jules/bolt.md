# Bolt's Performance Journal

## 2024-06-13 - Rendering Optimization for Animated Backgrounds
**Learning:** High-frequency animations like marquee columns can cause main-thread stutter if not promoted to their own compositor layers. Additionally, decoding many decorative images simultaneously can block the main thread.
**Action:** Use `will-change: transform` on animated containers and `decoding="async"` on non-critical decorative images to ensure smooth interaction and fast initial rendering.

## 2024-06-13 - Stabilizing Component Tree for State Toggles
**Learning:** In a flat component structure where global state (like modal visibility) is managed at the root, toggling that state can trigger a full-tree re-render.
**Action:** Wrap layout components in `React.memo` and stabilize event handlers with `useCallback` to prevent unnecessary re-renders of static sections when UI overlays (modals/drawers) are toggled.
