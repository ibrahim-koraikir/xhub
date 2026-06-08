## 2026-06-08 - [Sticky Header & Duplicate ARIA Labels]
**Learning:** In apps with sticky headers, primary CTA buttons (e.g., "Download APK") often appear in both the nav and the hero/footer. Using identical `aria-label` values for these elements causes Playwright tests to fail in "strict mode" because the locator is ambiguous.
**Action:** Use location-specific ARIA labels or target them via parent containers in tests to ensure unique accessibility identification and better screen reader context.

## 2026-06-08 - [Fixed Header Anchor Overlap]
**Learning:** Standard anchor links (`#id`) cause the browser to scroll until the element is at the top of the viewport, which often places it underneath a fixed/sticky header.
**Action:** Apply `scroll-mt-[size]` (e.g., `scroll-mt-24`) to section containers to account for the header height during navigation, ensuring headings remain visible and accessible.
