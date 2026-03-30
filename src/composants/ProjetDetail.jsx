import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { projets_bd } from '../data/Projet_bd'

const ProjetDetail = () => {
  const { id } = useParams()
  const projet = projets_bd.find((p) => p.id === parseInt(id))

  if (!projet) return <p>Projet introuvable</p>

  return (
    <div className="projet-detail">
      <img src={projet.image} alt={projet.nom} />
      <h1>{projet.nom}</h1>
      <p>{projet.description}</p>
      <div className="technos">
        {projet.techno.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <NavLink to="/projets">← Retour aux projets</NavLink>
    </div>
  )
}

export default ProjetDetail