
import { UserRound, Code2, Lightbulb, Target } from "lucide-react";

export default function About() {
  return (
    <section className="section" id="about">

      <div className="section-heading">
        <p className="eyebrow">A little about me</p>

        <h2>
          About <span className="gradient-text">Me</span>
        </h2>

        <p className="section-subtitle">
          Get to know me, my interests, and what drives me as a developer.
        </p>
      </div>

      <div className="about-card">

        <div className="about-icon">
          <UserRound size={28} />
        </div>

        <div className="about-content">

          <h3>Passionate developer, lifelong learner</h3>

          <p>
            I'm a Computer Science and Engineering graduate
            passionate about frontend and full-stack development.
            I enjoy transforming ideas into interactive,
            user-friendly web experiences and building applications
            that solve real-world problems.
          </p>

          <p>
            I love exploring new technologies, improving my
            problem-solving skills, and writing clean, maintainable
            code. I'm eager to apply my knowledge, collaborate
            with talented teams, and grow as a software developer
            through real-world experiences.
          </p>

          <div className="about-highlights">

            <div>
              <Code2 size={19} />
              <span>Web Development</span>
            </div>

            <div>
              <Lightbulb size={19} />
              <span>Creative Thinking</span>
            </div>

            <div>
              <Target size={19} />
              <span>Continuous Learning</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

