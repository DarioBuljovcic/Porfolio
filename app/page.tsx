import Link from "next/link";
import ScrollObserver from "@/components/ScrollObserver";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <ScrollObserver />
      <section className="hero animate__animated animate__fadeIn reveal-on-scroll">
        <div className="container">
          <div className="hero-badge animate__animated animate__fadeInDown reveal-on-scroll">Portfolio</div>
          <h1 className="animate__animated animate__slideInDown reveal-on-scroll">
            Beez
            <br />
            <span>.dev</span>
          </h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s reveal-on-scroll">
            Razvijamo moderne i brze web sajtove za brendove i male biznise kojima treba jasan nastup i
            pouzdano korisničko iskustvo.
          </p>
          <div className="hero-btns animate__animated animate__zoomIn animate__delay-1s reveal-on-scroll">
            <Link href="/projekti" className="btn-primary">
              Pogledaj projekte
            </Link>
            <Link href="/kontakt" className="btn-secondary">
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <section className="container section-pad projects-section">
        <h2 className="animate__animated animate__fadeInUp reveal-on-scroll">Izdvojeni projekti</h2>
        <div className="grid animate__animated animate__fadeInUp reveal-on-scroll">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center projects-actions">
          <Link href="/projekti" className="btn-secondary">
            Pogledaj sve projekte
          </Link>
        </div>
      </section>

      <section className="container section-pad results-section animate__animated animate__fadeInUp reveal-on-scroll">
        <h2>Rezultati koje donosimo</h2>
        <div className="results-grid">
          <article className="result-card">
            <h3>Brza isporuka</h3>
            <p>Jasna struktura rada koja omogućava da funkcionalna prva verzija sajta bude spremna u kratkom roku.</p>
          </article>
          <article className="result-card">
            <h3>Fokus na konverziju</h3>
            <p>Svaka stranica vodi posetioca ka konkretnoj akciji kroz sadržaj, raspored elemenata i jasne CTA tačke.</p>
          </article>
          <article className="result-card">
            <h3>Tehnički kvalitet</h3>
            <p>Responsive prikaz, dobra brzina učitavanja i čista osnova koja olakšava dalji razvoj projekta.</p>
          </article>
        </div>
      </section>

      <section className="process-section animate__animated animate__fadeInUp reveal-on-scroll">
        <div className="container">
          <h2>Kako radimo zajedno</h2>
          <div className="process-grid">
            <article className="process-step">
              <span>1</span>
              <h3>Kratak poziv i cilj</h3>
              <p>Definišemo šta projekat treba da postigne i kome je namenjen.</p>
            </article>
            <article className="process-step">
              <span>2</span>
              <h3>Predlog i struktura</h3>
              <p>Dobijate predlog stranica, sadržaja i prioriteta pre početka izrade.</p>
            </article>
            <article className="process-step">
              <span>3</span>
              <h3>Izrada i iteracije</h3>
              <p>Razvoj u fazama sa kratkim proverama dok ne dođemo do finalne verzije.</p>
            </article>
          </div>
          <Link href="/kontakt" className="btn-primary mt-20">
            Zakaži razgovor
          </Link>
        </div>
      </section>
    </>
  );
}
