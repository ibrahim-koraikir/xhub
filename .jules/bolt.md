## 2024-06-24 - [Marquee Animation Efficiency]
**Learning:** The common marquee pattern of 3x duplication with -100% translation is inefficient. Using 2x duplication with -50% translation achieves the same seamless loop with 33% fewer DOM nodes. Additionally, CSS filters (like `grayscale`) on animating elements significantly increase GPU paint costs.
**Action:** Always prefer 2x duplication/50% translation for marquees and promote animating layers to their own compositor layer with `will-change: transform`.
