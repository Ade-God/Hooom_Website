"use client";

import { useState } from "react";
import { SectionHeader } from "../../../components/SectionHeader";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section-shell space-y-10">
      <SectionHeader
        eyebrow="Contact"
        title="Book a strategy call"
        description="Tell us about your product vision or infrastructure needs and we’ll respond within one business day."
        actions={
          <div className="text-sm text-slate-600">
            <p>hello@hooom.org</p>
            <p>peter@hooom.org</p>
          </div>
        }
      />

      <div className="card-surface p-6 soft-shadow grid gap-8 lg:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-900">What to expect</h3>
          <ul className="space-y-2 text-slate-700">
            <li>Discovery call to understand objectives.</li>
            <li>Collaborative scoping and timeline options.</li>
            <li>Follow-up with a tailored proposal.</li>
          </ul>
          <p className="text-sm text-slate-600">Prefer email? hello@hooom.org</p>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required name="name" placeholder="Name" className="rounded-xl border border-slate-200 px-4 py-3" />
          <input required name="email" type="email" placeholder="Email" className="rounded-xl border border-slate-200 px-4 py-3" />
          <input name="phone" placeholder="Phone" className="rounded-xl border border-slate-200 px-4 py-3" />
          <input name="company" placeholder="Company" className="rounded-xl border border-slate-200 px-4 py-3" />
          <select name="service" className="rounded-xl border border-slate-200 px-4 py-3" defaultValue="">
            <option value="" disabled>
              Service type
            </option>
            <option>Software Development</option>
            <option>Product Design</option>
            <option>Branding</option>
            <option>Enterprise Solutions</option>
            <option>Cloud & DevOps</option>
          </select>
          <select name="budget" className="rounded-xl border border-slate-200 px-4 py-3" defaultValue="">
            <option value="" disabled>
              Budget range
            </option>
            <option>$5k - $15k</option>
            <option>$15k - $40k</option>
            <option>$40k - $100k</option>
            <option>$100k+</option>
          </select>
          <select name="timeline" className="rounded-xl border border-slate-200 px-4 py-3" defaultValue="">
            <option value="" disabled>
              Timeline
            </option>
            <option>Immediate</option>
            <option>1-3 months</option>
            <option>3-6 months</option>
            <option>6+ months</option>
          </select>
          <textarea
            name="message"
            placeholder="Project goals and context"
            className="rounded-xl border border-slate-200 px-4 py-3 md:col-span-2 min-h-[140px]"
          />
          <button
            type="submit"
            className="rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-glow hover:bg-slate-800 md:col-span-2"
          >
            Send message
          </button>
          {submitted && (
            <p className="md:col-span-2 text-sm text-brand-teal">Thank you! We will respond within one business day.</p>
          )}
        </form>
      </div>
    </div>
  );
}
