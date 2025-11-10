import "./styles/skill.css";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import pythonLogo from "../assets/python.png";
import djangoLogo from "../assets/django.png";
import mysqlLogo from "../assets/mysql.png";
import githubLogo from "../assets/github.png";

export function Skills() {
  const skills = [
    { name: "HTML", level: "Advanced", img: htmlLogo },
    { name: "CSS", level: "Advanced", img: cssLogo },
    { name: "JavaScript", level: "Intermediate", img: jsLogo },
    { name: "React", level: "Advanced", img: reactLogo },
    { name: "Python", level: "Advanced", img: pythonLogo },
    { name: "Django", level: "Intermediate", img: djangoLogo },
    { name: "MySQL", level: "Advanced", img: mysqlLogo },
    { name: "GitHub", level: "Advanced", img: githubLogo },
  ];

  return (
    <div className="skills-section text-center">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-box glass"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <img src={skill.img} alt={skill.name} className="skill-logo" />
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
