import React from "react";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <img src={profile} alt="Purva Sonaje" className="profile-pic" />
        <h1>Hi, I'm <span>Purva Sonaje</span></h1>
        <h2>Java Developer | Data Analyst | DevOps Enthusiast</h2>
        <p>I love building intelligent and efficient software solutions using Java, SQL, and cloud technologies.</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
};

export default Home;
