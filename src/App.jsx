import { useRef } from "react";
import Hero from "./components/Hero";
import LeadCaptureForm from "./components/LeadCaptureForm";
import Curriculum from "./components/Curriculum";
import Testimonials from "./components/Testimonials";

function App() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <Hero onGetStarted={scrollToForm} />

      {/* Lead Capture */}
      <section ref={formRef} className="-mt-10 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative -top-12">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <Curriculum />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} React Mini‑Course. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
