import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  command: string;
}

export interface PricingTier {
  name: string;
  price: string;
  audience: string;
  features: string[];
  isPopular?: boolean;
}

export interface RoadmapPhase {
  version: string;
  focus: string;
  timeline: string;
  status: 'live' | 'current' | 'planned';
  items: string[];
}

export interface Advantage {
  category: string;
  description: string;
}