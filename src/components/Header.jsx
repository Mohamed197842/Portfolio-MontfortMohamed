import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Utilisation de l'état local pour gérer le menu

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <button className="hamburger" onClick={toggleMenu}>
          ☰ {/* Bouton hamburger */}
        </button>

        {/* Menu mobile */}
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          {/* Bouton croix pour fermer le menu */}
          {isMenuOpen && (
            <button className="closeMenu" onClick={toggleMenu}>
              ✖
            </button>
          )}

          <li>
            <Link
              to="accueil"
              smooth={true}
              duration={500}
              onClick={toggleMenu} // Ferme le menu après avoir cliqué sur un lien
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="projets"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              to="compétences"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link
              to="parcours"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Parcours
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
