import { getAssetPath } from "@/utils/paths";

export interface MemberRecord {
  membershipNo: string;
  name: string;
  rank: string;
  issueYear: string;
  validUpto: string;
  branch: string;
  status: "VALID" | "EXPIRED" | "SUSPENDED";
  instructor: string;
  isDemo?: boolean;
}

export interface BranchRecord {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  chiefInstructor: string;
  instructorGrade: string;
  phone: string;
  timing: string;
  trainingDays: string;
  activeStatus: "Active" | "Seasonal";
  affiliationStatus: string;
}

export interface SyllabusItem {
  name: string;
  chinese: string;
  type: "Empty Hand Form" | "Wooden Dummy" | "Weapon" | "Partner Training";
  level: string;
  description: string;
  keyConcepts: string[];
}

export interface AffiliationRecord {
  name: string;
  relationship: "International Charter" | "Technical Association" | "National Association" | "State Affiliate";
  since?: string;
  purpose: string;
  website?: string;
  badge: string;
}

export const ASSOCIATION_INFO = {
  name: "Wing Chun Martial Arts Association India",
  shortName: "WCMAA India",
  chineseName: "詠春拳",
  established: 1991, // 35th Foundation Year (1991–2026)
  foundationYearMilestone: "35 Years of Wing Chun Heritage in India",
  registrationNo: "KAM/240/W/08 of 2005–2006",
  legalRegistrationText: "Registered under the applicable society/association registration framework in Assam.",
  singaporeAffiliation: "REGN. WCMAA SINGAPORE",
  taglines: {
    primary: "Strength Through Discipline • Honor Through Tradition",
    secondary: "ONE FAMILY • ONE LINEAGE • ONE VISION",
    motto: "Learn Wing Chun Kung Fu For Self Defense",
  },
  contacts: {
    generalSecretary: "Sifu Sankar Dutta",
    phones: ["+91 78969 62207", "+91 90852 96178"],
    primaryPhone: "+91 78969 62207",
    email: "duttasankar88@gmail.com",
    facebook: "https://www.facebook.com/wingchunkungfuindiaofficial",
    hqAddress: "Bathoupuri, ISBT Lokhra, Guwahati - 781035, Assam, India",
    trainingGround: "North East Academy Playground, Bhetapara, Beltola, Guwahati, Assam",
    residenceOffice: "H.No. 9, Bhaskar Nagar, Bamunimaidam, Guwahati - 781021, Assam",
  },
  affiliations: [
    {
      name: "WCMAA Singapore",
      relationship: "International Charter",
      since: "1991",
      badge: "International Charter",
      purpose: "Technical charter and traditional curriculum framework alignment.",
      website: undefined,
    },
    {
      name: "The World Kuoshu Federation (TWKSF)",
      relationship: "Technical Association",
      badge: "Global Technical Association",
      website: "https://www.twksf.org",
      purpose: "International association dedicated to traditional Chinese martial arts and refereeing standards.",
    },
    {
      name: "KUOSHU Federation of India",
      relationship: "National Association",
      badge: "National Association Partner",
      purpose: "Cooperation on traditional Kuoshu and Kung Fu training standards in India.",
      website: undefined,
    },
    {
      name: "Assam Kungfu Federation",
      relationship: "State Affiliate",
      badge: "State Association Affiliate",
      purpose: "Regional promotion of martial arts education and technical seminars in Assam.",
      website: undefined,
    },
  ] as AffiliationRecord[],
  leadership: [
    {
      name: "Sifu Amar Singh Deori",
      role: "Founder President & Chief Instructor",
      affiliation: "WCMAA, India",
      experience: "Practicing and teaching Wing Chun in Northeast India since 1991",
      bio: "Pioneer of traditional Wing Chun Kung Fu education in Northeast India. Serves as Chief Instructor and authorized examiner on national technical gradings and certificates under the WCMAA Singapore charter.",
      image: getAssetPath("/assets/grandmaster_portrait.webp"),
    },
    {
      name: "Sifu Sankar Dutta",
      role: "General Secretary & Senior Master Instructor",
      honoraryTitles: [
        "Joint Secy. Gen. KUOSHU Federation, India",
        "Vice President Assam Kungfu Federation",
      ],
      experience: "Senior instructor with extensive technical practice in traditional forms & Wooden Dummy",
      bio: "Dedicated master instructor overseeing curriculum dissemination, 116 Wooden Dummy movements, referee development, and youth martial arts programs across India.",
      image: getAssetPath("/assets/sifu_sankar_dutta_portrait.webp"),
    },
  ],
  stats: {
    practitionerNote: "Growing Practitioner Network",
    dojoNote: "Training Centres & Dojo Network",
    heritageYears: "35+ Years Heritage",
    lastReviewed: "October 2026",
  },
};

