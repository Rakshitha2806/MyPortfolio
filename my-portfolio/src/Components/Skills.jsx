
import { Code2, Monitor, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Java", "C", "SQL"]
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    items: ["HTML5", "CSS3", "JavaScript", "React.js"]
  },
  {
    title: "Backend Development",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Database Management",
    icon: Database,
    items: ["MySQL", "MongoDB"]
  },
  {
    title: "Tools & Fundamentals",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "OOP", "Data Structures & Algorithms"]
  }
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Technical Expertise</p>

        <h2>
          My <span className="gradient-text">Skills</span>
        </h2>

        <p className="section-subtitle">
          Technologies and tools I use to build responsive,
          user-friendly, and efficient software applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-heading">
                <Icon size={21} strokeWidth={1.8} />

                <h3>{group.title}</h3>
              </div>

              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

