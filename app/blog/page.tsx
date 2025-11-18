import Link from "next/link";
import { BLOG_POSTS } from "./posts";

export default function BlogIndex() {
  return (
    <main className="md:container select-none font-johnston flex items-start justify-center min-h-screen pt-16 pb-16">
      <div className="w-11/12 md:w-3/4">
        <nav className="text-sm mb-4">
          <Link href="/" className="hover:underline">← Back to Home</Link>
        </nav>

        <h1 className="text-3xl font-bold mb-6">Blog</h1>

        <div className="flex flex-col gap-6">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="p-4 bg-card-bg border panel-border rounded-md">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-700 mt-1">{post.excerpt}</p>
                </div>
                <div className="text-sm text-gray-600 whitespace-nowrap ml-4">{post.date}</div>
              </div>
              <div className="mt-3">
                <Link href={`/blog/${post.slug}`} className="text-sm font-medium hover:underline">
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
