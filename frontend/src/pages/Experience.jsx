function Experience(){
  return (
    <main className="container page">
      <header className="page-header">
        <h1>Experience</h1>
        <p className="muted">Roles and projects where I delivered value.</p>
      </header>
      <section className="content">
        <div className="timeline">
          <div className="mb-4">
            <h5>Specialist Engineer — Aparajitha Software Services Pvt Ltd</h5>
            <p className="muted">Jan 2025 – Present</p>
            <ul>
              <li>Reduced data retrieval time by 25%</li>
              <li>Designed secure backend modules</li>
              <li>Worked in Agile methodology with Jira</li>
            </ul>
          </div>

          <div className="mb-4">
            <h5>Associate Software Engineer — Azinova Technologies</h5>
            <p className="muted">Oct 2023 – Nov 2024</p>
            <ul>
              <li>Developed enterprise Laravel systems</li>
              <li>Built scalable e-commerce backend</li>
              <li>Database schema management</li>
            </ul>
          </div>

          <div className="mb-4">
            <h5>System Engineer — Novelx Technologies</h5>
            <p className="muted">Jun 2022 – Sep 2023</p>
            <ul>
              <li>CodeIgniter 3 backend development</li>
              <li>MySQL query optimization</li>
              <li>MVC-based development</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Experience;
