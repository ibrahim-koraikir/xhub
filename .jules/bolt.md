# Bolt's Journal - Performance Learnings

## 2025-05-15 - Marquee DOM Node Reduction
**Learning:** Using 50% translation (`transform: translateY(-50%)`) in CSS keyframes allows for a seamless infinite marquee effect with only 2x duplication of content (Original + Clone). The previous implementation used 100% translation which often leads developers to use 3x duplication to avoid flickering/gaps during the reset.
**Action:** For all infinite scroll/marquee animations, use 50% translation and 2x duplication to reduce DOM node count by 33% compared to the 3x duplication pattern.

## 2025-05-15 - Component Memoization in Large Files
**Learning:** In large single-file React applications (like this 31k+ char `App.tsx`), static sections like Features, Gallery, and Testimonials can cause significant re-render overhead if the top-level state (e.g., scroll position or modal state) changes frequently.
**Action:** Proactively wrap large static sub-sections in `React.memo` when they don't depend on high-frequency state, even if they seem "simple".
