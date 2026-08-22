import ProjectCard from '../components/ProjectCard';
import ParallaxSection from '../components/ParallaxSection';

const projects = [
  {
    _id: 'journalpilot',
    title: 'JournalPilot',
    description: 'A manuscript workspace for uploading PDF and DOCX files, managing research drafts, and requesting Gemini-powered readiness analysis.',
    tech: ['Next.js', 'React', 'FastAPI', 'PostgreSQL', 'Gemini API'],
    image: '/journalpilot-dashboard.svg',
    repoUrl: 'https://github.com/Hathimshynu/journalpilot-frontend.git',
    secondaryRepoUrl: 'https://github.com/Hathimshynu/journalpilot-backend.git',
    liveUrl: 'https://journalpilot-front.vercel.app/'
  },
  {
    _id: 'chatapp',
    title: 'ChatApp',
    description: 'A WhatsApp-like real-time chat platform with authentication, online presence, read receipts, media sharing, notifications, stickers, GIFs, and audio calls.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Pusher', 'Socket.io', 'WebRTC'],
    image: '/chatapp-project.png',
    repoUrl: 'https://github.com/Hathimshynu/chatapp.git',
    liveUrl: 'https://chatapp-two-rosy.vercel.app/'
  },
  {
    _id: 'cognodb-pathfinder',
    title: 'CognoDB Pathfinder',
    description: 'A graph-powered talent map that explores career paths through connected roles, skills, people, and projects using multi-hop CognoDB queries with a demo fallback.',
    tech: ['Next.js', 'React', 'TypeScript', 'CognoDB', 'Neo4j Driver', 'openCypher'],
    image: '/cognodb.png',
    repoUrl: 'https://github.com/Hathimshynu/cognodb-assignment',
    liveUrl: 'https://cognodb-assignment-shynu.vercel.app/'
  },
  {
    _id: 'ecommerce',
    title: 'E-commerce Platform',
    description: 'A full-stack online store with product browsing, cart management, authentication, administration, and a checkout-ready commerce flow.',
    tech: ['Laravel', 'MySQL', 'REST API', 'Stripe', 'Bootstrap'],
    image: '/ecommerce-project.svg',
    repoUrl: 'https://github.com/Hathimshynu/ecommerce.git'
  },
  {
    _id: 'buddy-invoice',
    title: 'Buddy Invoice System',
    description: 'Enterprise SaaS finance automation for invoice generation, document workflows, role-based access, user storage, and optimized REST integrations.',
    tech: ['Laravel 8', 'MySQL', 'REST API', 'Caching', 'Ajax', 'Bootstrap'],
    image: '/finance-project.svg'
  },
  {
    _id: 'day-mart',
    title: 'Day Mart',
    description: 'A scalable e-commerce platform with mobile APIs, Stripe payment integration, server-side caching, and a structured database design.',
    tech: ['Laravel 8', 'MySQL', 'Stripe', 'REST API'],
    image: '/mart-project.svg'
  },
  {
    _id: 'emaid-projects',
    title: 'Emaid Projects',
    description: 'A real-time cleaning-services booking system with slot scheduling, authentication, authorization, query optimization, and secure MVC architecture.',
    tech: ['Laravel 8', 'MySQL', 'Ajax', 'MVC'],
    image: '/booking-project.svg'
  }
];

export default function Projects(){
  return (
    <ParallaxSection depth={0.5}>
      <main className="container page">
        <header className="page-header">
          <h1>Projects</h1>
          <p className="muted">Selected work demonstrating technologies and impact.</p>
        </header>
        <section className="projects-grid">
          {projects.map(p => <ProjectCard key={p._id} project={p} />)}
        </section>
      </main>
    </ParallaxSection>
  );
}
