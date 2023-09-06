import React from "react";

import classes from "./Navigation.module.css";
import profile from "../../Assets/Images/Nav/pfp.png";
import home_icon from "../../Assets/Images/Nav/home.png";
import portfolio_icon from "../../Assets/Images/Nav/portfolio.png"
import hobby_icon from "../../Assets/Images/Nav/hobbies.png"
import about_icon from "../../Assets/Images/Nav/id-card.png"
import contact_icon from "../../Assets/Images/Nav/contact-book.png"

function Navigation() {
  return (
    <React.Fragment>
      <div className={classes.navigation}>
        <div className={classes.pfp}>
          <img alt="My Profile" src={profile} />
        </div>
        <div className={classes.options}>
          <ul>
            <li>
              <a href="/#"><img alt="Home icon" src={home_icon} /></a>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#/portfolio"><img alt="Home icon" src={portfolio_icon} /></a>
              <a href="/#/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/#/hobbies"><img alt="Home icon" src={hobby_icon} /></a>
              <a href="/#/hobbies">Hobbies</a>
            </li>
            <li>
              <a href="/#/about"><img alt="Home icon" src={about_icon} /></a>
              <a href="/#/about">About me</a>
            </li>
            <li>
              <a href="/#/contact"><img alt="Home icon" src={contact_icon} /></a>
              <a href="/#/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
