import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Achievement from "@/components/Achievement";
import Skills from "@/components/Skills";
import ERPDomain from "@/components/ERPDomain";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Achievement />
        <Skills />
        <ERPDomain />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-black/10 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Ho Trung Nghia. Built with Next.js & Tailwind CSS.
      </footer>
    </>
  );
}
