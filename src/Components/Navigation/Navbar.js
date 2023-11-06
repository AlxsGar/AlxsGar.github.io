import React, { useState } from "react";
import classes from "./Navbar.module.css";
import menu from "../../Assets/menu.png";
import Menu from "../Elements/Menu/Menu";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (selectedRef) => {
    props.onClick(selectedRef);
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.links}>
        <ul className={classes.linksList}>
          <li onClick={() => handleScroll("aboutRef")}>
            About me
          </li>
          <li onClick={() => handleScroll("projectsRef")}>
            Projects
          </li>
          <li onClick={() => handleScroll("skillsRef")}>
            Skills
          </li>
          <li onClick={() => handleScroll("contactRef")}>
            Contact
          </li>
        </ul>
        <div className={classes.menuIcon}>
          <img onClick={handleMenu} src={menu} alt="Menu icon" />
        </div>
      </div>
      {menuOpen && <Menu onClick={handleMenu} onSelect={handleScroll}/>}
    </div>
  );
}

export default Navbar;
