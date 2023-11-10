import React from "react";

export default function About() {
  return (
    <div className="container py-5">
      <h1 className="text-uppercase fw-bold mb-4">About Us</h1>
      <div className="row">
        <div className="col-lg-6">
          <h2>Hi, I'm Dnyaneshwari Pandhare</h2>
          <p className="lead">
            I am a Full Stack Developer and Java Developer. Currently, I'm a
            student pursuing my B.Tech in Computer Engineering.
          </p>
          <p>
            I have a great interest in web development and desktop app
            development. I enjoy building creative and user-friendly solutions
            that solve real-world problems.
          </p>
          <h3>Contact Me:</h3>
          <p>
            Email:{" "}
            <a href="mailto:dnyaneshwaripandhare75@gmail.com">
              dnyaneshwaripandhare75@gmail.com
            </a>
          </p>
        </div>
        
      </div>
    </div>
  );
}
