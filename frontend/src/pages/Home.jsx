function Home() {
  return (
    <main className="container page">
      <section className="hero">
        <div className="hero-body">
          <h1 className="hero-title">C.R. Shynumon</h1>
          <p className="hero-sub">Laravel Backend Developer | REST API Specialist</p>
          <p className="muted">3+ Years Experience in Scalable Web Applications</p>

          <div className="hero-cta mt-3">
            <a href="/projects" className="btn btn-primary me-2">View Projects</a>
            <a href="/resume.pdf" className="btn btn-outline-primary me-2" download>Download Resume</a>
            <a href="https://github.com/Hathimshynu" target="_blank" rel="noreferrer" className="btn btn-dark me-2">GitHub</a>
            <a href="https://www.linkedin.com/in/hathimshynu9597" target="_blank" rel="noreferrer" className="btn btn-outline-dark">LinkedIn</a>
          </div>

          <div className="mt-4 text-start">
            <h5>Professional statement</h5>
            <p>
              Results-driven PHP Developer with 3+ years of experience building scalable Laravel applications, designing optimized MySQL schemas, and developing secure RESTful APIs. Experienced in SaaS finance systems, e-commerce platforms, and real-time booking applications.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
