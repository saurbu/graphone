const news = [
  "Released GPT-5",
  "Raised new funding",
  "Opened new office",
  "Partnered with Microsoft",
];

export default function LatestNews() {
  return (
    <section className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-100 px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Latest News
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Recent updates and milestones.
        </p>
      </div>

      <div className="relative px-8 py-6">
        <div className="absolute left-11 top-0 h-full w-px bg-gradient-to-b from-pink-200 via-gray-200 to-transparent" />

        <div className="space-y-6">
          {news.map((item, index) => (
            <div
              key={item}
              className="group relative flex items-start gap-4"
            >
              <div className="relative z-10 mt-1 flex h-5 w-5 items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-pink-500 shadow-sm group-hover:scale-125 transition" />
              </div>

              <div className="flex-1 rounded-2xl border border-gray-200 bg-white px-5 py-4 transition-all hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50/40 hover:shadow-md">
                <p className="text-sm font-semibold text-gray-800">
                  {item}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {index === 0
                    ? "Latest update"
                    : index === 1
                    ? "Recent milestone"
                    : "Company activity"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}