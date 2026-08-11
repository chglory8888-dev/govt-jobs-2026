```javascript
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
    const searchText = search.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(searchText) ||
      job.qualification.toLowerCase().includes(searchText) ||
      job.category.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || job.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">

      <div className="header">
        <h1>🔥 Latest Govt Jobs 2026</h1>
        <p>Find the latest government job opportunities</p>
      </div>

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

      <p>
        <b>Showing {filteredJobs.length} job(s)</b>
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
              <span
                className={
                  job.status === "Open" ? "open" : "closed"
                }
              >
                {job.status}
              </span>
            </p>

            {job.status === "Open" ? (
              <a
                className="apply-button"
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now →
              </a>
            ) : (
              <span className="closed-button">
                Applications Closed
              </span>
            )}

          </div>
        ))
      )}

      <footer>
        © 2026 Govt Jobs 2026. All Rights Reserved.
      </footer>

    </div>
  );
}
```
