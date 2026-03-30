import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5"
import Login from './login'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [ouvert, setOuvert] = useState(false)

  return (
    <nav className="nav">
      <h1 className="logo">Thiate</h1>

      <div className="lol">
        <NavLink to="/"><p>Accueil</p></NavLink>
        <NavLink to="/apropos"><p>About</p></NavLink>
        <NavLink to="/projets"><p>Projects</p></NavLink>
        <NavLink to="/contact"><p>Contact</p></NavLink>
      </div>

      <div className="menu">
        <button className="login-btn" onClick={() => setOuvert(!ouvert)}>Login</button>
        <IoMenu
          onClick={() => setOpenMenu(!openMenu)}
          className="hamburger"
          size={30}
        />
      </div>

      {openMenu && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setOpenMenu(false)}><p>Accueil</p></NavLink>
          <NavLink to="/apropos" onClick={() => setOpenMenu(false)}><p>About</p></NavLink>
          <NavLink to="/projets" onClick={() => setOpenMenu(false)}><p>Projects</p></NavLink>
          <NavLink to="/contact" onClick={() => setOpenMenu(false)}><p>Contact</p></NavLink>
          <button onClick={() => { setOuvert(true); setOpenMenu(false) }}>Login</button>
        </div>
      )}

      {ouvert && <Login onClose={() => setOuvert(false)} />}
    </nav>
  )
}

export default Navbar