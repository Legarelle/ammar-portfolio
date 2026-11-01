---
name: Ammar Syahansyah Portfolio
description: A cartographic portfolio journey from cloud summit to seabed.
colors:
  accent-day: "#FF4F00"
  accent-night: "#FF5E1A"
  accent-sea-day: "#0076B6"
  accent-sea-night: "#00D7FF"
  accent-deep-day: "#00D2FF"
  accent-text-warm: "#A93600"
  accent-text-sea: "#00527D"
  accent-text-depth: "#7FEAFF"
  accent-on: "Black or white, selected for accent-surface contrast"
  parchment-day: "#F6F4F0"
  ink-day: "#141413"
  earth-gray-day: "#57554F"
  glass-day: "rgba(255, 255, 255, 0.88)"
  card-day: "rgba(255, 255, 255, 0.92)"
  border-day: "rgba(20, 20, 19, 0.14)"
  depth-night: "#0E100F"
  moonlight-night: "#F2F4F3"
  sage-gray-night: "#98A29D"
  glass-night: "rgba(14, 18, 22, 0.88)"
  card-night: "rgba(12, 20, 28, 0.92)"
  border-night: "rgba(242, 244, 243, 0.15)"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  accent-italic:
    fontFamily: "Instrument Serif, serif"
    fontWeight: 400
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.1em"
rounded:
  pill: "9999px"
  field: "8px"
  card: "16px"
  modal: "24px"
  gallery: "26px"
spacing:
  "2": "8px"
  "3": "12px"
  "3.5": "14px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink-day}"
    textColor: "{colors.parchment-day}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-secondary:
    backgroundColor: "{colors.glass-day}"
    textColor: "{colors.ink-day}"
    rounded: "{rounded.pill}"
    padding: "14px 20px"
  chip-selected:
    backgroundColor: "{colors.ink-day}"
    textColor: "{colors.parchment-day}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  card:
    backgroundColor: "{colors.card-day}"
    textColor: "{colors.ink-day}"
    rounded: "{rounded.card}"
    padding: "20px"
  nav-glass:
    backgroundColor: "{colors.glass-day}"
    textColor: "{colors.ink-day}"
    rounded: "{rounded.pill}"
    padding: "4px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink-day}"
    rounded: "{rounded.field}"
    padding: "8px 14px"
---

# Design System: Ammar Syahansyah Portfolio

## Overview

**Creative North Star: "Cartographer’s Descent"**

The portfolio frames its content as an earth journey: visitors move through five altitude-themed scenes, from cloud summit and mountain plateau to sea surface and seabed. A procedural topographic canvas, elevation telemetry, coordinates, and chapter labels reinforce the map-like narrative. The mood is exploratory and technical, grounded by warm paper tones in daylight and a dark sonar mode.

Space Grotesk carries the main interface, with Instrument Serif italic reserved for selected emphasis and JetBrains Mono for coordinates, telemetry, and compact labels. Translucent blurred surfaces and rounded controls sit above the spatial backdrop. The components are refined and restrained; depth becomes more pronounced on the interactive project gallery. No visual anti-reference was confirmed.

**Key Characteristics:**
- Five-stage, altitude-led spatial navigation.
- Daylight cartography and night sonar color modes.
- An altitude-driven orange, cerulean, and cyan accent palette against restrained neutral surfaces.
- Technical mono labels paired with expressive serif emphasis.
- Layered glass surfaces and interactive 3D project cards.

## Colors

The palette pairs warm daylight paper and signal orange with a near-black night mode, cool pale text, and subdued gray-green supporting text. At sea level, the accent shifts to cerulean in daylight and cyan in night mode; the descent to the seabed carries cyan into both themes. Accent text uses separate contrast-safe colors from accent-filled surfaces and outlines.

