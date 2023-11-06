import React from 'react'
import classes from './Stack.module.css'

function Stack(props) {
  return (
    <div className={`${classes.stack} ${props.className}`}>
      <div className={classes.stackList}>
        {props.stackArray.map(stack => (
            <div key={stack.name} className={classes.stackItem}>
                <img src={stack.icon} alt={"Stack list"}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Stack
