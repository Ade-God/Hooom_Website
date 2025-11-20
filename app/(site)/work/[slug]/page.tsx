import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SectionHeader } from "../../../../components/SectionHeader";
import { CallToAction } from "../../../../components/CallToAction";
import { projects } from "../../../../data/work";
import { ProjectCard } from "../../../../components/ProjectCard";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} | HoooM Technologies`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return notFound();
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <div className="section-shell space-y-12">
      <SectionHeader
        eyebrow={project.industry}
        title={project.name}
        description={project.summary}
        actions={<p className="text-sm text-slate-600">{project.tags.join(" • ")}</p>}
      />

      <div className="card-surface p-6 soft-shadow">
        <h3 className="text-lg font-semibold text-slate-900">Problem / Solution / Results</h3>
        <div className="prose prose-slate mt-4">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.body}</ReactMarkdown>
        </div>
      </div>

      <div className="card-surface p-6 soft-shadow">
        <h4 className="text-lg font-semibold text-slate-900">Tech stack</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader eyebrow="More work" title="Related projects" />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <ProjectCard key={item.slug} project={item} />
          ))}
        </div>
      </div>

      <CallToAction
        title="Ready to build your own success story?"
        description="Let’s talk about your next release, migration, or brand refresh."
        primaryHref="/contact"
        secondaryHref="/services"
        secondaryLabel="See our capabilities"
      />
    </div>
  );
}
