# Video Haven

## Product Requirements & UI/UX Experience Specification

**Document status:** Build-ready product direction  
**Product type:** Mobile-first commercial, music, film, and concert-visuals calling card  
**Primary audience:** Senior product engineer, senior frontend engineer, senior product/UX designer, motion designer, creative director  
**Target release:** V1 public portfolio  
**Working product name:** Video Haven
**Brand:** Video Haven

---

## 1. Executive Summary

Video Haven is a cinematic, mobile-first portfolio that demonstrates not only what a director, visual artist, or creative studio makes, but how the work is conceived, built, cut, and translated into a finished screen experience.

The product must function as a commercial calling card. A commissioner, artist manager, agency creative, production company, label, tour designer, or potential collaborator should be able to open a link on their phone, understand the maker's taste within seconds, watch excellent work without friction, inspect the thinking behind it, and make contact while their interest is highest.

This is not a conventional portfolio grid, a software dashboard, or an exhaustive production archive. It is an authored viewing experience. The work is always the hero. Interface elements behave like refined editorial and playback tools: quiet, exact, tactile, and subordinate to the imagery.

The defining product promise is:

> Watch the finished piece. Then open the cut and see why every image is there.

The site should communicate five things without stating them bluntly:

1. This maker has exceptional visual taste.
2. This maker can shape a complete concept, not only produce isolated images.
3. This maker understands rhythm, sequence, performance, world-building, and live scale.
4. This maker can explain and defend creative decisions clearly.
5. This maker is commercially ready and easy to contact.

The experience begins with a decisive, media-led project index. Each project opens into a single, scrollable case study: film first, context second, then a deliberately edited set of expandable layers such as Cut, Frames, World, Performance, Process, and Live Translation. The deepest interaction is a playable shot sequence that lets the viewer inspect rhythm and alternate assemblies without turning the site into an editing application.

---

## 2. Product Vision

### 2.1 Vision statement

Create the most convincing possible proof that the person behind the work can originate a visual world, direct its details, and carry it through to a coherent commercial, concert, music, or film experience.

### 2.2 The product in one sentence

A pocket-sized private screening room that opens into an annotated contact sheet, treatment, and edit bench.

### 2.3 Desired impression

The first impression should be closer to opening a beautifully art-directed title sequence or limited-edition film book than entering a template-based portfolio. It must feel contemporary and technically accomplished, but never decorated with “future interface” clichés.

The product should feel:

- Cinematic, not theatrical.
- Premium, not luxurious for its own sake.
- Cutting-edge, not technology-themed.
- Editorial, not corporate.
- Tactile, not gamified.
- Controlled, not minimal to the point of emptiness.
- Personal, not informal.
- Alive, not constantly animated.

### 2.4 What “cutting edge” means here

Cutting edge does not mean particle fields, neon dashboards, glass panels, 3D chrome, or continuous scroll effects. It means the site behaves unusually well around moving image:

- Portrait and landscape work both feel native on a phone.
- Film begins fast, at high perceived quality, with poster frames selected as carefully as campaign stills.
- Transitions respect edit rhythm rather than applying generic easing everywhere.
- The page can move between final film, contact sheet, timeline, and large-scale concert visualization without losing spatial clarity.
- Motion responds to device capability, user input, media readiness, and reduced-motion preferences.
- Every interaction has a visual reason.

---

## 3. Product Objectives

### 3.1 Primary objectives

- Establish a distinctive creative identity within the first 10 seconds.
- Put a visitor into the strongest finished work within one deliberate action.
- Demonstrate authorship and process without making the visitor read a long case study.
- Make concert and stage-visual capability legible alongside commercials and music films.
- Convert high-intent visitors into direct inquiries.
- Make every project link useful as a standalone pitch link in messages, decks, applications, and introductions.
- Preserve high visual quality on ordinary mobile connections and mid-range devices.

### 3.2 Secondary objectives

- Give collaborators a concise artifact they can forward internally.
- Improve search and social presentation through strong project metadata and share cards.
- Support future password-protected or unlisted treatments without redesigning the information architecture.
- Make adding a new project a structured content task rather than a frontend rebuild.

### 3.3 Non-goals for V1

- A public AI prompt library.
- A full nonlinear video editor.
- A production asset-management system.
- A social feed, like system, account system, or community layer.
- A blog or news publication.
- A generic services brochure with stock claims.
- Heavy WebGL as a prerequisite for the core experience.
- Autoplaying audible media.

---

## 4. Brand Architecture

Video Haven is the sole public product and brand name. No secondary studio name appears in the interface, metadata, contact identity, or legal copy.

### Brand hierarchy

- **Brand and experience title:** Video Haven
- **Creator byline:** “By [creator name]” when personal authorship needs to be explicit
- **Descriptor:** Direction, commercial film, music, and live visuals

The name carries the product promise: the visitor first experiences the work, then sees the decisions and craft behind it. The creator's personal name may appear as authorship, but it does not create a competing brand.

### Naming rules

- Use one primary wordmark in the header.
- Do not alternate product names between pages.
- Use the studio/byline in the footer, contact surface, metadata, and legal copy.
- Project titles remain the dominant typographic elements on project pages.

---

## 5. Audience and Jobs to Be Done

### 5.1 Primary audience: the commissioner

Examples: agency creative director, executive producer, label creative, artist manager, production-company EP, tour creative director.

**Situation:** They receive the link in a message, often on a phone and often between meetings.  
**Need:** Determine quickly whether the creator has the taste, clarity, and executional range for a live brief.  
**Success:** They watch meaningful work, understand the creator's role, forward the link, and initiate a conversation.

### 5.2 Secondary audience: the creative collaborator

Examples: cinematographer, editor, production designer, VFX artist, motion designer, lighting designer, stage designer.

