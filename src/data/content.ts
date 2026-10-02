/**
 * Working content + original production media for the Video Haven / Blood Rush site.
 * Original Video Haven assets and user-supplied DVD covers.
 * Nothing here is a released episode.
 */

export type FootageKind = "preview" | "test" | "teaser" | "episode";

export interface Footage {
  src: string;
  poster: string;
  duration?: string;
  credit?: string;
}

export interface RentalItem {
  id: string;
  number: string; // store catalogue number
  title: string;
  subtitle: string;
  kind: FootageKind;
  released: boolean;
  cover: string;
  backArt: string;
  synopsis: string;
  runtime: string;
  footage?: Footage;
  stickers: string[];
}

export const rentalItems: RentalItem[] = [
  {
    "id": "closing-shift",
    "number": "0417",
    "title": "Closing Shift",
    "subtitle": "The first look",
    "kind": "preview",
    "released": false,
    "cover": "/media/covers/closing-shift.png",
    "backArt": "/media/world/video-haven.png",
    "synopsis": "The Blood Rush first look, imported from Video Haven. Working preview material.",
    "runtime": "Preview · 0:30",
    "footage": {
      "src": "/media/first-look-30.mp4",
      "poster": "/media/first-look-30.jpg",
      "credit": "Video Haven · working production material"
    },
    "stickers": [
      "3 DAY",
      "NEW"
    ]
  },
  {
    "id": "arrival",
    "number": "0418",
    "title": "Arrival",
    "subtitle": "Kai's commute · temporary movement test",
    "kind": "test",
    "released": false,
    "cover": "/media/covers/arrival.png",
    "backArt": "/media/keyart/video-haven-storyboard.png",
    "synopsis": "Temporary arrival movement reference from Video Haven. A development test for Kai's commute.",
    "runtime": "Working test",
    "footage": {
      "src": "/media/kai-arrival-temp.mp4",
      "poster": "/media/video-haven-arrival.jpg",
      "credit": "Video Haven · working production material"
    },
    "stickers": [
      "STAFF PICK"
    ]
  },
  {
    "id": "rooftop-run",
    "number": "0419",
    "title": "Rooftop Run",
    "subtitle": "Kai's rooftop test",
    "kind": "test",
    "released": false,
    "cover": "/media/covers/rooftop-run.png",
    "backArt": "/media/world/rooftop.png",
    "synopsis": "Kai's rooftop movement test, imported from Video Haven.",
    "runtime": "Test · 0:10",
    "footage": {
      "src": "/media/rooftop-10.mp4",
      "poster": "/media/rooftop-10.jpg",
      "credit": "Video Haven · working production material"
    },
    "stickers": [
      "3 DAY"
    ]
  },
  {
    "id": "blood-law",
    "number": "0420",
    "title": "Blood Law",
    "subtitle": "First look · alternate cut",
    "kind": "teaser",
    "released": false,
    "cover": "/media/covers/blood-law.png",
    "backArt": "/media/world/campus.png",
    "synopsis": "The crew in an alternate Blood Rush first-look assembly from Video Haven.",
    "runtime": "Preview · 0:20",
    "footage": {
      "src": "/media/first-look-20.mp4",
      "poster": "/media/first-look-20.jpg",
      "credit": "Video Haven · working production material"
    },
    "stickers": [
      "NEW",
      "BE KIND"
    ]
  },
  {
    "id": "episode-1",
    "number": "0421",
    "title": "Blood Law · Episode 1",
    "subtitle": "Episode 1 · not yet released",
    "kind": "episode",
    "released": false,
    "cover": "/media/covers/episode-1.png",
    "backArt": "",
    "synopsis": "Episode 1 cover artwork. The episode is in production; this case has no released footage.",
    "runtime": "TBA",
    "stickers": [
      "RESERVED"
    ]
  },
  {
    "id": "midnight-run",
    "number": "0422",
    "title": "Midnight Run",
    "subtitle": "Cover concept · footage pending",
    "kind": "teaser",
    "released": false,
    "cover": "/media/covers/midnight-run.png",
    "backArt": "/media/world/closed-store.png",
    "synopsis": "Midnight Run cover concept. No footage is attached to this case yet.",
    "runtime": "TBA",
    "stickers": [
      "RESERVED"
    ]
  },
  {
    "id": "episode-1-alternate",
    "number": "0423",
    "title": "Blood Law · Alternate cover",
    "subtitle": "Episode 1 · alternate sleeve",
    "kind": "episode",
    "released": false,
    "cover": "/media/covers/episode-1-alternate.png",
    "backArt": "/media/world/video-haven.png",
    "synopsis": "Alternate Episode 1 sleeve. The episode remains unreleased; no footage is attached.",
    "runtime": "TBA",
    "stickers": [
      "RESERVED"
    ]
  }
];

