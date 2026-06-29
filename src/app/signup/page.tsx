"use client";

import Link from "next/link";
import { Mail, Lock, User, Sparkles, Brain, Cpu, Bot } from "lucide-react";

const nodes = [
  { name: "OpenAI", Icon: Sparkles, angle: 0 },
  { name: "Google AI", Icon: Brain, angle: 60 },
  { name: "Meta AI", Icon: Bot, angle: 140 },
  { name: "NVIDIA", Icon: Cpu, angle: 220 },
  { name: "Microsoft", Icon: Brain, angle: 300 },
];

function getPosition(angle: number, radius = 140) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

export default function SignupPage() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-red-100 via-white to-purple-200">

      <div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden">

        <div className="absolute inset-0" />
        <div className="absolute z-20 flex flex-col items-center">
          <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center shadow-2xl animate-pulse">
            <Sparkles className="text-white h-10 w-10" />
          </div>
          <p className="mt-2 text-sm font-semibold text-gray-700">AI Core</p>
        </div>
        <svg className="absolute w-full h-full">
          {nodes.map((node, i) => {
            const pos = getPosition(node.angle);
            return (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${pos.x}px)`}
                y2={`calc(50% + ${pos.y}px)`}
                stroke="#fda4af"
                strokeWidth="2"
                opacity="0.5"
              />
            );
          })}
        </svg>

        {nodes.map((node, i) => {
          const pos = getPosition(node.angle);
          return (
            <div
              key={i}
              className="absolute flex flex-col items-center transition hover:scale-110 duration-300"
              style={{
                left: `calc(50% + ${pos.x}px)`,
                top: `calc(50% + ${pos.y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center border">
                <node.Icon className="h-5 w-5 text-gray-700" />
              </div>
              <p className="text-xs mt-1 text-gray-500">{node.name}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">

        <div className="w-full max-w-md rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl p-8">

          <h1 className="text-2xl font-bold text-center">
            Create Account
          </h1>

          <p className="mt-2 text-center text-sm text-gray-500">
            Join GraphOne AI ecosystem
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full rounded-xl border bg-white/60 pl-10 pr-3 py-2 outline-none focus:border-rose-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-xl border bg-white/60 pl-10 pr-3 py-2 outline-none focus:border-rose-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full rounded-xl border bg-white/60 pl-10 pr-3 py-2 outline-none focus:border-rose-400"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 py-2 font-semibold text-white hover:scale-[1.02] transition"
            >
              Create Account
            </button>

          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-rose-500 font-medium">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}