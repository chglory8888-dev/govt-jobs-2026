import Head from "next/head";
import Link from "next/link";
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
        <title>
          Govt Jobs 2026 | Latest Government Jobs in India
        </title>

        <meta
          name="description"
          content="Find the latest Government Jobs 2026 in India including Banking, Central Government, Railway, SSC, Defence, PSU and Healthcare job notifications."
        />

        <meta
          name="keywords"
          content="Govt Jobs 2026, Government Jobs 2026, Central Government Jobs, Banking Jobs, Railway Jobs, SSC Jobs, Defence Jobs, PSU Jobs, Healthcare Jobs"
        />

        <meta
          name="google-site-verification"
          content="dIBVdX3k2APZaWxk8hlGB7ykx_gDwHzGQXNtoswegjk"
        />

        <link
          rel="canonical"
          href="https://govt-jobs-2026-8m3h.vercel.app/"
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Govt Jobs 2026",
              url: "https://govt-jobs-2026-8m3h.vercel.app/",
              description:
                "Latest Government Jobs 2026 in India including Banking, Central Government, Railway, SSC, Defence, PSU and Healthcare jobs.",
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Govt Jobs 2026",
              url: "https://govt-jobs-2026-8m3h.vercel.app/",
            }),
          }}
        />
      </Head>

      <div className="container">

        {/* HEADER */}
        <div className="header">
          <h1>🔥 Latest Govt Jobs 2026</h1>
          <p>Find Government Jobs Across India</p>
        </div>

        {/* SEARCH AND FILTER */}
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

        {/* CATEGORY LINKS */}
        <div className="category-links">

          <h2>Explore Government Jobs by Category</h2>

          <div className="category-grid">

            <Link href="/banking">
              🏦 Banking Jobs 2026
            </Link>

            <Link href="/central-government">
              🏛️ Central Government Jobs 2026
            </Link>

            <Link href="/railway">
              🚆 Railway Jobs 2026
            </Link>

            <Link href="/ssc">
              📋 SSC Jobs 2026
            </Link>

            <Link href="/defence">
              🛡️ Defence Jobs 2026
            </Link>

            <Link href="/psu">
              🏢 PSU Jobs 2026
            </Link>

            <Link href="/healthcare">
              🏥 Healthcare Jobs 2026
            </Link>

          </div>

        </div>

        {/* JOB COUNT */}
        <p className="job-count">
          Showing {filteredJobs.length} job(s)
        </p>

        {/* JOB LIST */}
        {filteredJobs.length === 0 ? (

          <div className="no-jobs">
            <h2>😔 No Jobs Found</h2>
            <p>
              Try another search or category.
            </p>
          </div>

        ) : (

          filteredJobs.map((job) => (

            <div
              key={job.id}
              className="job-card"
            >

              <h2>{job.title}</h2>

              <p>
                🏢 <b>Organization:</b>{" "}
                {job.organization}
              </p>

              <p>
                📂 <b>Category:</b>{" "}
                {job.category}
              </p>

              <p>
                👥 <b>Posts:</b>{" "}
                {job.posts}
              </p>

              <p>
                🎓 <b>Qualification:</b>{" "}
                {job.qualification}
              </p>

              <p>
                🎂 <b>Age Limit:</b>{" "}
                {job.ageLimit}
              </p>

              <p>
                📍 <b>Location:</b>{" "}
                {job.location}
              </p>

              <p>
                💼 <b>Job Type:</b>{" "}
                {job.jobType}
              </p>

              <p>
                💰 <b>Salary:</b>{" "}
                {job.salary}
              </p>

              <p>
                📅 <b>Last Date:</b>{" "}
                {job.lastDate}
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

        {/* FOOTER */}
        <footer>

          <p>
            © 2026 Govt Jobs 2026.
            All Rights Reserved.
          </p>

          <div className="footer-links">

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/disclaimer">
              Disclaimer
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>

          </div>

        </footer>

      </div>
    </>
  );
}
