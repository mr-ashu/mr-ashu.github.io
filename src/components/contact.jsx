import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ContactsIcon from '@mui/icons-material/Contacts';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import "./navbar.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';
import "./navbar.css"
export default function Contact() {
  

  return (
    <Box className='cbag'>
      <form>
          
          <input type="text" placeholder='Ashutosh Sharma'/>
          <br />
          <input type="text" placeholder='ashutosh15th@gmail.com' />
           <br />
          <input className='mbox' type="text" placeholder='Type ypur message' />
          <br />
          <input className="ibtn" type="submit"/>
        
      </form>
       <div className='clink'>
                <a href="mailto:ashutosh15th@gmail.com"><AlternateEmailIcon/> ashutosh15th@gmail.com</a>
                <a href="tel:8825180626"><ContactsIcon/> 8825180626</a>
                <a href="https://www.linkedin.com/in/ashutosh-sharma-b960b023b"><LinkedInIcon/> Ashutosh Sharma</a>
                <p> <PlaceIcon/>  Samastipur, Bihar</p>
       </div>
      <img src="https://abhishekdewanganportfolio.netlify.app/static/media/contactsBlue.08a9dafd.svg" alt="" />
    
    </Box>
  );
}
