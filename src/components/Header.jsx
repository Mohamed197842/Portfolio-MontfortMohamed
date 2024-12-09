import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";
import { jwtDecode } from "jwt-decode"; // Assurez-vous d'importer jwt-decode

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false); // État local pour savoir si l'utilisateur est admin
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Utilisation de l'état local pour gérer le menu

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Supprime le token du localStorage
    setIsAdmin(false); // Réinitialise l'état d'admin
  };

  // Vérification du token à chaque chargement du composant
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Récupère le token
    if (token) {
      try {
        const decoded = jwtDecode(token); // Décode le token
        if (decoded && decoded.userId) {
          setIsAdmin(true); // Si le token contient un userId, on considère l'utilisateur comme admin
        }
      } catch (error) {
        console.error("Token invalide ou expiré", error); // Gère les erreurs de token invalide ou expiré
        setIsAdmin(false); // En cas d'erreur, réinitialise isAdmin
      }
    } else {
      setIsAdmin(false); // Si aucun token n'est présent, réinitialise isAdmin
    }
  }, []); // Ce hook est appelé une seule fois au chargement du composant

  return (
    <header className="header">
      {/* Affiche le bouton de déconnexion uniquement si l'utilisateur est admin */}
      {isAdmin && (
        <button className="logOut" onClick={handleLogout}>
          Déconnexion
        </button>
      )}

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
