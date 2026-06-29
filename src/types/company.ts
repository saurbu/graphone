import { StaticImageData } from "next/image";

export type ImageType = StaticImageData | string;

export interface Company {
  id: number;
  rank: number;
  slug: string;

  name: string;
  category: string;
  description: string;

  logo: ImageType;
  graph: ImageType;
  background: ImageType;

  website: string;
  views: string;
  trending: number;

  growthScore: number;
  confidenceScore: number;

  founded: number;
  location: string;
  lastScraped: string;

  tags: string[];
}