export const SYLLABUS_DATA: SyllabusItem[] = [
  {
    name: "Siu Nim Tao (Little Idea)",
    chinese: "小念頭",
    type: "Empty Hand Form",
    level: "Foundation / Grade 1 - 2",
    description:
      "The foundational form of Wing Chun. Trains the central axis stance (Yee Jee Kim Yeung Ma), centerline focus, elbow energy, and proper structural relaxation.",
    keyConcepts: ["Centerline Theory", "Elbow Energy (Jang Dai Lik)", "Tan Sau & Bong Sau Structure", "Mindful Breathing"],
  },
  {
    name: "Chum Kiu (Seeking the Bridge)",
    chinese: "尋橋",
    type: "Empty Hand Form",
    level: "Intermediate / Grade 3 - 4",
    description:
      "Teaches mobile footwork, hip torque generation, coordinated pivoting, closing the distance, and bridging into opponents' defensive perimeter.",
    keyConcepts: ["Jum Sau / Biu Sau Bridging", "Stepping & Waist Turning", "Deflection under Pressure", "Kicking Below Waist"],
  },
  {
    name: "Biu Jee (Darting Fingers)",
    chinese: "鏢指",
    type: "Empty Hand Form",
    level: "Advanced / Senior Grade",
    description:
      "The emergency and recovery form. Delivers short-range recovery power, finger strikes to vulnerable targets, and escaping trapped positions.",
    keyConcepts: ["Emergency Recovery", "Fak Sau / Biu Jee Penetration", "Elbow Strikes (Kup Jarn)", "Body Leverage Recovery"],
  },
  {
    name: "Muk Yan Jong (Wooden Dummy)",
    chinese: "木人樁",
    type: "Wooden Dummy",
    level: "Mastery Level",
    description:
      "116 precise techniques executed against the wooden dummy to develop angle deflection, timing, tactile sensitivity, and spatial flow.",
    keyConcepts: ["116 Movements", "Limb Conditioning", "Angle Deflection & Foot Trapping", "Simultaneous Block & Counter"],
  },
  {
    name: "Luk Dim Boon Kwan (6.5 Point Pole)",
    chinese: "六點半棍",
    type: "Weapon",
    level: "Senior Weapons Grade",
    description:
      "Training with the heavy long dragon pole (8-9 feet) to forge wrist power, forearm stamina, rooted stances, and linear thrusts.",
    keyConcepts: ["Pole Thrust & Leverage", "Lower Stance Rooting", "Torso & Hip Kinetic Chain", "Distance Mastery"],
  },
  {
    name: "Baat Jaam Do (Eight Slash Butterfly Swords)",
    chinese: "八斬刀",
    type: "Weapon",
    level: "Master Weapons Grade",
    description:
      "The traditional bladed weapon art of Wing Chun, teaching dual-handed synchrony, evasion, close-quarters slashes, and defensive weapon trapping.",
    keyConcepts: ["Dual Blade Coordination", "Wrist Slashes & Hacking", "Blade Trapping", "Lightning Mobility"],
  },
  {
    name: "Chi Sau & Lat Sau (Sticking Hands)",
    chinese: "黐手",
    type: "Partner Training",
    level: "All Grades (Progressive)",
    description:
      "Tactile sensitivity drills where practitioners learn to feel the opponent's intentions and exploit openings through touch without relying solely on sight.",
    keyConcepts: ["Dan Chi Sau (Single)", "Seung Chi Sau (Double)", "Poon Sau (Rolling)", "Gor Sau (Free Combat Flow)"],
  },
];

