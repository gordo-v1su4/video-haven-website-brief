# Verification

- Bun frozen-lockfile installation passed.
- Production build and strict TypeScript check passed.
- Local Graft 0.21.1 built a graph of 111 nodes and 218 edges.
- All 40 imported Video Haven media files passed SHA-256 copy verification.
- All 7 supplied cover files match their Downloads originals by SHA-256.
- In-app browser: all 7 cover images loaded, case inspection and cover opening worked, disc playback loaded the local first-look clip with readyState 4 and duration 30.05 seconds.
- Closing the player restored focus to case controls; returning to the shelf worked.
- Desktop width 1280: document width 1265. Mobile width 390: document width 375, with the shelf scrolling horizontally.
- Screenshot: dvd-shelf.png.
- Vite reports a size warning for the deferred Three.js scene chunk; production build succeeds.
- Vercel configuration is prepared; no public deployment was performed.

## Holographic cases and controls (2026-10-02)
- Covers use individual SVG background cutouts under public/img/foil-masks. These are manually drawn, conservative silhouettes; originals are unchanged.
- Hologram composes broad moving reflective bands, a sparse fang/drop pattern and fine foil texture. Characters and upper cover titles are excluded by the cover mask.
- Every case has a disc and physically joined lid/base rims. Unreleased discs are presentation objects and cannot play.
- Shelf motion follows hover with limited tilt; click opens the existing inspector. Full rotation is confined to the inspector.
- Inspector zoom supports wheel, plus/minus and a custom rectangular range control (65–250%). Fit restores 100%.
- Boxed controls use compact vertical padding. All range controls share the thin orange track and dark rectangular thumb from the supplied UI reference.
- Production build passes. Live Arrival front and open interior were visually checked; screenshots are in references/verification.
