const steps = [
  { title: "Discover", description: "Workshops, research, and clarity around objectives." },
  { title: "Design / Brand", description: "UX/UI design, product strategy, and visual language." },
  { title: "Build", description: "Agile engineering, QA, and DevOps to ship reliable software." },
  { title: "Launch", description: "Go-live readiness, change management, and training." },
  { title: "Grow", description: "Product analytics, iteration, and ongoing enhancements." },
];

export function ProcessSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
      {steps.map((step, index) => (
        <div key={step.title} className="card-surface p-5 soft-shadow h-full">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-semibold">Step {index + 1}</p>
          <h4 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h4>
          <p className="mt-2 text-sm text-slate-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
