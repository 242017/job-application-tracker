import { useState } from 'react';

const INITIAL_FORM = {
  company: '',
  role: '',
  location: '',
  link: '',
  status: 'Applied',
  notes: '',
};

function JobForm({ onAddJob }) {
  const [formData, setFormData] = useState(INITIAL_FORM);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddJob({
      company: formData.company.trim(),
      role: formData.role.trim(),
      location: formData.location.trim(),
      link: formData.link.trim(),
      status: formData.status,
      notes: formData.notes.trim(),
    });

    setFormData(INITIAL_FORM);
  }

  const isSubmitDisabled = !formData.company.trim() || !formData.role.trim();

  return (
    <section className="form-panel" id="form" aria-labelledby="form-title">
      <p className="section-label">New application</p>
      <h2 className="section-title" id="form-title">Add a job</h2>

      <form className="job-form" onSubmit={handleSubmit}>
        <label className="field">
          <span className="field__label">Company</span>
          <input
            className="field__input"
            name="company"
            type="text"
            placeholder="Google"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </label>

        <label className="field">
          <span className="field__label">Role</span>
          <input
            className="field__input"
            name="role"
            type="text"
            placeholder="Junior Full Stack Developer"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </label>

        <label className="field">
          <span className="field__label">Location</span>
          <input
            className="field__input"
            name="location"
            type="text"
            placeholder="Remote, Miami, FL"
            value={formData.location}
            onChange={handleChange}
          />
        </label>

        <label className="field">
          <span className="field__label">Job link</span>
          <input
            className="field__input"
            name="link"
            type="url"
            placeholder="https://company.com/careers"
            value={formData.link}
            onChange={handleChange}
          />
        </label>

        <label className="field">
          <span className="field__label">Status</span>
          <select
            className="field__input field__select"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </label>

        <label className="field field_full">
          <span className="field__label">Notes</span>
          <textarea
            className="field__input field__textarea"
            name="notes"
            placeholder="Recruiter name, next steps, salary range, reminders..."
            value={formData.notes}
            onChange={handleChange}
          />
        </label>

        <button className="job-form__button" type="submit" disabled={isSubmitDisabled}>
          Add application
        </button>
      </form>
    </section>
  );
}

export default JobForm;
