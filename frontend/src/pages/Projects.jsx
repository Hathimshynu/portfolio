import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import ParallaxSection from '../components/ParallaxSection';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Client-side cache
const projectsCache = { data: null, timestamp: null };
const CACHE_DURATION = 3600000; // 1 hour

export default function Projects(){
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fallback = [
    {
      _id: 'buddy-invoice',
      title: 'Buddy Invoice System (SaaS Finance Platform)',
      description: 'Enterprise-level SaaS finance automation platform for invoice generation and document workflow management.',
      tech: ['Laravel 8', 'MySQL', 'REST API', 'OOP', 'Caching', 'Ajax', 'Bootstrap', 'Git'],
      highlights: [
        'Designed secure backend modules using Laravel MVC',
        'Built document management system with role-based access',
        'Implemented Events, Listeners, and Jobs',
        'REST API integration improved performance by 32%',
        'User-wise storage management',
        'Integrated Laravel Elfinder'
      ]
    },
    {
      _id: 'day-mart',
      title: 'Day Mart – E-Commerce Platform',
      description: 'Full-stack e-commerce system with mobile API support and Stripe payment integration.',
      tech: ['Laravel 8', 'MySQL', 'Stripe', 'REST API', 'Git'],
      highlights: [
        'Developed REST APIs for mobile app team',
        'Integrated secure Stripe payment gateway',
        'Implemented server-side caching (25% performance improvement)',
        'Structured scalable database schema'
      ]
    },
    {
      _id: 'emaid-projects',
      title: 'Emaid Projects – Dubai Cleaning Services App',
      description: 'Real-time booking and scheduling system for Dubai-based cleaning services.',
      tech: ['Laravel 8', 'MySQL', 'Ajax', 'MVC'],
      highlights: [
        'Slot-based scheduling system',
        'Authentication & authorization implementation',
        'Backend query optimization',
        'Performance and security enhancements'
      ]
    }
  ];

  useEffect(() => {
    const now = Date.now();
    
    // Check if cache is still valid
    if (projectsCache.data && projectsCache.timestamp && (now - projectsCache.timestamp < CACHE_DURATION)) {
      setProjects(projectsCache.data);
      setLoading(false);
      return;
    }

    axios.get(`${API}/api/projects?limit=50`)
      .then(res => {
        const data = res.data.projects && res.data.projects.length ? res.data.projects : fallback;
        if (!res.data.projects || !res.data.projects.length) console.warn('Using local fallback projects');
        
        // Update cache
        projectsCache.data = data;
        projectsCache.timestamp = now;
        
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Projects API unavailable, using fallback:', err && err.message);
        setProjects(fallback);
        setLoading(false);
      });
  }, []);

  return (
    <ParallaxSection depth={0.5}>
      <main className="container page">
        <header className="page-header">
          <h1>Projects</h1>
          <p className="muted">Selected work demonstrating technologies and impact.</p>
        </header>
        {loading && <p>Loading projects...</p>}
        <section className="projects-grid">
          {projects.map(p => <ProjectCard key={p._id} project={p} />)}
        </section>
      </main>
    </ParallaxSection>
  );
}
