import Image from "next/image";
import { projects, type Project } from "@/data/site";

function Card({ project, featured }: { project: Project; featured: boolean }) {
  const wide = featured && Boolean(project.image);

  return (
    <article
      className={`flex flex-col gap-6 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/70 ${
        featured ? "md:col-span-2" : ""
      } ${wide ? "md:grid md:grid-cols-2 md:gap-8 md:p-7" : ""}`}
    >
      {project.image && (
        <div className="overflow-hidden rounded-xl border border-line bg-night">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            width={1280}
            height={720}
            className="h-auto w-full object-cover object-top"
          />
        </div>
      )}

      <div className="flex flex-col">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <h3 className="font-display text-2xl font-bold">{project.name}</h3>
          {project.period && (
            <span className="text-sm text-muted">{project.period}</span>
          )}
        </div>
        <p className="mt-2 text-muted">{project.summary}</p>

        {project.features.length > 0 && (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full bg-raised px-3 py-1 text-xs text-muted"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm">
          <span className="font-semibold">What I would improve:</span>{" "}
          <span className="text-muted">{project.improve}</span>
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2 text-night hover:bg-warm"
            >
              Open live app
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-5 py-2 hover:border-accent hover:text-accent"
          >
            View code
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Projects</h2>
        <p className="mt-3 max-w-prose text-muted">
          Every project has its code on GitHub. Apps with a live link can be
          opened and used right away.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={project.name} project={project} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}