import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { jobs } from "../data/jobs";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

  const categories = [
    "All",
    ...new Set(jobs.map((job) => job.category).filter(Boolean)),
  ];

  const getDate = (date) => {
    if (!date) return 0;

    const parts = String(date).split(/[-/]/);

    if (parts.length === 3) {
      const day = Number(parts[0]);
      const month = Number(parts[1]) - 1;
      const year = Number(parts[2]);

      return new Date(year, month, day).getTime();
    }

    const value = new Date(date).getTime();
    return Number.isNaN(value) ? 0 : value;
  };

  const getDaysLeft = (date) => {
    const value = getDate(date);

    if (!value) return null;

    const today = new Date();
    const deadline = new Date(value);

    today.setHours(0, 0, 0, 0);
    deadline.setHours(0, 0, 0, 0);

    return Math.ceil(
      (deadline - today) / (1000 * 60 * 60 * 24)
    );
  };

  const getStatus = (job) => {
  const days = getDaysLeft(job.lastDate);

  if (job.status) {
    const savedStatus = String(job.status).toLowerCase();

    if (savedStatus === "closed") {
      return "Closed";
    }

    if (
      savedStatus === "closing soon" ||
      savedStatus === "closing"
    ) {
      return "Closing Soon";
    }

    if (savedStatus === "open") {
      return "Open";
    }
  }

  if (days === null) {
    return "Check";
  }

  if (days < 0) {
    return "Closed";
  }

  if (days <= 7) {
    return "Closing Soon";
  }

  return "Open";
};

  const filteredJobs = [...jobs]
    .filter((job) => {
      const text = search.toLowerCase().trim();

      if (!text) return true;

      const allText = [
        job.title,
        job.organization,
        job.category,
        job.qualification,
        job.location,
        job.jobType,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return allText.includes(text);
    })

    .filter(
      (job) =>
        category === "All" ||
        job.category === category
    )

    .filter(
      (job) =>
        status === "All" ||
        getStatus(job) === status
    )

    .sort((a, b) => {
      const first = getDate(a.lastDate);
      const second = getDate(b.lastDate);

      if (sortBy === "Deadline") {
        return first - second;
      }

      return second - first;
    });

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setStatus("All");
    setSortBy("Latest");
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

        <link
          rel="canonical"
          href="https://govt-jobs-2026-8m3h.vercel.app/"
        />
      </Head>

      <main className="container">
            <nav className="top-nav">
  <Link href="/">🏠 Home</Link>
  <a href="#categories">📂 Categories</a>
  <a href="#jobs">📋 Latest Jobs</a>
  <a href="#contact">📞 Contact</a>
</nav>

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

        <div className="notice-box">
          <strong>📢 Important:</strong>{" "}
          Always check the official notification
          before applying.
        </div>

        <section className="stats-section">

          <div className="stat-card">
            <b>{jobs.length}</b>
            <span>Total Jobs</span>
          </div>

          <div className="stat-card">
            <b>
              {jobs.filter(
                (job) => getStatus(job) === "Open"
              ).length}
            </b>
            <span>Open Jobs</span>
          </div>

          <div className="stat-card">
            <b>
              {jobs.filter(
                (job) =>
                  getStatus(job) === "Closing Soon"
              ).length}
            </b>
            <span>Closing Soon</span>
          </div>

          <div className="stat-card">
            <b>
              {jobs.filter(
                (job) => getStatus(job) === "Closed"
              ).length}
            </b>
            <span>Closed</span>
          </div>

        </section>

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
            </select>
                <option value="Check">
  🔵 Check Notification
</option>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
            >
              <option value="Latest">
                🆕 Latest Jobs
              </option>

              <option value="Deadline">
                ⏰ Closing Soon
              </option>
            </select>

            <button
              type="button"
              onClick={resetFilters}
              className="reset-button"
            >
              🔄 Reset
            </button>

          </div>

        </section>

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

        <div className="results-header">

          <h2>
            Latest Government Job Notifications
          </h2>

          <p>
            Showing <b>{filteredJobs.length}</b> jobs
          </p>

        </div>

        {filteredJobs.length === 0 ? (
          <div className="no-jobs">

            <h2>
              🔎 No Jobs Found
            </h2>

            <p>
              Try another search or filter.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="apply-button"
            >
              Show All Jobs
            </button>

          </div>
        ) : (
          <div
  className="jobs-list"
  id="jobs"
>
                      {filteredJobs.map((job) => {
              const jobStatus = getStatus(job);
              const daysLeft = getDaysLeft(job.lastDate);

              return (
                <article
                  key={job.id}
                  className="job-card"
                >

                  <div className="job-badges">

                    {daysLeft !== null &&
                      daysLeft >= 0 &&
                      daysLeft <= 7 && (
                        <span className="closing-badge">
                          🔥 Closing Soon
                        </span>
                      )}

                    {daysLeft !== null &&
                      daysLeft > 7 && (
                        <span className="new-badge">
                          🆕 Latest Job
                        </span>
                      )}

                    {jobStatus === "Closed" && (
                      <span className="closed-badge">
                        🔴 Closed
                      </span>
                    )}

                  </div>

                  <h2>{job.title}</h2>

                  <p>
                    🏢 <b>Organization:</b>{" "}
                    {job.organization || "Not specified"}
                  </p>

                  <p>
                    📂 <b>Category:</b>{" "}
                    {job.category || "Government Jobs"}
                  </p>

                  <p>
                    👥 <b>Posts:</b>{" "}
                    {job.posts || "Not specified"}
                  </p>

                  <p>
                    🎓 <b>Qualification:</b>{" "}
                    {job.qualification || "Not specified"}
                  </p>

                  <p>
                    🎂 <b>Age Limit:</b>{" "}
                    {job.ageLimit || "As per notification"}
                  </p>

                  <p>
                    📍 <b>Location:</b>{" "}
                    {job.location || "India"}
                  </p>

                  <p>
                    💼 <b>Job Type:</b>{" "}
                    {job.jobType || "Government"}
                  </p>

                  <p>
                    💰 <b>Salary:</b>{" "}
                    {job.salary || "As per notification"}
                  </p>

                  <p>
                    📅 <b>Last Date:</b>{" "}
                    {job.lastDate || "Check notification"}
                  </p>

                  {daysLeft !== null && (
                    <p>
                      ⏳ <b>Days Left:</b>{" "}

                      {daysLeft < 0 ? (
                        <span className="closed">
                          Application Closed
                        </span>
                      ) : daysLeft === 0 ? (
                        <span className="closing">
                          ⚠️ Last Date Today!
                        </span>
                      ) : daysLeft === 1 ? (
                        <span className="closing">
                          ⚠️ 1 Day Left!
                        </span>
                      ) : daysLeft <= 7 ? (
                        <span className="closing">
                          ⚠️ {daysLeft} Days Left
                        </span>
                      ) : (
                        <span className="days-left">
                          {daysLeft} Days Left
                        </span>
                      )}
                    </p>
                  )}

                  <p>
                    📌 <b>Status:</b>{" "}

                    <span
                      className={
                        jobStatus === "Open"
                          ? "open"
                          : jobStatus === "Closed"
                          ? "closed"
                          : "check"
                      }
                    >
                      {jobStatus}
                    </span>
                  </p>

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

        <section className="ad-placeholder">
          <span>Advertisement</span>
        </section>

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
            Candidates should always check the
            official recruitment notification for
            eligibility, age limit, application dates,
            fees and other requirements before
            applying.
          </p>

        </section>

        <footer>

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

        <footer id="contact">

      </main>
    </>
  );
                     }
