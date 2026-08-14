import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
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

  const statuses = ["All", "Open", "Closing Soon", "Closed"];

  // --------------------------------
  // DATE HELPERS
  // --------------------------------

  const getDateValue = (date) => {
    if (!date) return 0;

    if (date instanceof Date) {
      return date.getTime();
    }

    const parsedDate = new Date(date);

    if (!isNaN(parsedDate.getTime())) {
      return parsedDate.getTime();
    }

    // DD-MM-YYYY / DD/MM/YYYY
    const parts = String(date).split(/[-/]/);

    if (parts.length === 3) {
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1;
      const year = parseInt(parts[2]);

      if (
        !isNaN(day) &&
        !isNaN(month) &&
        !isNaN(year)
      ) {
        return new Date(year, month, day).getTime();
      }
    }

    return 0;
  };

  const getDaysLeft = (date) => {
    if (!date) return null;

    const dateValue = getDateValue(date);

    if (!dateValue) return null;

    const today = new Date();
    const deadline = new Date(dateValue);

    today.setHours(0, 0, 0, 0);
    deadline.setHours(0, 0, 0, 0);

    const difference =
      deadline.getTime() - today.getTime();

    return Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    );
  };

  const getJobStatus = (job) => {
    const daysLeft = getDaysLeft(job.lastDate);

    if (daysLeft === null) {
      return job.status || "Open";
    }

    if (daysLeft < 0) {
      return "Closed";
    }

    if (daysLeft <= 7) {
      return "Closing Soon";
    }

    return "Open";
  };

  // --------------------------------
  // FILTER + SORT
  // --------------------------------

  const filteredJobs = useMemo(() => {
    return jobs
      .filter((job) => {
        const searchText = search.toLowerCase().trim();

        if (!searchText) {
          return true;
        }

        const searchableText = [
          job.title,
          job.organization,
          job.qualification,
          job.category,
          job.location,
          job.jobType,
          job.posts,
          job.salary,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(searchText);
      })

      .filter((job) => {
        return (
          category === "All" ||
          job.category === category
        );
      })

      .filter((job) => {
        const currentStatus = getJobStatus(job);

        return (
          status === "All" ||
          currentStatus === status
        );
      })

      .sort((a, b) => {
        const dateA = getDateValue(a.lastDate);
        const dateB = getDateValue(b.lastDate);

        if (sortBy === "Latest") {
          return dateB - dateA;
        }

        if (sortBy === "Deadline") {
          return dateA - dateB;
        }

        return 0;
      });
  }, [search, category, status, sortBy]);

  // --------------------------------
  // RESET FILTERS
  // --------------------------------

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setStatus("All");
    setSortBy("Latest");
  };

  // --------------------------------
  // STATISTICS
  // --------------------------------

  const totalJobs = jobs.length;

  const openJobs = jobs.filter(
    (job) => getJobStatus(job) === "Open"
  ).length;

  const closingJobs = jobs.filter(
    (job) => getJobStatus(job) === "Closing Soon"
  ).length;

  const closedJobs = jobs.filter(
    (job) => getJobStatus(job) === "Closed"
  ).length;

  return (
    <>
      <Head>
        <title>
          Govt Jobs 2026 | Latest Government Jobs in India
        </title>

        <meta
          name="description"
          content="Find the latest Government Jobs 2026 in India including Banking, Central Government, Railway, SSC, Defence, PSU and Healthcare jobs."
        />

        <meta
          name="keywords"
          content="Govt Jobs 2026, Government Jobs 2026, Central Government Jobs, Banking Jobs, Railway Jobs, SSC Jobs, Defence Jobs, PSU Jobs, Healthcare Jobs, Government Vacancies India"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="google-site-verification"
          content="dIBVdX3k2APZaWxk8hlGB7ykx_gDwHzGQXNtoswegjk"
        />

        <link
          rel="canonical"
          href="https://govt-jobs-2026-8m3h.vercel.app/"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Govt Jobs 2026 | Latest Government Jobs in India"
        />

        <meta
          property="og:description"
          content="Latest Government Jobs 2026, Banking Jobs, Railway Jobs, SSC Jobs, Defence Jobs, PSU Jobs and Healthcare Jobs."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://govt-jobs-2026-8m3h.vercel.app/"
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
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://govt-jobs-2026-8m3h.vercel.app/?search={search_term_string}",
                "query-input":
                  "required name=search_term_string",
              },
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

        {/* =================================
            HEADER
        ================================= */}

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

          <p className="header-subtitle">
            Banking • Railway • SSC • Defence • PSU • Healthcare
          </p>

        </header>

        {/* =================================
            NOTICE
        ================================= */}

        <div className="notice-box">

          <strong>📢 Important:</strong>

          <span>
            Check the official notification carefully
            before applying for any government job.
          </span>

        </div>

        {/* =================================
            STATISTICS
        ================================= */}

        <section className="stats-section">

          <div className="stat-card">
            <span className="stat-icon">📋</span>
            <strong>{totalJobs}</strong>
            <span>Total Jobs</span>
          </div>

          <div className="stat-card">
            <span className="stat-icon">🟢</span>
            <strong>{openJobs}</strong>
            <span>Open Jobs</span>
          </div>

          <div className="stat-card">
            <span className="stat-icon">🔥</span>
            <strong>{closingJobs}</strong>
            <span>Closing Soon</span>
          </div>

          <div className="stat-card">
            <span className="stat-icon">🔴</span>
            <strong>{closedJobs}</strong>
            <span>Closed Jobs</span>
          </div>

        </section>

        {/* =================================
            SEARCH + FILTERS
        ================================= */}

        <section className="filters-section">

          <div className="search-wrapper">

            <input
              type="text"
              placeholder="🔎 Search jobs, organization, qualification, location..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              aria-label="Search government jobs"
            />

          </div>

          <div className="filter-grid">

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              aria-label="Filter by category"
            >

              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                >
                  {cat === "All"
                    ? "📂 All Categories"
                    : cat}
                </option>
              ))}

            </select>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              aria-label="Filter by status"
            >

              {statuses.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item === "All"
                    ? "📌 All Status"
                    : item}
                </option>
              ))}

            </select>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              aria-label="Sort jobs"
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

        {/* =================================
            CATEGORY LINKS
        ================================= */}

        <section className="category-links">

          <h2>
            Explore Government Jobs by Category
          </h2>

          <p className="section-description">
            Quickly find government vacancies based
            on your preferred job category.
          </p>

          <div className="category-grid">

            <Link href="/banking">
              🏦
              <span>Banking Jobs 2026</span>
            </Link>

            <Link href="/central-government">
              🏛️
              <span>Central Government Jobs 2026</span>
            </Link>

            <Link href="/railway">
              🚆
              <span>Railway Jobs 2026</span>
            </Link>

            <Link href="/ssc">
              📋
              <span>SSC Jobs 2026</span>
            </Link>

            <Link href="/defence">
              🛡️
              <span>Defence Jobs 2026</span>
            </Link>

            <Link href="/psu">
              🏢
              <span>PSU Jobs 2026</span>
            </Link>

            <Link href="/healthcare">
              🏥
              <span>Healthcare Jobs 2026</span>
            </Link>

          </div>

        </section>

        {/* =================================
            RESULTS HEADER
        ================================= */}

        <div className="results-header">

          <div>

            <h2>
              Latest Government Job Notifications
            </h2>

            <p>
              Showing{" "}
              <b>{filteredJobs.length}</b>{" "}
              job(s)
            </p>

          </div>

          {search ||
          category !== "All" ||
          status !== "All" ? (
            <button
              type="button"
              onClick={resetFilters}
              className="small-reset"
            >
              Clear Filters
            </button>
          ) : null}

        </div>

        {/* =================================
            JOB LIST
        ================================= */}

        {filteredJobs.length === 0 ? (

          <div className="no-jobs">

            <div className="no-jobs-icon">
              🔎
            </div>

            <h2>
              No Jobs Found
            </h2>

            <p>
              We couldn't find jobs matching
              your search or filters.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="apply-button"
            >
              🔄 Show All Jobs
            </button>

          </div>

        ) : (

          <div className="jobs-list">

            {filteredJobs.map((job) => {

              const currentStatus =
                getJobStatus(job);

              const daysLeft =
                getDaysLeft(job.lastDate);

              return (

                <article
                  key={job.id}
                  className="job-card"
                >

                  {/* BADGES */}

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

                    {currentStatus === "Closed" && (

                      <span className="closed-badge">
                        🔴 Closed
                      </span>

                    )}

                  </div>

                  {/* TITLE */}

                  <h2>
                    {job.title}
                  </h2>

                  {/* ORGANIZATION */}

                  <p>
                    🏢 <b>Organization:</b>{" "}
                    {job.organization || "Not specified"}
                  </p>

                  {/* CATEGORY */}

                  <p>
                    📂 <b>Category:</b>{" "}
                    {job.category || "Government Jobs"}
                  </p>

                  {/* POSTS */}

                  <p>
                    👥 <b>Posts:</b>{" "}
                    {job.posts || "Not specified"}
                  </p>

                  {/* QUALIFICATION */}

                  <p>
                    🎓 <b>Qualification:</b>{" "}
                    {job.qualification || "Not specified"}
                  </p>

                  {/* AGE */}

                  <p>
                    🎂 <b>Age Limit:</b>{" "}
                    {job.ageLimit || "As per notification"}
                  </p>

                  {/* LOCATION */}

                  <p>
                    📍 <b>Location:</b>{" "}
                    {job.location || "India"}
                  </p>

                  {/* TYPE */}

                  <p>
                    💼 <b>Job Type:</b>{" "}
                    {job.jobType || "Government"}
                  </p>

                  {/* SALARY */}

                  <p>
                    💰 <b>Salary:</b>{" "}
                    {job.salary || "As per notification"}
                  </p>

                  {/* LAST DATE */}

                  <p>
                    📅 <b>Last Date:</b>{" "}
                    {job.lastDate || "Check notification"}
                  </p>

                  {/* DAYS LEFT */}

                  {daysLeft !== null && (

                    <p>

                      ⏳ <b>Application Deadline:</b>{" "}

                      {daysLeft < 0 ? (

                        <span className="closed">
                          Application Closed
                        </span>

                      ) : daysLeft === 0 ? (

                        <span className="closing">
                          Last Date Today!
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

                  {/* STATUS */}

                  <p>

                    📌 <b>Status:</b>{" "}

                    <span
                      className={
                        currentStatus === "Open"
                          ? "open"
                          : currentStatus === "Closed"
                          ? "closed"
                          : "check"
                      }
                    >
                      {currentStatus}
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

        {/* =================================
            ADVERTISEMENT SPACE
        ================================= */}

        <section className="ad-placeholder">

          <span>Advertisement</span>

        </section>

        {/* =================================
            SEO CONTENT
        ================================= */}

        <section className="seo-content">

          <h2>
            Latest Government Jobs 2026 in India
          </h2>

          <p>
            Govt Jobs 2026 provides a convenient
            platform to discover the latest
            government job notifications across India.
            Candidates can find opportunities in
            Banking, Railway, SSC, Defence, PSU,
            Healthcare and Central Government
            departments.
          </p>

          <p>
            Always verify eligibility, age limit,
            application dates, fees and other
            requirements from the official rec
