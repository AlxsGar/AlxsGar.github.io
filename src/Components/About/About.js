import React, { forwardRef } from 'react'
import classes from './About.module.css'
import aboutImg from '../../Assets/secondary.png'

function About(props, ref) {
  return (
    <div ref={ref} className={classes.about}>
      <div className={classes.aboutMe}>
        <h1>About me</h1>
        <p>My name is Alexis Garcia, a software developer majored 
            in Computer Systems at ‘Universidad Vasco de Quiroga’. 
            I have a passion in front-end development using React 
            and various other tools to improve and innovate my craft.</p>
      </div>
      <div className={classes.imgContainer}>
        <img src={aboutImg} alt={"About"}/>
      </div>
    </div>
  )
}

export default forwardRef(About)