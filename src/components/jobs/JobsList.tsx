"use client";

import { jobs } from "@/data/jobs";
import JobCard from "./JobCard";

interface JobsListProps {
  keyword?: string;
  location?: string;
  filter?: string;
}

export default function JobsList({
  keyword = "",
  location = "",
  filter = "All",
}: JobsListProps) {
  const searchKeyword = keyword.toLowerCase().trim();
  const searchLocation = location.toLowerCase().trim();

  const filteredJobs = jobs.filter((job) => {
    const keywordMatch =
      !searchKeyword ||
      job.company.toLowerCase().includes(searchKeyword) ||
      job.role.toLowerCase().includes(searchKeyword);

    const locationMatch =
      !searchLocation ||
      job.location.toLowerCase().includes(searchLocation);

    let filterMatch = true;

    if (filter !== "All") {
      filterMatch =
        job.workMode === filter ||
        job.type === filter ||
        job.shift === filter;
    }

    return keywordMatch && locationMatch && filterMatch;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="space-y-5">
        {filteredJobs.length ? (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              company={job.company}
              role={job.role}
              type={job.type}
              salary={job.salary}
              location={job.location}
              hiring={job.hiring}
              Icon={job.Icon}
              logoBg={job.logoBg}
            />
          ))
        ) : (
          <div className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-gray-50">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                No jobs found
              </h3>

              <p className="mt-2 text-gray-500">
                Try another keyword, location or filter.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}