### Primary
- **Signal Orange, Daylight** (`accent-day`): Scene markers, emphasis, selected states, and interactive highlights in the daylight theme.
- **Bright Orange, Night Sonar** (`accent-night`): The corresponding accent for the dark theme.
- **Hydrographic Cerulean** (`accent-sea-day`): Daylight accent at the sea-level transition.
- **Sonar Cyan** (`accent-sea-night`): Cool accent for the dark sea-level and deep-water states.
- **Abyssal Cyan** (`accent-deep-day`): Daylight accent as the background descends into deep water.
- **Contrast-Safe Accent Text** (`accent-text-warm`, `accent-text-sea`, `accent-text-depth`): Dedicated foreground colors for warm, sea-level, and deep-background accent text.
- **Accent Surface Ink** (`accent-on`): Dark foreground for filled accent badges and selections.

### Neutral
- **Warm Parchment, Daylight** (`parchment-day`): Main daylight page background.
- **Near-Black Ink, Daylight** (`ink-day`): Primary daylight text and filled action surfaces.
- **Earth Gray, Daylight** (`earth-gray-day`): Secondary daylight copy.
- **White Glass, Daylight** (`glass-day`): Translucent floating controls and navigation.
- **Soft White Card, Daylight** (`card-day`): Translucent content cards.
- **Hairline Ink, Daylight** (`border-day`): Fine dividers and component outlines.
- **Abyssal Black, Night** (`depth-night`): Main night-mode background.
- **Moonlight, Night** (`moonlight-night`): Primary night-mode text.
- **Sage Gray, Night** (`sage-gray-night`): Secondary night-mode copy.
- **Sonar Glass, Night** (`glass-night`): Translucent floating controls and navigation in dark mode.
- **Deep Blue-Black Card, Night** (`card-night`): Translucent night-mode content cards.
- **Hairline Moonlight, Night** (`border-night`): Fine dividers and component outlines in dark mode.

**The Theme-and-Depth Rule.** Keep daylight and night colors paired by semantic role while allowing altitude to change the accent family; foreground text must use contrast-safe tokens rather than the vivid surface accent.

## Typography

**Display Font:** Space Grotesk (with sans-serif fallback)  
**Body Font:** Space Grotesk (with sans-serif fallback)  
**Label/Mono Font:** JetBrains Mono (with monospace fallback)  
**Accent Font:** Instrument Serif (with serif fallback), italic for selected inline emphasis.

**Character:** Space Grotesk gives headings and interface copy a compact, contemporary voice. JetBrains Mono makes coordinates and telemetry read like instrument output, while sparse Instrument Serif emphasis softens key phrases without taking over the hierarchy.

### Hierarchy
- **Display** (500, 2.25–4.5rem, 1.04): Hero statement scales from mobile through desktop.
- **Headline** (500, 1.25–2.25rem, approximately 1.1): Scene headings and prominent calls to action.
- **Title** (500, 1–1.5rem): Card and subsection titles.
- **Body** (400, 0.875–1.125rem, relaxed): Supporting descriptions, generally constrained to medium-width text columns. Compact phone layouts may clamp or shorten copy, but keep visible body text at least 11px.
- **Label** (400–500, 9–12px, widely tracked, often uppercase): Coordinates, scene metadata, badges, and telemetry. Dense project tags and coordinates may use 9–11px when short and non-interactive; important credential data and functional mobile controls use at least 11px.
- **Accent italic** (400, Instrument Serif): Short inline emphasis within larger headings.

**The Instrument Label Rule.** Reserve mono and uppercase tracking for metadata and controls; keep longer reading copy in Space Grotesk.

## Layout

