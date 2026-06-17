## 2024-06-17 - GPU Acceleration for Marquee Background
**Learning:** High-frequency CSS animations like marquees can cause significant paint overhead. Promoting these elements to their own compositor layers using `will-change: transform` offloads this work to the GPU. Combining this with `decoding="async"` for images prevents decoding from blocking the main thread, ensuring smooth 60fps animations even on mobile devices.
**Action:** Audit all landing page background animations for missing layer promotion and ensure non-critical images in these animations use asynchronous decoding.
