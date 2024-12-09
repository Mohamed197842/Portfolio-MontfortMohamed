import React from "react";
import { Element } from "react-scroll";
import "../styles/About.css";

export default function About() {
  return (
    <Element name="parcours" className="about">
      <h2>Mon parcours</h2>
      <div className="parcour-liste">
        <div className="banner">
          <h3> Open Classrooms</h3>
          <p>2024</p>
          <p>Développeur web Full Stack - Diplome de niveau 5</p>
          <ul className="tag-list">
            <li>Html/css</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Nodes.js</li>
            <li>Express</li>
            <li>Sass</li>
            <li>SEO</li>
            <li>API Rest</li>
          </ul>
        </div>
        <div className="banner">
          <h3>Lycée Romain Rolland</h3>
          <p>2020-2021</p>
          <p>Baccalauréat STI2D (Architecture et construction) </p>
        </div>
      </div>
    </Element>
  );
}
