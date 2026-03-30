import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'

function Navbar() {
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
                <button onClick={() => setOuvert(!ouvert)}>Login</button>
            </nav>
            {ouvert && <Login onClose={() => setOuvert(false)} />}
        </>
    )
}

export default Navbar