import openaiLogo from "@/assets/images/logos/openai.png";
import googleLogo from "@/assets/images/logos/google.png";
import anthropicLogo from "@/assets/images/logos/anthropic.png";
import mistralLogo from "@/assets/images/logos/mistral.png";

export const startups = [
  {
    id: 1,
    slug: "openai",
    name: "OpenAI",
    category: "Foundation Models",
    description: "Creators of ChatGPT and GPT models.",
    founded: 2015,
    location: "San Francisco, USA",
    employees: "3,000+",
    logo: openaiLogo,
    featured: true,
    gradient: "from-violet-100 via-purple-50 to-white",
  },
  {
    id: 2,
    slug: "google",
    name: "Google DeepMind",
    category: "AI Research",
    description: "Google's advanced AI research division.",
    founded: 2010,
    location: "London, UK",
    employees: "10,000+",
    logo: googleLogo,
    featured: false,
  },
  {
    id: 3,
    slug: "anthropic",
    name: "Anthropic",
    category: "Foundation Models",
    description: "Building safe frontier AI models.",
    founded: 2021,
    location: "San Francisco, USA",
    employees: "500+",
    logo: anthropicLogo,
    featured: false,
  },
  {
    id: 4,
    slug: "mistral",
    name: "Mistral AI",
    category: "Open Models",
    description: "European frontier AI company.",
    founded: 2023,
    location: "Paris, France",
    employees: "200+",
    logo: mistralLogo,
    featured: true,
    gradient: "from-orange-50 via-yellow-50 to-orange-200",
  },
];