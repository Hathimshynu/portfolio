import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ParallaxSection from "../components/ParallaxSection";

function TypingLine({ text, className, startDelay = 0, as: Component = "p" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let typingTimer = null;
    let resetTimer = null;
    let startTimer = null;
    let index = 0;
    let isActive = true;

    const typeText = () => {
      if (!isActive) return;

      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        setIsTyping(true);
        index += 1;
        typingTimer = setTimeout(typeText, 120);
        return;
      }

      setIsTyping(false);
      resetTimer = setTimeout(() => {
        if (!isActive) return;
        index = 0;
        setDisplayedText("");
        setIsTyping(true);
        typingTimer = setTimeout(typeText, 220);
      }, 5000);
    };

    startTimer = setTimeout(() => {
      if (!isActive) return;
      index = 0;
      setDisplayedText("");
      setIsTyping(true);
      typeText();
    }, startDelay);

    return () => {
      isActive = false;
      clearTimeout(typingTimer);
      clearTimeout(resetTimer);
      clearTimeout(startTimer);
    };
  }, [text, startDelay]);

  return (
    <Component className={`${className} intro-line ${isTyping ? "is-typing" : "is-complete"}`}>
      {displayedText}
      <span className="typing-cursor" aria-hidden="true" />
    </Component>
  );
}

function Home() {
  return (
    <ParallaxSection depth={0.3}>
      <main className="container page">
        <section className="hero">
          <div className="hero-visual">
            <img src="/shynu.jpg" alt="C.R. Shynumon" />
          </div>
          <div className="hero-body">
            <TypingLine text="Hello, It's Me" className="eyebrow" startDelay={200} as="p" />
            <TypingLine text="C.R. Shynumon" className="hero-title" startDelay={1100} as="h1" />
            <TypingLine text="And I'm a Full Stack Developer" className="hero-sub" startDelay={2200} as="p" />
            <p className="muted hero-description">I build reliable web products across the frontend, backend, APIs, and databases.</p>

            <div className="hero-cta mt-3">
              <Link to="/projects" className="btn btn-primary me-2">View Projects</Link>
              <a href="/resume.pdf" className="btn btn-outline-primary me-2" download>Resume</a>
            </div>

            <div className="mt-4 text-start">
              <h5>Building with curiosity</h5>
              <p className="text-white">
                I enjoy turning ideas into clear, polished web experiences with React, Next.js, Laravel, Node.js, and Python.
              </p>
            </div>
          </div>
        </section>
      </main>
    </ParallaxSection>
  );
}

export default Home;
