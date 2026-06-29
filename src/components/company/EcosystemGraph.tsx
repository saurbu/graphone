import {
  Brain,
  Database,
  Cloud,
  Cpu,
  Bot,
  Network,
} from "lucide-react";

const nodes = [
  { name: "ChatGPT", type: "products", color: "text-green-600", x: 50, y: 20 },
  { name: "GPT-4o", type: "products", color: "text-green-600", x: 70, y: 25 },
  { name: "Codex", type: "products", color: "text-green-600", x: 85, y: 40 },
  { name: "Sora", type: "products", color: "text-green-600", x: 90, y: 60 },

  { name: "Microsoft", type: "investors", color: "text-rose-500", x: 80, y: 80 },
  { name: "Sequoia", type: "investors", color: "text-rose-500", x: 60, y: 90 },
  { name: "a16z", type: "investors", color: "text-rose-500", x: 40, y: 90 },
  { name: "SoftBank", type: "investors", color: "text-rose-500", x: 20, y: 80 },

  { name: "Anthropic", type: "competitors", color: "text-blue-500", x: 10, y: 60 },
  { name: "Mistral", type: "competitors", color: "text-blue-500", x: 15, y: 40 },
  { name: "xAI", type: "competitors", color: "text-blue-500", x: 25, y: 25 },
  { name: "DeepMind", type: "competitors", color: "text-blue-500", x: 40, y: 15 },

  { name: "Rockset", type: "acq", color: "text-purple-500", x: 30, y: 30 },
  { name: "Figure", type: "acq", color: "text-purple-500", x: 35, y: 50 },

  { name: "Harvey", type: "investment", color: "text-orange-500", x: 55, y: 10 },
];

const centerX = 50;
const centerY = 50;

export default function EcosystemGraph() {
  return (
    <section className="mt-8 bg-gradient-to-br from-white via-gray-50 to-pink-50/30 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className=" px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-900">
          AI Ecosystem Graph
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Radial view of products, investors, competitors, and acquisitions
        </p>
      </div>

      <div className="relative h-[600px]  overflow-hidden">
        
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/25 blur-3xl" />
          <div className="absolute left-1/3 top-1/3 h-[320px] w-[320px] rounded-full bg-blue-200/20 blur-3xl" />
        </div>

        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="radial" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {nodes.map((node) => (
            <line
              key={node.name}
              x1={`${centerX}%`}
              y1={`${centerY}%`}
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="url(#radial)"
              strokeWidth="1.5"
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-pink-300/30" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl border border-pink-200">
              <Brain className="text-pink-500" size={28} />
            </div>
          </div>
          <p className="mt-2 text-sm font-semibold text-gray-700">OpenAI</p>
        </div>

        {nodes.map((node) => {
          const Icon = Network;

          return (
            <div
              key={node.name}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
            >
              <div className="absolute inset-0 scale-125 rounded-full opacity-0 blur-xl transition group-hover:opacity-100 bg-pink-300/30" />

              <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition-all group-hover:scale-105 group-hover:shadow-md">
                <span className={`h-2.5 w-2.5 rounded-full ${node.color.replace("text", "bg")}`} />
                <span className={`text-sm font-medium ${node.color}`}>
                  {node.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}