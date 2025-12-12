export interface ShopData {
  id: string;
  name: string;
  color: string;
  logoText: string;
  logoBg: string;
  logoUrl?: string; // Optional field for actual logo image URL
  offerings: string;
  serviceScore: number;
  delivery: string;
  usp: string;
  ctaLink: string;
  pros: string[];
}

export interface Review {
  id: string;
  shopId: string; // Refers to ShopData.id
  author: string;
  date: string;
  rating: number;
  text: string;
  verified: boolean;
}