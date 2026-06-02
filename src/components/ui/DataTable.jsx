import { Edit, Trash2 } from "lucide-react";
import EmptyState from "./EmptyState.jsx";
import { getRecordKey } from "../../utils/formatters.js";

export default function DataTable({ columns, rows, onEdit, onDelete }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="overflow-x-auto scrollbar-thin">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50 dark:bg-slate-950">
            <tr>
              {columns.map((column) => (
                <th
                  className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  key={column.key}
                >
                  {column.label}
                </th>
              ))}
              {onEdit || onDelete ? (
                <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Actions
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.length ? rows.map((row, index) => (
              <tr className="transition hover:bg-slate-50 dark:hover:bg-slate-800/70" key={getRecordKey(row, index)}>
                {columns.map((column) => (
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-700 dark:text-slate-300" key={column.key}>
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
                {onEdit || onDelete ? (
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      {onEdit ? (
                        <button aria-label="Edit record" className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800" onClick={() => onEdit(row)}>
                          <Edit size={15} />
                        </button>
                      ) : null}
                      {onDelete ? (
                        <button aria-label="Delete record" className="rounded-lg border border-rose-200 p-2 text-rose-600 hover:bg-rose-50 dark:border-rose-900/60 dark:hover:bg-rose-950/30" onClick={() => onDelete(row)}>
                          <Trash2 size={15} />
                        </button>
                      ) : null}
                    </div>
                  </td>
                ) : null}
              </tr>
            )) : (
              <tr>
                <td colSpan={columns.length + (onEdit || onDelete ? 1 : 0)} className="p-4">
                  <EmptyState />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
