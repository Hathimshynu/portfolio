import Card3D from './Card3D';

export default function ProjectCard({ project }){
  return (
    <Card3D className="project-card">
      <article>
        {project.image && <img src={project.image} alt={project.title} className="project-image" />}
        <div className="project-body">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          {project.tech?.length > 0 && (
            <div className="project-tags mt-2">
              {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          )}
          <div className="project-actions mt-3">
            {project.liveUrl && <a className="project-link" href={project.liveUrl} target={project.liveUrl !== '#' ? '_blank' : undefined} rel={project.liveUrl !== '#' ? 'noreferrer' : undefined}>View Project</a>}
            {project.repoUrl && <a className="project-link project-repo-link" href={project.repoUrl} target="_blank" rel="noreferrer">GitHub Repo</a>}
            {project.secondaryRepoUrl && <a className="project-link project-repo-link" href={project.secondaryRepoUrl} target="_blank" rel="noreferrer">Backend Repo</a>}
          </div>
        </div>
      </article>
    </Card3D>
  );
}
