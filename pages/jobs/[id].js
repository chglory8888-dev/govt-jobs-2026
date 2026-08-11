import { useRouter } from "next/router";
import { jobs } from "../../data/jobs";

export default function JobDetails() {
  const router = useRouter();
  const { id } = router.query;

  const job = jobs.find((item) => String(item.id) === String(id));

  if (!job) {
    return (
      <div className="container">
        <div className="no-jobs">
          <h2>Job Not Found</h2>
          <p>The job you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">

      <div className="job-card">
        <h1>{job.title}</h1>

        <p>
          <b>🏢 Organization:</b> {job.organization}
        </p>

        <p>
          <b>📂 Category:</b> {job.category}
        </p>

        <p>
          <b>👥 Total Posts:</b> {job.posts}
        </p>

        <p>
          <b>🎓 Qualification:</b> {job.qualification}
        </p>

        <p>
          <b>🎂 Age Limit:</b> {job.ageLimit}
        </p>

        <p>
          <b>📍 Location:</b> {job.location}
        </p>

        <p>
          <b>💼 Job Type:</b> {job.jobType}
        </p>

        <p>
          <b>💰 Salary:</b> {job.salary}
        </p>

        <p>
          <b>📅 Last Date:</b> {job.lastDate}
        </p>

        <p>
          <b>📌 Status:</b> {job.status}
        </p>

        <div>
          <a
            className="apply-button"
            href={job.applyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now →
          </a>

          <a
            className="apply-button"
            href={job.notificationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Notification →
          </a>
        </div>

      </div>

    </div>
  );
    }
