import ParallaxSection from "../components/ParallaxSection";

function Privacy(){
  return (
    <ParallaxSection depth={0.4}>
      <main className="container page">
        <header className="page-header">
          <h1>Privacy Policy – AI News Shorts</h1>
          <p className="muted">Last updated: October 4, 2026</p>
        </header>

        <section>
          <p>
            AI News Shorts is a personal automation tool operated by Hathim Shynu. It uploads videos
            only to the owner's own YouTube channel using the YouTube Data API.
          </p>

          <h2>Data accessed</h2>
          <p>OAuth access to the owner's YouTube account, used solely to upload videos and set thumbnails.</p>

          <h2>Data storage</h2>
          <p>
            Credentials are stored securely and are never shared, sold, or used for any other purpose.
            No data from other users is collected.
          </p>

          <h2>Third parties</h2>
          <p>
            This tool uses YouTube API Services. See the Google Privacy Policy:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>
          </p>

          <h2>Revoking access</h2>
          <p>
            Access can be revoked anytime at{" "}
            <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
              https://myaccount.google.com/permissions
            </a>
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

export default Privacy;
