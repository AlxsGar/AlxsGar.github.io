import React, { forwardRef } from 'react'
import classes from './Projects.module.css'
import p1 from '../../Assets/p1.png'
import p2 from '../../Assets/p2.png'
import p3 from '../../Assets/p3.png'
import Card from '../Elements/Card/Card'

function Projects(props, ref) {

    const cards = [
        {
            title: "Automate Scheduling System",
            imgSrc: p1,
            description: "I developed a web application to automate the scheduling of the school’s groups and teachers, off loading the task from administration and optimizing the workflow of the university."
        },
        {
            title: "Turbo Diesel de Morelia Site",
            imgSrc: p2,
            description: "Developed a website for Turbo DIesel de Morelia show casing their services, experience and contact information. I was also responsible in boosting its online presence."
        },
        {
            title: "Bitcoin Calculator",
            imgSrc: p3,
            description: "Developed an app where it would convert the value of the bitcoin into any chosen currency. Did this as a personal project using flutter with a bitcoin and currency API."
        }
    ]

    const projects = [
      {
        icons: [props.icons[0], props.icons[1], props.icons[2], props.icons[3]]
      },
      {
        icons: [props.icons[0], props.icons[1], props.icons[2], props.icons[3]]
      },
      {
        icons: [props.icons[4]]
      },
    ]


  return (
    <div ref={ref} className={classes.projects}>
      <h1>Projects</h1>
      <div className={classes.projectsList}>
        {
            cards.map((card, index) => (
                <Card key={index} title={card.title} imgSource={card.imgSrc} num={index} projectStack={projects[index].icons}>{card.description}</Card>
            ))
        }
      </div>
    </div>
  )
}

export default forwardRef(Projects)
