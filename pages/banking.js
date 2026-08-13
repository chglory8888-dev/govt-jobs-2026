import Head from "next/head";
import Link from "next/link";
import { jobs } from "../data/jobs";

export default function BankingJobs() {
  const bankingJobs = jobs.filter(
    (job) => job.category === "Banking"
  );

  return (
    <>
      <Head>
        <title>Banking Jobs 2026 | Latest Bank Jobs in India</title>

        <meta
          name="description"
          content="Find the latest Banking Jobs 2026 in India including SBI and other government bank job notifications, eligibility, vacancies and application details."
        />

        <meta
          name="keywords"
          content="Banking Jobs 2026, Bank Jobs 2026, SBI Jobs 2026, Government Bank Jobs, Latest Bank Jobs India"
        />

        <link
          rel="canonical"
          href="https://govt-jobs-2026-8m3h.vercel.app/banking"
        />
      </Head>

      <div className="container">

        <div className="header">
          <h1>🏦 Banking Jobs 2026</h1>

          <p>
            Latest Government Banking Jobs in India
          </p>
        </div>

        <p className="job-count">
          Showing {bankingJobs.length} banking job(s)
        </p>

        {bankingJobs.length === 0 ? (
          <div className="no-jobs">
            <h2>No Banking Jobs Found</h2>
            <p>Please check again later for new notifications.</p>
          </div>
        ) : (
          bankingJobs.map((job) => (
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
