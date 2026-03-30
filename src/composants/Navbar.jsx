import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5"
import Login from './login'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [ouvert, setOuvert] = useState(false)

  return (
    <>
      <nav className="nav">
        <h1 className="logo">Thiate</h1>

        <div className="lol">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/apropos">About</NavLink>
          <NavLink to="/projets">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="menu">
          <button className="login-btn" onClick={() => setOuvert(!ouvert)}>Login</button>
          <IoMenu
            onClick={() => setOpenMenu(!openMenu)}
            className="hamburger"
            size={30}
          />
        </div>
      </nav>

      {openMenu && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setOpenMenu(false)}>Accueil</NavLink>
          <NavLink to="/apropos" onClick={() => setOpenMenu(false)}>About</NavLink>
          <NavLink to="/projets" onClick={() => setOpenMenu(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setOpenMenu(false)}>Contact</NavLink>
          <button onClick={() => { setOuvert(true); setOpenMenu(false) }}>Login</button>
        </div>
      )}

      {ouvert && <Login onClose={() => setOuvert(false)} />}
    </>
  )
}

export default Navbar