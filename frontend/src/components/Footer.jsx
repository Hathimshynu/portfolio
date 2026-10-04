import { Link } from 'react-router-dom';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container-fluid px-4">
        <div className="footer-content">
          <nav className="footer-links" aria-label="Legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link to="/terms">Terms</Link>
          </nav>
          <p className="footer-text mb-0">AI News Shorts uses YouTube API Services</p>
          <p className="footer-text mb-0">© {new Date().getFullYear()} C.R. Shynumon. Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