The primary layout is a fixed, full-viewport spatial stage with five absolute-positioned scenes. Navigation uses scene buttons and a right-edge altitude scrubber whose thumb and labeled ticks share the same progress stops and interpolated altitude scale; a chapter bar anchors the lower edge. The site uses one active scene at a time rather than a conventional vertically scrolling document. Portrait phones (under 640px wide) keep the active scene clipped to the usable viewport with no inner content scrolling, so wheel and vertical touch gestures remain dedicated to moving between scenes. The experience scene features two internship stops. The sea-level scene places its accessible academic/strengths selector on the left of the heading row, with the selected eyebrow and title on the right and its information card below; its numbered pill controls use the experience quick-jump treatment, including transparent inactive states and slash markers. On portrait phones, the heading moves above two compact side-by-side quick-jump buttons, matching the experience header. Scrolling through sea-level progress selects the corresponding tab, and activating a tab navigates to its stop. Coursework remains available as a native disclosure. Larger compact layouts may scroll within a scene when content exceeds the viewport. Compact headers reflow below 900px, and touch controls use at least 44px targets where practical.

Content widths follow the page role: hero up to 4xl, project gallery up to 6xl, experience and education up to 5xl, and contact up to 3xl. Main scene padding is 16–24px on narrow screens and 40–48px from the `sm` breakpoint (640px). The project gallery uses a 455px stage on desktop and a compact 166–270px stage on portrait phones (260px on small tablets), with enlarged phone cards and a wider cylindrical spread so neighboring cards enter from beyond the viewport while retaining the desktop carousel trajectory. On phones, project navigation controls sit on their own row below the heading, while category filters use a full-width, scrollbar-hidden horizontal scroller. Desktop cards temporarily expand on focus or hover, then resume carousel rotation after five seconds or when the user clicks elsewhere; previous/next controls step through and focus projects one at a time, while other buttons dismiss the expanded state. Muted project video previews resume with the carousel, and controls remain layered above the cards. Phone experience cards use a compact single-column layout, title-based quick-jump controls for the two internships, and a bottom-aligned inspect action; compact tablet widths (640–899px) use a taller card with a short image row so all details remain within the card. The academic and professional-strength panels use compact phone treatments to remain readable above the chapter footer. Dense HUD telemetry is hidden below `md` (768px), and the gallery begins below the reflowed header on compact screens.

Spacing uses compact increments for telemetry and controls, 12–24px gaps for cards and groups, and wider section spacing around major scenes.

## Elevation & Depth

Depth is structural and layered. Semi-transparent surfaces use backdrop blur and saturation to separate floating controls from the background; cards add a restrained ambient shadow. At widths up to 1155px, the right-edge altitude scrubber keeps its track and thumb but hides surrounding labels and readouts to make room for content. Below 900px, the full scrubber is hidden; when hidden, it is removed from pointer and keyboard interaction. Resizing the viewport updates its visibility. The 3D project carousel raises the hovered or keyboard-focused card with a stronger orange-tinted shadow and outline, while modal overlays use a dark scrim and blur. In project detail dialogs, the live demo uses the filled accent action style, the repository uses a prominent outlined style, and supplemental resource links remain quieter so actions are distinct from technology tags.

### Shadow Vocabulary
- **Card ambient** (`0 12px 32px -8px rgba(10, 18, 28, 0.08)`): Resting content-card separation.
- **Gallery hover** (`0 34px 75px -12px rgba(255, 79, 0, 0.38)` plus accent outline and glow): Elevated selected project in daylight; night mode uses a brighter orange shadow.
- **Modal** (Tailwind `shadow-2xl`): Focused overlay above the scene.

**The Hover Elevation Rule.** Save the strongest shadow and orange outline for the project card that is actively hovered or keyboard-focused.

## Shapes

Controls and status badges favor pill silhouettes. Content cards use softly rounded corners (16px); project cards are more sculpted (26px), and dialogs have generous 24px corners. Hairline borders use theme-aware translucent colors. The project cards clip their media to the card shape; the 3D stage itself remains visibly open around the carousel.

## Components

