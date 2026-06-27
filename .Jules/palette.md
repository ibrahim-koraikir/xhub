## 2025-06-27 - [Modal Accessibility & Step Lists]
**Learning:** For mobile-first installation modals, standard accessibility (ARIA roles, Escape key, scroll lock) is critical. When using visual "01", "02" step numbers in an ordered list, apply `aria-hidden="true"` to the visual numbers to prevent screen readers from announcing "One, 01, Download the APK".
**Action:** Always combine semantic `<ol>` structure with `aria-hidden` on decorative step indicators.