// Privacy-conscious member records: Full dates of birth and blood groups removed from public lookups
export const VERIFIED_MEMBERS: MemberRecord[] = [
  {
    membershipNo: "2060",
    name: "Sujan B.",
    rank: "Black Belt III",
    issueYear: "2023",
    validUpto: "2028",
    branch: "Guwahati Central (HQ)",
    status: "VALID",
    instructor: "Amar Singh Deori (Chief Instructor)",
    isDemo: false,
  },
  {
    membershipNo: "2045",
    name: "Pranab K.",
    rank: "Black Belt II",
    issueYear: "2022",
    validUpto: "2027",
    branch: "North East Academy Ground, Beltola",
    status: "VALID",
    instructor: "Sifu Sankar Dutta",
    isDemo: false,
  },
  {
    membershipNo: "2018",
    name: "Anamika B.",
    rank: "Senior Instructor Grade I",
    issueYear: "2023",
    validUpto: "2028",
    branch: "Bamunimaidam Branch",
    status: "VALID",
    instructor: "Amar Singh Deori",
    isDemo: false,
  },
  {
    membershipNo: "DEMO-101",
    name: "Demo Practitioner (Sample Record)",
    rank: "Black Belt I",
    issueYear: "2024",
    validUpto: "2029",
    branch: "National Secretariat Sample Registry",
    status: "VALID",
    instructor: "Sifu Sankar Dutta",
    isDemo: true,
  },
];

export const BRANCHES: BranchRecord[] = [
  {
    id: "ghy-hq",
    name: "WCMAA India National Headquarters",
    city: "Guwahati",
    state: "Assam",
    address: "Bathoupuri, ISBT Lokhra, Guwahati - 781035",
    chiefInstructor: "Sifu Amar Singh Deori",
    instructorGrade: "Founder President & Chief Instructor",
    phone: "+91 78969 62207",
    timing: "6:00 AM - 8:30 AM & 5:00 PM - 7:30 PM",
    trainingDays: "Mon, Wed, Fri",
    activeStatus: "Active",
    affiliationStatus: "Officially Listed WCMAA India Training Centre",
  },
  {
    id: "ghy-ne-academy",
    name: "North East Academy Training Ground",
    city: "Guwahati",
    state: "Assam",
    address: "North East Academy Playground, Bhetapara, Beltola, Guwahati",
    chiefInstructor: "Sifu Sankar Dutta",
    instructorGrade: "General Secretary & Senior Master Instructor",
    phone: "+91 90852 96178",
    timing: "6:00 AM - 8:00 AM | Sun: 7:00 AM - 10:00 AM",
    trainingDays: "Tue, Thu, Sat & Sun",
    activeStatus: "Active",
    affiliationStatus: "Officially Listed WCMAA India Training Centre",
  },
  {
    id: "ghy-bamunimaidam",
    name: "Bamunimaidam Dojo & Admin Center",
    city: "Guwahati",
    state: "Assam",
    address: "H.No. 9, Bhaskar Nagar, Bamunimaidam, Guwahati - 781021",
    chiefInstructor: "Sifu Sankar Dutta",
    instructorGrade: "General Secretary & Senior Master Instructor",
    phone: "+91 78969 62207",
    timing: "5:00 PM - 8:00 PM",
    trainingDays: "Daily (Evenings)",
    activeStatus: "Active",
    affiliationStatus: "Officially Listed WCMAA India Training Centre",
  },
  {
    id: "kolkata-wingchun",
    name: "WCMAAI Eastern Zonal Chapter",
    city: "Kolkata",
    state: "West Bengal",
    address: "Salt Lake Sector II, Kolkata",
    chiefInstructor: "Affiliated Senior Instructor",
    instructorGrade: "Senior Certified Instructor",
    phone: "+91 78969 62207",
    timing: "7:00 AM - 10:00 AM",
    trainingDays: "Saturday & Sunday",
    activeStatus: "Active",
    affiliationStatus: "Officially Listed WCMAA India Training Centre",
  },
  {
    id: "delhi-ncr",
    name: "WCMAAI Northern Regional Dojo",
    city: "New Delhi",
    state: "Delhi NCR",
    address: "Rohini Sector 14 / Connaught Place Training Camp",
    chiefInstructor: "Authorized Technical Instructor",
    instructorGrade: "Certified Technical Instructor",
    phone: "+91 90852 96178",
    timing: "8:00 AM - 11:00 AM",
    trainingDays: "Saturday & Sunday",
    activeStatus: "Active",
    affiliationStatus: "Officially Listed WCMAA India Training Centre",
  },
  {
    id: "bangalore-wingchun",
    name: "WCMAAI Southern Academy",
    city: "Bengaluru",
    state: "Karnataka",
    address: "Indiranagar / Koramangala Martial Arts Studio",
    chiefInstructor: "Accredited Instructor",
    instructorGrade: "Accredited Instructor",
    phone: "+91 78969 62207",
    timing: "6:30 AM - 8:00 AM",
    trainingDays: "Tue, Thu, Sat",
    activeStatus: "Active",
    affiliationStatus: "Officially Listed WCMAA India Training Centre",
  },
];

