import React from "react";
import { FaJava, FaPython, FaDatabase, FaGitAlt, FaAws } from "react-icons/fa";
import { SiMysql, SiReact, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill"><FaJava size={40} /> <p>Java</p></div>
        <div className="skill"><SiMysql size={40} /> <p>MySQL</p></div>
        <div className="skill"><FaDatabase size={40} /> <p>SQL & Data Analytics</p></div>
        <div className="skill"><SiReact size={40} /> <p>React.js</p></div>
        <div className="skill"><FaPython size={40} /> <p>Python</p></div>
        <div className="skill"><SiHtml5 size={40} /> <p>HTML</p></div>
        <div className="skill"><SiCss3 size={40} /> <p>CSS</p></div>
        <div className="skill"><SiJavascript size={40} /> <p>JavaScript</p></div>
        <div className="skill"><FaGitAlt size={40} /> <p>Git & GitHub</p></div>
        <div className="skill"><FaAws size={40} /> <p>AWS & DevOps Tools</p></div>
      </div>
    </section>
  );
};

export default Skills;
