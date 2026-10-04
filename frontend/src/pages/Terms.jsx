import ParallaxSection from "../components/ParallaxSection";

function Terms(){
  return (
    <ParallaxSection depth={0.4}>
      <main className="container page">
        <header className="page-header">
          <h1>Terms of Service – AI News Shorts</h1>
          <p className="muted">Last updated: October 4, 2026</p>
        </header>

        <section className="content">
          <p>
            AI News Shorts is a private, non-commercial tool used solely by its operator to publish
            videos to the operator&apos;s own YouTube channel. It is not offered to the public. Use of
            this tool is subject to the{" "}
            <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">
              YouTube Terms of Service
            </a>{" "}
            and the{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Privacy Policy
            </a>
            . The operator is responsible for all content uploaded and complies with YouTube
            Community Guidelines.
          </p>

          <h2>Contact</h2>
          <p>
            <a href="mailto:shynushyni55@gmail.com">shynushyni55@gmail.com</a>
          </p>
        </section>
      </main>
    </ParallaxSection>
  );
}

export default Terms;
