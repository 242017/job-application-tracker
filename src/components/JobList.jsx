import JobCard from './JobCard.jsx';

function JobList({ jobs, onDeleteJob }) {
  if (jobs.length === 0) {
    return (
      <div className="empty-state">
        <h3 className="empty-state__title">No applications found</h3>
        <p className="empty-state__text">
          Add a new application or adjust the status filter to see more results.
        </p>
      </div>
    );
  }

  return (
    <section className="job-list" id="applications" aria-label="Saved job applications">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onDeleteJob={onDeleteJob} />
      ))}
    </section>
  );
}

export default JobList;
