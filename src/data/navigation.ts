import {
  Sparkles,
  Building2,
  Users,
  Briefcase,
  Newspaper,
  Brain,
  Bookmark,
  Landmark,
} from "lucide-react";

export const navigation = [
  {
    name: "Companies",
    href: "/companies",
    icon: Building2,
    showInNavbar: true,
    showInSidebar: true,
  },
  {
    name: "Products",
    href: "/products",
    icon: Sparkles,
    showInNavbar: true,
    showInSidebar: true,
  },
  {
    name: "Investors",
    href: "/investors",
    icon: Users,
    showInNavbar: true,
    showInSidebar: true,
  },
  {
    name: "Funding",
    href: "/funding",
    icon: Landmark,
    showInNavbar: true,
    showInSidebar: true,
  },
  {
    name: "Jobs",
    href: "/jobs",
    icon: Briefcase,
    showInNavbar: true,
    showInSidebar: true,
  },
  {
    name: "News",
    href: "/news",
    icon: Newspaper,
    showInNavbar: true,
    showInSidebar: true,
  },
  {
    name: "Collections",
    href: "/collections",
    icon: Bookmark,
    showInNavbar: false,
    showInSidebar: true,
  },
];