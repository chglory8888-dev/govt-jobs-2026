import { useState } from "react";
import { jobs } from "../data/jobs";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(jobs.map((job) => job.category)),
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.qualification.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || job.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h1>🔥 Latest Govt Jobs 2026</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="🔎 Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <p className="job-count">
        Showing {filteredJobs.length} job(s)
      </p>

      {filteredJobs.length === 0 ? (
        <div className="no-jobs">
          <h2>😔 No Jobs Found</h2>
          <p>Try another search or category.</p>
        </div>
      ) : (
        filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>

            <p>
              <b>Category:</b> {job.category}
            </p>

            <p>
              <b>Posts:</b> {job.posts}
            </p>

            <p>
              <b>Qualification:</b> {job.qualification}
            </p>

            <p>
              <b>Last Date:</b> {job.lastDate}
            </p>

            <p>
              <b>Salary:</b> {job.salary}
            </p>

            <p>
              <b>Status:</b>{" "}
              <span className={job.status === "Open" ? "open" : "closed"}>
                {job.status}
              </span>
            </p>

            <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now →
            </a>
          </div>
        ))
      )}
    </div>
  );
        }
