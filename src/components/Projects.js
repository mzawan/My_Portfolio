import { projects } from "../data/projects";
import type { Project } from "../types";

function ProjectCard({ project }: { project: Project }) {
  const { caseStudy: c } = project;
  return (
    <article className="card">
      <div className={`thumb ${project.thumbClass}`} role="img" aria-label="Project preview" />
      <div className="cb">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <details>
          <summary>Case study</summary>
          <div>
            <b>Problem:</b> {c.problem}<br />
            <b>Solution:</b> {c.solution}<br />
            <b>Result:</b> {c.result}
          </div>
        </details>
        <div className="links">
          {project.links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>
        <p className="sub">Sample cards — replace the text, tags and links with your real projects.</p>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
