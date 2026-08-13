import Head from "next/head";
import Link from "next/link";
import { jobs } from "../data/jobs";

export default function DefenceJobs() {
  const defenceJobs = jobs.filter(
    (job) =>
      job.category === "Defence" ||
      job.organization.toLowerCase().includes("defence") ||
      job.organization.toLowerCase().includes("ministry of defence")
  );

  return (
    <>
      <Head>
        <title>Defence Jobs 2026 | Latest Defence Recruitment in India</title>

        <meta
          name="description"
          content="Find the latest Defence Jobs 2026 in India. Check defence recruitment vacancies, qualifications, age limits, last dates and official application links."
        />

        <meta
          name="keywords"
          content="Defence Jobs 2026, Defence Recruitment 2026, Defence Vacancy, Government Defence Jobs, Ministry of Defence Jobs"
        />

        <link
          rel="canonical"
          href="https://govt-jobs-2026-8m3h.vercel.app/defence"
        />
      </Head>

      <div className="container">

        <div className="header">
          <h1>🛡️ Defence Jobs 2026</h1>

          <p>
            Latest Defence Recruitment Jobs in India
          </p>
        </div>

        <p className="job-count">
          Showing {defenceJobs.length} job(s)
        </p>

        {defenceJobs.length === 0 ? (
          <div className="no-jobs">
            <h2>No Defence Jobs Found</h2>
            <p>Please check again later for new notifications.</p>
          </div>
        ) : (
          defenceJobs.map((job) => (
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