**Need:** Understand the maker's visual language, working method, and respect for disciplines.  
**Success:** They see a coherent process, not inflated authorship, and want to collaborate.

### 5.3 Tertiary audience: the culture-facing viewer

Examples: fans, press, festival programmers, peers, recruiters.

**Need:** Enjoy the work and understand its world without production knowledge.  
**Success:** They watch, explore, remember, and share.

### 5.4 Core jobs to be done

- “Show me the best work immediately.”
- “Tell me exactly what you did.”
- “Prove the visual idea holds together beyond one beautiful frame.”
- “Show me whether this could live on a stage, campaign, or screen system.”
- “Give me something I can send to my team.”
- “Let me contact you without searching for an email address.”

---

## 6. Experience Principles

### 6.1 Work before interface

The first meaningful object on every project page is moving image or a deliberately selected key frame. Navigation never occupies more visual authority than the work.

### 6.2 Reveal, do not dump

The page begins with a convincing final result and progressively reveals supporting proof. Visitors should not encounter cast grids, palettes, technical labels, or process artifacts before they understand the piece.

### 6.3 One strong action per viewport

On mobile, each screenful should have a clear priority: choose a project, play the film, understand the brief, inspect the cut, or make contact. Avoid simultaneous clusters of controls.

### 6.4 Editorial selection is part of the product

More assets do not create more credibility. Every image, clip, caption, and process artifact must justify its place. The CMS should enforce curated limits.

### 6.5 Motion has authorship

Transitions should borrow from film language: cut, hold, dissolve, rack, reveal, and sequence. Avoid generic floating, bouncing, and scale-on-everything motion.

### 6.6 Mobile is the premiere, desktop is the installation

Mobile is not a compressed desktop layout. It is the primary authored format. Desktop uses additional width to create cinematic scale, richer comparison, and persistent contextual navigation—never to bury the content in a dashboard.

### 6.7 Confidence through specificity

Replace claims such as “innovative storytelling” with concrete evidence: role, brief, constraint, visual rule, shot design, live surface, delivery format, or editorial decision.

---

## 7. Content Strategy

### 7.1 Content hierarchy for each project

Every project should answer these questions in order:

1. What does it feel like?
2. What is it?
3. What did this creator own?
4. What was the central idea or constraint?
5. How was that idea expressed through shots, performance, design, rhythm, or live scale?
6. What should the visitor do next?

### 7.2 Required project content

- Project title.
- Category: Commercial, Music Film, Concert Visuals, Title/Trailer, Short Film, or Experimental.
- One-sentence hook, written for an intelligent non-specialist.
- Client, artist, or context.
- Year.
- Creator role(s).
- Hero film or hero visual sequence.
- Runtime and aspect ratio.
- Poster frame.
- One concise “creative proposition” paragraph.
- Credits with honest authorship.
- 6–16 selected supporting assets.
- Contact CTA.

### 7.3 Optional project modules

- **The Cut:** selected shots in sequence, with duration and intent.
- **Frames:** contact sheet or key stills.
- **World:** production design, color, references, environments, graphic language.
- **Performance:** cast, choreography, movement direction, audition or motion tests.
- **Process:** boards, previs, tests, edit evolution, technical solution.
- **Live Translation:** stage canvas mapping, screen layouts, lighting relationship, camera/IMAG behavior, looping logic.
- **Sound & Rhythm:** track structure, cue map, beat or energy architecture.
- **Outcome:** campaign deployment, performance context, reception, or measurable result when available.

Modules are conditional. Empty modules do not render. The system must never display placeholder people, invented projects, fake outcomes, or temporary footage in production.

### 7.4 Writing voice

- Short, precise, and image-aware.
- First person singular or studio plural, chosen once and kept consistent.
- No inflated “visionary,” “boundary-pushing,” or “where art meets technology” language.
- Captions explain a decision, not what is visibly in the image.
- Paragraph target: 35–80 words.
- Mobile summary target: 140 characters for project hook; 300 characters for creative proposition.

### 7.5 Credits and AI-assisted work

If generative tools contributed to production, describe their role accurately and briefly. Do not present a tool log as the creative story. The portfolio should establish human authorship through selection, direction, continuity, performance, sequence, sound, and finishing.

---

## 8. Information Architecture

### 8.1 Public route map

```text
/
├── Featured work index
├── Compact identity statement
├── Category filters (only when 6+ projects exist)
├── About / capabilities drawer or section
└── Contact

/work/:slug
├── Hero media
├── Project identity and role
├── Creative proposition
├── Modular case-study chapters
│   ├── The Cut
│   ├── Frames
│   ├── World
│   ├── Performance
│   ├── Process
│   └── Live Translation
├── Credits
├── Next project
└── Contact CTA

/about (optional V1.1)
/contact (optional dedicated route; inline contact remains required)
/privacy
/404
```

### 8.2 Navigation model

- Global navigation remains small: Work, About, Contact.
- On mobile, the primary header contains the wordmark and one menu/action control.
- On a project page, scrolling down collapses the header; a slight upward scroll reveals it.
- Project chapter navigation may appear as a horizontally scrollable sticky index after the hero, but only when the project has at least three substantive modules.
- Previous/next project navigation is placed after the project conclusion. It must not remain as a large fixed bottom bar while the visitor is trying to view media.
- A compact contact action may become sticky only after the visitor has watched or scrolled through meaningful project content.

---

## 9. Core User Flows

### 9.1 Commissioner arriving from a direct project link

1. Project poster and title establish tone immediately.
2. Visitor taps play; playback begins inline, with sound state clearly visible.
3. Role, client/context, and runtime are visible adjacent to or directly beneath the film.
4. Visitor reads the creative proposition.
5. Visitor opens one or two evidence modules, usually The Cut or Live Translation.
6. Visitor reaches a concise conclusion and contact action.
7. Visitor copies the project link or sends an inquiry.

