import Image from "next/image";
import { Globe, MapPin, Calendar, Users, BadgeCheck } from "lucide-react";

export default function CompanyHero({ company }: any) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

      <div className="">
        <Image
          src={company.background}
          alt={company.name}
          fill
          className="object-cover opacity-95"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />

      <div className="relative z-10 flex flex-col gap-8 p-8 lg:flex-row lg:items-center">

        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border bg-white shadow">
          <Image
            src={company.logo}
            alt={company.name}
            width={70}
            height={70}
            className="object-contain"
          />
        </div>

        <div className="flex-1">

          <div className="flex flex-wrap items-center gap-3">

            <h1 className="text-4xl font-bold">
              {company.name}
            </h1>

            <BadgeCheck
              size={24}
              className="fill-blue-500 text-white"
            />

          </div>

          <p className="mt-3 max-w-3xl text-lg text-gray-600">
            {company.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">

            {company.tags?.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600"
              >
                {tag}
              </span>
            ))}

          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <div className="flex items-center gap-3">

              <Calendar
                size={18}
                className="text-pink-500"
              />

              <div>

                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Founded
                </p>

                <p className="font-semibold">
                  {company.founded}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <MapPin
                size={18}
                className="text-pink-500"
              />

              <div>

                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Location
                </p>

                <p className="font-semibold">
                  {company.location}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Users
                size={18}
                className="text-pink-500"
              />

              <div>

                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Growth Score
                </p>

                <p className="font-semibold">
                  {company.growthScore}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <Globe
                size={18}
                className="text-pink-500"
              />

              <div>

                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Website
                </p>

                <a
                  href={company.website}
                  target="_blank"
                  className="font-semibold text-pink-600 hover:underline"
                >
                  Visit →
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}