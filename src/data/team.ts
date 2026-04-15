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
    imageSrc: "/sutd-cleanroom/images/team/ricky-ang.png",
  },
  {
    name: "Joel Yang",
    role: "Professor",
    title: "Director (Cleanroom), Associate Head EPD",
    tier: "leadership",
    imageSrc: "/sutd-cleanroom/images/team/joel-yang.png",
  },
  {
    name: "Zhaogang Dong",
    role: "Associate Professor, SMT",
    title: "Deputy Director, Cleanroom",
    tier: "leadership",
    imageSrc: "/sutd-cleanroom/images/team/zhaogang-dong.png",
  },

  // Principal Investigators
  {
    name: "Hong Yee Low",
    role: "Principal Investigator",
    tier: "pi",
    imageSrc: "/sutd-cleanroom/images/team/hong-yee-low.png",
  },
  {
    name: "Dawn Tan",
    role: "Principal Investigator",
    title: "Provost's Chair Professor, EPD",
    tier: "pi",
    imageSrc: "/sutd-cleanroom/images/team/dawn-tan.png",
  },
  {
    name: "Shubhakar Kalya",
    role: "Principal Investigator",
    tier: "pi",
    imageSrc: "/sutd-cleanroom/images/team/shubhakar-kalya.png",
  },
  {
    name: "Ye Ai",
    role: "Principal Investigator",
    title: "Co-Deputy Director (CHEERS)",
    tier: "pi",
    imageSrc: "/sutd-cleanroom/images/team/ye-ai.png",
  },
  {
    name: "Raghavan Nagarajan",
    role: "Principal Investigator",
    tier: "pi",
    imageSrc: "/sutd-cleanroom/images/team/natrajan.jpeg",
  },
  {
    name: "Shireen Goh",
    role: "Principal Investigator",
    tier: "pi",
    imageSrc: "/sutd-cleanroom/images/team/shireen-goh.png",
  },
  {
    name: "Lin Wu",
    role: "Principal Investigator",
    tier: "pi",
    imageSrc: "/sutd-cleanroom/images/team/lin-wu.png",
  },
  {
    name: "Tee Hui Teo",
    role: "Principal Investigator",
    tier: "pi",
    imageSrc: "/sutd-cleanroom/images/team/teo-hui.png",
  },
  // Technical Staff
  {
    name: "Sethu Narayanan Tamilselvan",
    role: "Senior Specialist",
    tier: "technical",
    imageSrc: "/sutd-cleanroom/images/team/sethu-narayanan.png",
  },
  {
    name: "Budiman Salam",
    role: "Specialist",
    tier: "technical",
    imageSrc: "/sutd-cleanroom/images/team/budiman-salam.png",
  },
];
