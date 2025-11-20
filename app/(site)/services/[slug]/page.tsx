import { notFound } from "next/navigation";
import { SectionHeader } from "../../../../components/SectionHeader";
import { CallToAction } from "../../../../components/CallToAction";
import { services } from "../../../../data/services";
import { projects } from "../../../../data/work";
import { ProjectCard } from "../../../../components/ProjectCard";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return notFound();

  const relatedProjects = projects.filter((project) => project.servicesProvided.includes(service.name)).slice(0, 3);

  return (
    <div className="section-shell space-y-12">
      <SectionHeader
        eyebrow="Service"
        title={service.name}
        description={service.shortDescription}
        actions={<p className="text-sm text-slate-600">{service.seoDescription}</p>}
      />

      <div className="card-surface p-6 soft-shadow">
        <p className="text-slate-700 leading-relaxed">{service.longDescription}</p>
        <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
          {service.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>

      <div>
        <SectionHeader
          eyebrow="Proof"
          title="Related projects"
          description="How we have delivered this capability for clients."
        />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {relatedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          {relatedProjects.length === 0 && <p className="text-slate-600">More case studies coming soon.</p>}
        </div>
      </div>

      <CallToAction
        title={`Bring ${service.name} to your roadmap`}
        description="Share your objectives and we will assemble a delivery pod that fits your scope."
        primaryHref="/contact"
        secondaryHref="/work"
        secondaryLabel="See full portfolio"
      />
    </div>
  );
}
