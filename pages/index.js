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
    ...new Set(
      jobs
        .map((job) => job.category)
        .filter(Boolean)
    ),
  ];

  /* =========================
     DATE HELPERS
  ========================= */

  const getDate = (date) => {
    if (!date) return 0;

    const value = String(date).trim();

    // DD-MM-YYYY or DD/MM/YYYY
    const parts = value.split(/[-/]/);

    if (parts.length === 3) {
      const first = Number(parts[0]);
      const second = Number(parts[1]);
      const third = Number(parts[2]);

      // YYYY-MM-DD
      if (
        String(parts[0]).length === 4 &&
        !Number.isNaN(first)
      ) {
        const parsed = new Date(
          first,
          second - 1,
          third
        );

        return parsed.getTime();
      }

      // DD-MM-YYYY
      if (
        !Number.isNaN(first) &&
        !Number.isNaN(second) &&
        !Number.isNaN(third)
      ) {
        const parsed = new Date(
          third,
          second - 1,
          first
        );

        return parsed.getTime();
      }
    }

    const parsed = new Date(value);

    return Number.isNaN(parsed.getTime())
      ? 0
      : parsed.getTime();
  };

  const getDaysLeft = (date) => {
    const dateValue = getDate(date);

    if (!dateValue) return null;

    const today = new Date();
    const deadline = new Date(dateValue);

    today.setHours(0, 0, 0, 0);
    deadline.setHours(0, 0, 0, 0);

    return Math.ceil(
      (deadline.getTime() - today.getTime()) /
        (1000 * 60 * 60 * 24)
    );
  };

  /* =========================
     JOB STATUS
  ========================= */

  const getStatus = (job) => {
    const daysLeft = getDaysLeft(job.lastDate);

    if (job.status) {
      const savedStatus = String(
        job.status
      ).toLowerCase();

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

    if (daysLeft === null) {
      return "Check";
    }

    if (daysLeft < 0) {
      return "Closed";
    }

    if (daysLeft <= 7) {
      return "Closing Soon";
    }

    return "Open";
  };

  /* =========================
     FILTER + SORT
  ========================= */

  const filteredJobs = useMemo(() => {
    const searchText = search
      .toLowerCase()
      .trim();

    return [...jobs]
      .filter((job) => {
        if (!searchText) return true;

        const searchableText = [
          job.title,
          job.organization,
          job.category,
          job.qualification,
          job.location,
          job.jobType,
          job.posts,
          job.salary,
          job.ageLimit,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(
          searchText
        );
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
        const dateA = getDate(a.lastDate);
        const dateB = getDate(b.lastDate);

        if (sortBy === "Deadline") {
          return dateA - dateB;
        }

        return dateB - dateA;
      });
  }, [
    search,
    category,
    status,
    sortBy,
  ]);

  /* =========================
     STATISTICS
  ========================= */

  const totalJobs = jobs.length;

  const openJobs = jobs.filter(
    (job) => getStatus(job) === "Open"
  ).length;

  const closingJobs = jobs.filter(
    (job) =>
      getStatus(job) === "Closing Soon"
  ).length;

  const closedJobs = jobs.filter(
    (job) => getStatus(job) === "Closed"
  ).length;

  const checkJobs = jobs.filter(
    (job) => getStatus(job) === "Check"
  ).length;

  /* =========================
     RESET
  ========================= */

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
          Govt Jobs 2026 | Latest Government Jobs
          in India
        </title>

        <meta
          name="description"
          content="Find the latest Government Jobs 2026 in India including Banking, Railway, SSC, Defence, PSU, Healthcare and Central Government jobs."
        />

        <meta
          name="keywords"
          content="Govt Jobs 2026, Government Jobs 2026, Latest Government Jobs, Banking Jobs, Railway Jobs, SSC Jobs, Defence Jobs, PSU Jobs, Healthcare Jobs"
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

        <meta
          property="og:title"
          content="Govt Jobs 2026 | Latest Government Jobs in India"
        />

        <meta
          property="og:description"
          content="Latest Government Jobs 2026 in India."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://govt-jobs-2026-8m3h.vercel.app/"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context":
                "https://schema.org",
              "@type": "WebSite",
              name: "Govt Jobs 2026",
              url:
                "https://govt-jobs-2026-8m3h.vercel.app/",
              description:
                "Latest Government Jobs 2026 in India",
            }),
          }}
        />
      </Head>

      <main className="container">

        {/* =========================
            NAVIGATION
        ========================= */}

        <nav className="top-nav">

          <Link href="/">
            🏠 Home
          </Link>

          <a href="#categories">
            📂 Categories
          </a>

          <a href="#jobs">
            📋 Latest Jobs
          </a>

          <a href="#contact">
            📞 Contact
          </a>

        </nav>

        {/* =========================
            HEADER
        ========================= */}

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
            Banking • Railway • SSC • Defence •
            PSU • Healthcare
          </small>

        </header>

        {/* =========================
            NOTICE
        ========================= */}

        <div className="notice-box">

          <strong>
            📢 Important:
          </strong>

          <span>
            Always check the official recruitment
            notification before applying.
          </span>

        </div>

        {/* =========================
            STATISTICS
        ========================= */}

        <section className="stats-section">

          <div className="stat-card">
            <span className="stat-icon">
              📋
            </span>

            <b>{totalJobs}</b>

            <span>
              Total Jobs
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-icon">
              🟢
            </span>

            <b>{openJobs}</b>

            <span>
              Open Jobs
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-icon">
              🔥
            </span>

            <b>{closingJobs}</b>

            <span>
              Closing Soon
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-icon">
              🔴
            </span>

            <b>{closedJobs}</b>

            <span>
              Closed
            </span>
          </div>

        </section>

        {/* =========================
            SEARCH + FILTER
        ========================= */}

        <section className="filters-section">

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="🔎 Search jobs, organization, qualification..."
            aria-label="Search government jobs"
          />

          <div className="filter-grid">

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              aria-label="Filter by category"
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
              aria-label="Filter by status"
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
              className="reset-button"
              onClick={resetFilters}
            >
              🔄 Reset
            </button>

          </div>

        </section>

        {/* =========================
            CATEGORIES
        ========================= */}

        <section
          className="category-links"
          id="categories"
        >

          <h2>
            Explore Government Jobs by Category
          </h2>

          <p className="section-description">
            Find government vacancies by your
            preferred category.
          </p>

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

        {/* =========================
            RESULTS HEADER
        ========================= */}

        <section
          className="results-header"
        >

          <div>

            <h2>
              Latest Government Job
              Notifications
            </h2>

            <p>
              Showing{" "}
              <b>
                {filteredJobs.length}
              </b>{" "}
              jobs
            </p>

          </div>

          {(search ||
            category !== "All" ||
            status !== "All") && (

            <button
              type="button"
              className="small-reset"
              onClick={resetFilters}
            >
              Clear Filters
            </button>

          )}

        </section>

        {/* =========================
            JOBS
        ========================= */}

        <div
          className="jobs-list"
          id="jobs"
        >

          {filteredJobs.length === 0 ? (

            <div className="no-jobs">

              <div className="no-jobs-icon">
                🔎
              </div>

              <h2>
                No Jobs Found
              </h2>

              <p>
                We could not find any jobs
                matching your search.
              </p>

              <button
                type="button"
                className="apply-button"
                onClick={resetFilters}
              >
                🔄 Show All Jobs
              </button>

            </div>

          ) : (

            filteredJobs.map((job) => {

              const currentStatus =
                getStatus(job);

              const daysLeft =
                getDaysLeft(
                  job.lastDate
                );

              return (
                <article
                  key={
                    job.id ||
                    `${job.title}-${job.organization}`
                  }
                  className="job-card"
                >

                  {/* BADGES */}

                  <div className="job-badges">

                    {currentStatus ===
                      "Closing Soon" && (

                      <span className="closing-badge">
                        🔥 Closing Soon
                      </span>

                    )}

                    {currentStatus ===
                      "Open" &&
                      daysLeft !== null &&
                      daysLeft > 7 && (

                      <span className="new-badge">
                        🆕 Open
                      </span>

                    )}

                    {currentStatus ===
                      "Closed" && (

                      <span className="closed-badge">
                        🔴 Closed
                      </span>

                    )}

                    {currentStatus ===
                      "Check" && (

                      <span className="new-badge">
                        🔵 Check Notification
                      </span>

                    )}

                  </div>

                  {/* TITLE */}

                  <h2>
                    {job.title}
                  </h2>

                  {/* DETAILS */}

                  <p>
                    🏢{" "}
                    <b>
                      Organization:
                    </b>{" "}
                    {job.organization ||
                      "Not specified"}
                  </p>

                  <p>
                    📂{" "}
                    <b>
                      Category:
                    </b>{" "}
                    {job.category ||
                      "Government Jobs"}
                  </p>

                  <p>
                    👥{" "}
                    <b>
                      Posts:
                    </b>{" "}
                    {job.posts ||
                      "Not specified"}
                  </p>

                  <p>
                    🎓{" "}
                    <b>
                      Qualification:
                    </b>{" "}
                    {job.qualification ||
                      "See official notification"}
                  </p>

                  <p>
                    🎂{" "}
                    <b>
                      Age Limit:
                    </b>{" "}
                    {job.ageLimit ||
                      "See official notification"}
                  </p>

                  <p>
                    📍{" "}
                    <b>
                      Location:
                    </b>{" "}
                    {job.location ||
                      "India"}
                  </p>

                  <p>
                    💼{" "}
                    <b>
                      Job Type:
                    </b>{" "}
                    {job.jobType ||
                      "Government"}
                  </p>

                  <p>
                    💰{" "}
                    <b>
                      Salary:
                    </b>{" "}
                    {job.salary ||
                      "As per government rules"}
                  </p>

                  <p>
                    📅{" "}
                    <b>
                      Last Date:
                    </b>{" "}
                    {job.lastDate ||
                      "See official notification"}
                  </p>

                  {/* DAYS LEFT */}

                  {daysLeft !== null && (
                    <p>
                      ⏳{" "}
                      <b>
                        Application Deadline:
                      </b>{" "}

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

                  {/* STATUS */}

                  <p>
                    📌{" "}
                    <b>
                      Status:
                    </b>{" "}

                    <span
                      className={
                        currentStatus ===
                        "Open"
                          ? "open"
                          : currentStatus ===
                            "Closed"
                          ? "closed"
                          : currentStatus ===
                            "Closing Soon"
                          ? "closing"
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
                        href={
                          job.notificationLink
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="notification-button"
                      >
                        📄 View Notification →
                      </a>

         
