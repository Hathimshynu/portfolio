import { Link } from "react-router-dom";
import ParallaxSection from "../components/ParallaxSection";

function Home() {
  return (
    <ParallaxSection depth={0.3}>
      <main className="container page">
        <section className="hero">
          <div className="hero-visual">
            <img src="/shynu.jpg" alt="C.R. Shynumon" />
          </div>
          <div className="hero-body">
            <p className="eyebrow">Hello, It's Me</p>
            <h1 className="hero-title">C.R. Shynumon</h1>
            <p className="hero-sub">And I'm a <span>Full Stack Developer</span></p>
            <p className="muted">I build reliable web products across the frontend, backend, APIs, and databases.</p>

            <div className="hero-cta mt-3">
              <Link to="/projects" className="btn btn-primary me-2">View Projects</Link>
              <a href="/resume.pdf" className="btn btn-outline-primary me-2" download>Resume</a>
            </div>

            <div className="mt-4 text-start">
              <h5>Building with curiosity</h5>
              <p className="text-white">
                I enjoy turning ideas into clear, polished web experiences with React, Next.js, Laravel, Node.js, and Python.
              </p>
            </div>
          </div>
        </section>
      </main>
    </ParallaxSection>
  );
}

export default Home;
