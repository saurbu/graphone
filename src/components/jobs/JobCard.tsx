"use client";

import { Bookmark, MapPin, Building2 } from "lucide-react";
import { ComponentType } from "react";

interface JobCardProps {
  company: string;
  role: string;
  type: string;
  salary: string;
  location: string;
  hiring: boolean;
  Icon?: ComponentType<{
    className?: string;
    strokeWidth?: number;
  }>;
  logoBg: string;
}

export default function JobCard({
  company,
  role,
  type,
  salary,
  location,
  hiring,
  Icon,
  logoBg,
}: JobCardProps) {
  const LogoIcon = Icon ?? Building2;

  return (
    <div className="group rounded-[28px] border border-gray-200 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-5">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${logoBg} ring-1 ring-gray-200`}
          >
            <LogoIcon
              className={`h-8 w-8 ${
                logoBg === "bg-gray-100" ? "text-black" : "text-white"
              }`}
              strokeWidth={2.2}
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[20px] font-bold leading-none text-gray-900">
                {company}
              </h3>

              {hiring && (
                <span className="flex items-center gap-2 text-[15px] font-medium text-emerald-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Actively Hiring
                </span>
              )}
            </div>

            <h4 className=" text-[15px] font-semibold leading-tight text-gray-900">
              {role}
            </h4>

            <div className=" flex flex-wrap items-center gap-6 text-[17px] text-gray-500">
              <span>{type}</span>

              <span>{salary}</span>

              <span className="flex items-center gap-2">
                <MapPin size={17} />
                {location}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-7 py-3 text-lg font-medium text-gray-900 transition-all duration-300 hover:border-gray-300 hover:shadow-md">
            <Bookmark size={20} />
            Save
          </button>

          <button className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-rose-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}