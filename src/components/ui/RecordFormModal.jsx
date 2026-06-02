import { useEffect, useState } from "react";
import Modal from "./Modal.jsx";

function initialValues(fields, record) {
  return fields.reduce((values, field) => {
    values[field.name] = record?.[field.name] ?? field.defaultValue ?? "";
    return values;
  }, {});
}

export default function RecordFormModal({ open, title, fields, record, onClose, onSubmit }) {
  const [values, setValues] = useState(() => initialValues(fields, record));
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setValues(initialValues(fields, record));
    setErrors({});
  }, [fields, record, open]);

  function validate() {
    const nextErrors = {};
    fields.forEach((field) => {
      const value = `${values[field.name] ?? ""}`.trim();
      if (field.required && !value) nextErrors[field.name] = `${field.label} is required`;
      if (field.type === "number" && value && Number.isNaN(Number(value))) {
        nextErrors[field.name] = `${field.label} must be a number`;
      }
      if (field.min !== undefined && value && Number(value) < field.min) {
        nextErrors[field.name] = `${field.label} must be at least ${field.min}`;
      }
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) return;
    const payload = fields.reduce((next, field) => {
      next[field.name] = field.type === "number" ? Number(values[field.name]) : values[field.name];
      return next;
    }, {});
    onSubmit(payload);
  }

  return (
    <Modal open={open} title={title} onClose={onClose}>
      <form className="grid gap-4 p-5 sm:grid-cols-2" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <label className={field.full ? "sm:col-span-2" : ""} key={field.name}>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{field.label}</span>
            {field.type === "select" ? (
              <select
                className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-ink outline-none focus:border-clinic-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                value={values[field.name]}
                onChange={(event) => setValues({ ...values, [field.name]: event.target.value })}
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-ink outline-none focus:border-clinic-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                min={field.min}
                type={field.type || "text"}
                value={values[field.name]}
                onChange={(event) => setValues({ ...values, [field.name]: event.target.value })}
              />
            )}
            {errors[field.name] ? <span className="mt-1 block text-xs font-semibold text-rose-600">{errors[field.name]}</span> : null}
          </label>
        ))}
        <div className="flex justify-end gap-3 border-t border-slate-200 pt-4 sm:col-span-2 dark:border-slate-800">
          <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600 dark:border-slate-700 dark:text-slate-300" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="rounded-lg bg-clinic-600 px-4 py-2 text-sm font-bold text-white hover:bg-clinic-700" type="submit">
            Save Record
          </button>
        </div>
      </form>
    </Modal>
  );
}
