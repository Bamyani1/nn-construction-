export type IconName =
  | "hammer"
  | "level"
  | "pencil"
  | "saw"
  | "square"
  | "tape"
  | "trowel"
  | "wrench";

export type ProjectCategory = "Interior" | "Exterior" | "Roofing";

export interface Service {
  n: string;
  icon: IconName;
  name: string;
  desc: string;
  from: string;
  featured?: boolean;
}

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

export const services: { interior: Service[]; exterior: Service[] } = {
  interior: [
    {
      n: "01",
      icon: "trowel",
      name: "Kitchen & bath",
      desc: "Custom cabinetry, stone counters, tile set true. Appliances, lighting, plumbing finished to spec.",
      from: "$38/sqft",
    },
    {
      n: "02",
      icon: "pencil",
      name: "Custom built-ins",
      desc: "Stained-oak millwork, floating shelves, integrated storage — shop-built, site-finished.",
      from: "$210/lf",
    },
    {
      n: "03",
      icon: "square",
      name: "Flooring & stair",
      desc: "Wide-plank white oak, tile, stone. Custom stair runs with closed or open risers.",
      from: "$14/sqft",
    },
    {
      n: "04",
      icon: "hammer",
      name: "Framing & structural",
      desc: "New builds, additions, load-bearing work. Engineered to county code, plumb to the foundation.",
      from: "$42/sqft",
    },
  ],
  exterior: [
    {
      n: "05",
      icon: "saw",
      name: "Siding & trim",
      desc: "Fiber-cement, cedar lap, stucco. Tight mitered corners, consistent reveal top to bottom.",
      from: "$12/sqft",
    },
    {
      n: "06",
      icon: "wrench",
      name: "Decks & hardscape",
      desc: "IPE and composite decks, paver patios, retaining walls. Drainage engineered in.",
      from: "$65/sqft",
    },
    {
      n: "07",
      icon: "level",
      name: "Windows & doors",
      desc: "Full-frame replacement, custom entry doors, structural openings cut and supported.",
      from: "$1,200/opening",
    },
    {
      n: "08",
      icon: "hammer",
      name: "Roofing · featured",
      desc: "Asphalt, metal standing-seam, slate repair. Full tear-off or overlay, ice-shield to ridge cap. Our specialty.",
      from: "$8/sqft",
      featured: true,
    },
  ],
};

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