### Buttons
- **Character:** Refined, compact actions with clear filled and outlined hierarchy.
- **Shape:** Fully pill-shaped for actions and navigation.
- **Primary:** Near-black fill with theme-background text; commonly 24px horizontal and 14px vertical padding.
- **Secondary:** Translucent card surface, hairline border, and primary text; hover commonly shifts the border toward the accent.
- **Hover / Focus:** Color and opacity transitions; keyboard focus receives a 2px contrast-safe accent-text outline with 3px offset.

### Chips
- **Style:** Compact pill-shaped category filters and scene/status labels. Labels use JetBrains Mono.
- **State:** Selected filters use a filled primary-text surface with background-colored text; unselected filters use a translucent surface and hairline border.

### Cards / Containers
- **Corner Style:** 16px for content cards; 26px for project gallery cards.
- **Background:** Theme-aware translucent card surfaces with backdrop blur.
- **Shadow Strategy:** Ambient at rest; the selected gallery card receives the structural hover treatment described in Elevation & Depth.
- **Border:** Fine theme-aware outline; active gallery card switches to the accent.
- **Internal Padding:** Typically 16–20px for education and strength cards; project cards are media-led and clipped.

### Inputs / Fields
- **Style:** Transparent fill, hairline border, 8px corners, and compact 14px horizontal / 8px vertical padding.
- **Focus:** Border changes to the theme accent; global keyboard focus is separately visible as a 2px contrast-safe accent-text outline with 3px offset.

### Navigation
- **Style:** Floating, translucent pill groups with backdrop blur and fine borders. The scene switcher is centered at the top; brand and theme/profile controls flank it.
- **Typography:** Compact sans-serif scene labels; mono for telemetry.
- **Responsive Treatment:** The vertical altitude scrubber is hidden below `sm`; detailed telemetry is hidden below `md`; the scene switcher can scroll horizontally on narrow screens; the header rearranges below 900px.

### Spatial Project Gallery
The signature gallery is a curved 3D carousel of portrait project cards. It supports mouse, pen, and touch dragging, keyboard-operable cards and arrow controls, category filters, and a mode switch. Hover or keyboard focus pauses rotation, brings the card forward, enlarges it, and dims neighboring cards. The terrain experience deck uses local Kasatria Technologies and Derhu Beach Resort photographs as its card artwork. A persistent ambient-motion control pauses automatic scene and gallery motion; reduced-motion preferences pause it by default. Run `npm run build:css` to compile local Tailwind utilities from `index.html` and `script.js` into `tailwind.generated.css`.

### Motion and Focus
The canvas animation is limited to 30 rendered frames per second on larger viewports and 24 on narrow or touch-first screens, stops while the document is hidden, and can be paused independently. The top navigation enters with a brief stagger and lifts subtly on hover; reduced-motion preferences disable ambient animation and nonessential transitions. The altitude scrubber's active marker expands into a track-width accent bar on hover and keyboard focus. Project dialogs move focus inside on open, keep Tab navigation within the active dialog, close with Escape, and restore focus to the trigger. Inactive spatial scenes and work cards are removed from sequential keyboard navigation.

## Do's and Don'ts

### Do:
- **Do** preserve the five-stage elevation narrative and its map/sonar telemetry when extending the existing experience.
- **Do** pair theme-aware backgrounds, text, borders, and accents in both color modes.
- **Do** use the mono face for short coordinates, status, and interface metadata.
- **Do** keep high elevation and orange glow tied to the active gallery-card state.
- **Do** retain visible keyboard focus with the accent outline.
- **Do** keep dialog focus contained and restore it to the invoking control.
- **Do** provide pointer-based touch dragging and a non-hover motion pause.

### Don't:
- **Don't** treat daylight, night, and depth accents as interchangeable; use the corresponding semantic role.
- **Don't** turn every content card into a heavily elevated surface; resting cards use restrained shadows.
- **Don't** replace the open 3D gallery stage with a generic flat grid when extending this signature component.
- **Don't** use the display serif for long-form body copy; it is currently a short inline accent.
