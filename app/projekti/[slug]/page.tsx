import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import type { ReactNode } from "react";
import ScrollObserver from "@/components/ScrollObserver";
import ScrollToTopButton from "@/components/ScrollToTopButton";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function renderBoldText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="container section-pad project-detail">
      <ScrollObserver />
      <Link href="/projekti" className="project-back reveal-on-scroll animate__animated animate__fadeInUp">
        <i className="fas fa-arrow-left" /> Nazad na projekte
      </Link>

      <header className="project-hero reveal-on-scroll animate__animated animate__fadeInUp">
        <p className="project-kicker">Studija slučaja</p>
        <h1>{project.title}</h1>
        <p>{renderBoldText(project.shortDescription)}</p>
        <div className="project-highlights">
          {project.highlights.map((item) => (
            <span className="project-highlight" key={item}>
              {item}
            </span>
          ))}
        </div>
      </header>

      <div className="project-main-grid reveal-on-scroll animate__animated animate__fadeInUp">
        <article className="project-block reveal-on-scroll animate__animated animate__fadeInUp">
          <h2>Problem koji rešava</h2>
          <p>{renderBoldText(project.problem)}</p>
        </article>

        <article className="project-block reveal-on-scroll animate__animated animate__fadeInUp animate__delay-1s">
          <h2>Moja uloga</h2>
          <p>{renderBoldText(project.role)}</p>
        </article>
      </div>

      <article className="project-block reveal-on-scroll animate__animated animate__fadeInUp">
        <h2>Ključne odluke</h2>
        <ul className="project-list">
          {project.decisions.map((item) => (
            <li key={item}>{renderBoldText(item)}</li>
          ))}
        </ul>
      </article>

      <article className="project-block reveal-on-scroll animate__animated animate__fadeInUp">
        <h2>Rezultat / ishod</h2>
        <ul className="project-list">
          {project.outcomes.map((item) => (
            <li key={item}>{renderBoldText(item)}</li>
          ))}
        </ul>
      </article>

      {project.employerMessage ? (
        <article className="project-quote reveal-on-scroll animate__animated animate__fadeInUp">
          <p className="project-quote-kicker">Poruka poslodavca</p>
          <blockquote className="project-quote-text">“{project.employerMessage.quote}”</blockquote>
          <p className="project-quote-author">{project.employerMessage.author}</p>
        </article>
      ) : null}

      <article className="project-block reveal-on-scroll animate__animated animate__fadeInUp">
        <h2>Linkovi</h2>
        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
            <i className="fas fa-external-link-alt" /> Live sajt
          </a>
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              <i className="fab fa-github" /> GitHub
            </a>
          ) : (
            <span className="project-note">{project.githubNote ?? "GitHub link nije dostupan."}</span>
          )}
        </div>
      </article>

      <article className="project-block reveal-on-scroll animate__animated animate__fadeInUp">
        <h2>Stack (ukratko)</h2>
        <div className="tag-list">
          {project.stack.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </article>

      <div className="project-top-action reveal-on-scroll animate__animated animate__fadeInUp">
        <ScrollToTopButton className="project-top-btn" />
      </div>
    </section>
  );
}
