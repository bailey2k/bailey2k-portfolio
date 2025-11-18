import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "./data";
import { BLOG_POSTS } from "./blog/posts";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="md:container select-none font-johnston flex items-start justify-center min-h-screen pt-16 pb-16">
      <div className="w-11/12 md:w-3/4 grid md:grid-cols-3 gap-8">
        <aside className="md:col-span-1 flex flex-col items-start gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/pfp.jpg" alt="Bailey Jones" width={120} height={120} className="rounded-full" />
            <h1 className="mt-4 text-2xl font-bold">Bailey Jones</h1>
            <p className="text-sm text-gray-700">CS @ University of Maryland, College Park</p>
          </div>

          <div className="flex gap-4 mt-2 items-center md:items-start">
            <ExternalLink href="https://github.com/bailey2k">
              <Image src="/logos/github.png" alt="GitHub" width={36} height={36} draggable={false} />
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/bailey-j7">
              <Image src="/logos/linkedin.png" alt="LinkedIn" width={36} height={36} draggable={false} />
            </ExternalLink>
            <ExternalLink href="https://instagram.com/74.bailey">
              <Image src="/logos/instagram.png" alt="Instagram" width={36} height={36} draggable={false} />
            </ExternalLink>
            <ExternalLink href="https://open.spotify.com/user/31bmdw7ozxofoudlhrnqfsetz2ua?si=070676c0f9df4cfd">
              <Image src="/logos/spotify.png" alt="Spotify" width={36} height={36} draggable={false} />
            </ExternalLink>
          </div>

          <nav className="mt-6">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="block text-2xl font-semibold py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="block text-2xl py-2">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block text-2xl py-2">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {BLOG_POSTS && BLOG_POSTS.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Recent Posts</h3>
              <div className="flex flex-col gap-2">
                {BLOG_POSTS.slice(0, 2).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block text-sm text-gray-700 hover:underline"
                  >
                    <div className="font-medium">{post.title}</div>
                    <div className="text-xs text-gray-600">{post.date}</div>
                  </Link>
                ))}
              </div>
              <div className="mt-3">
                <Link href="/blog" className="tag-white inline-block px-3 py-1">
                  More
                </Link>
              </div>
            </div>
          )}
        </aside>

        <section className="md:col-span-2 flex flex-col gap-8">
          
          <article>
            <h2 className="text-xl font-semibold mb-3">Education</h2>
            {(RESUME_DATA.education || []).map((edu, i) => (
              <div key={i} className="mb-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:underline">
                      {edu.university}
                    </a>
                    <div className="text-sm text-gray-700">{edu.major}{edu.minor ? ` • ${edu.minor}` : ""}</div>
                  </div>
                  <div className="text-sm text-gray-600">{edu.start} — {edu.end ?? "Present"}</div>
                </div>

                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2 text-sm">
                    {(edu.coursework || []).map((c, idx) => (
                      <span key={idx} className="tag-white">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-3">Projects</h2>
            <div className="timeline relative">
              <div className="timeline-divider" />
              {(RESUME_DATA.projects || []).map((p, i) => (
                <div key={i} className="timeline-item">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-medium">{p.title}</h3>
                      <div className="text-sm text-gray-600 whitespace-nowrap">{p.start} — {p.end ?? "Present"}</div>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{p.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(p.tags || []).map((t, idx) => (
                      <span key={idx} className="tag-white">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article>
            <h2 className="text-xl font-semibold mb-3">Experience</h2>
            <div className="timeline relative">
              <div className="timeline-divider" />
              {(RESUME_DATA.experience || []).map((e, i) => (
                <div key={i} className="timeline-item">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-medium">{e.title}</h3>
                    <div className="text-sm text-gray-600 whitespace-nowrap">{e.start} — {e.end ?? "Present"}</div>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{e.description}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
