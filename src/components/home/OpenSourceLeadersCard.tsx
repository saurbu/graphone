import Image from "next/image";
import { ChevronRight } from "lucide-react";

const companies = [
  {
    name: "Hugging Face",
    stat: "360K ★",
    logo: "/images/logos/huggingface.png",
  },
  {
    name: "Mistral AI",
    stat: "29K ★",
    logo: "/images/logos/mistral.png",
  },
  {
    name: "Ollama",
    stat: "95K ★",
    logo: "/images/logos/ollama.png",
  },
  {
    name: "Together AI",
    stat: "9K ★",
    logo: "/images/logos/together.png",
  },
  {
    name: "Databricks",
    stat: "9K ★",
    logo: "/images/logos/databricks.png",
  },
];

export default function OpenSourceLeadersCard() {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-emerald-900 bg-black p-6 shadow-xl">
      <Image
        src="/images/ui/open-source-bg.png"
        alt=""
        fill
        priority
        className="absolute inset-0 object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/60 to-black/80" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
            10
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              Open Source AI Leaders
            </h2>

            <p className="text-sm text-emerald-100/80">
              Leading the open-source AI movement.
            </p>
          </div>
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow transition duration-300 group-hover:translate-x-1">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-10 px-4 lg:px-8">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex items-center gap-3 p-4 backdrop-blur transition duration-300 hover:border-emerald-400/40"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white p-2">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain p-2"
              />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                {company.name}
              </h3>

              <p className="mt-1 text-sm text-emerald-200">
                {company.stat}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}