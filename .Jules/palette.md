## 2025-05-14 - [Accessible Focus States in Dark Themes]
**Learning:** In dark-themed UIs, default browser focus outlines often lack sufficient contrast or visual harmony. Simply removing them with `focus:outline-none` creates a critical accessibility barrier. Using Tailwind's `focus-visible:ring-2` with a brand-colored offset provides a premium, accessible experience that only appears for keyboard users.
**Action:** Always replace `focus:outline-none` with high-contrast `focus-visible` ring styles to ensure keyboard navigability.

## 2025-05-14 - [SVG Component Type Safety]
**Learning:** Manually defining props for icon components often leads to missing standard SVG attributes (like `aria-hidden`). In React + TypeScript, typing icons as `React.FC<React.SVGProps<SVGSVGElement>>` and spreading `...props` ensures they are both type-safe and fully compatible with accessibility standards and Tailwind classes.
**Action:** Standardize icon components using `React.FC<React.SVGProps<SVGSVGElement>>` to support `aria-hidden` and other standard attributes out-of-the-box.
