import React from "react";
import Typical from "react-typical";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fade from "react-reveal/Fade";
import "../components/Navbar.css"
import { Button } from "@chakra-ui/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import DownloadIcon from '@mui/icons-material/Download';
 
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Img } from "./Img";
export const Home = () => {
  return (
    <div>
      <Fade top>
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

              <Button _hover={{bg:"teal"}}>
                <a href="https://drive.google.com/file/d/1XohgQJK_rldJSeH9E1thIxe7eIh-wUm1/view?usp=share_link" target="_blank"><DownloadIcon/></a>
              </Button>
              <Button _hover={{bg:"teal"}}>
                <a href="callto:8825180626" target="_blank"><CallIcon/></a>
              </Button>
            </div>
          </div>
          <div className="linkdin">
            <Button _hover={{bg:"teal"}}>

              <a href="https://github.com/mr-ashu" target="_blank"><GitHubIcon/></a>
            </Button>
            <Button _hover={{bg:"teal"}} className="linkdinid">
              <a href="https://www.linkedin.com/in/ashutosh-sharma-b960b023b/" target="_blank"><LinkedInIcon/></a>
              </Button>
          </div>
          <div className="icone">
            <a href="mailto:ashutosh15th@gmail.com">
         
            <EmailIcon fontSize="medium" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FacebookIcon fontSize="medium" />
          </a>
        
          <a href="https://api.whatsapp.com/send?phone=8825180626" target="_blank"> 
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
