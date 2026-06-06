function formatDate(date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

function JobCard({ job, onDeleteJob }) {
  return (
    <article className="job-card">
      <div className="job-card__top">
        <div>
          <p className="job-card__company">{job.company}</p>
          <h3 className="job-card__role">{job.role}</h3>
        </div>
        <span className={`status status_${job.status.toLowerCase()}`}>
          {job.status}
        </span>
      </div>

      <dl className="job-card__details">
        <div className="job-card__detail">
          <dt>Location</dt>
          <dd>{job.location || 'Not specified'}</dd>
        </div>
        <div className="job-card__detail">
          <dt>Added</dt>
          <dd>{formatDate(job.createdAt)}</dd>
        </div>
      </dl>

      {job.notes && <p className="job-card__notes">{job.notes}</p>}

      <div className="job-card__actions">
        {job.link && (
          <a className="job-card__link" href={job.link} target="_blank" rel="noreferrer">
            View posting
          </a>
        )}
        <button className="job-card__delete" type="button" onClick={() => onDeleteJob(job.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default JobCard;
