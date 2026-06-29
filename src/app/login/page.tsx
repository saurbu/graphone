"use client";

import Link from "next/link";
import {
  Mail,
  Lock,
  Brain,
  Sparkles,
  Building2,
  Users,
  Bot,
} from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-indigo-100 via-white to-cyan-100">

      <div className="hidden lg:flex w-1/2 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 " />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(#d1d5db 1px, transparent 1px),
              linear-gradient(90deg,#d1d5db 1px,transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative z-20 w-full max-w-xl">

          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-40 animate-pulse" />

              <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-2xl">
                <Brain className="h-12 w-12 text-white" />
              </div>

            </div>
          </div>

          <h1 className="mt-8 text-center text-4xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-4 text-center text-gray-500">
            Access the world's largest AI ecosystem and explore companies,
            investors, startups and products.
          </p>


          <div className="relative mt-14 h-72">

            <div className="absolute left-0 top-6 w-48 rounded-2xl bg-white/80 backdrop-blur-xl border shadow-lg p-4">

              <Building2 className="h-8 w-8 text-cyan-600" />

              <h3 className="mt-3 font-semibold">
                AI Companies
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                12,500+
              </p>

            </div>


            <div className="absolute right-0 top-0 w-48 rounded-2xl bg-white/80 backdrop-blur-xl border shadow-lg p-4">

              <Bot className="h-8 w-8 text-indigo-600" />

              <h3 className="mt-3 font-semibold">
                AI Models
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                3,800+
              </p>

            </div>


            <div className="absolute left-20 bottom-0 w-52 rounded-2xl bg-white/80 backdrop-blur-xl border shadow-lg p-4">

              <Users className="h-8 w-8 text-emerald-600" />

              <h3 className="mt-3 font-semibold">
                Investors
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                2,100+
              </p>

            </div>

            <div className="absolute right-12 bottom-12">
              <Sparkles className="h-8 w-8 text-cyan-500 animate-pulse" />
            </div>

          </div>

        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">

        <div className="w-full max-w-md rounded-3xl border border-white/40 bg-white/75 backdrop-blur-xl shadow-2xl p-8">

          <h1 className="text-3xl font-bold text-center">
            Login
          </h1>

          <p className="mt-2 text-center text-sm text-gray-500">
            Welcome back! Please login to continue.
          </p>

          <form className="mt-8 space-y-5">

            <div>

              <label className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-2">

                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-xl border bg-white/70 pl-11 pr-4 py-3 outline-none transition focus:border-cyan-500"
                />

              </div>

            </div>

            <div>

              <label className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-2">

                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-xl border bg-white/70 pl-11 pr-4 py-3 outline-none transition focus:border-cyan-500"
                />

              </div>

            </div>

            <button
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              Login
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-cyan-600"
            >
              Sign Up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}