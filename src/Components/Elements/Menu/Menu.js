import React from "react";
import classes from "./Menu.module.css";
import close from "../../../Assets/close.png";

function Menu(props) {
  const closeHandle = () => {
    props.onClick();
  };
  const handleScroll = (selectedRef) => {
    props.onSelect(selectedRef);
    props.onClick();
  }
  
  return (
    <div className={classes.menu}>
      <div className={classes.links}>
        <div className={classes.menuIcon}>
          <img onClick={closeHandle} src={close} alt="Menu icon" />
        </div>
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
      </div>
    </div>
  );
}

export default Menu;
