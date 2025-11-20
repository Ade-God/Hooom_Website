import Link from "next/link";
import { SectionHeader } from "../../../components/SectionHeader";
import { BlogCard } from "../../../components/BlogCard";
import { blogPosts } from "../../../data/blogPosts";
import { CallToAction } from "../../../components/CallToAction";

export default function InsightsPage() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <div className="section-shell space-y-12">
      <SectionHeader
        eyebrow="Insights"
        title="Signals, playbooks, and thinking"
        description="Ideas from our team on building, designing, and scaling digital products."
      />

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <span key={category} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            {category}
          </span>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <CallToAction
        title="Need guidance for your roadmap?"
        description="Book a strategy call and we’ll help you translate insight into action."
        primaryHref="/contact"
        secondaryHref="/services"
        secondaryLabel="See what we do"
      />
    </div>
  );
}
