export type ProjectCategory = "Interior" | "Exterior" | "Roofing";

export interface TeamMember {
  name: string;
  role: string;
  tenure: string;
}

export interface Project {
  slug: string;
  name: string;
  cat: ProjectCategory;
  images: string[];
  brief: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  loc: string;
  project: Project["name"];
}

export interface Faq {
  q: string;
  a: string;
}

export interface Stat {
  label: string;
  value: string;
  unit: string;
}

export interface ServiceCard {
  title: string;
  desc: string;
  from: string;   // "From $12/sqft"
  time: string;   // "4–8 wks"
}

export type ServiceProof =
  | {
      kind: "quote";
      text: string;
      name: string;
      role: string;
      loc: string;
    }
  | {
      kind: "spec";
      cells: { label: string; value: string; unit: string }[];
    };

export interface ServiceBranch {
  slug: "interior" | "exterior" | "roofing";
  name: string;
  tagline: string;       // hub card summary (1 line)
  pageTitle: string[];   // sub-page h1, one array entry per rendered line
  pageLead: string;
  heroImage: string;
  heroAlt: string;
  startingAt: string;    // "From $8/sqft" — shown on hub card
  services: ServiceCard[];
  proof: ServiceProof;
}

export const site = {
  name: "NN Construction",
  tagline: "Your dream · Our hardwork",
  cities: [
    "Bethesda",
    "Silver Spring",
    "Rockville",
    "Arlington",
    "McLean",
    "Chevy Chase",
    "Alexandria",
    "Takoma Park",
  ],
  phone: "(301) 555-0142",
  email: "hello@nnconstruction.co",
  address: "8420 Georgia Ave, Silver Spring, MD 20910",
  licenses: {
    mhic: "132-8847",
    dc: "BBL-200489",
    va: "2705-189-332",
  },
} as const;

export const stats: Stat[] = [
  { label: "Established", value: "2009", unit: "17 years on" },
  { label: "Projects", value: "612", unit: "completed" },
  { label: "Roofs", value: "1.4M", unit: "sqft installed" },
  { label: "Warranty", value: "25", unit: "years, workmanship" },
];

export const team: TeamMember[] = [
  { name: "Nelson Nieves", role: "Founder · Principal", tenure: "Est. 2009" },
  { name: "Nasir Okonkwo", role: "Director of Operations", tenure: "12 yrs" },
  { name: "Marta Delgado", role: "Project Lead · Interior", tenure: "9 yrs" },
  { name: "James Whitfield", role: "Master Roofer", tenure: "15 yrs" },
  { name: "Priya Ramanathan", role: "Design · Millwork", tenure: "7 yrs" },
  { name: "Caleb Brennan", role: "Lead Carpenter · Framing", tenure: "11 yrs" },
];

