## 2024-05-15 - Marquee Performance Optimization
**Learning:** For infinite marquee animations, using 50% translation (`transform: translateY(-50%)`) in CSS keyframes allows for a seamless loop with only 2x content duplication (original + clone). This reduces DOM nodes by 33% compared to 100% translation patterns which often use 3x duplication for safety. Additionally, for random-order marquees, the array must be shuffled once and then doubled (concatenated with itself) to maintain seamlessness at the loop point.

**Action:** Always use the 50% translation + 2x duplication pattern for marquees. Ensure `will-change: transform` is applied to the container and `decoding="async"` to the images to maximize performance.
