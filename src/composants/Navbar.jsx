import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Login from './login'

function Navbar() {
    const [ouvert, setOuvert] = useState(false)
    const [menuOuvert, setMenuOuvert] = useState(false)

    return (
        <>
            <nav className="nav">
                <h1 className="logo">Thiate</h1>

                {/* LIENS DESKTOP */}
                <div className="lol">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/apropos">About</NavLink>
                    <NavLink to="/projets">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>

                <button className="login-btn" onClick={() => setOuvert(!ouvert)}>Login</button>

                {/* BOUTON HAMBURGER */}
                <button className="hamburger" onClick={() => setMenuOuvert(!menuOuvert)}>
                    {menuOuvert ? '✕' : '☰'}
                </button>
            </nav>

            {/* MENU MOBILE */}
            {menuOuvert && (
                <div className="mobile-menu">
                    <NavLink to="/" onClick={() => setMenuOuvert(false)}>Accueil</NavLink>
                    <NavLink to="/apropos" onClick={() => setMenuOuvert(false)}>About</NavLink>
                    <NavLink to="/projets" onClick={() => setMenuOuvert(false)}>Projects</NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOuvert(false)}>Contact</NavLink>
                    <button onClick={() => { setOuvert(true); setMenuOuvert(false) }}>Login</button>
                </div>
            )}

            {ouvert && <Login onClose={() => setOuvert(false)} />}
        </>
    )
}

export default Navbar