### 9.2 Visitor arriving on the homepage

1. The opening frame shows identity and a dominant featured project.
2. Visitor can start the featured reel/project or scroll into the selected work index.
3. Each project card communicates title, category, role, year, and visual tone.
4. Visitor enters a project without a modal or intermediate detail view.
5. Back navigation returns them to the same index scroll position.

### 9.3 Concert creative evaluating stage capability

1. Visitor identifies Concert Visuals through category or a featured project.
2. Project hero demonstrates the visual in performance context when footage exists.
3. Live Translation shows the source visual, mapped surfaces, screen ratios, loop length, and relationship to lighting/camera.
4. Visitor understands deliverable literacy without reading a technical bid document.
5. Visitor contacts the creator with the project context prefilled.

### 9.4 Internal forwarding

1. Visitor opens Share.
2. Native share sheet is used on supported mobile devices; Copy Link is the fallback.
3. Shared URL has a project-specific title, description, and Open Graph image.
4. Recipient lands directly on the same project with no splash screen.

---

## 10. Page-Level Requirements

## 10.1 Home / Work Index

### Purpose

Establish identity, expose the strongest work, and move the visitor into a project quickly.

### Mobile composition

1. **Quiet top bar:** wordmark left; menu or contact control right; safe-area aware.
2. **Opening statement:** no more than two short lines. Example direction: “Commercial film, music worlds, and visuals built to move at scale.”
3. **Featured project:** a nearly full-width moving poster or exceptionally strong still, 4:5 or 3:4 on mobile. Autoplay may occur muted only when visible, ready, and allowed. A static poster is the default until media is ready.
4. **Project metadata:** category, title, role, year; one clear “View project” affordance.
5. **Selected work:** vertically stacked media cards with varied but governed aspect ratios based on the actual work.
6. **Capability line:** a restrained set of disciplines, not an icon grid.
7. **Contact close:** email and availability/status, followed by studio credit.

### Desktop composition

- Featured project may occupy 65–75% of the first viewport.
- Selected work may alternate between wide cinematic cards and paired portrait cards.
- Cursor-following project labels or video previews are optional progressive enhancements, never required for comprehension.
- Maintain an editorial reading column for text even when media is full bleed.

### Project card behavior

- Entire card is a link.
- Poster remains legible before hover.
- Pointer hover can reveal 2–4 seconds of muted motion after a short intent delay.
- Touch uses tap to enter; do not require a first tap to reveal hidden metadata.
- Cards never tilt in 3D.
- Titles and roles are HTML text, not baked into images.

### Filters

Do not ship filters with fewer than six real projects. At six or more, use a horizontally scrollable text filter: All, Commercial, Music, Concert, Film, Experiments. Selection updates in place and is represented in the URL query for shareability/back behavior.

## 10.2 Project Detail

### A. Arrival / hero

- Project title and category are visible without waiting for video.
- The poster frame is the largest object.
- Hero aspect ratio follows the work: 16:9, 2.39:1, 4:5, 9:16, or custom stage canvas. Do not crop all projects into a uniform rectangle.
- Tapping the hero starts playback inline. Fullscreen remains available.
- On mobile, controls use the native player where that yields more reliable accessibility and streaming behavior. A custom chrome layer may provide play, time, mute, and fullscreen if it does not obscure native capabilities.
- Autoplay is muted, conditional, and limited to one active media element.

### B. Identity block

Required visible fields:

- Title.
- Category.
- Client/artist/context.
- Year.
- Role.
- Runtime.
- One-sentence hook.

The role must be prominent enough to prevent authorship ambiguity.

### C. Creative proposition

A short paragraph under a functional label such as “The idea,” “The brief,” or “Built around.” The label may vary by project, but the content schema remains stable.

### D. Evidence modules

On mobile, modules are stacked chapters. The chapter heading is always visible; content may use disclosure for secondary detail, but the most important visual in a module should not be hidden behind an accordion.

Recommended ordering:

1. The Cut or Frames.
2. World.
3. Performance or Motion.
4. Process.
5. Live Translation when applicable.
6. Credits.

The present implementation defaults Trailer and Shots open inside accordions. The redesign should place the hero trailer outside the accordion system and use chapter structures that preview their content before expansion.

### E. Project conclusion

- One outcome or takeaway sentence.
- Credits.
- Share and Copy Link.
- Contact CTA with project title prefilled in the subject/body.
- Visually strong next-project preview.

## 10.3 The Cut

This is the product's signature interaction: a readable, playable breakdown of sequence and rhythm.

### V1 behavior

- A primary preview player displays the selected shot.
- Beneath it, a horizontally scrollable contact strip shows shot number, thumbnail, title, and duration.
- Selecting a shot updates the player without losing scroll position.
- “Play sequence” advances through selected shots in editorial order using one media controller.
- An energy or structural annotation may be shown through subtle marks and labels, never unexplained color alone.
- Mobile instructions use touch language; desktop instructions use pointer language.
- Reordering is not required in V1. If retained as an experimental feature, touch reordering must use an explicit Edit Sequence mode and accessible move-forward/move-back controls.

### Alternate cuts

The existing “Cold open,” “Hard in,” “Staccato,” “Reverse,” and “Shuffle” presets should not be presented as authoritative edits unless they produce meaningful, project-specific creative comparisons. For V1, use at most two curated alternatives:

- Director's assembly.
- Alternate rhythm or live loop.

Each alternate cut needs a one-line rationale. Random shuffle belongs in a lab/experiment mode, not in the principal commercial case study.

### Playback authority

Only one clip or film may play at a time. Starting any new media pauses the previous one. Media state should be coordinated through a shared playback controller, not independent component-local states.

## 10.4 Frames / Contact Sheet

