export type Gender = "men" | "women" | "kids" | "unisex";

export type Product = {
  id: string;
  name: string;
  tag: string;
  gender: Gender;
  price: number;
  mrp?: number;
  colorway: string;
  image: string;
  swatch: string;
  badge?: string;
};

const unsplash = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=80`;

export const products: Product[] = [
  {
    id: "ember",
    name: "Ember Court",
    tag: "Sneakers",
    gender: "men",
    price: 3499,
    mrp: 4999,
    colorway: "Scarlet / Ivory",
    image: unsplash("photo-1542291026-7eec264c27ff"),
    swatch: "#c43b2a",
    badge: "Bestseller",
  },
  {
    id: "monsoon",
    name: "Monsoon High",
    tag: "High-tops",
    gender: "men",
    price: 4299,
    mrp: 5499,
    colorway: "Slate / Bone",
    image: unsplash("photo-1551107696-a4b0c5a0d9a2"),
    swatch: "#2b2f33",
  },
  {
    id: "terra",
    name: "Terra Trail",
    tag: "Outdoor",
    gender: "unisex",
    price: 5299,
    mrp: 6799,
    colorway: "Clay / Rust",
    image: unsplash("photo-1595950653106-6c9ebd614d3a"),
    swatch: "#c7622c",
    badge: "New",
  },
  {
    id: "solace",
    name: "Solace Low",
    tag: "Everyday",
    gender: "women",
    price: 2999,
    mrp: 3999,
    colorway: "Bone / Cream",
    image: unsplash("photo-1600185365483-26d7a4cc7519"),
    swatch: "#efe8dc",
  },
  {
    id: "noir",
    name: "Noir Dress",
    tag: "Formal",
    gender: "men",
    price: 4799,
    mrp: 5999,
    colorway: "Obsidian / Jet",
    image: unsplash("photo-1549298916-b41d501d3772"),
    swatch: "#0f0f10",
  },
  {
    id: "horizon",
    name: "Horizon Chunky",
    tag: "Lifestyle",
    gender: "women",
    price: 5999,
    mrp: 7499,
    colorway: "Fog / Pistachio",
    image: unsplash("photo-1552346154-21d32810aba3"),
    swatch: "#9fb28a",
    badge: "Limited",
  },
  {
    id: "classic",
    name: "Classic Canvas",
    tag: "Casual",
    gender: "unisex",
    price: 1999,
    mrp: 2799,
    colorway: "Ivory / Gum",
    image: unsplash("photo-1584735175315-9d5df23860e6"),
    swatch: "#f3eadc",
  },
  {
    id: "runner",
    name: "City Runner",
    tag: "Running",
    gender: "men",
    price: 4499,
    mrp: 5499,
    colorway: "Ash / Lime",
    image: unsplash("photo-1491553895911-0055eca6402d"),
    swatch: "#b9c25a",
  },
];

export const heroImage = unsplash("photo-1460353581641-37baddab0fa2", 1600);
export const storyImage = unsplash("photo-1491553895911-0055eca6402d", 1200);

// Category tiles
export const categories = [
  {
    id: "men",
    label: "Men",
    tagline: "Everyday to extraordinary",
    image: unsplash("photo-1551107696-a4b0c5a0d9a2", 900),
    count: 142,
  },
  {
    id: "women",
    label: "Women",
    tagline: "From morning run to midnight",
    image: unsplash("photo-1543163521-1bf539c55dd2", 900),
    count: 168,
  },
  {
    id: "kids",
    label: "Kids",
    tagline: "Tiny feet, big adventures",
    image: unsplash("photo-1596461404969-9ae70f2830c1", 900),
    count: 54,
  },
  {
    id: "accessories",
    label: "Accessories",
    tagline: "Laces, care kits, polish",
    image: unsplash("photo-1620799140408-edc6dcb6d633", 900),
    count: 28,
  },
];
