## 2024-06-26 - Accessible Modal Interaction Pattern
**Learning:** In React 19 / TypeScript environments without external focus-lock libraries, a robust modal requires a manual focus trap and a split `useEffect` strategy. One hook manages lifecycle (event listeners, scroll lock), while a second hook with only `isOpen` as a dependency handles initial focus to prevent "focus yanking" when other props (like unstable `onClose` callbacks) change.
**Action:** Always implement modals with `useRef` for the container and primary action, and use the split `useEffect` pattern for stable focus management.

## 2024-06-26 - Flexible Icon Component Pattern
**Learning:** Defining internal icon components with `React.FC<React.SVGProps<SVGSVGElement>>` and spreading props is essential for supporting both visual styling (`className`) and accessibility (`aria-hidden`) consistently across the app.
**Action:** Ensure all SVG icon components spread `props` to the root `svg` element.