export interface AuditionTape {
  id: string;
  label: string;
  scene: string;
  src: string;
  poster: string;
  duration: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  status: "human" | "vampire" | "unknown";
  short: string;
  bio: string;
  portrait: string;
  portraitCredit: string;
  sheet?: { src: string; caption: string };
  tapes: AuditionTape[];
}

export const characters: Character[] = [
  {
    "id": "kai",
    "name": "Kai Santana",
    "role": "The reluctant leader",
    "status": "vampire",
    "short": "Nineteen. Former football star",
    "bio": "Nineteen. Former football star. Kai works the closing shift at his family's video store, using charm and street instinct to keep his crew together while keeping his own life private.",
    "portrait": "/media/auditions/kai-santana.jpg",
    "portraitCredit": "Video Haven · audition still",
    "tapes": [
      {
        "id": "kai-1",
        "label": "Audition 01",
        "scene": "Covering for a friend",
        "src": "/media/auditions/kai-santana.mp4",
        "poster": "/media/auditions/kai-santana.jpg",
        "duration": "Working take"
      },
      {
        "id": "kai-2",
        "label": "Audition 02",
        "scene": "Crew authority",
        "src": "/media/auditions/kai-santana-02.mp4",
        "poster": "/media/auditions/kai-santana-02.jpg",
        "duration": "Working take"
      }
    ]
  },
  {
    "id": "mara",
    "name": "Mara Voss",
    "role": "The human outsider",
    "status": "human",
    "short": "Nineteen. Observant, guarded, and human when the story begins",
    "bio": "Nineteen. Observant, guarded, and human when the story begins. An unauthorized turning pulls Mara into a world whose rules were never meant to protect her.",
    "portrait": "/media/auditions/mara-voss.jpg",
    "portraitCredit": "Video Haven · audition still",
    "sheet": {
      "src": "/media/keyart/mara-reference.png",
      "caption": "Mara Voss — character sheet. Front, three-quarter and face study; wardrobe callouts."
    },
    "tapes": [
      {
        "id": "mara-1",
        "label": "Audition 01",
        "scene": "At the edge of transformation",
        "src": "/media/auditions/mara-voss.mp4",
        "poster": "/media/auditions/mara-voss.jpg",
        "duration": "Working take"
      }
    ]
  },
  {
    "id": "elias",
    "name": "Elias Mercer",
    "role": "The older brother",
    "status": "vampire",
    "short": "Twenty. Newly turned and a year behind",
    "bio": "Twenty. Newly turned and a year behind. Elias starts college alongside his younger brother, trying to turn shame and fear into control.",
    "portrait": "/media/auditions/elias-mercer.jpg",
    "portraitCredit": "Video Haven · audition still",
    "tapes": [
      {
        "id": "elias-1",
        "label": "Audition 01",
        "scene": "Losing authority",
        "src": "/media/auditions/elias-mercer.mp4",
        "poster": "/media/auditions/elias-mercer.jpg",
        "duration": "Working take"
      }
    ]
  },
  {
    "id": "rowan",
    "name": "Rowan Mercer",
    "role": "The younger brother",
    "status": "vampire",
    "short": "Nineteen. Quiet, perceptive, and capable",
    "bio": "Nineteen. Quiet, perceptive, and capable. Rowan's loyalty to his brother has limits, especially when protection begins to feel like possession.",
    "portrait": "/media/auditions/rowan-mercer.jpg",
    "portraitCredit": "Video Haven · audition still",
    "tapes": [
      {
        "id": "rowan-1",
        "label": "Audition 01",
        "scene": "Character audition",
        "src": "/media/auditions/rowan-mercer.mp4",
        "poster": "/media/auditions/rowan-mercer.jpg",
        "duration": "Working take"
      }
    ]
  },
  {
    "id": "lucian",
    "name": "Lucian Blaise",
    "role": "The keeper of secrets",
    "status": "vampire",
    "short": "Nineteen. Newly changed and wary of intimacy",
    "bio": "Nineteen. Newly changed and wary of intimacy. Lucian recognizes something in Mara's fear that makes keeping his distance harder.",
    "portrait": "/media/auditions/lucian-blaise.jpg",
    "portraitCredit": "Video Haven · audition still",
    "tapes": [
      {
        "id": "lucian-1",
        "label": "Audition 01",
        "scene": "An unwanted recognition",
        "src": "/media/auditions/lucian-blaise.mp4",
        "poster": "/media/auditions/lucian-blaise.jpg",
        "duration": "Working take"
      }
    ]
  },
  {
    "id": "malachi",
    "name": "Malachi Jackson",
    "role": "The controlled threat",
    "status": "vampire",
    "short": "Twenty. A street enforcer whose composure does the talking",
    "bio": "Twenty. A street enforcer whose composure does the talking. His threat lives in a measured voice and the calm certainty behind it.",
    "portrait": "/media/auditions/malachi-jackson.jpg",
    "portraitCredit": "Video Haven · audition still",
    "tapes": [
      {
        "id": "malachi-1",
        "label": "Audition 01",
        "scene": "The polite version",
        "src": "/media/auditions/malachi-jackson.mp4",
        "poster": "/media/auditions/malachi-jackson.jpg",
        "duration": "Working take"
      }
    ]
  },
  {
    "id": "malik",
    "name": "Malik Vale",
    "role": "The crew's wildcard",
    "status": "vampire",
    "short": "Twenty-one. The night runner: messages, suppressant, transport",
    "bio": "Twenty-one. The night runner: messages, suppressant, transport. Socially fearless, Malik keeps one eye on the conversation and the other on the exit.",
    "portrait": "/media/auditions/malik-vale.jpg",
    "portraitCredit": "Video Haven · audition still",
    "tapes": [
      {
        "id": "malik-1",
        "label": "Audition 01",
        "scene": "Campus security",
        "src": "/media/auditions/malik-vale.mp4",
        "poster": "/media/auditions/malik-vale.jpg",
        "duration": "Working take"
      }
    ]
  }
];

