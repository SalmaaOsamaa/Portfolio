import React, { useRef } from "react";
import {Link} from "react-scroll"
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from '@mui/icons-material/Code';
import classes from "./Navbar.module.css";
function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(classes["responsive_nav"]);
  };
  return (
    <div className={classes.mynavbar}>
      <header className={classes.header}>
        <Link spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            className={classes.a}
            to="myapp" 
            style={{fontSize: "larger",
            fontFamily: 'Gochi Hand , cursive',
 
          }}
            >
        Hola, I'm Salma <CodeIcon/>
        </Link>
        </header>
        <nav className={classes.nav} ref={navRef}>
          <Link
          
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            className={classes.a}
            to="about"
          >
            {" "}
            about
          </Link>
          <Link spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            className={classes.a}
            to="project"  >
            {" "}
            My Projects
          </Link>
          <Link spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            className={classes.a}
            to="contact" >
            {" "}
            Contact Me
          </Link>
        
          <button
            className={`${classes.mynav} ${classes.navclose}`}
            onClick={showNavbar}
          >
            <CloseIcon />
          </button>
        </nav>
        <button className={classes.mynav} onClick={showNavbar}>
          <MenuIcon />
        </button>
      
    </div>
  );
}

export default Navbar;
