export default function ProjectCard({ project }){
  return (
    <div style={{ border:'1px solid #ddd', padding:12, borderRadius:8 }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Tech:</strong> {project.tech?.join(', ')}</p>
      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live</a>}
      {' '}
      {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Repo</a>}
    </div>
  );
}
