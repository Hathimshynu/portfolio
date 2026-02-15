export default function Footer(){
  return (
    <footer className="site-footer fixed-bottom">
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-center py-2">
          <p className="footer-text mb-0">© {new Date().getFullYear()} Shynu Portfolio — Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
