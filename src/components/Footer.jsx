import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Liens sociaux */}
      <div className="social-links">
        <a
          href="https://github.com/Mohamed197842"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="https://github.com/Mohamed197842"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={18} />
        </a>
      </div>
      <p>© 2024 Montfort Mohamed, Tous droits réservés.</p>
    </footer>
  );
}
