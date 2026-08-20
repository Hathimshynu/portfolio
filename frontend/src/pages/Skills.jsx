import ParallaxSection from "../components/ParallaxSection";

function Skills(){
  return (
    <ParallaxSection depth={0.4}>
      <main className="container page">
        <header className="page-header">
          <h1>Skills</h1>
          <p className="muted">Technologies, tools, and proficiencies I use.</p>
        </header>
        <section className="content">
          <div className="skills-grid">
            <div className="skill-card">
              <h5>Frontend</h5>
              <ul>
                <li>HTML5 and semantic markup</li>
                <li>CSS3 and responsive layouts</li>
                <li>JavaScript and DOM</li>
                <li>React and reusable components</li>
              </ul>
            </div>
            <div className="skill-card">
              <h5>Tools & Frameworks</h5>
              <ul>
                <li>Bootstrap and Tailwind CSS</li>
                <li>Git and GitHub workflows</li>
                <li>REST API integration</li>
                <li>Figma to responsive UI</li>
              </ul>
            </div>
            <div className="skill-card">
              <h5>Currently Exploring</h5>
              <ul>
                <li>Next.js application patterns</li>
                <li>AI-assisted product experiences</li>
                <li>Accessible interaction design</li>
                <li>Performance-focused frontend work</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </ParallaxSection>
  );
}

export default Skills;
