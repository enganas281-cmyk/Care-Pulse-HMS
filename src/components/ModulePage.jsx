import { useMemo, useState } from "react";
import ConfirmDialog from "./ui/ConfirmDialog.jsx";
import DataTable from "./ui/DataTable.jsx";
import PageHeader from "./ui/PageHeader.jsx";
import RecordFormModal from "./ui/RecordFormModal.jsx";
import { ErrorState, LoadingState } from "./ui/StatePanel.jsx";
import { getRecordKey, matchesSearch } from "../utils/formatters.js";

export default function ModulePage({
  title,
  eyebrow,
  description,
  action,
  initialRows,
  columns,
  fields,
  filterKey = "status",
  idPrefix = "REC",
}) {
  const [rows, setRows] = useState(initialRows);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [state, setState] = useState("ready");

  const filterOptions = useMemo(() => {
    const values = rows.map((row) => row[filterKey]).filter(Boolean);
    return ["All", ...Array.from(new Set(values))];
  }, [filterKey, rows]);

  const visibleRows = useMemo(
    () =>
      rows.filter((row) => {
        const passesFilter = filter === "All" || row[filterKey] === filter;
        return passesFilter && matchesSearch(row, search);
      }),
    [filter, filterKey, rows, search]
  );

  function openCreate() {
    setEditing(null);
    setFormOpen(true);
  }

  function saveRecord(payload) {
    if (editing) {
      const key = getRecordKey(editing);
      setRows((current) => current.map((row, index) => (getRecordKey(row, index) === key ? { ...row, ...payload } : row)));
    } else {
      const nextId = `${idPrefix}-${String(rows.length + 1001).padStart(4, "0")}`;
      setRows((current) => [{ id: nextId, ...payload }, ...current]);
    }
    setFormOpen(false);
    setEditing(null);
  }

  function confirmDelete() {
    const key = getRecordKey(deleting);
    setRows((current) => current.filter((row, index) => getRecordKey(row, index) !== key));
    setDeleting(null);
  }

  function refresh() {
    setState("loading");
    window.setTimeout(() => setState("ready"), 450);
  }

  return (
    <div className="space-y-6">
      <PageHeader
        action={action}
        eyebrow={eyebrow}
        onAction={openCreate}
        onSearch={setSearch}
        search={search}
        title={title}
        filters={
          <div className="flex gap-2">
            <select
              className="h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-600 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
            >
              {filterOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <button className="h-10 rounded-lg border border-slate-200 px-3 text-sm font-bold text-slate-600 dark:border-slate-700 dark:text-slate-300" onClick={refresh}>
              Refresh
            </button>
          </div>
        }
      >
        {description}
      </PageHeader>

      {state === "loading" ? (
        <LoadingState />
      ) : state === "error" ? (
        <ErrorState onRetry={() => setState("ready")} />
      ) : (
        <DataTable
          columns={columns}
          rows={visibleRows}
          onEdit={(row) => {
            setEditing(row);
            setFormOpen(true);
          }}
          onDelete={setDeleting}
        />
      )}

      <RecordFormModal
        fields={fields}
        onClose={() => setFormOpen(false)}
        onSubmit={saveRecord}
        open={formOpen}
        record={editing}
        title={editing ? `Edit ${title.slice(0, -1)}` : action}
      />
      <ConfirmDialog
        message={`This will remove ${deleting?.name || deleting?.patient || deleting?.item || deleting?.id || "this record"} from the local frontend list.`}
        onCancel={() => setDeleting(null)}
        onConfirm={confirmDelete}
        open={Boolean(deleting)}
      />
    </div>
  );
}
