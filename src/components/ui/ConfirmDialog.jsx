import Modal from "./Modal.jsx";

export default function ConfirmDialog({ open, title = "Delete record", message, onCancel, onConfirm }) {
  return (
    <Modal open={open} title={title} onClose={onCancel}>
      <div className="p-5">
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{message}</p>
        <div className="mt-5 flex justify-end gap-3">
          <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-600 dark:border-slate-700 dark:text-slate-300" onClick={onCancel}>
            Cancel
          </button>
          <button className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-bold text-white" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}
