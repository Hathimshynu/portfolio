import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header fixed-top">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between py-2">
          <Link to="/" className="navbar-brand mb-0 h4 text-primary">Shynu Portfolio</Link>

          <button
            className="nav-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span className="hamburger" aria-hidden="true" />
          </button>

          <nav>
            <ul className={"nav" + (open ? " nav-open" : "")}>
              <li className="nav-item"><NavLink to="/" end onClick={close} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
              <li className="nav-item"><NavLink to="/projects" onClick={close} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink></li>
              <li className="nav-item"><NavLink to="/skills" onClick={close} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Skills</NavLink></li>
              <li className="nav-item"><NavLink to="/experience" onClick={close} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Experience</NavLink></li>
              <li className="nav-item"><NavLink to="/blog" onClick={close} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink></li>
              <li className="nav-item"><NavLink to="/about" onClick={close} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" onClick={close} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
      {/** backdrop covers page when mobile nav is open */}
      <div className={"nav-backdrop" + (open ? " open" : "")} onClick={close} />
    </header>
  );
}

export default Navbar;
