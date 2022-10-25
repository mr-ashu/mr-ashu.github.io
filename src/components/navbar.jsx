import * as React from 'react';
 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Slider } from './slider';
 
import CallIcon from '@mui/icons-material/Call';
import "./navbar.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Contact from './contact';
import { Project } from './project';

const drawerWidth = 240;
const navItems = [<a href="#home">Home</a>,<a href="#about">About</a>,<a href="#education">Education</a>,<a href="#skill">Skill</a>,
<a href="#project">Work</a>,
<a href='#contact'>Contact</a>];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} id="draw">
      <Typography variant="h6" sx={{ my: 2 }}>
        Ashutosh Sharma
      </Typography>
      <Divider />
      
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item}   disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} className='list' />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
     
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' } }}
          >
            Ashutosh Sharma
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
     
         <div id='body-part'>  

<section id="home">
   <div className='profile'>
   <div className='nleft'>
      
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmEcKM5U_dh_rHnbnc1UHQHu6gtJmxurdXg&usqp=CAU" alt="" />
         
 
    </div>

    <div className='nright'>
    <span class="wave">👋</span>
 
       <h1>I am a</h1>
       <h1>Full Stack Web Developer</h1>

       <button><FileDownloadIcon/></button>
       <button>
         <a href="tel:8825180626"><CallIcon/></a>
       </button>
    </div>
    

  
   </div>
   <div className='linkdin'>
      <button >
      <a href="https://github.com/mr-ashu"><GitHubIcon/></a>
      </button>
      <button className='linkdinid'>
        <a href="https://www.linkedin.com/in/ashutosh-sharma-b960b023b">  <LinkedInIcon/></a>
      
        </button>
   </div>
   <div className='linediv'>
            <div className='d'></div>
            <div className='d'></div>
            <div className='d'></div>
          
            <div className='d3'></div>
            <div className='d'></div>
            <div className='d'></div>
        </div>
        
</section>
<section id="about">
     <h1 >About</h1>
      <div className='abag'>
            <img className='aimg' src="https://abhishekdewanganportfolio.netlify.app/static/media/blueTheme-boy.b2f186cb.svg" alt="" />
         <div className='text'>
            <h3>
           Motivated and innovative aspiring full-stack web developer with hands-on
                    experience in building websites with MERN stack and various web
                    technologies including HTML, CSS, and JS. Curious to learn about
                    emerging web technologies. Looking forward to making a significant
                    contribution to an organization through dedicated effort.

            </h3>
         </div>
      </div>
      <div className='linediv'>
            <div className='d'></div>
            <div className='d'></div>
            <div className='d'></div>
          
            <div className='d3'></div>
            <div className='d'></div>
            <div className='d'></div>
        </div>
</section>
<section id="education">
        <h1>Education</h1>
    <div className='ebag' >
       
        <div className='edubox'>
              <div>
                <img src="data:image/jpeg;base64,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" alt="" />
                 <div className='ebox'>
                 <h2>Full-Stack Web Development,Masai School</h2>
                  <h2><span>Mar 2022 - Present</span> | Bangalore , India</h2>

                 </div>
              </div>
              <div >
              <img src="data:image/jpeg;base64,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" alt="" />
                 <div className='ebox'>
                 <h2>MCA, Jain University</h2>
                  <h2><span>Feb 2022 - Present</span> | Bangalore , India</h2>

                 </div>
              </div>
              <div>
              <img src="https://www.iifccms.edu.in/Image/ccsunive.jpg" alt="" />
             <div className='ebox'>
                  <h2>BJMC - Bachelor of Journalism and Mass-Communication,CSS University</h2>
                  <h2><span>Aug 2018 - Nov 2021</span> | Noida , India</h2>

             </div>
              </div>
              <div>
              <img src="data:image/jpeg;base64,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" alt="" />
                 <div className='ebox'>
                 <h2>Intermediate, RSB Inter School</h2>
                  <h2><span>Mar 2014 - Mar 2016</span> | Samastipur , Bihar</h2>

                 </div>
              </div>
        </div>

        <img className='eimg' src="https://abhishekdewanganportfolio.netlify.app/static/media/eduBlue.e5287488.svg" alt="" />

    </div>
    <div className='linediv'>
            <div className='d'></div>
            <div className='d'></div>
            <div className='d'></div>
          
            <div className='d3'></div>
            <div className='d'></div>
            <div className='d'></div>
        </div>
</section>
<section id="skill">
   <h1>Skill</h1>
   <div >
   <Slider/>
   </div>
   <div className='linediv'>
            <div className='d'></div>
            <div className='d'></div>
            <div className='d'></div>
          
            <div className='d3'></div>
            <div className='d'></div>
            <div className='d'></div>
        </div>
</section>
<section id="project">
      <h1>Project</h1>
    <div className='project-box'>
        <Project/>

    </div>
</section>
<section id="contact"  >
<div className='cntct'>
<h1>CONTACT</h1>
        
     <Contact/>
       

       

</div>
<div className='linediv' >
            <div className='d'></div>
            <div className='d'></div>
            <div className='d'></div>
          
            <div className='d3'></div>
            <div className='d'></div>
            <div className='d'></div>
        </div>

        <h3 className='bh3'>Build by Ashutosh Sharma</h3>
</section>


  </div>
      
      
    </Box>
  );
}

 

export default Navbar;
