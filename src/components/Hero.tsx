import type { CSSProperties } from "react";
import Image from "next/image";
import { projects, site } from "@/data/site";
import profilePhoto from "@/assets/githubemma.png";

const delay = (ms: number): CSSProperties =>
  ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  const live = projects.find((project) => project.live);

  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-12 md:grid-cols-[1.3fr_1fr] md:pt-20"
    >
      <div>
        <h1
          className="rise font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          style={delay(0)}
        >
          I build and design full-stack web apps you can open and use.
        </h1>
        <p className="rise mt-6 max-w-prose text-lg text-muted" style={delay(120)}>
          Hello There, I am {site.name}, a CSE student from Bangladesh. I work with
          Next.js, TypeScript ,JavaScript, MERN stack, and I bring a design
          background in graphics, video and digital art to every interface.
        </p>

        <div className="rise mt-8 flex flex-wrap gap-3" style={delay(240)}>
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 font-semibold text-night hover:bg-warm"
          >
            See my projects
          </a>
          <a
            href={site.resume}
            download
            className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent hover:text-accent"
          >
            Download resume
          </a>
        </div>

        {live && (
          <a
            href={live.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rise mt-8 inline-flex items-center gap-3 rounded-full border border-line bg-surface px-4 py-2 text-sm hover:border-accent"
            style={delay(360)}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            <span>
              <strong className="font-semibold">{live.name}</strong> is live.
              Try it now
            </span>
          </a>
        )}
      </div>

      <div className="rise relative mx-auto w-full max-w-sm" style={delay(200)}>
        <div
          aria-hidden
          className="absolute -inset-6 rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute inset-0 translate-x-4 translate-y-4 rounded-b-3xl rounded-t-[999px] border border-accent/60"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-b-3xl rounded-t-[999px] border border-line bg-surface">
          <Image
  src={profilePhoto}
  alt={`Portrait of ${site.name}`}
  fill
  priority
  sizes="(min-width: 768px) 384px, 90vw"
  className="object-cover object-top"
/>
        </div>
      </div>
    </section>
  );
}