import { Company } from "@/types/company";

import bg1 from "@/assets/images/bg1.jpg";
import bg2 from "@/assets/images/bg2.jpg";
import bg3 from "@/assets/images/bg3.jpg";
import bg4 from "@/assets/images/bg4.jpg";
import bg5 from "@/assets/images/bg5.jpg";

import openaiLogo from "@/assets/images/logos/openai.png";
import googleLogo from "@/assets/images/logos/google.png";
import anthropicLogo from "@/assets/images/logos/anthropic.png";
import metaLogo from "@/assets/images/logos/meta.png";
import mistralLogo from "@/assets/images/logos/mistral.png";

import openaiGraph from "@/assets/images/growth/openai-growth.png";
import googleGraph from "@/assets/images/growth/google-growth.png";
import anthropicGraph from "@/assets/images/growth/anthropic-growth.png";
import metaGraph from "@/assets/images/growth/meta-growth.png";
import mistralGraph from "@/assets/images/growth/mistral-growth.png";

export const companies: Company[] = [
  {
    id: 1,
    rank: 1,
    slug: "openai",
    name: "OpenAI",
    category: "Foundation Models",
    description: "Creators of ChatGPT and GPT models.",
    logo: openaiLogo,
    graph: openaiGraph,
    background: bg1,
    website: "https://openai.com",
    views: "48.2K Views",
    trending: 1,
    growthScore: 100,
    confidenceScore: 100,
    founded: 2015,
    location: "San Francisco, USA",
    lastScraped: "30 mins ago",
    tags: ["LLM", "GPT", "Research"]
  },

  {
    id: 2,
    rank: 2,
    slug: "google",
    name: "Google DeepMind",
    category: "AI Research",
    description: "Google's advanced artificial intelligence research lab.",
    logo: googleLogo,
    graph: googleGraph,
    background: bg2,
    website: "https://deepmind.google",
    views: "39.8K Views",
    trending: 2,
    growthScore: 98,
    confidenceScore: 99,
    founded: 2010,
    location: "London, UK",
    lastScraped: "1 hour ago",
    tags: ["Gemini", "Research", "AI"]
  },

  {
    id: 3,
    rank: 3,
    slug: "anthropic",
    name: "Anthropic",
    category: "Foundation Models",
    description: "Creators of Claude AI.",
    logo: anthropicLogo,
    graph: anthropicGraph,
    background: bg3,
    website: "https://anthropic.com",
    views: "28.4K Views",
    trending: 3,
    growthScore: 96,
    confidenceScore: 98,
    founded: 2021,
    location: "San Francisco, USA",
    lastScraped: "Today",
    tags: ["Claude", "LLM", "Safety"]
  },

  {
    id: 4,
    rank: 4,
    slug: "meta",
    name: "Meta AI",
    category: "Open Source AI",
    description: "Developers of Llama and Meta AI.",
    logo: metaLogo,
    graph: metaGraph,
    background: bg4,
    website: "https://ai.meta.com",
    views: "25.6K Views",
    trending: 4,
    growthScore: 94,
    confidenceScore: 97,
    founded: 2023,
    location: "California, USA",
    lastScraped: "Today",
    tags: ["Llama", "Open Source"]
  },

  {
    id: 5,
    rank: 5,
    slug: "mistral",
    name: "Mistral AI",
    category: "Foundation Models",
    description: "European frontier AI company building open models.",
    logo: mistralLogo,
    graph: mistralGraph,
    background: bg5,
    website: "https://mistral.ai",
    views: "18.9K Views",
    trending: 5,
    growthScore: 93,
    confidenceScore: 96,
    founded: 2023,
    location: "Paris, France",
    lastScraped: "Yesterday",
    tags: ["LLM", "Open Weight", "Europe"]
  }
];