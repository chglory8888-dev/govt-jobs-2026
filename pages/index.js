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
    ...new Set(jobs.map((job) => job.category).filter(Boolean)),
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
      category === "All" || job.category === category;

    const matchesStatus =
      status === "All" || getStatus(job) === status;

    return matchesSearch && matchesCategory && matchesStatus;
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
          Career Hub 2026 | Jobs, AI Careers, Skills & Resume
        </title>

        <meta
          name="description"
          content="Career Hub 2026 - Latest Government Jobs, Private Jobs, AI Careers, Data Analytics, IT Jobs, Remote Jobs, Career Roadmaps, Resume and Interview Preparation."
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

          <a href="#career">🚀 Careers</a>

          <a href="#categories">📂 Jobs</a>

          <a href="#jobs">📋 Latest Jobs</a>

          <a href="#skills">🎓 Skills</a>

          <a href="#resources">📚 Resources</a>

          <a href="#contact">📞 Contact</a>
        </nav>

        {/* HERO */}

        <header className="header career-header">

          <div className="header-badge">
            🇮🇳 India's Career & Job Platform
          </div>

          <h1>
            🚀 Career Hub 2026
          </h1>

          <p>
            Find Jobs. Learn Skills. Build Your Career.
          </p>

          <small>
            Govt Jobs • Private Jobs • AI Careers • IT • Data • Remote Jobs
          </small>

          <div className="hero-buttons">
            <a href="#jobs" className="hero-primary">
              🔎 Find Jobs
            </a>

            <a href="#career" className="hero-secondary">
              🧭 Explore Careers
            </a>
          </div>

        </header>

        {/* NOTICE */}

        <div className="notice-box">
          <strong>📢 Important:</strong>

          <span>
            Always verify job eligibility, dates and application
            details from the official recruitment notification.
          </span>
        </div>

        {/* QUICK CAREER CARDS */}

        <section
          id="career"
          className="career-section"
        >

          <div className="section-heading">
            <span>🔥 EXPLORE</span>

            <h2>
              Choose Your Career Path
            </h2>

            <p>
              Discover popular career options and skills for 2026.
            </p>
          </div>

          <div className="career-grid">

            <Link href="/ai-careers" className="career-card">
              <div className="career-icon">🤖</div>
              <h3>AI Careers</h3>
              <p>
                Generative AI, AI tools, automation and AI jobs.
              </p>
              <strong>Explore →</strong>
            </Link>

            <Link href="/data-analytics" className="career-card">
              <div className="career-icon">📊</div>
              <h3>Data Analytics</h3>
              <p>
                Excel, SQL, Power BI, Python and analytics careers.
              </p>
              <strong>Explore →</strong>
            </Link>

            <Link href="/software-jobs" className="career-card">
              <div className="career-icon">💻</div>
              <h3>IT & Software</h3>
              <p>
                Software development, web development and testing.
              </p>
              <strong>Explore →</strong>
            </Link>

            <Link href="/cybersecurity" className="career-card">
              <div className="career-icon">🔐</div>
              <h3>Cybersecurity</h3>
              <p>
                Cybersecurity, SOC, security and ethical hacking.
              </p>
              <strong>Explore →</strong>
            </Link>

            <Link href="/cloud-devops" className="career-card">
              <div className="career-icon">☁️</div>
              <h3>Cloud & DevOps</h3>
              <p>
                AWS, Azure, DevOps, Docker and cloud careers.
              </p>
              <strong>Explore →</strong>
            </Link>

            <Link href="/remote-jobs" className="career-card">
              <div className="career-icon">🏠</div>
              <h3>Remote Jobs</h3>
              <p>
                Work-from-home and remote opportunities.
              </p>
              <strong>Explore →</strong>
            </Link>

          </div>

        </section>

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

          <div className="search-title">
            🔎 Search Jobs
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search jobs, organization, qualification..."
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

        {/* JOB CATEGORIES */}

        <section
          className="category-links"
          id="categories"
        >

          <div className="section-heading">
            <span>🇮🇳 GOVERNMENT JOBS</span>

            <h2>
              Explore Government Jobs
            </h2>
          </div>

          <div className="category-grid">

            <Link href="/banking">
              🏦 Banking Jobs 2026
            </Link>

            <Link href="/central-government">
              🏛️ Central Government
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

        {/* LATEST JOBS */}

        <section id="jobs">

          <div className="results-header">

            <div>
              <span className="section-label">
                📢 JOB ALERTS
              </span>

              <h2>
                Latest Government Job Notifications
              </h2>

              <p>
                Showing{" "}
                <b>{filteredJobs.length}</b>{" "}
                jobs
              </p>
            </div>

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

                    <h2>
                      {job.title}
                    </h2>

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
                      {job.location ||
                        "India"}
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

        {/* SKILLS */}

        <section
          id="skills"
          className="skills-section"
        >

          <div className="section-heading">
            <span>🎓 LEARN & GROW</span>

            <h2>
              Skills That Can Boost Your Career
            </h2>
          </div>

          <div className="skills-grid">

            <div className="skill-card">
              <span>📊</span>
              <h3>Excel + Power BI</h3>
              <p>
                Learn dashboards, reports and business analytics.
              </p>
            </div>

            <div className="skill-card">
              <span>🐍</span>
              <h3>Python</h3>
              <p>
                Programming, automation, data and AI basics.
              </p>
            </div>

            <div className="skill-card">
              <span>🗄️</span>
              <h3>SQL</h3>
              <p>
                Build strong database and analytics skills.
              </p>
            </div>

            <div className="skill-card">
              <span>🤖</span>
              <h3>Generative AI</h3>
              <p>
                Learn practical AI tools and workflows.
              </p>
            </div>

          </div>

        </section>

        {/* RESOURCES */}

        <section
          id="resources"
          className="resources-section"
        >

          <div className="section-heading">
            <span>🧰 CAREER TOOLS</span>

            <h2>
              Free Career Resources
            </h2>
          </div>

          <div className="resource-grid">

            <Link href="/resume-builder">
              <span>📄</span>
              <h3>Resume Builder</h3>
              <p>
                Create a professional resume.
              </p>
            </Link>

            <Link href="/interview-prep">
              <span>🎤</span>
              <h3>Interview Preparation</h3>
              <p>
                Practice common interview questions.
              </p>
            </Link>

            <Link href="/career-roadmaps">
              <span>🧭</span>
              <h3>Career Roadmaps</h3>
              <p>
                Step-by-step learning paths.
              </p>
            </Link>

            <Link href="/courses">
              <span>🎓</span>
              <h3>Courses & Skills</h3>
              <p>
                Discover useful career skills.
              </p>
            </Link>

          </div>

        </section>

        {/* AD */}

        <section className="ad-placeholder">
          <span>Advertisement</span>
        </section>

        {/* SEO */}

        <section className="seo-content">

          <h2>
            Career Hub 2026 – Jobs & Career Opportunities in India
          </h2>

          <p>
            Career Hub 2026 helps job seekers discover
            government jobs, career opportunities,
            technology careers, AI jobs, data analytics,
            IT jobs and remote work opportunities.
          </p>

          <p>
            Candidates can also explore career roadmaps,
            professional skills, resume preparation and
            interview preparation resources.
          </p>

          <p>
            For government jobs, always verify eligibility,
            age limit, application dates, fees and other
            requirements from the official recruitment
            notification before applying.
          </p>

        </section>

        {/* FOOTER */}

        <footer id="contact">

          <div className="footer-brand">

            <h3>
              🚀 Career Hub 2026
            </h3>

            <p>
              Jobs • Skills • Careers • Opportunities
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
            © 2026 Career Hub 2026.
            All Rights Reserved.
          </p>

        </footer>

      </main>
    </>
  );
}
