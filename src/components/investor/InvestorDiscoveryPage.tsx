"use client";

const investorTypes = [
  { name: "Seed Investors", count: "1,240 investors", color: "from-emerald-400/10 to-white" },
  { name: "Series A Investors", count: "890 investors", color: "from-purple-400/10 to-white" },
  { name: "Angel Investors", count: "2,300 investors", color: "from-blue-400/10 to-white" },
  { name: "Corporate Venture Funds", count: "612 investors", color: "from-gray-400/10 to-white" },
  { name: "Late Stage Investors", count: "432 investors", color: "from-orange-400/10 to-white" },
  { name: "Family Offices", count: "218 investors", color: "from-pink-400/10 to-white" },
];

const trending = [
  { name: "a16z", color: "from-orange-500 to-pink-500" },
  { name: "Sequoia", color: "from-emerald-500 to-green-700" },
  { name: "Lightspeed", color: "from-blue-500 to-indigo-700" },
  { name: "Khosla", color: "from-gray-800 to-black" },
  { name: "Accel", color: "from-purple-500 to-pink-600" },
  { name: "General Catalyst", color: "from-zinc-700 to-zinc-900" },
];

export default function InvestorDiscoveryPage() {
  return (
    <main className="relative w-full bg-[#f8fafc] overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] right-0 w-[500px] h-[500px] bg-blue-300/20 blur-[120px] rounded-full" />

      <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Discover Investors <br />
            Building the <span className="text-pink-500">AI Economy</span>
          </h1>

          <p className="text-gray-500 mt-5 max-w-md text-base">
            Find VCs, angels, operators, corporate funds and emerging managers backing the next generation of AI companies.
          </p>

          <div className="mt-6 flex items-center bg-white border shadow-md rounded-2xl px-4 py-3">
            <input
              placeholder="Search investors, funds, firms..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-xl text-sm">
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {["AI Agents", "Seed", "Series A", "YC", "India", "OpenAI"].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-white border shadow-sm text-gray-600 hover:scale-105 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-[420px]">
          <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl px-5 py-3 text-sm border">
            <div className="font-semibold">a16z</div>
            <div className="text-xs text-gray-400">Andreessen Horowitz</div>
          </div>

          <div className="absolute top-0 right-8 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl px-5 py-3 text-sm border scale-105">
            <div className="font-semibold">Sequoia</div>
            <div className="text-xs text-gray-400">Sequoia Capital</div>
          </div>

          <div className="absolute bottom-10 right-4 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl px-5 py-3 text-sm border">
            <div className="font-semibold">Lightspeed</div>
            <div className="text-xs text-gray-400">Venture Partners</div>
          </div>

          <div className="absolute bottom-0 left-10 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl px-5 py-3 text-sm border scale-95 opacity-90">
            <div className="font-semibold">Accel</div>
            <div className="text-xs text-gray-400">Accel Partners</div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-pink-400/20 blur-3xl rounded-full" />
        </div>
      </section>

    </main>
  );
}