export interface OneSheet {
  id: string;
  title: string;
  tag: string;
  src: string;
  note: string;
}

export const oneSheets: OneSheet[] = [
  {
    "id": "ensemble",
    "title": "The crew outside Video Haven",
    "tag": "Key art",
    "src": "/media/keyart/video-haven-ensemble.png",
    "note": "Ensemble one-sheet. The store window is the only warm light in frame."
  },
  {
    "id": "pilot",
    "title": "Welcome to freshman year",
    "tag": "Key art",
    "src": "/media/keyart/freshman-year.png",
    "note": "Original Video Haven development one-sheet."
  },
  {
    "id": "rooftop",
    "title": "Freshman hell",
    "tag": "Alternate key art",
    "src": "/media/keyart/freshman-hell.png",
    "note": "Original Video Haven alternate one-sheet."
  }
];

export interface Location {
  id: string;
  name: string;
  src: string;
  plate: boolean;
  description: string;
}

export const locations: Location[] = [
  {
    id: "counter",
    name: "Video Haven — the counter",
    src: "/media/world/video-haven.png",
    plate: true,
    description:
      "Where most of the pilot's conversations happen. A beige CRT, a barcode wand, late-fee notes on a corkboard. The TV behind the counter is always playing something the store has had too long.",
  },
  {
    id: "aisles",
    name: "Video Haven — the aisles",
    src: "/media/world/aisles.png",
    plate: true,
    description:
      "Narrow, overstocked, hand-lettered dividers. The horror aisle is at the back under the tube that flickers. The crew treats it as neutral ground.",
  },
  {
    id: "college",
    name: "The college",
    src: "/media/world/campus.png",
    plate: true,
    description:
      "A private Catholic college on the cliffs. Mission revival arcades, a bell tower, a chapel with the lights left on. The crew pass as students here; the bells are their curfew.",
  },
  {
    id: "rooftops",
    name: "Downtown rooftops",
    src: "/media/world/rooftop.png",
    plate: true,
    description:
      "Kai's commute and the crew's road home. Tar, gravel, antenna masts, the ocean in the gaps. Nothing is lit except from below.",
  },
  {
    id: "storefront",
    name: "The closed storefront",
    src: "/media/world/closed-store.png",
    plate: true,
    description:
      "Video Haven after 2 a.m., grille half down, one tube still buzzing. The arrival sequence resolves here; so does the pilot.",
  },
];

