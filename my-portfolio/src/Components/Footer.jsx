
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <a className="brand" href="#home">
        <span className="brand-mark">&lt;/&gt;</span>
        Rakshitha G G
      </a>

      <p>
        © {new Date().getFullYear()} Rakshitha G G.
        All Rights Reserved.
      </p>

      <div className="footer-socials">

        <a
          href="https://github.com/Rakshitha2806"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/rakshitha-g-g-913734338"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=rakshithanu28@gmail.com&su=Portfolio%20Contact"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        title="Send me an email"
        >
          <FaEnvelope />
        </a>

      </div>

      <a href="#home" className="back-top">
        Back to top ↑
      </a>

    </footer>
  );
}

