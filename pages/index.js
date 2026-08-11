import Head from "next/head";
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
      job.organization.toLowerCase().includes(searchText) ||
      job.qualification.toLowerCase().includes(searchText) ||
      job.category.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || job.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Govt Jobs 2026 | Latest Government Jobs in India</title>

        <meta
          name="description"
          content="Find latest government jobs, SSC, Banking, Railway, PSU, Defence and Central Government job notifications in India."
        />

        <meta
          name="google-site-verification"
          content="dIBVdX3k2APZaWxk8hlGB7ykx_gDwHzGQXNtoswegjk"
        />
      </Head>

      <div className="container">

        <div className="header">
          <h1>🔥 Latest Govt Jobs 2026</h1>
          <p>Find Government Jobs Across India</p>
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
                🏢 <b>Organization:</b> {job.organization}
              </p>

              <p>
                📂 <b>Category:</b> {job.category}
              </p>

              <p>
                👥 <b>Posts:</b> {job.posts}
              </p>

              <p>
                🎓 <b>Qualification:</b> {job.qualification}
              </p>

              <p>
                🎂 <b>Age Limit:</b> {job.ageLimit}
              </p>

              <p>
                📍 <b>Location:</b> {job.location}
              </p>

              <p>
                💼 <b>Job Type:</b> {job.jobType}
              </p>

              <p>
                💰 <b>Salary:</b> {job.salary}
              </p>

              <p>
                📅 <b>Last Date:</b> {job.lastDate}
              </p>

              <p>
                📌 <b>Status:</b>{" "}
                <span
                  className={
                    job.status === "Open"
                      ? "open"
                      : job.status === "Closed"
                      ? "closed"
                      : "check"
                  }
                >
                  {job.status}
                </span>
              </p>

              <div className="job-buttons">

                <a
                  href={job.notificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-button"
                >
                  View Notification →
                </a>

                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-button"
                >
                  Apply Now →
                </a>

              </div>

            </div>

          ))

        )}

        <footer>

          <p>
            © 2026 Govt Jobs 2026. All Rights Reserved.
          </p>

          <div className="footer-links">

            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <a href="/disclaimer">
              Disclaimer
            </a>

            <a href="/terms">
              Terms & Conditions
            </a>

          </div>

        </footer>

      </div>
    </>
  );
}
