import React from "react";
import Navbar from "./Navbar";
import "./App.css";

import tremorImg from "./assets/tremor-mouse.jpg";
import thermalImg from "./assets/thermal-chamber.jpg";
import handPressVideo from "./assets/hand-press.mp4";
import rackPinionImg from "./assets/rack-pinion.jpg";

function App() {
  return (
    <div>
      <Navbar />

     <header id="about" className="header">
       <div className="header-content">
         <h1 className="header-name">LUXAN JEYARAJAH</h1>

         <h2 className="header-name">MECHATRONICS ENGINEERING STUDENT</h2>
         <h5>Ontario Tech University, Bachelor of Engineering (Honours) 2023-2027
           </h5>
         <li></li>
<h3 className="header-description">
           Driven by creativity and a passion for innovation, I aim to tackle real-world engineering challenges while growing my technical skills and contributing to impactful projects
         </h3>

         {/* Resume button under name */}
         <a href="/Luxan_Resume.pdf" download className="resume-btn">

           Download Resume
         </a>
       </div>
     </header>



      {/* Projects */}
      <section id="projects">
        <h2>PROJECTS AND COMPETITIONS</h2>
        <div className="card">
          <h3>Tremor Reducing Mouse</h3>
          <p>Led a design team of 4 to develop a handheld device for users with essential tremors.</p>
          <ul>
            <li>2nd Place – UOttawa Engineering Design Competition</li>
            <li>Dean of Engineering Innovation Award</li>
          </ul>
          <img src={tremorImg} alt="Tremor Reducing Mouse" />
        </div>


        <div className="grid grid-2 mt-6">
          <div className="card">
            <h3>Hand Press CAD Drawings</h3>
            <video src={handPressVideo} controls />
          </div>
          <div className="card">
            <h3>Rack and Pinion Mechanism</h3>
            <img src={rackPinionImg} alt="Rack and Pinion" />
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience">
        <h2>WORK EXPERIENCE</h2>
        <div className="card">
          <h3>Co-Founder – Inspome</h3>
          <p>Toronto, ON</p>
          <ul>
            <li>Co-founded and led the development of a mobile app focused on creative web-based experiences.</li>
            <li>Managed a small team of developers, coordinating design sprints and overseeing feature implementation.</li>
            <li>Applied iterative design testing and user feedback to enhance interface usability and performance, achieving strong user engagement and project success.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Web Designer – 3D Sound</h3>
          <p>Toronto, ON | Aug 2023 – May 2024</p>
          <ul>
            <li>Designed and developed an interactive voting platform for an event, integrating creative UX/UI and back-end systems.</li>
            <li>Applied front-end technologies (React, HTML, CSS, JavaScript) and MySQL for data handling</li>
            <li>Ensured responsive design and accessibility across devices to maximize user engagement.</li>
            <li>Collaborated with event and tech teams to streamline system functionality.</li>
          </ul>
        </div>
                <div className="card">
                  <h3>Production Worker – General Motors </h3>
                  <p>Oshawa, ON | May 2022 – Sep 2022</p>
                  <ul>
                    <li>Assembled and tested mechanical systems in compliance with ISO standards.</li>
                    <li>Improved production quality by identifying root causes of line defects, achieving a 15% reduction.</li>
                    <li>Gained hands-on experience with large-scale manufacturing and mechanical design systems.</li>
                  </ul>
                </div>
                 <div className="card">
                                  <h3>Event Designer & DJ – 3D Sound / Flytwice </h3>
                                  <p>Toronto, ON | 2022 – 2024</p>
                                  <ul>
                                    <li>Designed audio, lighting, and layout systems for 1000+ attendee events.</li>
                                    <li>Coordinated with technical teams to ensure reliability and creativity in event setups..</li>
                                    <li>Applied design thinking and quick problem-solving to optimize real-time performance.</li>
                                  </ul>
                                </div>
                                 {/* Skills */}
                                      <section id="skills">
                                        <h2>SKILLS</h2>
                                        <div className="grid grid-2">
                                          <div className="card"><h3>Design & CAD Tools</h3><p>SolidWorks, Onshape, AutoCAD, 3D Printing, Machine Shop Operations</p></div>
                                          <div className="card"><h3>Programming & Software</h3><p>Python, Java, C, C++, MATLAB, SQL, HTML, CSS, JavaScript, React, MySQL</p></div>
                                          <div className="card"><h3>Software & Tools</h3><p>GitHub, VS Code, Adobe Photoshop, Microsoft Office Suite, Slack</p></div>
                                          <div className="card"><h3>Other Skills</h3><p>Technical Writing, Project Management, Rapid Prototyping, UX/UI Design</p></div>
                                        </div>
                                      </section>
      </section>




      {/* Footer */}
      <footer>
        © 2025 Luxan Jeyarajah. Built with React & CSS.
      </footer>
    </div>
  );
}

export default App;
