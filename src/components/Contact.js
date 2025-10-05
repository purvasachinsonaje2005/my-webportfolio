import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const email = "purvasonaje@gmail.com";

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>Let’s connect and collaborate!</p>
      <div className="contact-links">
        {/* Email link using mailto */}
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} /> Email
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/purva-sonaje-ab4052288"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} /> LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/purvasachinsonaje2005"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
