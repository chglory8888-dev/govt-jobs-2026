import Head from "next/head";
import Link from "next/link";
import { jobs } from "../data/jobs";

export default function SSCJobs() {
  const sscJobs = jobs.filter(
    (job) =>
      job.category === "SSC" ||
      job.organization.toLowerCase().includes("staff selection")
  );

  return (
    <>
      <Head>
        <title>SSC Jobs 2026 | Latest SSC Recruitment in India</title>

        <meta
          name="description"
          content="Find the latest SSC Jobs 2026 in India including SSC recruitment notifications, vacancies, qualifications, last dates and official application links."
        />

        <meta
          name="keywords"
          content="SSC Jobs 2026, SSC Recruitment 2026, SSC Vacancy, Staff Selection Commission Jobs, Government Jobs"
        />

        <link
          rel="canonical"
          href="https://govt-jobs-2026-8m3h.vercel.app/ssc"
        />
      </Head>

      <div className="container">

        <div className="header">
          <h1>📋 SSC Jobs 2026</h1>

          <p>
            Latest Staff Selection Commission Jobs in India
          </p>
        </div>

        <p className="job-count">
          Showing {sscJobs.length} job(s)
        </p>

        {sscJobs.length === 0 ? (
          <div className="no-jobs">
            <h2>No SSC Jobs Found</h2>
            <p>Please check again later for new notifications.</p>
          </div>
        ) : (
          sscJobs.map((job) => (
            <div key={job.id} className="job-card">

              <h2>{job.title}</h2>

              <p>
                🏢 <b>Organization:</b> {job.organization}
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
                💰 <b>Salary:</b> {job.salary}
              </p>

              <p>
                📅 <b>Last Date:</b> {job.lastDate}
              </p>

              <p>
                📌 <b>Status:</b> {job.status}
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

        <div className="footer-links">
          <Link href="/">
            ← Back to Latest Govt Jobs
          </Link>
        </div>

      </div>
    </>
  );
            }
