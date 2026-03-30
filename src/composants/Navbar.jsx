import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h1 className="logo">Thiate</h1>
      <div className="lol">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/apropos">About</NavLink>
        <NavLink to="/projets">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;