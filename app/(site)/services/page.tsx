import { SectionHeader } from "../../../components/SectionHeader";
import { ServiceCard } from "../../../components/ServiceCard";
import { services } from "../../../data/services";
import { CallToAction } from "../../../components/CallToAction";

export default function ServicesPage() {
  return (
    <div className="section-shell space-y-12">
      <SectionHeader
        eyebrow="Services"
        title="Integrated capabilities for modern teams"
        description="From idea to scale, we combine strategy, design, engineering, and DevOps to ship resilient products."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
      <CallToAction
        title="Need a bespoke engagement?"
        description="We tailor teams and sprints to your roadmap—product, brand, or cloud infrastructure."
        primaryHref="/contact"
        secondaryHref="/work"
        secondaryLabel="View case studies"
      />
    </div>
  );
}
