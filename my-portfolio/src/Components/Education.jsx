
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="section" id="education">

      <div className="section-heading">
        <p className="eyebrow">Academic background</p>

        <h2>
          My <span className="gradient-text">Education</span>
        </h2>

        <p className="section-subtitle">
          My academic journey and educational achievements.
        </p>
      </div>

      <article className="education-card">

        <div className="education-icon">
          <GraduationCap size={28} />
        </div>

        <div className="education-content">

          <p className="education-period">
            2022 – 2026
          </p>

          <h3>
            Bachelor of Engineering
          </h3>

          <p className="education-branch">
            Computer Science and Engineering
          </p>

          <p className="muted">
            BGS Institute of Technology
          </p>

          <p className="education-note">
            Adichunchanagiri University
          </p>

          <div className="education-cgpa">
            <Award size={17} />
            <span>CGPA: 8.93</span>
          </div>

        </div>
      </article>

    </section>
  );
}

