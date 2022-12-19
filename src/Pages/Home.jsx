import React from "react";
import Typical from "react-typical";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
 
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import { Img } from "../Pages/img";
import Fade from "react-reveal/Fade";
import "../components/navbar.css";
 
export const Home = () => {
  return (
    <div>
      <Fade top > 
      <section id="home">
        <div className="profile">
          <div className="nleft">
            <Img />

            <h1 className="intro">
              Knack of building application with front and back end oprations.
            </h1>
          </div>

          <div className="nright">
            <span class="wave">👋</span>

            <div className="detail_name">
              <span className="primary_text">
                Hello, I'M{" "}
                <span className="highlight_text">Ashutosh Sharma</span>
              </span>
            </div>
            <div className="profile_detail_role">
              <span className="primary_text">
                <h1>
                  <Typical
                    className="tt"
                    loop={Infinity}
                    steps={[
                      "Ethusiastic Developer ",
                      3000,
                      "Full Stack Developer",
                      3000,
                      "MERN Developer",
                      3000,
                      "React/React Native Developer",
                      3000,
                    ]}
                  />
                </h1>
              </span>
            </div>

            <button>
              <a href="https://drive.google.com/file/d/1XohgQJK_rldJSeH9E1thIxe7eIh-wUm1/view?usp=share_link">
                <FileDownloadIcon />
              </a>
            </button>
            <button>
              <a href="tel:8825180626">
                <CallIcon />
              </a>
            </button>
          </div>
        </div>
        <div className="linkdin">
          <button>
            <a href="https://github.com/mr-ashu">
              <GitHubIcon />
            </a>
          </button>
          <button className="linkdinid">
            <a href="https://www.linkedin.com/in/ashutosh-sharma-b960b023b">
              {" "}
              <LinkedInIcon />
            </a>
          </button>
        </div>
        <div className="icone">
          <a href="mailto:ashutosh15th@gmail.com">
            {" "}
            <EmailIcon fontSize="medium" />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon fontSize="medium" />
          </a>
          <a href="">
            {" "}
            <InstagramIcon fontSize="medium" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=8825180626">
            {" "}
            <WhatsAppIcon fontSize="medium" />
          </a>
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
    </div>
  );
};