export const projects: Project[] = [
  {
    slug: "standing-seam-reroof",
    name: "Standing-Seam Re-roof",
    cat: "Roofing",
    images: [
      "01.webp", "02.webp", "03.webp", "04.webp", "05.webp", "06.webp",
      "07.webp", "08.webp", "09.webp", "10.webp", "11.webp", "12.webp", "13.webp",
    ],
    brief:
      "Tear-off and standing-seam metal re-roof with copper flashing. Matched original detail through ridge and eaves.",
  },
  {
    slug: "brooklyn-flat-roof",
    name: "Brooklyn Flat-Roof Install",
    cat: "Roofing",
    images: ["01.webp", "02.webp", "03.webp"],
    brief:
      "Low-slope membrane re-roof on a city row-house. Full tear-off, new decking, tied in to neighboring parapets.",
  },
  {
    slug: "primary-bath-renovation",
    name: "Primary Bath Renovation",
    cat: "Interior",
    images: ["01.webp", "02.webp", "03.webp", "04.webp"],
    brief:
      "Full gut and refit — large-format tile, new vanity, walk-in shower with linear drain.",
  },
  {
    slug: "brick-facade-restoration",
    name: "Brick Facade Restoration",
    cat: "Exterior",
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", "06.webp"],
    brief:
      "Select-brick replacement, full repoint, mortar-matched to the original 1930s blend.",
  },
  {
    slug: "foundation-waterproofing",
    name: "Foundation Waterproofing",
    cat: "Exterior",
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
    brief:
      "Excavation, membrane application, drain tile, and backfill. Dry basement, sealed permanently.",
  },
  {
    slug: "custom-window-install",
    name: "Custom Window Install",
    cat: "Exterior",
    images: ["01.webp", "02.webp", "03.webp", "04.webp"],
    brief:
      "Rough openings cut, flashing detail, trim package. New windows installed plumb and sealed.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "They showed up on the days they said they would, for the number they quoted. After two other contractors ghosted us, that alone was a revelation. The work itself is beautiful.",
    name: "Eleanor Park",
    role: "Homeowner",
    loc: "Bethesda, MD",
    project: "Primary Bath Renovation",
  },
  {
    quote:
      "We hired NN for a roof repair and ended up having them do the full exterior. The roofing crew in particular is in a different class. Tight lines, zero callbacks.",
    name: "Marcus Boateng",
    role: "Homeowner",
    loc: "Chevy Chase, MD",
    project: "Standing-Seam Re-roof",
  },
  {
    quote:
      "Ran a commercial tenant build-out for our firm in under the original timeline. No drama, detailed change orders, clean punch list.",
    name: "Rachael Wen",
    role: "Facilities Director, Tessera Legal",
    loc: "Arlington, VA",
    project: "Brick Facade Restoration",
  },
  {
    quote:
      "The level of finish carpentry you get from Marta's team is honestly the reason we'll use them again. Every miter is tight. Every reveal is consistent.",
    name: "David Hollister",
    role: "Homeowner",
    loc: "Takoma Park, MD",
    project: "Custom Window Install",
  },
];

