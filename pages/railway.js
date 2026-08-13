import Head from "next/head";
import Link from "next/link";
import { jobs } from "../data/jobs";

export default function RailwayJobs() {
  const railwayJobs = jobs.filter(
    (job) =>
      job.category === "Railway" ||
      job.organization.toLowerCase().includes("railway")
  );

  return (
    <>
      <Head>
        <title>Railway Jobs 2026 | Latest Railway Recruitment in India</title>

        <meta
          name="description"
          content="Find the latest Railway Jobs 2026 in India. Check Railway recruitment vacancies, qualifications, last dates, salaries and official application links."
        />

        <meta
          name="keywords"
          content="Railway Jobs 2026, Railway Recruitment 2026, Railway Vacancy, RRB Jobs 2026, Government Railway Jobs"
        />

        <link
          rel="canonical"
          href="https://govt-jobs-2026-8m3h.vercel.app/railway"
        />
      </Head>

      <div className="container">

        <div className="header">
          <h1>🚆 Railway Jobs 2026</h1>

          <p>
            Latest Railway Recruitment Jobs in India
          </p>
        </div>

        <p className="job-count">
          Showing {railwayJobs.length} job(s)
        </p>

        {railwayJobs.length === 0 ? (
          <div className="no-jobs">
            <h2>No Railway Jobs Found</h2>
            <p>Please check again later for new notifications.</p>
          </div>
        ) : (
          railwayJobs.map((job) => (
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
