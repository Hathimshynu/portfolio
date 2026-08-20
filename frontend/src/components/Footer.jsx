export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-center py-2">
          <p className="footer-text mb-0">© {new Date().getFullYear()} C.R. Shynumon. Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
