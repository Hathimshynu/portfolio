import ParallaxSection from "../components/ParallaxSection";

function Blog(){
  return (
    <ParallaxSection depth={0.4}>
      <main className="container page">
        <header className="page-header">
          <h1>Blog</h1>
          <p className="muted">Something Loading</p>
        </header>
      </main>
    </ParallaxSection>
  );
}

export default Blog;
