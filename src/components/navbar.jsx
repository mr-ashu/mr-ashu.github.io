import * as React from "react";


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
 

import "./navbar.css";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Education } from "../Pages/Education";
import { Skill } from "../Pages/Skill";
import { Project } from "../Pages/Project";
import { Contact } from "../Pages/Contact";
import { Link } from "react-scroll";
const drawerWidth = 240;
const navItems = [
  <Link to="home">Home</Link>,
  <Link to="about">About</Link>,
  <Link to="education">Education</Link>,
  <Link to="skill">Skill</Link>,
  <Link to="project">Work</Link>,
  <Link to="contact">Contact</Link>,
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", background: "" }}
      id="draw"
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Ashutosh Sharma
      </Typography>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} className="list" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 2, display: { xs: "none", sm: "block" } }}
          >
            Ashutosh Sharma
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* -------------------------- */}

      <div id="body-part">
        <video
          className="video-bag"
          autoPlay
          loop
          muted
          preload="auto"
          src="https://septime.net/medias/videos/plan-001-light.mp4"
        ></video>

        <div className="section-part">
         
          <Home/>
          <About/>

          <Education/>

          <Skill/>

          <Project/>

          <Contact/>
         
         
 
         
        </div>
      </div>
    </Box>
  );
}

export default Navbar;
