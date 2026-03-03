import Link from "next/link";
import type { ProjectCase } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectCase;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card" key={project.slug}>
      <div className="card-icon">
        <i className={project.iconClass} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.listDescription}</p>
      <div className="tag-list">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-card-actions mt-20">
        <Link href={`/projekti/${project.slug}`} className="btn-primary project-card-main-btn">
          Detalji projekta
        </Link>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary project-icon-btn"
          aria-label={`Poseti sajt ${project.title}`}
          title={`Poseti sajt ${project.title}`}
        >
          <i className="fas fa-external-link-alt" />
        </a>
      </div>
    </article>
  );
}
