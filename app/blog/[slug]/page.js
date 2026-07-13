import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, ORG_NAME, pageMetadata } from "@/lib/site";
import { posts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function ArticleBody({ body }) {
  return body.map((block, i) => {
    if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
    if (block.type === "pull") return <div className="pull" key={i}>{block.text}</div>;
    if (block.type === "ul") {
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j}>
              <strong>{item.bold}</strong>
              {item.rest}
            </li>
          ))}
        </ul>
      );
    }
    return <p key={i}>{block.text}</p>;
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    articleSection: post.tag,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: ORG_NAME },
    publisher: { "@type": "Organization", name: ORG_NAME },
  };

  return (
    <>
      <JsonLd data={blogPostingJsonLd} />

      <Nav />

      <header className="po-section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <SectionHead
            idx={`Blog / Memo ${post.memo}`}
            note={
              <Link className="text-link" href="/blog" style={{ fontSize: 12 }}>
                &larr; All notes
              </Link>
            }
          />
          <span className="tag-chip">{post.tag}</span>
          <h1 className="display-2" style={{ maxWidth: post.titleMaxWidth, marginTop: 14 }}>
            {post.title}
          </h1>
          <p className="article-meta" style={{ marginTop: 16 }}>
            {post.date} &middot; {post.readTime}
          </p>
        </div>
      </header>

      <section className="po-section">
        <div className="container">
          <Reveal className="article">
            <p className="lede" style={{ marginBottom: 0 }}>{post.lede}</p>
            <ArticleBody body={post.body} />
          </Reveal>

          <Reveal style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Button href="/contact">Talk to us &rarr;</Button>
            <Button href="/blog" variant="secondary">More notes</Button>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
