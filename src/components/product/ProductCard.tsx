"use client";

import {
  ArrowUpRight,
  Bookmark,
  Heart,
  MessageCircle,
  Users,
} from "lucide-react";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  category: string;
  users: string;
  likes: number;
  comments: number;
  Icon: React.ElementType;
  color: string;
  featured?: boolean;
}

export default function ProductCard({
  name,
  tagline,
  description,
  category,
  users,
  likes,
  comments,
  Icon,
  color,
  featured,
}: ProductCardProps) {
  return (
    <article
      className={`group max-w-300 overflow-hidden rounded-[30px] border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? "border-rose-200 bg-gradient-to-br from-rose-50 via-white to-orange-50"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="p-7">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-5">

            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color} shadow-lg`}
            >
              <Icon className="h-8 w-8 text-white" />
            </div>

            <div>

              <div className="flex items-center gap-3">

                <h3 className="text-2xl font-bold text-gray-900">
                  {name}
                </h3>

                {featured && (
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600">
                    FEATURED
                  </span>
                )}

              </div>

              <p className="mt-1 font-medium text-gray-500">
                {tagline}
              </p>

            </div>

          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 transition hover:bg-gray-100">

            <Bookmark className="h-5 w-5" />

          </button>

        </div>

        <p className="mt-6 text-[15px] leading-7 text-gray-600">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600">
            {category}
          </span>

          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
            AI
          </span>

          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
            Productivity
          </span>

        </div>

      </div>

      <div className="flex flex-wrap items-center justify-between border-t border-gray-100 px-7 py-5">

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2 text-gray-500">

            <Users className="h-5 w-5" />

            <span className="font-medium">{users}</span>

          </div>

          <div className="flex items-center gap-2 text-gray-500">

            <Heart className="h-5 w-5" />

            <span>{likes}</span>

          </div>

          <div className="flex items-center gap-2 text-gray-500">

            <MessageCircle className="h-5 w-5" />

            <span>{comments}</span>

          </div>

        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-105">

          Visit

          <ArrowUpRight className="h-4 w-4" />

        </button>

      </div>

    </article>
  );
}