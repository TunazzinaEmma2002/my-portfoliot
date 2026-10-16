export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">About me</h2>

        <div className="space-y-10">
          <div className="max-w-prose space-y-4 text-lg leading-relaxed text-fg/90">
            <p>
              I am a Computer Science and Engineering student from Bangladesh. I
              build web apps end to end: the interface in React and Next.js, the
              API in Node.js, and the data in MongoDB.
            </p>
            <p>
              I started with the MERN stack and now spend most of my time on
              Next.js, TypeScript and Server Actions.
            </p>
            <p>
              I like projects that solve one specific problem, are deployed, and
              come with a README that explains how to run them.
            </p>
            {/* Add one personal sentence here: why you started coding, or what you want to build next. */}
          </div>

          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-5">
              <dt className="font-display text-lg font-bold">Education</dt>
              <dd className="mt-2 text-muted">
                Honours in Computer Science and Engineering, Habibullah Bahar
                University. 2021 to present.
              </dd>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <dt className="font-display text-lg font-bold">Beyond code</dt>
              <dd className="mt-2 text-muted">
                Diploma in Graphics Designing. I also edit video, make Canva
                templates and create digital art.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}