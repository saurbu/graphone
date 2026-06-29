import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "ChatGPT",
    category: "AI Assistant",
    description: "Conversational AI assistant powered by GPT models.",
    logo: "/products/chatgpt.png",
    users: "500M+ Users",
  },
  {
    id: 2,
    name: "Sora",
    category: "Video Generation",
    description: "Generate realistic videos from natural language.",
    logo: "/products/sora.png",
    users: "Preview",
  },
  {
    id: 3,
    name: "DALL·E",
    category: "Image Generation",
    description: "Create stunning images using AI prompts.",
    logo: "/products/dalle.png",
    users: "100M+ Images",
  },
  {
    id: 4,
    name: "Operator",
    category: "AI Agent",
    description: "AI that can perform tasks on the web.",
    logo: "/products/operator.png",
    users: "Research Preview",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="mt-8 scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Products</h2>
          <p className="mt-1 text-gray-500">
            AI products developed by the company.
          </p>
        </div>

        <button className="rounded-full border px-5 py-2 text-sm font-medium hover:bg-gray-50">
          View All
        </button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
                <Image
                  src={product.logo}
                  alt={product.name}
                  width={36}
                  height={36}
                />
              </div>

              <ArrowUpRight className="text-gray-400 transition group-hover:text-pink-500" />
            </div>

            <h3 className="mt-6 text-xl font-bold">
              {product.name}
            </h3>

            <p className="mt-1 text-sm font-medium text-pink-600">
              {product.category}
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              {product.description}
            </p>

            <div className="mt-8 flex items-center justify-between border-t pt-4">
              <span className="text-sm text-gray-500">
                {product.users}
              </span>

              <div className="flex items-center gap-1">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="font-semibold">4.9</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}