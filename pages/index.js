import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { jobs } from "../data/jobs";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const getStatus = (job) => {
    if (job.status) {
      const s = String(job.status).toLowerCase();

      if (s.includes("closed")) return "Closed";
      if (s.includes("closing")) return "Closing Soon";
      if (s.includes("open")) return "Open";
    }

    return "Check";
  };

  const categories = [
    "All",
    ...new Set(
      jobs.map((job) => job.category).filter(Boolean)
    ),
  ];

  const filteredJobs = jobs.filter((job) => {
    const text = search.toLowerCase().trim();

    const matchesSearch =
      !text ||
      [
        job.title,
        job.organization,
        job.category,
        job.qualification,
        job.location,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(text);

    const matchesCategory =
      category === "All" ||
      job.category === category;

    const matchesStatus =
      status === "All" ||
      getStatus(job) === status;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus
    );
  });

  const openJobs = jobs.filter(
    (job) => getStatus(job) === "Open"
  ).length;

  const closingJobs = jobs.filter(
    (job) => getStatus(job) === "Closing Soon"
  ).length;

  const closedJobs = jobs.filter(
    (job) => getStatus(job) === "Closed"
  ).length;

  const reset = () => {
    setSearch("");
    setCategory("All");
    setStatus("All");
  };

  return (
    <>
      <Head>
        <title>
          Govt Jobs 2026 | Latest Government Jobs in India
        </title>

        <meta
          name="description"
          content="Latest Government Jobs 2026 in India including Banking, Railway, SSC, Defence, PSU and Healthcare jobs."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="container">

        {/* NAVIGATION */}

        <nav className="top-nav">
          <Link href="/">🏠 Home</Link>
          <a href="#categories">📂 Categories</a>
          <a href="#jobs">📋 Latest Jobs</a>
          <a href="#contact">📞 Contact</a>
        </nav>

        {/* HEADER */}

        <header className="header">
          <div className="header-badge">
            🇮🇳 Government Job Updates
          </div>

          <h1>
            🔥 Latest Govt Jobs 2026
          </h1>

          <p>
            Find Government Jobs Across India
          </p>

          <small>
            Banking • Railway • SSC • Defence • PSU • Healthcare
          </small>
        </header>

        {/* NOTICE */}

        <div className="notice-box">
          <strong>📢 Important:</strong>
          <span>
            Always check the official recruitment
            notification before applying.
          </span>
        </div>

        {/* STATS */}

        <section className="stats-section">

          <div className="stat-card">
            <b>{jobs.length}</b>
            <span>Total Jobs</span>
          </div>

          <div className="stat-card">
            <b>{openJobs}</b>
            <span>Open Jobs</span>
          </div>

          <div className="stat-card">
            <b>{closingJobs}</b>
            <span>Closing Soon</span>
          </div>

          <div className="stat-card">
            <b>{closedJobs}</b>
            <span>Closed</span>
          </div>

        </section>

        {/* SEARCH */}

        <section className="filters-section">

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="🔎 Search jobs, organization, qualification..."
          />

          <div className="filter-grid">

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item === "All"
                    ? "📂 All Categories"
                    : item}
                </option>
              ))}
            </select>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option value="All">
                📌 All Status
              </option>

              <option value="Open">
                🟢 Open
              </option>

              <option value="Closing Soon">
                🔥 Closing Soon
              </option>

              <option value="Closed">
                🔴 Closed
              </option>

              <option value="Check">
                🔵 Check Notification
              </option>
            </select>

            <button
              type="button"
              className="reset-button"
              onClick={reset}
            >
              🔄 Reset
            </button>

          </div>
        </section>

        {/* CATEGORIES */}

        <section
          className="category-links"
          id="categories"
        >

          <h2>
            Explore Government Jobs by Category
          </h2>

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
        </section>

        {/* JOBS */}

        <section id="jobs">

          <div className="results-header">
            <div>
              <h2>
                Latest Government Job Notifications
              </h2>

              <p>
                Showing{" "}
                <b>{filteredJobs.length}</b> jobs
              </p>
            </div>
          </div>

          {filteredJobs.length === 0 ? (

            <div className="no-jobs">
              <h2>🔎 No Jobs Found</h2>

              <p>
                Try another search or filter.
              </p>

              <button
                type="button"
                className="apply-button"
                onClick={reset}
              >
                Show All Jobs
              </button>
            </div>

          ) : (

            <div className="jobs-list">

              {filteredJobs.map((job, index) => {

                const jobStatus = getStatus(job);

                return (
                  <article
                    className="job-card"
                    key={
                      job.id ||
                      `${job.title}-${index}`
                    }
                  >

                    {/* BADGE */}

                    <div className="job-badges">

                      {jobStatus === "Open" && (
                        <span className="new-badge">
                          🟢 Open
                        </span>
                      )}

                      {jobStatus === "Closing Soon" && (
                        <span className="closing-badge">
                          🔥 Closing Soon
                        </span>
                      )}

                      {jobStatus === "Closed" && (
                        <span className="closed-badge">
                          🔴 Closed
                        </span>
                      )}

                      {jobStatus === "Check" && (
                        <span className="new-badge">
                          🔵 Check Notification
                        </span>
                      )}

                    </div>

                    <h2>{job.title}</h2>

                    <p>
                      🏢 <b>Organization:</b>{" "}
                      {job.organization ||
                        "Not specified"}
                    </p>

                    <p>
                      📂 <b>Category:</b>{" "}
                      {job.category ||
                        "Government Jobs"}
                    </p>

                    <p>
                      👥 <b>Posts:</b>{" "}
                      {job.posts ||
                        "Not specified"}
                    </p>

                    <p>
                      🎓 <b>Qualification:</b>{" "}
                      {job.qualification ||
                        "See official notification"}
                    </p>

                    <p>
                      🎂 <b>Age Limit:</b>{" "}
                      {job.ageLimit ||
                        "See official notification"}
                    </p>

                    <p>
                      📍 <b>Location:</b>{" "}
                      {job.location || "India"}
                    </p>

                    <p>
                      💼 <b>Job Type:</b>{" "}
                      {job.jobType ||
                        "Government"}
                    </p>

                    <p>
                      💰 <b>Salary:</b>{" "}
                      {job.salary ||
                        "As per government rules"}
                    </p>

                    <p>
                      📅 <b>Last Date:</b>{" "}
                      {job.lastDate ||
                        "See official notification"}
                    </p>

                    <p>
                      📌 <b>Status:</b>{" "}

                      <span
                        className={
                          jobStatus === "Open"
                            ? "open"
                            : jobStatus === "Closed"
                            ? "closed"
                            : jobStatus === "Closing Soon"
                            ? "closing"
                            : "check"
                        }
                      >
                        {jobStatus}
                      </span>
                    </p>

                    {/* BUTTONS */}

                    <div className="job-buttons">

                      {job.notificationLink && (
                        <a
                          href={job.notificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="notification-button"
                        >
                          📄 View Notification →
                        </a>
                      )}

                      {job.applyLink && (
                        <a
                          href={job.applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="apply-button"
                        >
                          🚀 Apply Now →
                        </a>
                      )}

                    </div>

                  </article>
                );
              })}

            </div>
          )}

        </section>

        {/* ADVERTISEMENT */}

        <section className="ad-placeholder">
          <span>Advertisement</span>
        </section>

        {/* SEO */}

        <section className="seo-content">

          <h2>
            Latest Government Jobs 2026 in India
          </h2>

          <p>
            Govt Jobs 2026 helps candidates discover
            the latest government job notifications
            across India. Find opportunities in
            Banking, Railway, SSC, Defence, PSU,
            Healthcare and Central Government
            departments.
          </p>

          <p>
            Always verify eligibility, age limit,
            application dates, fees and other
            requirements from the official
            recruitment notification before applying.
          </p>

        </section>

        {/* FOOTER */}

        <footer id="contact">

          <div className="footer-brand">

            <h3>
              🇮🇳 Govt Jobs 2026
            </h3>

            <p>
              Latest Government Job Updates in India
            </p>

          </div>

          <div className="footer-links">

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/disclaimer">
              Disclaimer
            </Link>

            <Link href="/terms">
              Terms &amp; Conditions
            </Link>

          </div>

          <p className="copyright">
            © 2026 Govt Jobs 2026.
            All Rights Reserved.
          </p>

        </footer>

      </main>
    </>
  );
}
