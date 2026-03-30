import React from 'react'
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"

function Projects() {
  const projects = [
    { image: img3, title: "Project 1" },
    { image: img4, title: "Project 2" },
    { image: img5, title: "Project 3" },
  ]

  return (
    <div className="projects">
      <h2>Mes projets</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} />
            <p>{proj.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects