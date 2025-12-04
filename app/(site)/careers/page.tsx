import { SectionHeader } from "../../../components/SectionHeader";
import { CallToAction } from "../../../components/CallToAction";

const roles = [
  {
    title: "Senior Product Designer",
    location: "Hybrid — Lagos",
    summary:
      "Lead UX/UI delivery across web and mobile products with research-driven craft.",
  },
  {
    title: "Full-Stack Engineer",
    location: "Remote",
    summary:
      "Ship modern web applications with Next.js, TypeScript, and cloud-native tooling.",
  },
  {
    title: "DevOps Engineer",
    location: "Hybrid — Lagos",
    summary:
      "Design CI/CD pipelines, observability, and cloud infrastructure for fast-moving teams.",
  },
];

export default function CareersPage() {
  return (
    <div className="section-shell space-y-12">
      <SectionHeader
        eyebrow="Careers"
        title="Build with a team that ships excellence"
        description="We are a multidisciplinary team obsessed with quality, velocity, and craft."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {roles.map((role) => (
          <div key={role.title} className="card-surface p-6 soft-shadow h-full">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-orange font-semibold">
              Open role
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-600">
              {role.title}
            </h3>
            <p className="text-sm text-slate-600">{role.location}</p>
            <p className="mt-3 text-slate-700">{role.summary}</p>
            <button className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-glow">
              Apply now
            </button>
          </div>
        ))}
      </div>

      <div className="card-surface p-6 soft-shadow">
        <h3 className="text-xl font-semibold text-slate-600">Why join HoooM</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li className="text-slate-700">
            Work on meaningful products across industries.
          </li>
          <li className="text-slate-700">
            Learn with a team that pairs design thinking with engineering rigor.
          </li>
          <li className="text-slate-700">
            Access to mentors, workshops, and community events.
          </li>
          <li className="text-slate-700">
            Flexible work culture with remote-first tooling.
          </li>
        </ul>
      </div>

      <CallToAction
        title="Don’t see your role?"
        description="Send us your portfolio or GitHub—we are always looking for builders."
        primaryHref="mailto:hello@hooom.org"
        primaryLabel="Email hello@hooom.org"
        secondaryHref="/about"
        secondaryLabel="Learn about us"
      />
    </div>
  );
}
