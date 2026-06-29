"use client";

import { useState } from "react";
import JobsHero from "@/components/jobs/JobsHero";
import JobsList from "@/components/jobs/JobsList";

export default function Page() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [filter, setFilter] = useState("All");

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchFilter, setSearchFilter] = useState("All");

  const handleSearch = () => {
    setSearchKeyword(keyword);
    setSearchLocation(location);
    setSearchFilter(filter);
  };

  return (
    <section>
      <JobsHero
        keyword={keyword}
        setKeyword={setKeyword}
        location={location}
        setLocation={setLocation}
        filter={filter}
        setFilter={setFilter}
        onSearch={handleSearch}
      />

      <JobsList
        keyword={searchKeyword}
        location={searchLocation}
        filter={searchFilter}
      />
    </section>
  );
}