import React from 'react'
import classes from './Card.module.css'
import Stack from '../Stack/Stack'

function Card(props) {
  return (
    <div className={`${props.className} ${classes[props.num % 2 === 0 ? "card":"cardInv"]} `}>
      <div className={classes.imgContainer}>
        <img src={props.imgSource} alt="Projects"/>
      </div>
      <div className={classes.description}>
        <h1>{props.title}</h1>
        <p>{props.children}</p>
        <Stack stackArray={props.projectStack}/>
      </div>
    </div>
  )
}

export default Card
