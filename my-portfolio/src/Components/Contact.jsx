
export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Let's connect</p>

        <h2>
          Contact <span className="gradient-text">Me</span>
        </h2>

        <p className="section-subtitle">
          Every great project starts with a conversation.
          I'd love to hear what's on your mind!
        </p>
      </div>

      <div className="contact-card">

        {/* Email */}
        <a
          href="mailto:rakshithanu28@gmail.com?subject=Portfolio%20Contact"
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

          <span>
            <small>Email</small>
            rakshithanu28@gmail.com
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+917411199384"
          aria-label="Phone"
          title="Call me"
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
          </svg>

          <span>
            <small>Phone</small>
            +91 7411199384
          </span>
        </a>

        {/* Location */}
        <div>
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
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>

          <span>
            <small>Location</small>
            Tumkur, India
          </span>
        </div>

        {/* Social Links */}
        <div className="contact-socials">

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

        </div>
      </div>
    </section>
  );
}

