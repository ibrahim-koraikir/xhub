## 2025-07-01 - Accessible Installation Modal
**Learning:** Modals require a combination of ARIA roles (`dialog`, `aria-modal`), semantic labeling (`aria-labelledby`), keyboard support (`Escape` key), and body scroll management to be truly accessible and provide a high-quality UX.
**Action:** Always implement `Escape` key listeners and `document.body.style.overflow` management in a `useEffect` hook for any modal or overlay. Use semantic `<ol>` and `<li>` for multi-step guides instead of generic `div`s.
