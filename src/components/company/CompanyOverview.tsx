export default function CompanyOverview({ company }: any) {
  if (!company) return null;

  return (
    <section
      id="overview"
      className="mt-8 rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm"
    >
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900">
          Overview
        </h2>

        <p className="mt-6 text-[17px] leading-8 text-gray-600">
          {company.description}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">
              Founded
            </p>

            <p className="mt-2 text-xl font-semibold">
              {company.founded}
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">
              Headquarters
            </p>

            <p className="mt-2 text-xl font-semibold">
              {company.location}
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">
              Growth Score
            </p>

            <p className="mt-2 text-xl font-semibold">
              {company.growthScore}
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">
              Confidence
            </p>

            <p className="mt-2 text-xl font-semibold">
              {company.confidenceScore}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}