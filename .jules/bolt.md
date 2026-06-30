## 2025-05-22 - Marquee Optimization for DOM and GPU
**Learning:** Infinite marquee animations can be achieved with only 2x content duplication (instead of 3x or more) by using a 50% translation logic in CSS/Tailwind. This significantly reduces the DOM node count for high-density background animations. Additionally, adding `will-change: transform` and using passive scroll listeners further reduces main-thread blocking.
**Action:** Always prefer 50% translation for marquees and ensure background decoration arrays are defined at the module level to avoid re-allocation during renders.
