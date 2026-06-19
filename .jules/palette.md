## 2025-05-14 - [Accessible Names & Testing]
**Learning:** Playwright's `getByRole` with the `name` option matches against the element's accessible name. If an element has an `aria-label`, it overrides the inner text as the accessible name, which can lead to locator timeouts if testing by visible text.
**Action:** Always check for `aria-label` or `aria-labelledby` when writing tests for interactive elements, and use the label value in locators to ensure reliability.
