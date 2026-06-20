## 2025-06-20 - [Accessible Modal Pattern]
**Learning:** For a truly accessible modal UX, simply showing/hiding is not enough. It must handle Escape key for closing, body scroll locking to prevent context loss, and focus trapping to keep keyboard users within the interaction loop. ARIA roles and labels are essential for screen reader users to understand the component's state and purpose.
**Action:** Always implement a useEffect hook in custom modals to manage these three pillars (Escape, Scroll-lock, Focus-trap) and ensure semantic ARIA attributes are applied.
