import Link from "next/link";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { FooterCta } from "@/components/FooterCta";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Specific, operational notes on running a supply business — written by the people who build SupplyDesk.",
};

export default function BlogPage() {
  return (
    <>
      <Nav />

      <header className="po-section">
        <div className="container">
          <SectionHead idx="Blog / Notes on running a supply business" note="Written by the people who build SupplyDesk" />
          <h1 className="display-1" style={{ maxWidth: "18ch" }}>
            How other suppliers set this up, and what it actually changed.
          </h1>
          <p className="lede" style={{ marginTop: 20 }}>
            Specific, operational notes &mdash; not marketing. If you run a supply business,
            this is the stuff we&rsquo;d tell you over the phone anyway.
          </p>
        </div>
      </header>

      <section className="po-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead idx="SEC 01 / Latest" note={`${posts.length} notes`} />

          {posts.map((post) => (
            <Reveal as="div" className="memo-row" key={post.slug}>
              <span className="memo-id">MEMO {post.memo}</span>
              <div>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
              </div>
              <span className="memo-meta">
                {post.date}
                <br />
                {post.tag}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <FooterCta>Want to see this running with your catalog?</FooterCta>

      <SiteFooter />
    </>
  );
}
