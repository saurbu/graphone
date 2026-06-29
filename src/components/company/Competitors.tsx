const competitors = [
  "Anthropic",
  "Google DeepMind",
  "Meta AI",
  "Mistral AI",
  "xAI",
];

export default function Competitors() {
  return (
    <section className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-100 px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Competitor Landscape
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Key players shaping the AI ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 p-8 sm:grid-cols-3 lg:grid-cols-5">
        {competitors.map((company) => (
          <div
            key={company}
            className="group flex cursor-pointer items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-5 text-center transition-all hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50/60 hover:shadow-md"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-sm font-bold text-gray-600 group-hover:bg-pink-100 group-hover:text-pink-600">
              {company.charAt(0)}
            </div>

            <span className="text-sm font-semibold text-gray-800">
              {company}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}