- Use a responsive contact sheet with real aspect ratios.
- A tap opens an immersive viewer with adjacent navigation, caption, and index.
- Pinch zoom may use native image behavior where appropriate.
- Captions identify the creative decision: lens idea, blocking, color rule, continuity anchor, transition, or compositing logic.
- Avoid a gallery assembled indiscriminately from every character, concept, poster, and clip. Each gallery has a declared editorial purpose.

## 10.5 World

- Present key art, color systems, environment studies, graphic motifs, and source references.
- Color palettes are supporting evidence, not the main visual.
- References and final frames must be labeled distinctly.
- If source references are not licensed for public use, describe the visual rule without publishing the reference image.

## 10.6 Performance / Cast / Motion

- Cast or performer cards prioritize moving tests where permission exists.
- State whether an asset is casting, character design, movement study, or final performance.
- Do not use ambiguous “audition tape” language for generated character tests.
- On a phone, cards should generally be one-up or a 1.2-card horizontal rail; a dense two-column grid is acceptable only for simple portraits with very short labels.
- Starting one test pauses every other video.

## 10.7 Live Translation

This module distinguishes the product from a standard director portfolio.

Required supported content types:

- Performance footage or venue simulation.
- Stage elevation or simplified screen map.
- Source canvas and mapped output comparison.
- Display ratio and pixel canvas.
- Loop duration and sync approach.
- Relationship to track section, lighting cue, choreography, and IMAG/camera feed.
- Deliverables: codec, alpha, frame rate, resolution, and variants, shown only when useful to demonstrate production readiness.

### UI pattern

Use a “source → system → stage” sequence:

1. Source visual or master frame.
2. Simple mapping diagram.
3. Result in context.

On desktop, the three views may align horizontally. On mobile, they stack with a continuous visual connector. This is explanatory media, not a decorative process diagram.

## 10.8 Contact

- Primary action: email inquiry.
- Secondary: Copy email / Copy project link.
- Optional: Instagram, Vimeo, or representation link.
- The contact surface includes current location/time zone only if commercially relevant.
- Use `mailto:` as a reliable baseline. A form is optional and should be introduced only with spam protection, delivery monitoring, success/error states, and a privacy note.
- Project-page contact subject example: `BLOODRUSH — project inquiry`.

---

## 11. Visual Design Direction

### 11.1 Aesthetic thesis: “The illuminated edit”

The visual system should resemble light passing through a dark edit suite: deep neutral fields, precise typography, large authored images, modest technical notation, and rare signals of color drawn from the active project.

This replaces the earlier “launch console” direction. A console metaphor risks making the interface look like a fictional application and competes with the portfolio work. Video Haven should feel like a publication with playback intelligence.

### 11.2 Color system

#### Global neutrals

```text
Ink 1000       #070708   Primary page background
Ink 950        #0B0B0D   Elevated media surround
Ink 900        #111114   Drawers and secondary surfaces
Ink 800        #1A1A1E   Hover/pressed surface
Line subtle    rgba(255,255,255,0.10)
Line strong    rgba(255,255,255,0.20)
Text primary   #F4F2EE   Warm near-white
Text secondary #A5A19A   Warm neutral gray
Text quiet     #6F6C67   Metadata and inactive controls
```

Avoid pure black and pure white across large areas; the warm off-white gives images more authority and keeps the product from reading as a developer tool.

#### Project-derived signal

Each project may define one sampled `projectAccent` from its key art. It can appear in:

- Current chapter indicator.
- Media progress.
- Selected shot border.
- Small status or index marks.
- Text selection.

It must not tint body copy, large surfaces, all buttons, or permanent global navigation. Contrast must be evaluated per project; if the sampled color fails, the system falls back to warm white.

The current global rose signal is suitable for BLOODRUSH but should not brand every project.

### 11.3 Typography

Recommended family roles:

- **Display/editorial sans:** Geist, Söhne, Suisse Intl, or a similarly disciplined grotesk. Geist is already integrated and is acceptable for V1.
- **Technical/meta:** JetBrains Mono or Geist Mono, used sparingly.
- **Optional expressive project title:** a project-specific image treatment only when supplied as campaign art; accessible HTML title remains present.

#### Mobile type tokens

```text
Display XL  clamp(2.75rem, 13vw, 4.5rem) / 0.92 / -0.045em / 650
Display L   2.25rem / 0.96 / -0.035em / 650
Heading 1   1.75rem / 1.02 / -0.025em / 620
Heading 2   1.35rem / 1.08 / -0.018em / 600
Body L      1.0625rem / 1.55 / -0.005em / 400
Body        0.9375rem / 1.55 / 0 / 400
Label       0.6875rem / 1.2 / 0.12em / 550 uppercase
Meta mono   0.625rem / 1.35 / 0.08em / 450 uppercase
```

Do not make critical metadata smaller than 11 CSS pixels. Avoid excessive uppercase tracking for full phrases.

### 11.4 Layout tokens

```text
Mobile viewport target      320–767px
Tablet                      768–1023px
Desktop                     1024–1439px
Wide                        1440px+
Mobile page gutter          16px at 320px; 20px at 390px+
Tablet gutter               32px
Desktop gutter              48–72px
Editorial text max width    680px
Primary content max width   1440px
Wide media max width        1800px or full bleed by design
Minimum touch target        44 × 44px
Small radius                2px
Panel radius                4px
Pill radius                 999px, reserved for compact status only
```

Large rounded cards should not become the default container. Most media should use square or nearly square corners to feel like frames, screens, and printed plates.

### 11.5 Spacing rhythm

Use a 4px base with authored macro spacing:

```text
2, 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96, 128
```

On mobile, create breathing room through 40–72px chapter spacing rather than putting every section inside a card.

### 11.6 Iconography

