import React  from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  
  const location = useLocation();

 
  return (
    <React.Fragment>
      <AppBar position="static" sx={{bgcolor:'transparent'}}>
        <Toolbar>
          <Button
            color="inherit"
            component={Link}
            to="/"
            selected={location.pathname === "/"}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/list"
            selected={location.pathname === "/list"}
          >
            Asteroids
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/potd"
            selected={location.pathname === "/potd"}
          >
            Picture Of The Day
          </Button>
        </Toolbar>
      </AppBar>
      
    </React.Fragment>
  );
};

export default NavBar;