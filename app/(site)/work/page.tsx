import { SectionHeader } from "../../../components/SectionHeader";
import { ProjectCard } from "../../../components/ProjectCard";
import { projects } from "../../../data/work";
import { CallToAction } from "../../../components/CallToAction";

export default function WorkPage() {
  return (
    <div className="section-shell space-y-12">
      <SectionHeader
        eyebrow="Work"
        title="Selected engagements"
        description="Case studies spanning fintech, real estate, enterprise systems, and brand experiences."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <CallToAction
        title="Have a project in mind?"
        description="We’ll assemble a cross-functional squad to ship your next release."
        primaryHref="/contact"
        secondaryHref="/services"
        secondaryLabel="Our services"
      />
    </div>
  );
}