- Phosphor icons are acceptable and already installed.
- Use regular or medium weight consistently.
- Pair unfamiliar icons with text.
- Play, mute, fullscreen, share, close, previous, and next must follow established meanings.
- Do not use sparkles as a generic marker of creative or AI features.

### 11.7 Image treatment

- Poster frames are manually selected and color-managed.
- Do not apply one global gradient over all images.
- Use overlays only to protect text, and keep text outside media when possible.
- Never crop faces or typography automatically without art-direction metadata.
- Support focal-point fields and per-breakpoint crop overrides.
- Do not upscale visibly soft process images to full-bleed width; use deliberate plate sizes.

---

## 12. Motion and Interaction Direction

### 12.1 Motion grammar

Use four named behaviors:

- **Cut:** Immediate state change, 0–80ms. Used for shot selection and hard editorial transitions.
- **Ease:** 180–260ms, cubic-bezier approximating `0.22, 1, 0.36, 1`. Used for controls, drawers, and small spatial changes.
- **Reveal:** 350–550ms with opacity plus no more than 12px translation. Used once as content enters a chapter.
- **Dissolve:** 250–450ms crossfade between compatible stills or posters. Never used to hide media loading.

### 12.2 Motion rules

- No parallax on text.
- No scroll-jacking.
- No smooth-scroll library as a functional dependency.
- Media hover previews start only after approximately 180ms of stable pointer intent.
- Animated thumbnails pause when outside the viewport or when the page is hidden.
- Only one ambient/moving project card runs at a time on mobile.
- Accordions, if used, must not animate large image-heavy content from zero height; reveal secondary copy or controls instead.
- All essential navigation works with `prefers-reduced-motion: reduce` and without animation.

### 12.3 Haptics and sound

Do not simulate haptics in the browser. Do not add interface sound effects. The work's sound is the only sound identity.

---

## 13. Responsive Behavior

### 13.1 320–389px

- Single column.
- 16px gutter.
- No permanently paired metadata columns.
- Media controls remain at least 44px.
- Horizontal rails expose 12–16% of the next item as a gesture cue.
- Avoid fixed bottom project navigation that consumes viewing height.

### 13.2 390–767px

- 20px gutter.
- Hero remains full-width or gutter-to-gutter based on project ratio.
- Selected metadata can use two columns.
- Contact CTA may become a bottom sheet after engagement, but never covers playback controls.

### 13.3 Tablet

- Project identity and proposition may sit beside compatible portrait media.
- Contact sheets can become two or three columns.
- Chapter index may become sticky.

### 13.4 Desktop

- Use width for scale and juxtaposition.
- Hero film may be 70–85vh tall while preserving the source aspect ratio.
- Project information can occupy a sticky left rail while media chapters flow on the right.
- Do not simply center the mobile column inside a large empty screen.

### 13.5 Ultrawide

- Cap editorial line length and component widths.
- Allow cinematic media to expand up to the safe asset resolution.
- Do not increase text scale indefinitely.

### 13.6 Orientation

- Portrait phone is the primary authored experience.
- Landscape phone playback should prioritize the film and expose fullscreen cleanly.
- Stage visuals with unusual aspect ratios may use horizontal panning or a fit-with-context presentation; they must never be silently center-cropped.

---

## 14. Functional Requirements

### 14.1 Project discovery

- Load and render an ordered list of published projects.
- Support featured status and manual ordering.
- Support categories and optional filtering.
- Preserve index scroll position when returning from a project.
- Never expose draft, unlisted, or placeholder projects in public API responses.

### 14.2 Project rendering

- Render project modules based on structured content and explicit order.
- Omit missing modules without empty states.
- Support project-specific aspect ratios and focal points.
- Generate project-specific metadata and structured data server-side.
- Return a true 404 status for missing projects.

### 14.3 Media playback

- Provide one global playback coordinator.
- Pause other media when new playback begins.
- Pause playback when the tab becomes hidden, except where browser media controls intentionally continue a primary film.
- Use `playsInline` on mobile.
- Respect autoplay policies.
- Provide captions/subtitles where dialogue or lyrics are meaningful.
- Store and expose duration; display time only after trustworthy metadata exists.
- Avoid loading every video on initial page load.

### 14.4 Sharing

- Use Web Share API when supported.
- Provide Copy Link fallback with visible confirmation.
- Include canonical URLs.
- Generate 1200×630 Open Graph media per project.
- Ensure shared content describes the work and role, not only the site brand.

### 14.5 Inquiry

- Provide persistent discoverability of contact information.
- Prefill project context from project pages.
- Track contact intent without exposing the email address to invasive third-party scripts.
- If a contact form is added, provide loading, sent, retry, and offline-safe error states.

---

## 15. Content Model and Data Requirements

The existing D1 schema contains `projects`, `characters`, `prompts`, `design_concepts`, and `clips`. V1 should evolve this into a publication model while keeping migrations additive because preview and production currently share a database.

### 15.1 Project

Recommended fields:

```ts
type Project = {
  id: string;
  slug: string;
  status: "draft" | "unlisted" | "published";
  title: string;
  shortTitle?: string;
  hook: string;
  creativeProposition: string;
  category: "commercial" | "music-film" | "concert-visuals" | "trailer" | "film" | "experimental";
  clientOrArtist?: string;
  year?: string;
  roles: string[];
  credits?: Credit[];
  runtimeSeconds?: number;
  featured: boolean;
  sortIndex: number;
  projectAccent?: string;
  heroMediaId: string;
  posterMediaId: string;
  socialMediaId?: string;
  chapters: ProjectChapter[];
  canonicalUrl?: string;
  publishedAt?: string;
  updatedAt: string;
};
```

### 15.2 Media asset

