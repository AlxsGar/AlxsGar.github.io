import React, { forwardRef } from "react";
import classes from "./Skills.module.css";

function Skills(props, ref) {
  return (
    <div ref={ref} className={classes.skills}>
      <h1>Skills</h1>
      <div className={classes.skillsSection}>
        <ul className={classes.skillsList}>
          {props.icons.map((icon) => (
            <li key={icon.name} className={classes.skill}>
              <div className={classes.skillDescription}>
                <h3>{icon.name}:</h3>
                <p>{icon.years} {icon.years > 1 ? "years":"year"}</p>
              </div>
              <div className={classes.skillImg}>
                <img src={icon.icon} alt="skill" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default forwardRef(Skills);
