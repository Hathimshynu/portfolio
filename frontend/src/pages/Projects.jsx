import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get(`${API}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <h1>Projects</h1>
      <div style={{ display: 'grid', gap: 12 }}>
        {projects.map(p => <ProjectCard key={p._id} project={p} />)}
      </div>
    </div>
  );
}