```ts
type MediaAsset = {
  id: string;
  kind: "image" | "video" | "audio" | "diagram";
  role: "hero" | "poster" | "shot" | "process" | "reference" | "stage" | "social";
  src: string;
  posterSrc?: string;
  width: number;
  height: number;
  durationSeconds?: number;
  mimeType: string;
  alt: string;
  caption?: string;
  focalPoint?: { x: number; y: number };
  mobileCrop?: Crop;
  desktopCrop?: Crop;
  placeholder?: string;
  rightsStatus: "cleared" | "restricted" | "private";
  captionsSrc?: string;
};
```

### 15.3 Chapter

```ts
type ProjectChapter = {
  id: string;
  type: "cut" | "frames" | "world" | "performance" | "process" | "live" | "sound" | "outcome";
  label: string;
  summary?: string;
  sortIndex: number;
  blocks: ContentBlock[];
};
```

Use typed blocks for media, prose, compare, contact sheet, shot sequence, credits, and stage mapping. Avoid storing an entire project page as uncontrolled HTML.

### 15.4 Publication controls

- `status` defaults to draft.
- A project cannot publish without title, slug, category, role, hook, poster, and hero media.
- Placeholder and rights-restricted assets cannot publish publicly.
- Every public media asset requires alt text or an explicit decorative flag.
- Per-project preview URL is required.

### 15.5 Current data cleanup before launch

- Replace or remove invented NOCTURNE and IRONBLOOM projects.
- Replace all BLOODRUSH temporary shot footage.
- Verify every cast identity and permission.
- Remove public “TEMP” UI by preventing placeholder assets from publishing.
- Decide whether prompts remain internal, become selectively editorialized Process content, or are removed from the public payload.

---

## 16. Technical Architecture Guidance

### 16.1 Existing stack

- React 19.
- TanStack Router/Start.
- TypeScript.
- Tailwind CSS v4.
- Cloudflare Workers and D1.
- Bun for project commands and package management.

This stack is suitable for V1.

### 16.2 Rendering strategy

- Render home and public project content on the server for fast first paint, resilient sharing, metadata, and crawlability.
- Avoid client-side `fetch` as the only path for initial public content. The current home and project routes wait for client fetches, which weakens the first meaningful render and metadata accuracy.
- Hydrate interactive media, carousels, and chapter controls as client islands or tightly scoped client components.
- Cache published project payloads at the edge with intentional invalidation on publish.

### 16.3 Media delivery

- Use a video platform or storage/CDN pipeline that supports adaptive streaming for hero films where practical.
- Provide MP4 fallback for short clips.
- Generate poster images in AVIF/WebP/JPEG variants.
- Generate responsive image widths rather than serving original production files to phones.
- Store accurate intrinsic dimensions to prevent layout shift.
- Preload only the first poster, chosen font subsets, and essential shell styles.
- Hero video uses `preload="metadata"` or `none` until user intent unless muted inline autoplay is an explicit art direction.
- Process thumbnails load lazily.
- Stop and unload off-screen hover-preview video where memory pressure is likely.

### 16.4 Playback controller

Create a shared media coordinator with a stable API:

```ts
type PlaybackCoordinator = {
  activeMediaId: string | null;
  requestPlay(id: string, element: HTMLMediaElement): Promise<void>;
  pauseActive(reason: "new-media" | "hidden" | "navigation" | "user"): void;
  setMuted(id: string, muted: boolean): void;
};
```

The coordinator prevents overlapping trailer, shot, and performer audio. It should not introduce a second timeline clock; the active media element is authoritative for playback time.

### 16.5 Component boundaries

Recommended components:

- `SiteHeader`
- `ProjectIndex`
- `ProjectCard`
- `MediaFrame`
- `HeroPlayer`
- `ProjectIdentity`
- `ChapterIndex`
- `ProjectChapter`
- `ContactSheet`
- `LightboxViewer`
- `ShotSequence`
- `CompareMedia`
- `StageTranslation`
- `Credits`
- `InquiryCTA`
- `NextProject`
- `ShareAction`

Separate content rendering from playback behavior and layout. Do not build one monolithic project-route component.

### 16.6 Database and API

- Keep D1 migrations additive until preview and production databases are separated.
- Public project queries must include `status = 'published'`.
- Use stable IDs and explicit `sort_index` for all ordered content.
- Validate database output at the server boundary with Zod.
- Do not send internal prompt text, draft notes, restricted asset URLs, or unpublished content in public JSON.
- Rate-limit future form endpoints.

### 16.7 Progressive enhancement

The following must work before JavaScript hydration completes:

- Project titles and descriptions.
- Poster images.
- Navigation links.
- Contact link.
- Credits and core case-study content.

Interactive playback, lightbox, filters, share sheet, and alternate sequences enhance the experience after hydration.

---

## 17. Accessibility Requirements

Target WCAG 2.2 AA.

### Required behaviors

- Semantic heading hierarchy; one `h1` per page.
- Visible keyboard focus on every interactive element.
- Full keyboard operation for galleries, lightbox, disclosure, playback selection, and share actions.
- 44×44px minimum touch targets for primary mobile controls.
- Text contrast of at least 4.5:1; large text at least 3:1.
- Non-text UI boundaries and focus indicators at least 3:1 against adjacent colors where required.
- Captions or transcripts for dialogue-led films.
- Alt text describes purpose and relevant content; process imagery explains why it matters.
- No information communicated by energy color alone.
- `aria-live` confirmation for copied links and submitted inquiries.
- Disclosures expose correct `aria-expanded` and `aria-controls` relationships.
- Lightbox traps focus, supports Escape, and restores focus on close.
- Reduced-motion mode removes nonessential reveals, animated previews, smooth scrolling, and crossfades.
- Screen-reader labels distinguish multiple Play controls by project/asset title.
- Page remains usable at 200% text zoom and 400% browser zoom/reflow.
- Safe-area insets are respected without adding duplicate body and component padding.

### Media accessibility

