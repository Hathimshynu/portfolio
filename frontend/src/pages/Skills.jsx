function Skills(){
  return (
    <main className="container page">
      <header className="page-header">
        <h1>Skills</h1>
        <p className="muted">Technologies, tools, and proficiencies I use.</p>
      </header>
      <section className="content">
        <div className="row">
          <div className="col-md-4">
            <h5>Backend</h5>
            <ul>
              <li>PHP (3+ Years)</li>
              <li>Python</li>
              <li>Laravel 8</li>
              <li>CodeIgniter 3</li>
              <li>REST API Development</li>
              <li>MVC Architecture</li>
              <li>OOP</li>
              <li>Authentication & Authorization</li>
              <li>Stripe Integration</li>
              <li>Caching & Query Optimization</li>
              <li>React JS & Node JS Familiar(basics)</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Database</h5>
            <ul>
              <li>MySQL (Schema Design & Optimization)</li>
              <li>SQL Server</li>
            </ul>
            <h5 className="mt-3">Frontend</h5>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>jQuery / Ajax</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Tools</h5>
            <ul>
              <li>GitHub, GitLab</li>
              <li>Jira</li>
              <li>Postman</li>
              <li>Docker (Basics)</li>
              <li>Agile / Scrum</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;
