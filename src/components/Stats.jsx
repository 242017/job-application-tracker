const STATUSES = ['Applied', 'Interview', 'Offer', 'Rejected'];

function Stats({ jobs }) {
  return (
    <section className="stats" aria-label="Application statistics">
      <div className="stats__item stats__item_total">
        <span className="stats__number">{jobs.length}</span>
        <span className="stats__label">Total applications</span>
      </div>

      {STATUSES.map((status) => {
        const count = jobs.filter((job) => job.status === status).length;

        return (
          <div className="stats__item" key={status}>
            <span className="stats__number">{count}</span>
            <span className="stats__label">{status}</span>
          </div>
        );
      })}
    </section>
  );
}

export default Stats;
