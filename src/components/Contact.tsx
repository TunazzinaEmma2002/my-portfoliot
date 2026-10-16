import { site } from "@/data/site";
import CopyEmail from "./Copyemail";

const outline =
  "rounded-full border border-line px-6 py-3 font-semibold hover:border-accent hover:text-accent";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold sm:text-5xl">
            Open to junior developer roles and internships
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-muted">
            Send me a message and I will reply as soon as I can.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-accent px-6 py-3 font-semibold text-night hover:bg-warm"
            >
              Email me
            </a>
            <CopyEmail email={site.email} />
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={outline}
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={outline}
            >
              GitHub
            </a>
            <a href={site.resume} download className={outline}>
              Download resume
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">{site.email}</p>
        </div>
      </div>
    </section>
  );
} 