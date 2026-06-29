import {
  Bot,
  Brain,
  Sparkles,
  ImageIcon,
  Code2,
  Cpu,
  Database,
  PencilRuler,
} from "lucide-react";

export const categories = [
  "All",
  "Chat",
  "Image",
  "Video",
  "Coding",
  "Voice",
  "Agents",
  "Research",
];

export const heroTags = [
  "ChatGPT",
  "AI Coding",
  "AI Agents",
  "Image Generation",
  "Video AI",
  "Startups",
];

export const collectionProducts = [
  {
    name: "Cursor",
    Icon: Code2,
    color: "bg-black",
  },
  {
    name: "Lovable",
    Icon: Sparkles,
    color: "bg-pink-500",
  },
  {
    name: "Bolt",
    Icon: Bot,
    color: "bg-purple-500",
  },
  {
    name: "V0",
    Icon: Brain,
    color: "bg-black",
  },
];

export const products = [
  {
    id: 1,
    name: "Cursor",
    tagline: "The AI Code Editor",
    description:
      "Write, edit and refactor code with an AI-first IDE built for developers.",
    category: "Coding",
    users: "1.9M",
    likes: 1240,
    comments: 81,
    featured: true,
    Icon: Code2,
    color: "bg-black",
  },
  {
    id: 2,
    name: "ChatGPT",
    tagline: "Your AI Assistant",
    description:
      "General-purpose conversational AI for coding, writing, research and productivity.",
    category: "Chat",
    users: "400M",
    likes: 4210,
    comments: 312,
    featured: false,
    Icon: Sparkles,
    color: "bg-emerald-500",
  },
  {
    id: 3,
    name: "Claude",
    tagline: "Reasoning AI",
    description:
      "Helpful AI assistant built for long context, reasoning and coding.",
    category: "Chat",
    users: "25M",
    likes: 1864,
    comments: 122,
    featured: false,
    Icon: Brain,
    color: "bg-orange-500",
  },
  {
    id: 4,
    name: "Midjourney",
    tagline: "Image Generation",
    description:
      "Create stunning AI-generated artwork from natural language prompts.",
    category: "Image",
    users: "18M",
    likes: 2894,
    comments: 164,
    featured: false,
    Icon: ImageIcon,
    color: "bg-indigo-600",
  },
  {
    id: 5,
    name: "ElevenLabs",
    tagline: "Voice AI",
    description:
      "Generate realistic AI voices with multilingual support.",
    category: "Voice",
    users: "12M",
    likes: 1455,
    comments: 74,
    featured: false,
    Icon: Bot,
    color: "bg-sky-500",
  },
  {
    id: 6,
    name: "Perplexity",
    tagline: "AI Search",
    description:
      "Answer complex questions using AI with cited web sources.",
    category: "Research",
    users: "40M",
    likes: 2158,
    comments: 113,
    featured: false,
    Icon: Database,
    color: "bg-cyan-500",
  },
  {
    id: 7,
    name: "Runway",
    tagline: "AI Video",
    description:
      "Professional AI tools for image and video generation.",
    category: "Video",
    users: "8M",
    likes: 1877,
    comments: 92,
    featured: false,
    Icon: Cpu,
    color: "bg-gray-900",
  },
  {
    id: 8,
    name: "Canva AI",
    tagline: "AI Design",
    description:
      "Create graphics, presentations and marketing assets using AI.",
    category: "Design",
    users: "150M",
    likes: 2630,
    comments: 140,
    featured: false,
    Icon: PencilRuler,
    color: "bg-blue-500",
  },
];

export const trending = [
  "AI Coding",
  "AI Agents",
  "OpenAI",
  "Claude 4",
  "Cursor",
  "Video AI",
  "Image Models",
  "Voice AI",
];