const collections = [
  {
    title: "Foundation Models",
    desc: "Large-scale pretrained AI systems",
  },
  {
    title: "Most Visited",
    desc: "Frequently explored AI resources",
  },
  {
    title: "Trending",
    desc: "Hot and rising AI topics",
  },
  {
    title: "Enterprise AI",
    desc: "Business-focused AI solutions",
  },
];

export default function Collections() {
  return (
    <section className="mt-8 rounded-[28px] border border-gray-200 bg-white shadow-sm overflow-hidden">

      <div className="border-b border-gray-100 px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Collections
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Explore curated AI knowledge categories.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50">

        {collections.map((item) => (
          <div
            key={item.title}
            className="
              group
              relative
              rounded-2xl
              border border-gray-200
              bg-white
              p-6
              hover:shadow-md
              hover:-translate-y-1
              transition-all duration-300
              cursor-pointer
            "
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white to-gray-50 pointer-events-none" />

            <div className="relative z-10">

              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-500 transition">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {item.desc}
              </p>

              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                  AI Category
                </span>

                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs text-pink-500">
                  Explore
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}