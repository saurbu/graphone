import { FileText } from "lucide-react";

const papers = [
  "GPT-4 Technical Report",
  "Scaling Laws for Language Models",
  "Alignment Research",
  "Reasoning Models",
];

export default function ResearchPapers() {
  return (
    <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-100 px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Research Papers
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Key publications and foundational AI research.
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {papers.map((paper, index) => (
          <div
            key={paper}
            className="group flex items-center justify-between px-8 py-5 transition hover:bg-pink-50/40"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-600 group-hover:bg-pink-100 group-hover:text-pink-600 transition">
                <FileText size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-pink-700 transition">
                  {paper}
                </h3>
                <p className="text-xs text-gray-500">
                  {index === 0
                    ? "Most cited technical paper"
                    : index === 1
                    ? "Core scaling theory research"
                    : index === 2
                    ? "AI alignment study"
                    : "Advanced reasoning exploration"}
                </p>
              </div>
            </div>

            <div className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-600 group-hover:border-pink-300 group-hover:text-pink-600">
              PDF
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}