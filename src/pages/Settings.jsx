import { useState } from "react";
import { Check, Moon, Shield, UserCog } from "lucide-react";
import PageHeader from "../components/ui/PageHeader.jsx";

const settings = [
  { label: "Two-factor access", icon: Shield, enabled: true },
  { label: "Compact table density", icon: UserCog, enabled: false },
  { label: "Night shift theme", icon: Moon, enabled: false },
];

export default function Settings() {
  const [saved, setSaved] = useState(false);
  const [items, setItems] = useState(settings);

  function toggle(label) {
    setItems((current) => current.map((item) => (item.label === label ? { ...item, enabled: !item.enabled } : item)));
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        eyebrow="Workspace preferences"
        action={saved ? "Saved" : "Save Changes"}
        onAction={() => {
          setSaved(true);
          window.setTimeout(() => setSaved(false), 1800);
        }}
      >
        Configure frontend-only preferences for administrative workflows and demo access controls.
      </PageHeader>
      <div className="grid gap-4 lg:grid-cols-3">
        {items.map(({ label, icon: Icon, enabled }) => (
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900" key={label}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-clinic-50 p-3 text-clinic-700 dark:bg-clinic-950/50 dark:text-clinic-100">
                  <Icon size={20} />
                </div>
                <p className="font-bold text-ink dark:text-white">{label}</p>
              </div>
              <button
                aria-label={`Toggle ${label}`}
                className={`flex h-7 w-12 items-center rounded-full p-1 transition ${
                  enabled ? "bg-clinic-600" : "bg-slate-200 dark:bg-slate-700"
                }`}
                onClick={() => toggle(label)}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full bg-white text-clinic-600 shadow transition ${
                    enabled ? "translate-x-5" : "translate-x-0"
                  }`}
                >
                  {enabled ? <Check size={12} /> : null}
                </span>
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
              This interface setting is local to the frontend prototype and does not persist to a backend.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
