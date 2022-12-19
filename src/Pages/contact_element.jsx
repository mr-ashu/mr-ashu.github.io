import * as React from 'react';
import Box from '@mui/material/Box';
import "../components/navbar.css"
export default function Contactelement() {
  

  return (
  
    <Box className='cbag'>
      <form bottom>
          
          <input type="text" placeholder='Name'/>
          <br />
          <input type="text" placeholder='Your Email' />
           <br />
          <textarea className='mbox' type="text" placeholder='Type your message' />
          <br />
          <input className="ibtn" type="submit"/>
        
      </form>
     
      <img src="https://abhishekdewanganportfolio.netlify.app/static/media/contactsBlue.08a9dafd.svg" alt="" />
    
    </Box>
  );
}
