import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Cross, Lock, Mail, ShieldCheck } from "lucide-react";
import { useAuth } from "../auth/AuthContext.jsx";
const demoUsers = [
  { role: "Admin", email: "admin@carepulse.test", password: "admin123" },
  { role: "Doctor", email: "doctor@carepulse.test", password: "doctor123" },
  { role: "Nurse", email: "nurse@carepulse.test", password: "nurse123" },
  { role: "Receptionist", email: "reception@carepulse.test", password: "reception123" },
  { role: "Accountant", email: "accountant@carepulse.test", password: "accountant123" },
  { role: "Patient", email: "patient@carepulse.test", password: "patient123" }
];

export default function Login() {
  const { currentUser, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("admin@carepulse.test");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (currentUser) return <Navigate to="/" replace />;

  function submit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    window.setTimeout(() => {
      const result = login(email, password);
      setLoading(false);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      navigate(location.state?.from || "/", { replace: true });
    }, 350);
  }

  return (
    <div className="medical-grid flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft lg:grid-cols-[1fr_.9fr]">
        <section className="bg-slate-950 p-8 text-white lg:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-clinic-600">
              <Cross size={26} />
            </div>
            <div>
              <p className="text-xl font-bold">CarePulse HMS</p>
              <p className="text-sm text-white/60">Secure multi-role workspace</p>
            </div>
          </div>
          <h1 className="mt-12 max-w-lg text-4xl font-bold leading-tight">Hospital access tailored to every care team role.</h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">
            Admins, doctors, nurses, receptionists, accountants, and patients see only the tools their workflow requires.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Role permissions", "Activity logs", "Notifications", "Analytics"].map((item) => (
              <div className="rounded-lg bg-white/10 p-4" key={item}>
                <ShieldCheck className="text-clinic-300" size={18} />
                <p className="mt-3 text-sm font-bold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 lg:p-10">
          <p className="text-sm font-semibold text-clinic-700">Sign in</p>
          <h2 className="mt-1 text-2xl font-bold text-ink">Choose a demo role</h2>
          <form className="mt-6 space-y-4" onSubmit={submit}>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Email</span>
              <div className="mt-2 flex h-11 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3">
                <Mail size={17} className="text-slate-400" />
                <input className="w-full bg-transparent text-sm outline-none" value={email} onChange={(event) => setEmail(event.target.value)} />
              </div>
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Password</span>
              <div className="mt-2 flex h-11 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3">
                <Lock size={17} className="text-slate-400" />
                <input className="w-full bg-transparent text-sm outline-none" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
              </div>
            </label>
            {error ? <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700">{error}</div> : null}
            <button className="h-11 w-full rounded-lg bg-clinic-600 text-sm font-bold text-white hover:bg-clinic-700" disabled={loading}>
              {loading ? "Signing in..." : "Sign in securely"}
            </button>
          </form>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-bold text-ink">Demo credentials</p>
            <div className="mt-3 grid gap-2 text-xs text-slate-600">
              {demoUsers.map((user) => (
                <button
                  className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 text-left hover:ring-1 hover:ring-clinic-200"
                  key={user.role}
                  onClick={() => {
                    setEmail(user.email);
                    setPassword(user.password);
                  }}
                  type="button"
                >
                  <span className="font-bold text-slate-800">{user.role}</span>
                  <span>{user.email}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
