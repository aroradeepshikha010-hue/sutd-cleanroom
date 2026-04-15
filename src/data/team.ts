export interface TeamMember {
  name: string;
  role: string;
  title?: string;
  tier: "leadership" | "pi" | "technical";
  imageSrc?: string;
}

export const team: TeamMember[] = [
  // Leadership
  {
    name: "Ricky Ang",
    role: "Professor",
    title: "Assoc. Provost (Research & International Relations)",
    tier: "leadership",
  },
  {
    name: "Joel Yang",
    role: "Professor",
    title: "Director (Cleanroom), Associate Head EPD",
    tier: "leadership",
  },
  {
    name: "Zhaogang Dong",
    role: "Associate Professor, SMT",
    title: "Deputy Director, Cleanroom",
    tier: "leadership",
  },

  // Principal Investigators
  {
    name: "Hong Yee Low",
    role: "Principal Investigator",
    tier: "pi",
  },
  {
    name: "Dawn Tan",
    role: "Principal Investigator",
    title: "Provost's Chair Professor, EPD",
    tier: "pi",
  },
  {
    name: "Shubhakar Kalya",
    role: "Principal Investigator",
    tier: "pi",
  },
  {
    name: "Ye Ai",
    role: "Principal Investigator",
    title: "Co-Deputy Director (CHEERS)",
    tier: "pi",
  },
  {
    name: "Raghavan Nagarajan",
    role: "Principal Investigator",
    tier: "pi",
  },
  {
    name: "Shireen Goh",
    role: "Principal Investigator",
    tier: "pi",
  },
  {
    name: "Lin Wu",
    role: "Principal Investigator",
    tier: "pi",
  },
  {
    name: "Tee Hui Teo",
    role: "Principal Investigator",
    tier: "pi",
  },
  // Technical Staff
  {
    name: "Budiman Salam",
    role: "Specialist",
    tier: "technical",
  },
  {
    name: "Sethu Narayanan Tamilselvan",
    role: "Senior Specialist",
    tier: "technical",
  },
];
