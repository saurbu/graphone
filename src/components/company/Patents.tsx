const patents = [
  {
    title: "Neural Architecture",
    desc: "Advanced structural design for scalable AI models",
    tag: "Core Research",
  },
  {
    title: "Inference Optimization",
    desc: "Reduced latency and improved runtime efficiency",
    tag: "Performance",
  },
  {
    title: "Model Compression",
    desc: "Efficient compression techniques for large models",
    tag: "Efficiency",
  },
];

export default function Patents() {
  return (
    <section className="rounded-[28px] border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="border-b border-gray-100 px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Patents
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Key innovations and AI system breakthroughs.
        </p>
      </div>

      <div className="px-8 py-6 space-y-5">

        {patents.map((p) => (
          <div
            key={p.title}
            className="
              flex items-start justify-between
              gap-6
              rounded-2xl
              border border-gray-100
              bg-white
              px-6 py-5
              hover:border-gray-300
              hover:shadow-sm
              transition
            "
          >
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900">
                {p.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {p.desc}
              </p>
            </div>

            <div className="shrink-0">
              <span className="
                inline-flex items-center
                rounded-full
                bg-gray-100
                px-3 py-1
                text-xs font-medium
                text-gray-600
              ">
                {p.tag}
              </span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}