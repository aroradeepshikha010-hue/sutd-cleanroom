export interface Publication {
  title: string;
  journal: string;
  year: number | string;
  description: string;
  imageSrc?: string;
}

export const journals = [
  "Nature Nanotechnology",
  "Nature Communications",
  "Science Advances",
  "ACS Nano",
  "Nano Letters",
  "Nanophotonics",
  "Small",
  "Advanced Optical Materials",
  "Optical Materials Express",
];

export const highlights: Publication[] = [
  {
    title: "Highest Resolution Color Prints",
    journal: "Nature Nanotechnology",
    year: 2012,
    description: "Achieving the highest resolution color prints through plasmonic nanostructures, setting a world record in structural color printing.",
    imageSrc: "/sutd-cleanroom/images/research/NatNano1png.png",
  },
  {
    title: "Hybrid Au-Si Yagi Uda Nanoantenna",
    journal: "Nano Letters / ACS Nano",
    year: "2015 / 2018",
    description: "Pioneering hybrid gold-silicon Yagi-Uda nanoantennas for directional light emission at the nanoscale.",
    imageSrc: "/sutd-cleanroom/images/research/Hybrid Au Si.png",
  },
  {
    title: "Tiniest Color 3D Prints",
    journal: "ACS Nano",
    year: 2022,
    description: "Creating the world's tiniest color 3D prints using two-photon polymerization lithography with sub-micron structural color.",
    imageSrc: "/sutd-cleanroom/images/research/Tiniest Color 3D Prints.png",
  },
  {
    title: "Multilayer Achromatic Metalens",
    journal: "Nature Communications",
    year: 2019,
    description: "Development of achromatic metalenses using multilayer 3D-printed nanostructures for broadband focusing.",
    imageSrc: "/sutd-cleanroom/images/research/multilayer achromatic1.png",
  },
  {
    title: "Holographic Color Prints",
    journal: "Science Advances",
    year: 2023,
    description: "Creating holographic full-color prints using advanced nanofabrication and two-photon polymerization techniques.",
    imageSrc: "/sutd-cleanroom/images/research/Holographic.jpg",
  },
  {
    title: "Print & Shrink 3D Nanostructures",
    journal: "Nature Communications",
    year: 2023,
    description: "3D-printed polymer nanostructures shrunk to sub-wavelength dimensions, enabling complex geometries at the nanoscale with structural color.",
    imageSrc: "/sutd-cleanroom/images/research/Nat Commun.png",
  },
  {
    title: "Holographic Nanostructures",
    journal: "Science Advances",
    year: 2023,
    description: "High-resolution SEM imaging of layered nanostructures with 200 nm feature precision for advanced photonic applications.",
    imageSrc: "/sutd-cleanroom/images/research/Sci Adv.png",
  },
  {
    title: "Complete Photonic Bandgap in the Visible",
    journal: "Nature Nanotechnology",
    year: 2024,
    description: "Achieving a complete photonic bandgap in the visible spectrum through 3D nanostructured butterfly-inspired architectures.",
    imageSrc: "/sutd-cleanroom/images/research/NatNano1.png",
  },
];