export const serviceBranches: ServiceBranch[] = [
  {
    slug: "interior",
    name: "Interior",
    tagline:
      "Kitchen, bath, millwork, flooring, framing. Stained-oak cabinetry, stone counters, tile set true.",
    pageTitle: ["Inside work,", "finished appraisal-ready."],
    pageLead:
      "Kitchen, bath, millwork, flooring, framing. Stained-oak cabinetry, stone counters, tile set true to reveal. Structural work permitted and inspected.",
    heroImage: "/assets/projects/primary-bath-renovation/01.webp",
    heroAlt: "Primary bath renovation",
    startingAt: "From $14/sqft",
    services: [
      {
        title: "Kitchen & bath",
        desc: "Custom cabinetry, stone counters, tile set true. Appliances, lighting, plumbing finished to spec. Structural wall removal with engineered LVL where needed.",
        from: "From $38/sqft",
        time: "8–14 wks",
      },
      {
        title: "Custom built-ins",
        desc: "Stained-oak millwork, floating shelves, integrated storage. Shop-built, site-finished. Mitred returns, continuous grain, hand-rubbed wax.",
        from: "From $210/lf",
        time: "3–6 wks",
      },
      {
        title: "Flooring & stair",
        desc: "Wide-plank white oak, tile, stone. Custom stair runs with closed or open risers — blackened-steel stringers and solid hardwood treads.",
        from: "From $14/sqft",
        time: "2–5 wks",
      },
      {
        title: "Framing & structural",
        desc: "New builds, additions, load-bearing work. Engineered to county code, plumb to the foundation. Permit submittal and inspection handled in-house.",
        from: "From $42/sqft",
        time: "6–16 wks",
      },
    ],
    proof: {
      kind: "quote",
      text: "The level of finish carpentry you get from Marta's team is honestly the reason we'll use them again. Every miter is tight. Every reveal is consistent.",
      name: "David Hollister",
      role: "Homeowner",
      loc: "Takoma Park, MD",
    },
  },
  {
    slug: "exterior",
    name: "Exterior",
    tagline:
      "Siding, decks, windows, doors. Tight mitered corners, consistent reveal, drainage engineered in.",
    pageTitle: ["Outside work", "that holds weather."],
    pageLead:
      "Siding, decks, windows, and doors. Tight mitered corners, consistent reveal top to bottom, drainage engineered in. For roofing, see our dedicated specialty.",
    heroImage: "/assets/projects/foundation-waterproofing/01.webp",
    heroAlt: "Foundation waterproofing",
    startingAt: "From $12/sqft",
    services: [
      {
        title: "Siding & trim",
        desc: "Fiber-cement, cedar lap, stucco. Tight mitered corners, consistent reveal top to bottom. Full tear-off or overlay with proper flashing.",
        from: "From $12/sqft",
        time: "4–8 wks",
      },
      {
        title: "Decks & hardscape",
        desc: "IPE and composite decks, paver patios, retaining walls. Drainage engineered in. Structural posts to frost depth.",
        from: "From $65/sqft",
        time: "3–6 wks",
      },
      {
        title: "Windows & doors",
        desc: "Full-frame replacement, custom entry doors, structural openings cut and supported. Rough-openings squared before install, every time.",
        from: "From $1,200/opening",
        time: "1–3 wks",
      },
    ],
    proof: {
      kind: "spec",
      cells: [
        {
          label: "In business since",
          value: "2009",
          unit: "seventeen years on",
        },
        {
          label: "Service area",
          value: "MD · DC · VA",
          unit: "three-state license",
        },
        {
          label: "Workmanship warranty",
          value: "25 years",
          unit: "direct, no call centers",
        },
      ],
    },
  },
  {
    slug: "roofing",
    name: "Roofing",
    tagline:
      "Our specialty since 2009. Standing-seam metal, asphalt, and slate repair — ice-shield to ridge cap.",
    pageTitle: ["Our proven", "specialty."],
    pageLead:
      "1.4 million square feet of roofing delivered since 2009. Standing-seam metal, asphalt, and slate repair — full tear-off or overlay, ice-shield to ridge cap.",
    heroImage: "/assets/projects/standing-seam-reroof/01.webp",
    heroAlt: "Standing-seam re-roof",
    startingAt: "From $8/sqft",
    services: [
      {
        title: "Full tear-off re-roof",
        desc: "Decking inspected, ice & water shield applied at eaves and valleys, synthetic underlayment, hand-nailed asphalt or standing-seam metal. Proper step-flashing at every penetration.",
        from: "From $8/sqft",
        time: "1–3 wks",
      },
      {
        title: "Repair & flashing",
        desc: "Leak diagnosis, chimney and skylight flashing, valley replacement. Documented before-and-after for every repair, including infrared moisture scans where warranted.",
        from: "By scope",
        time: "1–2 days",
      },
      {
        title: "Annual maintenance",
        desc: "Semi-annual inspection, gutter cleaning, sealant refresh. Keeps the 25-year workmanship warranty live and catches small failures before they become expensive ones.",
        from: "From $400/yr",
        time: "1 day",
      },
    ],
    proof: {
      kind: "spec",
      cells: [
        {
          label: "Installed since 2009",
          value: "1,420,000",
          unit: "square feet",
        },
        {
          label: "Standing-seam material warranty",
          value: "50 years",
          unit: "manufacturer, pass-through",
        },
        {
          label: "Workmanship warranty",
          value: "25 years",
          unit: "direct, no call centers",
        },
      ],
    },
  },
];

export const faqs: Faq[] = [
  {
    q: "What areas do you service?",
    a: "Residential and commercial work across Montgomery County, DC, and Northern Virginia. We're based in Silver Spring and travel up to about 40 minutes for most projects.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. MHIC #132-8847 (Maryland), WSSC-certified for plumbing rough-in, and carry $2M general liability plus workers' comp. Documentation provided on request before contract.",
  },
  {
    q: "How does a project start?",
    a: "Free in-person consultation, typically within a week. We'll walk the space, talk scope, and follow up with a written estimate inside five business days. No pressure, no high-volume sales tactics.",
  },
  {
    q: "Do you pull permits?",
    a: "Always — for any work that requires one. We handle the full submittal and inspection process for Montgomery, DC, and Fairfax, and build the timeline around it honestly.",
  },
  {
    q: "What does the warranty cover?",
    a: "25 years on workmanship. Manufacturer warranties pass through on materials (typically 30–50 years on asphalt roofing, 50+ on standing-seam metal). We're reachable directly for warranty claims — no call centers.",
  },
  {
    q: "How do you handle change orders?",
    a: "Written, signed, and priced before any work proceeds. You see the labor hours, material line items, and revised completion date. No surprises in the final invoice.",
  },
];
