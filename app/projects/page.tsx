import Link from "next/link";
import { RESUME_DATA } from "../data";

export default function ProjectsPage() {
  return (
    <main className="md:container select-none font-johnston flex items-start justify-center min-h-screen pt-16 pb-16">
      <div className="w-11/12 md:w-3/4">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Link href="/" className="text-sm hover:underline">
            Back
          </Link>
        </header>

        <div className="flex flex-col gap-6">
          {(RESUME_DATA.projects || []).map((p, i) => (
            <article key={i} className="p-4 border border-gray-200 bg-transparent rounded">
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold">{p.title}</h2>
                <div className="text-sm text-gray-600 whitespace-nowrap">{p.start} — {p.end ?? "Present"}</div>
              </div>
              <p className="text-sm text-gray-700 mt-2">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(p.tags || []).map((t, idx) => (
                  <span key={idx} className="tag-white">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
