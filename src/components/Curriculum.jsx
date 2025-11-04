import { CheckCircle2, Clock, Code } from "lucide-react";

const days = [
  {
    title: "Day 1 · React Fundamentals",
    desc: "JSX, components, props, and thinking in React. Build a clean mental model to avoid common pitfalls.",
    icon: CheckCircle2,
  },
  {
    title: "Day 2 · State & Effects",
    desc: "useState, useEffect, and data flow. Learn how to keep UIs reactive and predictable.",
    icon: Clock,
  },
  {
    title: "Day 3 · Data Fetching",
    desc: "Fetch from APIs the right way, manage loading and error states, and structure your app.",
    icon: Code,
  },
  {
    title: "Day 4 · Routing & Forms",
    desc: "Build multi‑page flows, validate forms, and handle submission like a pro.",
    icon: CheckCircle2,
  },
  {
    title: "Day 5 · Patterns & Next Steps",
    desc: "Reusable components, performance tips, and how to keep learning effectively.",
    icon: Code,
  },
];

export default function Curriculum() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What you'll learn in 5 days</h2>
          <p className="mt-3 text-gray-600">
            Short, focused lessons with practical challenges and examples you can use immediately.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {days.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
