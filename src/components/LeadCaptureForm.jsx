import { useEffect, useMemo, useState } from "react";
import { Mail, CheckCircle, Lock } from "lucide-react";

export default function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [error, setError] = useState("");

  const emailValid = useMemo(() => /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email), [email]);

  useEffect(() => {
    const alreadyJoined = localStorage.getItem("react_course_lead");
    if (alreadyJoined) setStatus("success");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!emailValid) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!agree) {
      setError("Please agree to receive course emails.");
      return;
    }

    // In a real app, send to backend/email provider here.
    localStorage.setItem(
      "react_course_lead",
      JSON.stringify({ email, name, ts: Date.now() })
    );
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-indigo-100 bg-white p-6 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-full bg-green-100 p-2 text-green-700">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">You're in! 🎉</h3>
            <p className="mt-1 text-gray-600">
              Check your inbox for a welcome email. Your first React lesson will arrive within the next few minutes.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-xl rounded-2xl border border-indigo-100 bg-white p-6 shadow-lg"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-gray-700">First name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-200 focus:ring"
          />
        </div>
        <div className="sm:col-span-3">
          <label className="text-sm font-medium text-gray-700">Email address</label>
          <div className="mt-1 flex items-center rounded-lg border border-gray-300 pr-2 ring-indigo-200 focus-within:ring">
            <div className="pl-3 text-gray-400">
              <Mail className="h-5 w-5" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="w-full rounded-lg px-3 py-2 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2">
        <input
          id="agree"
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="agree" className="text-sm text-gray-600">
          I agree to receive the free 5‑day course and occasional updates. Unsubscribe anytime.
        </label>
      </div>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={!emailValid || !agree}
          className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          Start the free course
        </button>
        <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
          <Lock className="h-4 w-4" />
          <span>We respect your privacy</span>
        </div>
      </div>
    </form>
  );
}
