// src/data.js

export const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250",
  "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=250",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250",
];

export const logos = [
  { name: "Alpha", color: "text-gray-500" },
  { name: "Delta", color: "text-gray-500" },
  { name: "Beta", color: "text-gray-500" },
  { name: "Gamma", color: "text-gray-500" },
  { name: "Epsilon", color: "text-gray-500" },
  { name: "Zeta", color: "text-gray-500" },
  { name: "Eta", color: "text-gray-500" },
];

// Duplicate the logos array for seamless infinite looping in the slider
export const duplicatedLogos = [...avatars, ...logos];
