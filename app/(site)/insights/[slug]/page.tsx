import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SectionHeader } from "../../../../components/SectionHeader";
import { CallToAction } from "../../../../components/CallToAction";
import { blogPosts } from "../../../../data/blogPosts";
import Link from "next/link";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return { title: "Insight not found" };
  return {
    title: `${post.title} | HoooM Technologies Insights`,
    description: post.metaDescription,
  };
}

export default function InsightDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  const related = blogPosts
    .filter(
      (item) => item.slug !== post.slug && item.category === post.category
    )
    .slice(0, 3);

  return (
    <div className="section-shell space-y-10">
      <SectionHeader
        eyebrow={post.category}
        title={post.title}
        description={post.metaDescription}
        actions={
          <p className="text-sm text-slate-600">
            {new Date(post.publishedAt).toLocaleDateString()} •{" "}
            {post.readingTimeMinutes} min read
          </p>
        }
      />

      <article className="card-surface p-6 soft-shadow prose prose-slate">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </article>

      <div>
        <h3 className="text-xl font-semibold text-slate-600">Related posts</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="card-surface p-4 soft-shadow block hover:-translate-y-1 transition-transform"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-brand-orange font-semibold">
                {item.category}
              </p>
              <p className="mt-2 font-semibold text-slate-600">{item.title}</p>
            </Link>
          ))}
          {related.length === 0 && (
            <p className="text-slate-600">More insights coming soon.</p>
          )}
        </div>
      </div>

      <CallToAction
        title="Have a problem worth discussing?"
        description="We can help you frame the opportunity, design the solution, and ship it to market."
        primaryHref="/contact"
        secondaryHref="/services"
        secondaryLabel="See services"
      />
    </div>
  );
}