- Never autoplay audible content.
- Mute state must be visible and operable.
- Custom controls require accessible names, states, and keyboard equivalents.
- Native controls are preferred when custom controls cannot match platform reliability.

---

## 18. Performance and Quality Budgets

Performance is part of the aesthetic. A cinematic site that stutters or shows blank media is not premium.

### Mobile targets at the 75th percentile

- Largest Contentful Paint: ≤ 2.5s.
- Interaction to Next Paint: ≤ 200ms.
- Cumulative Layout Shift: ≤ 0.1.
- Initial JavaScript, compressed: target ≤ 180KB for the home route; ≤ 250KB for a project route before optional media tools.
- Initial image payload: target ≤ 700KB on a typical project landing viewport.
- No hero video download before intent on constrained connections unless the user has opted into playback.
- Route transition should show the destination poster or skeleton frame within 150ms of navigation feedback.

### Device/network test matrix

- Current iPhone Safari.
- One iPhone generation at least three years old.
- Current Android Chrome on a mid-range device.
- Desktop Safari, Chrome, Firefox, and Edge.
- 3G/slow 4G emulation.
- Data Saver / Low Power behavior where observable.
- Touch, trackpad, mouse, keyboard, reduced motion, and 200% text zoom.

### Failure behavior

- Failed video displays poster, concise unavailable state, and retry.
- Failed image reserves geometry and displays a neutral fallback, never broken alt UI over black.
- API failure preserves server-rendered content where possible.
- A missing optional module does not degrade the rest of the page.

---

## 19. SEO, Metadata, and Discoverability

- Unique server-rendered title and description per project.
- Canonical URL per page.
- Open Graph and Twitter/X card metadata using a project-specific image.
- Video structured data for public hero films when metadata and rights allow.
- Person or Organization structured data for the creator/studio.
- XML sitemap includes only published canonical pages.
- `robots.txt` excludes previews, unlisted projects, and internal APIs as appropriate.
- Human-readable URLs: `/work/bloodrush`, not `/project/proj_bloodrush`.
- Share image contains project title and one strong frame; avoid generic brand-only cards.

---

## 20. Analytics and Success Measurement

Analytics should answer product questions without turning the site into a surveillance layer.

### Events

- `project_impression`
- `project_open`
- `hero_play`
- `hero_25`, `hero_50`, `hero_75`, `hero_complete`
- `chapter_view`
- `shot_select`
- `sequence_play`
- `share_open`
- `copy_link`
- `contact_intent`
- `outbound_profile`
- `media_error`

### Event properties

- Project slug.
- Project category.
- Entry source/referrer class.
- Device class.
- Chapter type.
- Media role.
- Do not send full prompt text, message content, email address, or other personal inquiry data.

### Primary success indicators

- Percentage of qualified sessions that start a hero film.
- Project completion depth: visitor reaches at least one evidence module after film engagement.
- Inquiry intent per qualified project view.
- Direct project links forwarded/shared.
- Returning visitors and multi-project exploration.

### Qualitative success

The strongest validation is not raw traffic. It is whether commissioners can accurately describe the creator's taste and role after viewing, and whether inquiries reference specific work or capabilities.

---

## 21. Edge Cases and States

Design and implement:

- No published projects.
- One published project.
- Project without film but with a still sequence.
- Portrait-only project.
- Ultrawide concert canvas.
- Film with captions.
- Unlisted project accessed by exact URL.
- Expired or removed project.
- Media blocked by browser/autoplay policy.
- Video network error and image network error.
- Slow media metadata.
- Reduced motion.
- Long client/project title.
- Missing optional credit role.
- Contact link with no mail client configured.
- Offline revisit where posters may be cached but film is unavailable.

No public state should mention database, API, migration, “TEMP,” or internal asset status.

---

## 22. Security, Privacy, and Rights

- Store no secret keys in client bundles or public D1 content.
- Apply a strict Content Security Policy compatible with approved media hosts.
- Maintain an allowlist of image/video domains.
- Validate slugs and public query parameters.
- Prevent unpublished/restricted asset URLs from entering public payloads.
- Add rights status and release verification to the publishing checklist.
- Minimize third-party analytics and font requests.
- Prefer self-hosted production fonts rather than runtime CDN font dependencies.
- Provide a privacy notice if analytics or a contact form collects personal data.
- Do not publish private prompts, client notes, treatments, references, or cast material without clearance.

---

## 23. Delivery Plan

### Phase 0 — Editorial and identity lock

- Confirm public name and studio byline.
- Select 3–5 real launch projects.
- Confirm rights, roles, credits, and cast labels.
- Replace temporary footage and invented projects.
- Write hook and creative proposition for every project.
- Select poster frames and social cards.

**Exit gate:** Every launch project can be reviewed as a complete content packet without the website.

### Phase 1 — Foundation

- Add publish states and structured project content.
- Move public route data to server rendering.
- Build global layout, design tokens, media frame, project index, project identity, credits, and inquiry CTA.
- Add project-specific metadata and canonical URLs.
- Establish responsive image pipeline.

**Exit gate:** The full site works as a fast, static-feeling editorial portfolio with poster imagery and accessible navigation.

### Phase 2 — Signature media experience

- Implement global playback coordinator.
- Build hero player behavior.
- Build Contact Sheet and Lightbox.
- Rework The Cut into an accessible, mobile-first sequence player.
- Add one project with Live Translation.

**Exit gate:** On a real phone, visitors can play the hero, inspect shots, open images, and move between projects with no overlapping playback or layout instability.

### Phase 3 — Motion, sharing, and conversion

- Apply motion grammar and reduced-motion mode.
- Add native share and copy confirmation.
- Add engagement-aware contact presentation.
- Add privacy-conscious analytics.
- Finish Open Graph asset generation.

**Exit gate:** Direct project links present perfectly in messages, playback is reliable, and inquiry actions are observable.

