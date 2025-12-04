import { SectionHeader } from "../../../components/SectionHeader";
import { CallToAction } from "../../../components/CallToAction";

export default function AboutPage() {
  const values = [
    {
      title: "Human",
      description: "We design for real people, not personas on paper.",
    },
    {
      title: "Ownership",
      description: "We act like partners, accountable for outcomes.",
    },
    {
      title: "Outcome",
      description: "Impact beats output. Every sprint maps to metrics.",
    },
    {
      title: "Original",
      description: "We avoid templates; we craft tailored experiences.",
    },
    {
      title: "Modern",
      description: "We embrace modern stacks, DevOps, and design systems.",
    },
  ];

  const leadership = [
    {
      name: "Peter Ade",
      title: "CEO & Principal Consultant",
      bio: "Leads product strategy and enterprise transformation engagements across Africa.",
    },
    {
      name: "Ngozi Okoye",
      title: "Head of Design",
      bio: "Designs experiences that align brand, usability, and business results.",
    },
    {
      name: "Tomi Adedeji",
      title: "Head of Engineering",
      bio: "Builds resilient engineering teams with DevOps-first culture and quality.",
    },
  ];

  return (
    <div className="section-shell space-y-16">
      <SectionHeader
        eyebrow="About"
        title="Africa-built. Globally ready."
        description="HoooM Technologies combines strategy, design, and engineering to build digital products that move markets."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="card-surface p-6 soft-shadow">
          <h3 className="text-xl font-semibold text-slate-600">Mission</h3>
          <p className="mt-3 text-slate-700">
            To craft technology and brand experiences that help African and
            global businesses scale with confidence.
          </p>
        </div>
        <div className="card-surface p-6 soft-shadow">
          <h3 className="text-xl font-semibold text-slate-600">Vision</h3>
          <p className="mt-3 text-slate-700">
            To be the trusted innovation partner for ambitious teams building
            the next generation of products across Africa and beyond.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-slate-600">
          Core Values (H.O.O.O.M)
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="card-surface p-6 soft-shadow h-full"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-brand-orange font-semibold">
                {value.title}
              </p>
              <p className="mt-3 text-slate-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {leadership.map((leader) => (
          <div
            key={leader.name}
            className="card-surface p-6 soft-shadow h-full"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-brand-orange font-semibold">
              Leadership
            </p>
            <h4 className="mt-2 text-lg font-semibold text-slate-600">
              {leader.name}
            </h4>
            <p className="text-sm text-slate-600">{leader.title}</p>
            <p className="mt-3 text-slate-700">{leader.bio}</p>
          </div>
        ))}
      </div>

      <div className="card-surface p-6 soft-shadow">
        <h3 className="text-xl font-semibold text-slate-600">
          Culture & Community
        </h3>
        <p className="mt-3 text-slate-700">
          We mentor young engineers, contribute to open-source, and host design
          and DevOps meetups in Lagos. Diversity of thought and background fuels
          the products we ship.
        </p>
      </div>

      <CallToAction
        title="Let’s build the next category-defining product together"
        description="Partner with a team that understands Africa's context and global standards."
        primaryHref="/contact"
        secondaryHref="/services"
        secondaryLabel="View services"
      />
    </div>
  );
}
