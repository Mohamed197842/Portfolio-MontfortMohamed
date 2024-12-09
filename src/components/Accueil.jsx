import React from "react";
import { Element } from "react-scroll";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-scroll";
import "../styles/accueil.css";
import LaptopIcon from "../images/LaptopIcon.webp";

export default function Accueil() {
  return (
    <Element name="home" className="accueil">
      <div className="content">
        <div className="bar"></div>
        <div className="text">
          <h1>
            Montfort <br /> Mohamed
          </h1>
          <p>
            Développeur Full-Stack, je suis prêt à concevoir des solutions
            <br />
            complètes et innovantes pour répondre à vos besoins et
            <br /> donner vie à vos projets.
          </p>

          {/* Liens sociaux */}
          <div className="social-links">
            <a
              href="https://github.com/Mohamed197842"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/Mohamed197842"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX size={30} />
            </a>
            <button className="contact">Contactez-moi</button>
          </div>
        </div>
      </div>
      <div className="rotating-container">
        <img src={LaptopIcon} alt="Laptop" className="rotating-image-3d" />
      </div>
      {/* Lien vers les projets */}
      <Link to="projets" smooth={true} duration={500} className="link-project">
        Découvrez mon travail <FaArrowDown className="arrow-icon" />
      </Link>
    </Element>
  );
}