### Phase 4 — Hardening and launch

- Cross-device manual QA.
- Accessibility audit and keyboard pass.
- Performance profiling on slow mobile.
- Rights and copy proof.
- Error-state and media-failure testing.
- Production monitoring and rollback plan.

**Exit gate:** All acceptance criteria below pass against the deployed production URL on target devices.

---

## 24. Acceptance Criteria

### Product and content

- [ ] The public product uses one primary name consistently.
- [ ] At least three real, complete projects are published.
- [ ] Every project states client/context, year, and creator role.
- [ ] No invented, placeholder, temporary, or uncleared content is public.
- [ ] At least one project demonstrates concert/live translation if that is a marketed capability.
- [ ] Every project ends with contact and a meaningful next-project link.

### Mobile experience

- [ ] The homepage and every project are fully usable at 320px width.
- [ ] A visitor can reach and start the strongest work in one deliberate action.
- [ ] No fixed UI obscures video controls or more than a small portion of the viewport.
- [ ] Galleries communicate swipeability without instructional clutter.
- [ ] The experience works in portrait and landscape phone orientation.

### Media

- [ ] Only one media asset plays at a time.
- [ ] No audible autoplay occurs.
- [ ] Failed media presents a recoverable, designed state.
- [ ] Posters appear before video and preserve layout dimensions.
- [ ] Hero and shot playback pass on Safari iOS and Chrome Android.
- [ ] Captions are available for dialogue-critical public films.

### Accessibility

- [ ] Full keyboard flow passes without focus loss.
- [ ] Reduced motion removes nonessential animation.
- [ ] Contrast, touch target, zoom, alt text, and semantic heading checks pass WCAG 2.2 AA expectations.
- [ ] Lightbox and disclosures expose correct accessible state.

### Performance

- [ ] Core Web Vitals meet the stated mobile targets at the 75th percentile after launch traffic is available.
- [ ] Initial routes do not preload all project video.
- [ ] Images use responsive sources and intrinsic dimensions.
- [ ] No visible layout shift occurs when project media loads.

### Sharing and commercial conversion

- [ ] Every project has unique Open Graph metadata and image.
- [ ] Native share works where supported and Copy Link works everywhere else.
- [ ] Project inquiry action includes the project title.
- [ ] Contact intent is measurable without collecting inquiry content.

---

## 25. QA Scenarios

### Scenario A: phone, direct project link, strong connection

Open a project URL in a fresh iPhone Safari session. Confirm the poster, title, category, and role render before hydration. Start the film, unmute, enter fullscreen, exit, open The Cut, select three shots, then use Contact. No other media may continue playing.

### Scenario B: phone, slow connection

Throttle to slow 4G. Open the homepage. Confirm the header and first poster appear without a blank hero. Scroll through the index while video remains unloaded. Enter a project and confirm a stable poster frame while film metadata loads.

### Scenario C: concert visual

Open a project with an ultrawide source canvas. Confirm the complete composition is visible and not center-cropped. Inspect source, mapping, and stage views. Rotate the phone. Confirm the mapping remains understandable and controls remain reachable.

### Scenario D: keyboard and reduced motion

On desktop, enable reduced motion and navigate using only the keyboard. Open a project, operate video, chapters, shot selection, lightbox, share, next project, and contact. Confirm focus is visible and restored correctly.

### Scenario E: media failure

Block the hero video host. Confirm the poster remains, the failure message is human-readable, retry is available, and the remainder of the case study is fully usable.

### Scenario F: internal forwarding

Share a project through the native mobile share sheet and paste it into a messaging preview. Confirm title, description, image, and canonical URL all refer to the project, not a generic homepage.

---

## 26. Risks and Product Decisions

### Risk: the process overwhelms the work

**Mitigation:** Film and proposition appear before breakdowns; modules are curated; no raw asset dump.

### Risk: experimental UI makes the creator look less commercially dependable

**Mitigation:** Use cutting-edge media behavior with conventional navigation and playback semantics.

### Risk: too many autoplaying videos damage performance and attention

**Mitigation:** One active media controller, poster-first rendering, intent-based previews, viewport pausing.

### Risk: public prompts reduce the work to tool operation

**Mitigation:** Translate process into decisions, rules, iterations, and results; publish raw prompts only when they teach something essential.

### Risk: concert visuals read as ordinary widescreen film

**Mitigation:** Dedicated Live Translation schema and source-to-stage presentation.

### Risk: a global accent fights project art direction

**Mitigation:** Neutral global shell with constrained project-derived accent.

### Risk: a clever recut tool feels like a toy

**Mitigation:** Ship curated alternate structures with rationale; move shuffle and free reordering to an explicitly labeled experimental mode or omit them.

---

## 27. Open Decisions for the Product Owner

These decisions should be locked before high-fidelity visual design:

1. Which 3–5 projects are real and cleared for launch?
2. Is Video Haven presented through an individual director/artist byline or a collective byline?
3. Which contact endpoint should be public?
4. Is concert-visual work currently available in real performance footage, simulation, or both?
5. Should any project be unlisted or password-protected for pitching?
6. Are process prompts commercially useful to publish, or should they remain private production material?
7. Are there representation, location, availability, or union details that commissioners need?

None of these decisions block the foundational architecture, but they materially affect copy, identity, launch content, and the contact model.

---

## 28. Final Creative Standard

The finished product should feel inevitable: the simplest possible interface for this exact body of work, with no trace of a starter dashboard or generic portfolio theme.

When a visitor closes the site, they should remember an image, a rhythm, and a point of view—not an animation technique or a UI trick. They should also know what the creator did and how to begin a conversation.

That is the commercial test of Video Haven: the experience earns attention through the work, converts attention into confidence through the process, and turns confidence into contact without breaking the spell.
