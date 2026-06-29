import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/images/hero.png"
import { Bot, Code, Search, Video, Mic, Server } from "lucide-react";

const navLinks = [
  { name: "AI Agent", href: "/", icon: Bot },
  { name: "AI Coding", href: "/", icon: Code },
  { name: "AI Search", href: "/", icon: Search },
  { name: "AI Video", href: "/", icon: Video },
  { name: "AI Voice", href: "/", icon: Mic },
  { name: "AI Infrastructure", href: "/", icon: Server },
];

 export default function Hero() {
  return (
    <main className="">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
            
            <div className="w-full lg:w-1/2">
            <p className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pink-500">
                AI Companies
            </p>

            <h1 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl lg:text-5xl">
                Discover the world's <br />
                most innovative <br />
                AI Companies
            </h1>

            <p className="mt-6 text-sm text-gray-500 sm:text-lg lg:text-lg">
                Explore AI startups, unicorns, frontier labs, and emerging <br />
                companies shaping the future of artificial intelligence.
            </p>

            <div className="mt-6 flex w-full max-w-xl items-center rounded-full border border-gray-300 bg-white pl-4 shadow-sm focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-100">
                <Search className="h-5 w-5 text-gray-400" />

                <input
                type="text"
                placeholder="Search companies, products..."
                className="flex-1 bg-transparent px-3 py-4 outline-none"
                />

                <button className="m-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-rose-300 transition hover:scale-105">
                <Search className="h-5 w-5 text-white" />
                </button>
            </div>
            </div>

            <div className="hidden w-full lg:flex lg:w-1/2 justify-center">            
            <Image
                src={heroImg}
                alt="Hero"
                width={700}
                height={500}
                priority
                className="h-auto w-full max-w-xl"
            />
            </div>
        </div>
        <div className="flex gap-2 items-center mt-8">
            <nav className=" flex flex-wrap gap-2">
                {navLinks.map(({ name, href, icon: Icon }) => (
                <Link
                    key={name}
                    href={href}
                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-2 transition-all hover:border-pink-400 hover:bg-pink-50"
                >
                    <Icon className="h-4 w-4 text-pink-500" />
                    <span className="font-small">{name}</span>
                </Link>
                ))}
            </nav>
            <select name="More" id="" className="flex w-20 items-center rounded-full border border-gray-200 bg-white px-2 py-2.5 transition-all hover:border-pink-400 hover:bg-pink-50">
                <option value="More">More</option>
                <option value="More">More</option>
                <option value="More">More</option>
                <option value="More">More</option>
            </select>
        </div>

        </main>
  );
}