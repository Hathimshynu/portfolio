import ParallaxSection from "../components/ParallaxSection";

function About() {
  return (
    <ParallaxSection depth={0.4}>
      <main className="container page">
        <header className="page-header">
          <h1>About Me</h1>
          <p className="muted">The person behind the products, APIs, and interfaces.</p>
        </header>
        <section className="content">
          <p>
            I am C.R. Shynumon, a full stack developer with 4+ years of experience building enterprise, SaaS, and AI-integrated applications. I work across responsive interfaces with React, Next.js, JavaScript, Bootstrap, and Tailwind CSS, as well as scalable backend architecture with Laravel, PHP, Node.js, Express, FastAPI, and Python. My experience includes RESTful API design, MySQL, MongoDB, PostgreSQL, database optimization, JWT authentication, OAuth, role-based access, and secure integrations.
          </p>
          <p>
            I have worked on finance automation platforms, e-commerce systems, real-time booking applications, manuscript analysis tools, and live chat products. I have integrated Gemini AI for manuscript analysis, Google APIs and Google OAuth for authentication workflows, Stripe for payments, Pusher and Socket.io for real-time events, WebRTC for audio calls, Giphy for GIF search, browser notifications, file uploads, and external REST APIs with Axios. I enjoy writing clean, maintainable code and turning complex requirements into useful software.
          </p>
        </section>
      </main>
    </ParallaxSection>
  );
}

export default About;
