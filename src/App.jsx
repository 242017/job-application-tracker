import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import JobForm from './components/JobForm.jsx';
import JobList from './components/JobList.jsx';
import Stats from './components/Stats.jsx';

const STORAGE_KEY = 'job-application-tracker:jobs';
const STATUS_OPTIONS = ['All', 'Applied', 'Interview', 'Offer', 'Rejected'];

function getStoredJobs() {
  const storedJobs = localStorage.getItem(STORAGE_KEY);

  if (!storedJobs) {
    return [];
  }

  try {
    return JSON.parse(storedJobs);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

function App() {
  const [jobs, setJobs] = useState(getStoredJobs);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs]);

  function handleAddJob(jobData) {
    const newJob = {
      ...jobData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    setJobs((currentJobs) => [newJob, ...currentJobs]);
  }

  function handleDeleteJob(jobId) {
    setJobs((currentJobs) => currentJobs.filter((job) => job.id !== jobId));
  }

  const filteredJobs = useMemo(() => {
    if (activeFilter === 'All') {
      return jobs;
    }

    return jobs.filter((job) => job.status === activeFilter);
  }, [activeFilter, jobs]);

  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="hero__eyebrow">Portfolio project</p>
            <h1 className="hero__title" id="hero-title">
              Track every job application with clarity.
            </h1>
            <p className="hero__text">
              A focused workspace for junior developers to organize companies,
              roles, notes, and progress during the job search.
            </p>
          </div>
          <Stats jobs={jobs} />
        </section>

        <section className="workspace" aria-label="Job application workspace">
          <JobForm onAddJob={handleAddJob} />

          <div className="applications">
            <div className="applications__header">
              <div>
                <p className="section-label">Applications</p>
                <h2 className="section-title">Your pipeline</h2>
              </div>

              <label className="filter" htmlFor="status-filter">
                <span className="filter__label">Filter</span>
                <select
                  className="filter__select"
                  id="status-filter"
                  value={activeFilter}
                  onChange={(event) => setActiveFilter(event.target.value)}
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <JobList jobs={filteredJobs} onDeleteJob={handleDeleteJob} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
