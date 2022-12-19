import React from "react";
import "../components/navbar.css";
import Fade from "react-reveal/Fade";
export const About = () => {
  return (
    <>
    <Fade bottom>
      <section id="about">
        <h1>About</h1>
        <div className="abag">
          <img
            className="aimg"
            src="https://abhishekdewanganportfolio.netlify.app/static/media/blueTheme-boy.b2f186cb.svg"
            alt=""
          />
          <div className="text">
            <h3>
              Motivated and innovative aspiring full-stack web developer with
              hands-on experience in building websites with MERN stack and
              various web technologies including HTML, CSS, and JS. Curious to
              learn about emerging web technologies. Looking forward to making a
              significant contribution to an organization through dedicated
              effort.
            </h3>
          </div>
        </div>
        <div className="linediv">
          <div className="d"></div>
          <div className="d"></div>
          <div className="d"></div>

          <div className="d3"></div>
          <div className="d"></div>
          <div className="d"></div>
        </div>
      </section>
      </Fade>
    </>
  );
};
