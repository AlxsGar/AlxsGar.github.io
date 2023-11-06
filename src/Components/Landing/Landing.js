import React from "react";
import classes from "./Landing.module.css";
import pfp from "../../Assets/profileImg.png";
import linkedin from "../../Assets/li.png";
import github from "../../Assets/gh.png";
import Stack from "../Elements/Stack/Stack";

function Landing(props) {
  return (
    <div className={classes.landing}>
      <div className={classes.pfp}>
        <img src={pfp} alt="Self portrait" />
      </div>
      <div className={classes.personalInfo}>
        <h1>Alexis Garcia</h1>
        <h2>FullStack Developer - Heavy Frontend</h2>
        <div className={classes.mySocials}>
          <div className={classes.imgContainer}>
            <img src={linkedin} alt="LinkedIn" />
          </div>
          <div className={classes.imgContainer}>
            <img src={github} alt="Github" />
          </div>
        </div>
        <Stack stackArray={props.icons} />
      </div>
    </div>
  );
}

export default Landing;
