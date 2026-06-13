## 2025-05-14 - Modal Accessibility and Icon Semantics
**Learning:** Custom modals in React require manual wiring for standard accessibility features like Escape key listeners and body scroll locking. Additionally, Playwright's `getByRole` with the `name` option prioritizes `aria-label` over inner text, which can cause test failures if labels are mismatched.
**Action:** Always implement a `useEffect` hook in modal components to manage global side effects (scroll, keyboard) and ensure `aria-label` values are used correctly in test locators.
