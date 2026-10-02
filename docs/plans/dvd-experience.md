# DVD experience — design interview

Status: interview in progress. This records settled decisions and open questions; it is not an approved implementation plan.

## Settled

- Scope: the DVD experience first, rather than the entire website.
- Purpose: visitors can explore and play with the collection at their own pace; do not rush them to playback.
- Release and cover edition are distinct: alternate covers for the same video can be editions of one release. See GLOSSARY.md.
- Shelf interaction: hover-driven limited tilt; clicking enters the case inspection experience. Full rotation belongs inside that experience.
- Inspection starts with a closed case; visitors use an explicit control to open it.
- Opening and playback should form one continuous experience. Do not send visitors through successive separate pages to inspect, open and watch.
- Playback remains user-initiated. A possible transition is to shrink the case toward the top and play the video below; the exact presentation is still open.
- Pattern selection is experimental: compare the supplied logos/patterns and reference motion before committing to one. The effect must use actual masked shapes, not a generic shine overlay.
- The supplied interior cross and a reflective/patterned disc are desired reference details.
- Foil treatments should be distinct across covers and materials. Cover artwork, the interior cross and the disc require their own patterns and masks; do not impose one uniform finish on everything.
- Visual requirements from the user's references: physical DVD cases, realistic interiors, patterned and masked multilayer foil, zoom, and compact controls.
- Supplied packaging and hologram pattern references live in ref images. Development footage remains distinct from released episodes.

## Open branches

- Presentation: a case that pops forward in an expanded overlay, or an inline expansion within the main collection.
- Physical interaction: opening, viewing the back, handling the disc, zoom and pan.
- Availability: the user rejected the blanket recommendation that every unavailable case remains explorable, then proposed opening an empty case with no playable disc. Confirm disabled entry versus explorable empty case; either must prevent playback and communicate that the episode is not out yet.
- Artwork: mapping cover editions to releases and edition-specific interiors.
- Foil: technical layers and cutout masks needed to match the reference; evaluate supplied patterns rather than treating the previous simple-pattern recommendation as accepted.
- Acceptance: approved reference comparison and concrete checks before implementation is considered complete.

## Current implementation findings

- Case inspection currently uses a modal with zoom and rotation controls.
- The supplied new pattern images are archived but not used by the current runtime foil.
- The current interior uses a generic booklet and foil disc; it has not adopted the supplied physical packaging reference.

## Reference findings

The supplied recording shows several finishes, including glitter/contour artwork, silver foil and repeated-symbol reverse foil. It is not one universal finish. Sampled frames are saved under references/verification/holo-reference-frames/.

The official source separates printed artwork, masked shine, additional shine layers and glare. Pattern texture stays attached to the surface while illumination changes with pointer movement. Our current broad silhouette masks and generic repeated sigil do not yet reproduce that.

- Pointer mapping and spring smoothing: https://github.com/simeydotme/pokemon-cards-css/blob/main/src/lib/components/Card.svelte#L98
- Layer and mask structure: https://github.com/simeydotme/pokemon-cards-css/blob/main/public/css/cards/base.css#L245
- Full-art texture and blend layers: https://github.com/simeydotme/pokemon-cards-css/blob/main/public/css/cards/v-full-art.css#L30
- Repeated-symbol reverse foil: https://github.com/simeydotme/pokemon-cards-css/blob/main/public/css/cards/reverse-holo.css#L22

Pattern choice, strength and detailed artwork cutouts need visual comparison against the recording using the supplied logos and packaging references.

No redesign should be implemented until the user confirms the shared understanding at the end of the interview.
