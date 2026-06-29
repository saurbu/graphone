"use client";

import { LucideIcon } from "lucide-react";

interface GraphNodeProps {
  icon: LucideIcon;
  title: string;
  color: string;
  glow: string;
}

export default function GraphNode({
  icon: Icon,
  title,
  color,
  glow,
}: GraphNodeProps) {
  return (
    <div className="relative flex flex-col items-center z-10">
      <div
        className={`relative h-24 w-24 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-2xl`}
      >
        <div
          className={`absolute inset-0 rounded-full blur-2xl opacity-60 ${glow}`}
        />

        <div className="relative h-16 w-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
          <Icon className="h-7 w-7 text-white" strokeWidth={2.4} />
        </div>
      </div>

      <h3 className="mt-5 text-white font-semibold text-lg">{title}</h3>
    </div>
  );
}