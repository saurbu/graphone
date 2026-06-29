import Image from "next/image";
import Link from "next/link";
import growthBg from "@/assets/images/growth-bg.png";
import { ArrowRight } from "lucide-react";

export default function GrowthCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-200 to-rose-300 p-6 text-white shadow-lg">

      <Image
        src={growthBg}
        alt="Growth background"
        fill
        className="object-cover opacity-20"
      />

      <div className="relative z-10 flex h-full flex-col justify-between">

        <div>

          <h3 className="mt-2 text-2xl font-bold text-black leading-snug">
            Explore tomorrow's <br /> market leader <br /> Today.
          </h3>

          <p className="mt-3 text-sm text-gray-700">
            Discover companies with <br /> accelerating momentum,<br /> and
            market traction.
          </p>
        </div>

        <Link
          href="/growth"
          className="mt-6 inline-flex items-center gap-2 font-semibold bg-black p-1 rounded-lg w-45 gap-4 text-white hover:gap-5 px-2 transition-all"
        >
          Explore insights
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}