export interface Beat {
  time: string;
  label: string;
  detail: string;
}

export const arrivalBeats: Beat[] = [
  { time: "0:00", label: "Ledge", detail: "Hands on the parapet, bells finishing behind us. First person." },
  { time: "0:06", label: "Gap", detail: "Vault over the alley between the chapel annex and the bookstore roof." },
  { time: "0:14", label: "Drop", detail: "Fire escape, three flights, no handrail contact." },
  { time: "0:28", label: "Street", detail: "Coast road sprint past the bike shop. Fog, sodium light, one car." },
  { time: "0:52", label: "Grille", detail: "Slide under the half-closed grille. Camera clears it by inches." },
  { time: "1:04", label: "Counter", detail: "Stand, breathe, lights on. The store resolves. Title beside the frame." },
];

export const actionBoard = [
  { head: "Rule", body: "Movement is transport, not performance. No flips unless the geography demands one." },
  { head: "Camera", body: "Locked to Kai's eyeline. Head-mounted plate for tests; stabilised rig for the shoot." },
  { head: "Sound", body: "Breath, fabric, gravel. Score enters only when the grille comes down." },
  { head: "Cut", body: "Long takes stitched at the drop and the street. Three visible cuts maximum." },
  { head: "Light", body: "Practical only on the roofs. The store window is the first warm source." },
  { head: "Safety", body: "All gaps rehearsed at ground level first; roofs doubled with mats out of frame." },
];

export const palette = [
  { name: "Zinc 950", hex: "#09090b", use: "Night, backgrounds" },
  { name: "Zinc 700", hex: "#3f3f46", use: "Plastic, tar, fog" },
  { name: "Bone", hex: "#efeae0", use: "Paper, labels, skin highlights" },
  { name: "Blood", hex: "#9f1d1d", use: "Title, one accent per frame" },
  { name: "Sodium", hex: "#d9a441", use: "Streetlight, store window" },
  { name: "CRT", hex: "#9fb3a0", use: "Screens, counter glow" },
];

export const productionNotes = [
  {
    head: "Faces",
    body: "Clean, close, lit from one side. The crew never read as monsters; they read as tired students. Mara is the only face lit warm in the pilot.",
  },
  {
    head: "Wardrobe",
    body: "Fall 2001: cardigans, cargo pants, leather that has been slept in. Catholic college uniform pieces worn wrong. One red item per scene, never on the same person twice.",
  },
  {
    head: "Locations",
    body: "The five development plates are imported from Video Haven. The store is a practical set; the college is a composite of three campuses.",
  },
  {
    head: "Movement tests",
    body: "The arrival and rooftop tests are available alongside first-look cuts. All remain working material.",
  },
];

