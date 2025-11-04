import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Samira K.",
    role: "Frontend Developer",
    quote:
      "The daily emails were the perfect size. I finally understand state and effects without feeling overwhelmed.",
  },
  {
    name: "Diego R.",
    role: "Full‑stack Engineer",
    quote:
      "Concise, practical, and actionable. I shipped a React feature at work using techniques from Day 3.",
  },
  {
    name: "Ava P.",
    role: "Student",
    quote:
      "Best intro to React I've taken. The exercises made everything click. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Loved by learners worldwide</h2>
          <p className="mt-3 text-gray-600">Real results from developers who took the 5‑day challenge.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="rounded-full bg-indigo-50 p-2 text-indigo-600">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
