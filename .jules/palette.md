## 2024-07-03 - Accessible Skip-to-Content with Fixed Headers

**Learning:** In apps with fixed navigation bars (`fixed top-0`), a standard skip link can be hidden behind the header when it gains focus if not positioned correctly. Additionally, the target element (usually `<main>`) needs `tabIndex={-1}` and `outline-none` to receive programmatic focus reliably in React/SPAs without creating an unintended visual ring on the entire content area.

**Action:** Always use `fixed` positioning with a high `z-index` for skip links to ensure they appear *above* navigation bars. Ensure the target has `id="main-content"` and `tabIndex={-1}` for a smooth keyboard navigation transition.
