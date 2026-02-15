import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  useEffect(() => {
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

    axios.get(`${API}/api/projects`)
      .then(res => {
        const data = Array.isArray(res.data) && res.data.length ? res.data : fallback;
        if (!Array.isArray(res.data) || !res.data.length) console.warn('Using local fallback projects');
        setProjects(data);
      })
      .catch((err) => {
        console.warn('Projects API unavailable, using fallback:', err && err.message);
        setProjects(fallback);
      });
  }, []);
  return (
    <main className="container page">
      <header className="page-header">
        <h1>Projects</h1>
        <p className="muted">Selected work demonstrating technologies and impact.</p>
      </header>
      <section className="projects-grid">
        {projects.map(p => <ProjectCard key={p._id} project={p} />)}
      </section>
    </main>
  );
}
