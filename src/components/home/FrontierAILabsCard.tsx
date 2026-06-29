import Image from "next/image";
import { ChevronRight } from "lucide-react";

const labs = [
  {
    name: "OpenAI",
    logo: "/images/logos/openai.png",
  },
  {
    name: "Anthropic",
    logo: "/images/logos/anthropic.png",
  },
  {
    name: "Google DeepMind",
    logo: "/images/logos/deepmind.png",
  },
  {
    name: "xAI",
    logo: "/images/logos/xai.png",
  },
  {
    name: "Meta AI",
    logo: "/images/logos/meta.png",
  },
  {
    name: "SSI",
    logo: "/images/logos/ssi.jpg",
  },
];

export default function FrontierAILabsCard() {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-[#030d2b] p-6 shadow-lg">

      <Image
        src="/images/ui/frontier-bg.png"
        alt=""
        fill
        priority
        className="absolute inset-0 object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-slate-950/50" />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
              9
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                Frontier AI Labs
              </h2>

              <p className="text-sm text-slate-300">
                Organizations advancing the state-of-the-art.
              </p>
            </div>
          </div>
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow transition group-hover:translate-x-1">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-12 px-4 lg:px-8">
        {labs.map((lab) => (
          <div
            key={lab.name}
            className="flex items-center justify-center gap-3 p-5 backdrop-blur-sm transition"
          >
            <div className="relative h-10 w-12">
              <Image
                src={lab.logo}
                alt={lab.name}
                fill
                className="object-contain"
              />
            </div>

            <span className="text-sm font-medium text-white">
              {lab.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}