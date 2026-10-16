import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {site.name}. Built with Next.js and
        TypeScript.
      </footer>
    </>
  );
}