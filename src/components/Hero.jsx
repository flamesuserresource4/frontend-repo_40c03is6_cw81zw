import { Rocket, Star, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-500 text-white">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,.35), transparent 25%), radial-gradient(circle at 80% 30%, rgba(255,255,255,.25), transparent 30%), radial-gradient(circle at 40% 80%, rgba(255,255,255,.2), transparent 25%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <Shield className="h-4 w-4" />
            Free 5-day email mini‑course
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Master React.js, one inbox at a time
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Join thousands of developers leveling up with bite‑sized React lessons, hands‑on challenges, and real‑world patterns delivered daily to your email.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition hover:shadow-xl hover:brightness-95"
            >
              <Rocket className="h-5 w-5" />
              Get the free course
            </button>
            <div className="flex items-center gap-1 text-sm text-indigo-100">
              <Star className="h-4 w-4 fill-current" />
              <span>4.9/5 average rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
