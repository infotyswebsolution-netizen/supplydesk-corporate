import { SITE_URL } from "@/lib/site";
import { posts } from "@/lib/posts";

const staticRoutes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/product", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/security", changeFrequency: "yearly", priority: 0.6 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
];

export default function sitemap() {
  const staticEntries = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));

  // Enumerated from lib/posts.js, so every future post is included
  // automatically — nothing to update here when a post is added.
  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.datePublished,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
