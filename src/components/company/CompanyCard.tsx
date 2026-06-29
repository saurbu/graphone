import Image from "next/image";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { Company } from "@/types/company";

interface Props {
  company: Company;
}

export default function CompanyCard({ company }: Props) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="group relative overflow-hidden rounded-3xl h-[360px] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >      <Image
        src={company.background}
        alt={company.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

      <div className="relative flex h-full flex-col justify-between p-6 text-white">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 border-grey-50 text-sm font-bold backdrop-blur">
          {String(company.rank).padStart(2, "0")}
        </span>

        <div>
          <h2 className="text-4xl font-bold">{company.name}</h2>
          <p className="mt-2 text-sm text-white/80">
            {company.category}
          </p>
          <p className="mt-5 max-w-xs leading-5 text-white/90">
            {company.description}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-black/40 px-4 py-2 backdrop-blur">
            <TrendingUp
              size={18}
              className="text-orange-400"
            />
            <span className="font-medium">
              Trending #{company.trending}
            </span>
          </div>

          <p className="mt-5 text-sm text-white/80">
            {company.views}
          </p>
        </div>
      </div>
    </Link>
  );
}