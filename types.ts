import { LucideIcon } from 'lucide-react';

export interface GlobalSettings {
  phoneNumber: string;
  instagramLink: string;
  youtubeLink: string;
  emailAddress: string;
  contactTitle?: string;
  contactDescription?: string;
}

export interface BusinessItem {
  id: string;
  name: string;
  location?: string; // e.g., "Erenler", "Sivas"
  address?: string; // Full address text
  description?: string; // e.g., "G360 AI ile 360° Gez!"
  linkUrl: string;
  imageUrl?: string; // Placeholder for card image
  tags?: string[];
  googlePlaceId?: string; // Google Maps Place ID for auto-linking
  rating?: number; // e.g. 4.7
  reviewCount?: number; // e.g. 1250 (Total number of reviews)
  phoneNumber?: string; // e.g. +90 ...
  websiteUrl?: string;
}

export interface CategoryNode {
  id: string;
  title: string;
  iconName?: string; // String reference to map to actual Icon component
  description?: string;
  children?: CategoryNode[]; // Subcategories (e.g., "5 Yıldızlı Otel")
  items?: BusinessItem[]; // Actual businesses within this category
  isSpecial?: boolean; // For highlighting specific sections
}