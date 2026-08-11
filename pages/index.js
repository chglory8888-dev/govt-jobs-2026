import { jobs } from "../data/jobs";

export default function Home() {
  return (
    <div>
      <h1>🔥 Latest Govt Jobs 2026</h1>

      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h2>{job.title}</h2>

          <p><b>Category:</b> {job.category}</p>
          <p><b>Posts:</b> {job.posts}</p>
          <p><b>Qualification:</b> {job.qualification}</p>
          <p><b>Last Date:</b> {job.lastDate}</p>
          <p><b>Salary:</b> {job.salary}</p>
          <p><b>Status:</b> {job.status}</p>

          <a
            href={job.applyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now →
          </a>
        </div>
      ))}
    </div>
  );
}
