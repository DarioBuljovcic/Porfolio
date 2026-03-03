import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="container animate__animated animate__fadeIn section-pad">
      <h2 className="animate__animated animate__slideInDown">Projekti</h2>
      <p className="text-center text-secondary animate__animated animate__fadeInUp">
        Projekti koje sam isporučio – od ideje i dizajna do stabilne produkcije i realnog poslovnog rezultata.
      </p>

      <h3 style={{ margin: "40px 0 20px", borderLeft: "5px solid var(--accent)", paddingLeft: 12 }}>Moji radovi i projekti</h3>
      <div className="grid animate__animated animate__fadeInUp">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
