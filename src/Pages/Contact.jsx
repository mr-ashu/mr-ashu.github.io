import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Contactelement from "./contact_element";
import Fade from "react-reveal/Fade";
import CallIcon from "@mui/icons-material/Call";

export const Contact = () => {
  return (
    <>
     <Fade bottom>
      <section id="contact">
        
        <div className="cntct">
          <h1>CONTACT</h1>

          <Contactelement />
        </div>
         <div style={{ width:"fit-content",margin:"auto",textAlign:"left",color:"#1976d2" ,fontWeight:"bold",marginTop:"30px" }} >
             <h3>Email : <a style={{color:"black"}} href="mailto:ashutosh15th@gmail.com"> ashutosh15th@gmail.com</a></h3>

             <h3>Contact-me : <a style={{color:"black"}} href="mailto:ashutosh15th@gmail.com">+91 8825180626</a></h3>
         </div>
        <div className="footericone">
        <a href="tel:8825180626">
                <CallIcon />
              </a>
         
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
    </>
  );
};
