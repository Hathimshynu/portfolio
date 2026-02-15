import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header fixed-top">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between py-2">
          <Link to="/" className="navbar-brand mb-0 h4 text-primary">Shynu Portfolio</Link>
          <nav>
            <ul className="nav">
              <li className="nav-item"><NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
              <li className="nav-item"><NavLink to="/projects" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink></li>
              <li className="nav-item"><NavLink to="/skills" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Skills</NavLink></li>
              <li className="nav-item"><NavLink to="/experience" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Experience</NavLink></li>
              <li className="nav-item"><NavLink to="/blog" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink></li>
              <li className="nav-item"><NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
