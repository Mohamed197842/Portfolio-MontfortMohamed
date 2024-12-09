import React from "react";
import { Element } from "react-scroll";
import "../styles/Contact.css";
import { FaArrowDown } from "react-icons/fa";

export default function Contact() {
  return (
    <Element name="contact" className="contact-section">
      <h2>Me contacter</h2>
      <div className="contact-text">
        <p>
          Mon profil vous intéresse ? N'hésitez pas à me contacter directement
          par e-mail !
        </p>
        <FaArrowDown className="arrow-icon" />
        <span>mohamedmontfort2003@gmail.com</span>
      </div>
    </Element>
  );
}
