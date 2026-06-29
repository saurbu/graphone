import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Company } from "@/types/company";

interface Props {
  company: Company;
}

export default function CompanyListCard({ company }: Props) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="group flex h-[170px] items-center justify-between rounded-3xl border border-gray-200 bg-gradient-to-r from-pink-200 to-violet-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
          {String(company.rank).padStart(2, "0")}
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {company.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {company.category}
            </p>
          </div>

          <p className="text-sm text-gray-400">
            {company.views}
          </p>
        </div>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white">
        <ChevronRight size={18} />
      </div>
    </Link>
  );
}