import Head from "next/head";
import Link from "next/link";
import { jobs } from "../data/jobs";

export default function HealthcareJobs() {
  const healthcareJobs = jobs.filter(
    (job) => job.category === "Healthcare"
  );

  return (
    <>
      <Head>
        <title>Healthcare Jobs 2026 | Latest Medical Government Jobs</title>

        <meta
          name="description"
          content="Find the latest Healthcare Jobs 2026 in India including medical and nursing government job notifications, vacancies, qualifications and official application links."
        />

        <meta
          name="keywords"
          content="Healthcare Jobs 2026, Medical Jobs 2026, Nursing Jobs 2026, Government Healthcare Jobs, AIIMS Jobs 2026"
        />

        <link
          rel="canonical"
          href="https://govt-jobs-2026-8m3h.vercel.app/healthcare"
        />
      </Head>

      <div className="container">

        <div className="header">
          <h1>🏥 Healthcare Jobs 2026</h1>

          <p>
            Latest Healthcare & Medical Government Jobs in India
          </p>
        </div>

        <p className="job-count">
          Showing {healthcareJobs.length} job(s)
        </p>

        {healthcareJobs.length === 0 ? (
          <div className="no-jobs">
            <h2>No Healthcare Jobs Found</h2>
            <p>Please check again later for new notifications.</p>
          </div>
        ) : (
          healthcareJobs.map((job) => (
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
