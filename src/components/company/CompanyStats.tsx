import {
  TrendingUp,
  ShieldCheck,
  Eye,
  BarChart3,
  Calendar,
  MapPin,
} from "lucide-react";

export default function CompanyStats({ company }: any) {
  const stats = [
    {
      title: "Growth Score",
      value: company.growthScore,
      icon: TrendingUp,
      color: "text-green-600 bg-green-100",
    },
    {
      title: "Confidence",
      value: `${company.confidenceScore}%`,
      icon: ShieldCheck,
      color: "text-blue-600 bg-blue-100",
    },
    {
      title: "Monthly Views",
      value: company.views,
      icon: Eye,
      color: "text-pink-600 bg-pink-100",
    },
    {
      title: "Ranking",
      value: `#${company.rank}`,
      icon: BarChart3,
      color: "text-orange-600 bg-orange-100",
    },
    {
      title: "Founded",
      value: company.founded,
      icon: Calendar,
      color: "text-violet-600 bg-violet-100",
    },
    {
      title: "Location",
      value: company.location,
      icon: MapPin,
      color: "text-red-600 bg-red-100",
    },
  ];

  return (
    <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Company Statistics</h2>

        <p className="mt-1 text-sm text-gray-500">
          Key performance indicators and company overview.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
              >
                <Icon size={22} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                {item.title}
              </p>

              <h3 className="mt-1 text-2xl font-bold break-words">
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 p-5 text-white">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm opacity-90">
              Last Updated
            </p>

            <h3 className="text-lg font-semibold">
              {company.lastScraped}
            </h3>
          </div>

          <div className="text-right">
            <p className="text-sm opacity-90">
              Trending Rank
            </p>

            <h3 className="text-3xl font-bold">
              #{company.trending}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}