// COMPLETED EVENT: 35th Anniversary Celebration — Event Completed (6 September 2026)
export const COMPLETED_EVENT = {
  title: "35th Foundation Day Celebration & Seminar",
  badge: "35th Anniversary Celebration — Event Completed",
  status: "Completed",
  date: "6 September 2026",
  location: "Guwahati, Assam",
  venue: "Bamunimaidam Bihu Mancha Auditorium, Guwahati, Assam",
  statement:
    "WCMAA India successfully commemorated its 35th Foundation Day on 6 September 2026 in Guwahati, Assam, bringing together instructors, practitioners, students and members of the Wing Chun community.",
  highlights: [
    "Grand Wooden Dummy (Muk Yan Jong) Masterclass with Sifu Amar Singh Deori & Sifu Sankar Dutta",
    "National Belt & Sash Grading Examinations",
    "Chi Sau / Lat Sau Partner Drills & Dynamic Movement Demonstrations",
    "Felicitation of Senior Sifus & Longstanding Practitioners",
    "Commemorative 35th Foundation Anniversary Certificate & Memento Distribution",
  ],
  recapPhotos: [
    {
      src: getAssetPath("/assets/association_camp_group.webp"),
      alt: "35th Anniversary Seminar Group Photograph - Guwahati, Assam",
      caption: "Group Photo: Instructors and delegates gathered at the commemorative seminar.",
    },
    {
      src: getAssetPath("/assets/sifu_chisau_practice.webp"),
      alt: "Dynamic Chi Sau Movement Practice - Sifu Amar Singh & Sifu Sankar Dutta",
      caption: "Technical Demonstration: Sifu Amar Singh Deori & Sifu Sankar Dutta demonstrating Chi Sau sensitivity.",
    },
    {
      src: getAssetPath("/assets/association_team.webp"),
      alt: "WCMAA India Instructors & Technical Council",
      caption: "Leadership & Senior Council: Instructors uniting under traditional martial discipline.",
    },
    {
      src: getAssetPath("/assets/event_35th_foundation.webp"),
      alt: "35th Foundation Anniversary Commemorative Emblem Poster",
      caption: "Commemorative Poster: Official celebration of 35 years (1991–2026) of Wing Chun in India.",
    },
  ],
};

// Backwards-compatibility alias for components referencing UPCOMING_EVENT (all payment/countdown fields removed)
export const UPCOMING_EVENT = {
  ...COMPLETED_EVENT,
  timings: "Completed on 6 September 2026",
  subTitle: "Wing Chun Martial Arts Association India",
};
