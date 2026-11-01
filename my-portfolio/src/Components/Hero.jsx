
export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot" />
          Open to Entry-Level Opportunities
        </p>

        <h1
          style={{
            fontSize: "clamp(2.3rem, 4.3vw, 3.8rem)",
            lineHeight: 1.15,
            marginBottom: "18px",
          }}
        >
          Hi, I'm{" "}
          <span className="gradient-text">
            Rakshitha G G
          </span>
        </h1>

        <h2>
          Aspiring Software Developer{" "}
          <span className="accent">|</span>{" "}
          Computer Science Graduate
        </h2>

        <p className="hero-description">
          I'm a Computer Science and Engineering graduate passionate
          about technology, frontend development, and problem-solving.
          I enjoy creating user-friendly digital experiences,
          exploring new technologies, and turning innovative ideas
          into practical solutions. I'm eager to contribute my skills,
          embrace new challenges, and grow as a software developer.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects

            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>

          <a
            className="btn btn-secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>

        <div className="social-links">
          {/* GitHub */}
          <a
            href="https://github.com/Rakshitha2806"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="Visit my GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/rakshitha-g-g-913734338"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="Visit my LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18V9.67H5.56V18h2.78ZM6.95 8.53a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22ZM18.44 18v-4.56c0-2.44-1.3-3.58-3.04-3.58a2.63 2.63 0 0 0-2.36 1.3V9.67h-2.78V18h2.78v-4.12c0-1.08.2-2.12 1.54-2.12 1.32 0 1.34 1.23 1.34 2.19V18h2.52Z" />
            </svg>
          </a>

          {/* Email */}
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rakshithanu28@gmail.com&su=Portfolio%20Contact"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          title="Send me an email"
          >
        
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="hero-visual">
        <div className="portrait-frame">
          <img
            src="/profile.jpeg"
            alt="Rakshitha G G - Software Developer"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div className="portrait-placeholder">
            <span className="placeholder-code">
              &lt;developer /&gt;
            </span>

            <span className="placeholder-initials">
              RG
            </span>

            <span className="placeholder-caption">
              Computer Science Graduate
            </span>
          </div>
        </div>

        {/* Floating Tags */}
        <div className="floating-tag tag-top">
          React <span>⚛</span>
        </div>

        <div className="floating-tag tag-bottom">
          JavaScript <span>JS</span>
        </div>

        <div className="floating-tag tag-node">
          Node.js <span>⬢</span>
        </div>
      </div>
    </section>
  );
}

