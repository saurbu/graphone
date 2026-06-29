import Image from "next/image";
import Link from "next/link";

export default function GrowthCompanyCard({ company }: any) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-gray-200  p-4 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src={company.graph}
        alt=""
        fill
        className="object-cover opacity-80 group-hover:opacity-100 transition"
      />

      <div className="absolute inset-0 bg-white/50" />
      <div className="relative z-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
          <Image
            src={company.logo}
            alt={company.name}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>

        <h3 className="mt-4 text-base font-semibold text-gray-900">
          {company.name}
        </h3>

        <p className="text-xs text-gray-500">{company.category}</p>

      </div>
    </Link>
  );
}