import React from "react";
import { Element } from "react-scroll";
import FormContact from "./form-contact.jsx";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <Element name="contact" className="contact-section">
      <h2>Me contacter</h2>
      <FormContact />
    </Element>
  );
}
