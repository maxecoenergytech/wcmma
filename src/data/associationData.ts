export interface MemberRecord {
  membershipNo: string;
  name: string;
  rank: string;
  bloodGroup: string;
  dob: string;
  issueDate: string;
  validUpto: string;
  branch: string;
  status: "ACTIVE" | "EXPIRED" | "SUSPENDED";
  instructor: string;
}

export interface BranchRecord {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  chiefInstructor: string;
  phone: string;
  timing: string;
}

export interface SyllabusItem {
  name: string;
  chinese: string;
  type: "Empty Hand Form" | "Wooden Dummy" | "Weapon" | "Partner Training";
  level: string;
  description: string;
  keyConcepts: string[];
}

export const ASSOCIATION_INFO = {
  name: "Wing Chun Martial Arts Association India",
  shortName: "WCMAAI",
  chineseName: "詠春拳",
  established: 1991, // 35th Foundation Year
  foundationYearMilestone: "35th Foundation Anniversary",
  registrationNo: "KAM/240/W/08 OF 2005-2006",
  singaporeAffiliation: "REGN. WCMAA SINGAPORE",
  taglines: {
    primary: "Strength Through Discipline • Honor Through Tradition",
    secondary: "ONE FAMILY • ONE LINEAGE • ONE VISION",
    motto: "Learn Wing Chun Kung Fu For Self Defense",
  },
  contacts: {
    phones: ["+91 78969 62207", "+91 90852 96178", "+91 88766 53722"],
    email: "duttasankar88@gmail.com",
    hqAddress: "Bathoupuri, ISBT Lokhra, Guwahati - 781035, Assam, India",
    trainingGround: "North East Academy Playground, Bhetapara, Beltola, Guwahati, Assam",
    residenceOffice: "H.No. 9, Bhaskar Nagar, Bamunimaidam, Guwahati - 781021, Assam",
  },
  affiliations: [
    {
      name: "WCMAA Singapore",
      badge: "International Mother Chapter",
      detail: "Direct technical accreditation and international grading authority.",
    },
    {
      name: "The World Kuoshu Federation (TWKSF)",
      badge: "Global Kuoshu Body",
      website: "www.twksf.org",
      detail: "Recognized international federation governing traditional Chinese martial arts.",
    },
    {
      name: "KUOSHU Federation of India",
      badge: "National Body",
      detail: "Apex national governing council for Kuoshu and Kung Fu disciplines in India.",
    },
    {
      name: "Assam Kungfu Federation",
      badge: "State Association",
      detail: "Regional martial development council pioneering self-defense education.",
    },
  ],
  leadership: [
    {
      name: "Sifu Amar Singh Deori",
      role: "Founder President & Chief Instructor",
      affiliation: "WCMAA, India",
      bio: "Pioneer of authentic Wing Chun in Northeast India, authorized signature authority for national belt passports and certificates under WCMAA Singapore charter.",
      image: "/assets/grandmaster_portrait.jpg",
    },
    {
      name: "Sifu Sankar Dutta",
      role: "General Secretary, WCMAA India",
      honoraryTitles: [
        "Joint Secy. Gen. KUOSHU Federation, India",
        "Vice President Assam Kungfu Federation",
      ],
      bio: "Veteran master dedicated to grassroots Wing Chun training, Wooden Dummy mastery, referee certifications, and youth self-defense camps.",
      image: "/assets/sifu_sankar_dutta_card.jpg",
    },
  ],
};

export const SYLLABUS_DATA: SyllabusItem[] = [
  {
    name: "Siu Nim Tao (Little Idea)",
    chinese: "小念頭",
    type: "Empty Hand Form",
    level: "Foundation / Grade 1 - 2",
    description:
      "The mother form of Wing Chun. Trains the central axis stance (Yee Jee Kim Yeung Ma), centerline focus, elbow energy, and proper structural relaxation.",
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
    level: "Advanced / Black Belt I - II",
    description:
      "The emergency and recovery form. Delivers explosive short-range recovery power, finger strikes to vulnerable targets, and escaping trapped positions.",
    keyConcepts: ["Emergency Recovery", "Fak Sau / Biu Jee Penetration", "Elbow Strikes (Kup Jarn)", "Body Leverage Recovery"],
  },
  {
    name: "Muk Yan Jong (Wooden Dummy)",
    chinese: "木人樁",
    type: "Wooden Dummy",
    level: "Mastery / Black Belt II - III+",
    description:
      "116 precise techniques executed against the wooden dummy to develop bone conditioning, angle cutting, timing, tactile sensitivity, and spatial flow.",
    keyConcepts: ["116 Movements", "Limb Conditioning", "Angle Deflection & Foot Trapping", "Simultaneous Block & Counter"],
  },
  {
    name: "Luk Dim Boon Kwan (6.5 Point Pole)",
    chinese: "六點半棍",
    type: "Weapon",
    level: "Senior Weapons Grade",
    description:
      "Training with the heavy long dragon pole (8-9 feet) to forge phenomenal wrist power, forearm stamina, rooted stances, and linear thrusts.",
    keyConcepts: ["Pole Thrust & Leverage", "Lower Stance Rooting", "Torso & Hip Kinetic Chain", "Distance Mastery"],
  },
  {
    name: "Baat Jaam Do (Eight Slash Butterfly Swords)",
    chinese: "八斬刀",
    type: "Weapon",
    level: "Master Weapons Grade",
    description:
      "The pinnacle bladed weapon art of Wing Chun, teaching dual-handed synchrony, evasion, close-quarters slashes, and defensive weapon trapping.",
    keyConcepts: ["Dual Blade Coordination", "Wrist Slashes & Hacking", "Blade Trapping", "Lightning Mobility"],
  },
  {
    name: "Chi Sau & Lat Sau (Sticking Hands)",
    chinese: "黐手",
    type: "Partner Training",
    level: "All Grades (Progressive)",
    description:
      "The soul of Wing Chun: tactile sensitivity drills where practitioners learn to feel the opponent's intentions and exploit openings through touch without relying on sight.",
    keyConcepts: ["Dan Chi Sau (Single)", "Seung Chi Sau (Double)", "Poon Sau (Rolling)", "Gor Sau (Free Combat Flow)"],
  },
];

