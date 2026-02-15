export default function ProjectCard({ project }){
  return (
    <article className="project-card">
      {project.image && <img src={project.image} alt={project.title} className="project-image" />}
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        {project.highlights && (
          <ul className="small muted">
            {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
        {project.tech?.length > 0 && (
          <div className="project-tags mt-2">
            {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
        <div className="project-actions mt-3">
          {project.liveUrl && <a className="btn btn-primary btn-sm" href={project.liveUrl} target="_blank" rel="noreferrer">Live</a>}
          {project.repoUrl && <a className="btn btn-outline-secondary btn-sm" href={project.repoUrl} target="_blank" rel="noreferrer">Repo</a>}
        </div>
      </div>
    </article>
  );
}