export const VERIFIED_MEMBERS: MemberRecord[] = [
  {
    membershipNo: "2060",
    name: "Sujan Biswas",
    rank: "Black Belt III",
    bloodGroup: "O+",
    dob: "01.02.1977",
    issueDate: "03.09.2023",
    validUpto: "03.09.2028",
    branch: "Guwahati Central (HQ)",
    status: "ACTIVE",
    instructor: "Amar Singh Deori (Founder President)",
  },
  {
    membershipNo: "2045",
    name: "Pranab Jyoti Kalita",
    rank: "Black Belt II",
    bloodGroup: "B+",
    dob: "14.07.1985",
    issueDate: "12.01.2022",
    validUpto: "12.01.2027",
    branch: "North East Academy Ground, Beltola",
    status: "ACTIVE",
    instructor: "Sifu Sankar Dutta",
  },
  {
    membershipNo: "2018",
    name: "Anamika Baruah",
    rank: "Senior Instructor Grade I",
    bloodGroup: "A+",
    dob: "22.11.1990",
    issueDate: "05.08.2023",
    validUpto: "05.08.2028",
    branch: "Bamunimaidam Branch",
    status: "ACTIVE",
    instructor: "Amar Singh Deori",
  },
  {
    membershipNo: "2088",
    name: "Deepak Sharma",
    rank: "Black Belt I",
    bloodGroup: "AB+",
    dob: "19.05.1994",
    issueDate: "10.02.2024",
    validUpto: "10.02.2029",
    branch: "Delhi NCR Training Chapter",
    status: "ACTIVE",
    instructor: "Sifu Sankar Dutta",
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
    phone: "+91 78969 62207",
    timing: "Mon, Wed, Fri: 6:00 AM - 8:30 AM & 5:00 PM - 7:30 PM",
  },
  {
    id: "ghy-ne-academy",
    name: "North East Academy Training Ground",
    city: "Guwahati",
    state: "Assam",
    address: "North East Academy Playground, Bhetapara, Beltola, Guwahati",
    chiefInstructor: "Sifu Sankar Dutta",
    phone: "+91 90852 96178",
    timing: "Tue, Thu, Sat: 6:00 AM - 8:00 AM | Sun: 7:00 AM - 10:00 AM",
  },
  {
    id: "ghy-bamunimaidam",
    name: "Bamunimaidam Dojo & Admin Center",
    city: "Guwahati",
    state: "Assam",
    address: "H.No. 9, Bhaskar Nagar, Bamunimaidam, Guwahati - 781021",
    chiefInstructor: "Sifu Sankar Dutta",
    phone: "+91 88766 53722",
    timing: "Daily: 5:00 PM - 8:00 PM",
  },
  {
    id: "kolkata-wingchun",
    name: "WCMAAI Eastern Zonal Chapter",
    city: "Kolkata",
    state: "West Bengal",
    address: "Salt Lake Sector II, Kolkata",
    chiefInstructor: "Affiliated Senior Sifu",
    phone: "+91 78969 62207",
    timing: "Weekends: 7:00 AM - 10:00 AM",
  },
  {
    id: "delhi-ncr",
    name: "WCMAAI Northern Regional Dojo",
    city: "New Delhi",
    state: "Delhi NCR",
    address: "Rohini Sector 14 / Connaught Place Training Camp",
    chiefInstructor: "Authorized Technical Instructor",
    phone: "+91 90852 96178",
    timing: "Sat & Sun: 8:00 AM - 11:00 AM",
  },
  {
    id: "bangalore-wingchun",
    name: "WCMAAI Southern Academy",
    city: "Bengaluru",
    state: "Karnataka",
    address: "Indiranagar / Koramangala Martial Arts Studio",
    chiefInstructor: "Accredited Instructor",
    phone: "+91 88766 53722",
    timing: "Tue, Thu, Sat: 6:30 AM - 8:00 AM",
  },
];

export const UPCOMING_EVENT = {
  title: "35th Foundation Day Celebration & National Kung Fu Seminar",
  subTitle: "Wing Chun Martial Arts Association India",
  date: "Sunday, 6th September 2026",
  venue: "Bamunimaidam Bihu Mancha Auditorium, Guwahati, Assam",
  timings: "9:00 AM to 6:00 PM IST",
  registrationFee: "₹1,500 (Includes Official Certificate, Seminar Kit & Lunch)",
  highlights: [
    "Grand Wooden Dummy (Muk Yan Jong) Masterclass with Sifu Amar Singh Deori & Sifu Sankar Dutta",
    "National Belt & Sash Grading Examinations",
    "Chi Sau / Lat Sau Sparring Demonstrations",
    "Felicitation of Senior Sifus & National Competitors",
    "Commemorative 35th Foundation Day Badge & Certificate Distribution",
  ],
  upiPayment: {
    upiId: "duttasankar88@okhdfcbank",
    beneficiary: "Sankar Dutta / WCMAA India",
    note: "Mention your Name and '35thSeminar' in payment remarks",
  },
};
