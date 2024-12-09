import React from "react";
import { Element } from "react-scroll";
import FlipCards from "./FlipCards.jsx";
import "../styles/Compétences.css";
import {
  FaDatabase,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaChartLine,
  FaClipboardList,
} from "react-icons/fa"; // Importer les icônes nécessaires
import { CgWebsite } from "react-icons/cg";
import { SiJavascript, SiMysql, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { LuClipboardEdit } from "react-icons/lu";

export default function Compétences() {
  return (
    <Element name="compétences" className="compétences-section">
      <h2>Mes Compétences</h2>
      <div className="skills-cards">
        <FlipCards
          frontText={
            <div style={{ display: "flex", alignItems: "center" }}>
              <CgWebsite style={{ marginRight: "8px" }} />{" "}
              {/* Icône pour le front-end */}
              Front-end
            </div>
          }
          backText={
            <ul>
              <li>
                <SiJavascript
                  style={{
                    marginRight: "8px",
                    backgroundColor: "#323330",
                    color: "#F0DB4F",
                    fontSize: "28px",
                  }}
                />
                JavaScript
              </li>
              <li>
                <FaReact
                  style={{
                    marginRight: "8px",
                    color: "#61DAFB",
                    fontSize: "28px",
                  }}
                />
                React
              </li>
              <li>
                <FaCss3Alt
                  style={{
                    marginRight: "8px",
                    color: "#1B73BA",
                    fontSize: "28px",
                  }}
                />
                <FaSass
                  style={{
                    marginRight: "8px",
                    color: "#CD6799",
                    fontSize: "28px",
                  }}
                />
                CSS / SASS
              </li>
            </ul>
          }
        />
        <FlipCards
          frontText={
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaDatabase style={{ marginRight: "8px" }} />{" "}
              {/* Icône pour le back-end */}
              Back-end
            </div>
          }
          backText={
            <ul>
              <li>
                <DiNodejs
                  style={{
                    marginRight: "8px",
                    color: "#5FA04E",
                    fontSize: "28px",
                  }}
                />
                Node.js/Express
              </li>
              <li>
                <SiMysql
                  style={{
                    marginRight: "8px",
                    fontSize: "28px",
                    color: "blue",
                  }}
                />
                MySql
              </li>
              <li>
                <SiMongodb
                  style={{
                    marginRight: "8px",
                    fontSize: "28px",
                    color: "#5FA04E",
                  }}
                />
                MongoDB
              </li>
            </ul>
          }
        />
        <FlipCards
          frontText={
            <div style={{ display: "flex", alignItems: "center" }}>
              <LuClipboardEdit style={{ marginRight: "8px" }} />{" "}
              {/* Icône pour le back-end */}
              Optimisation
            </div>
          }
          backText={
            <ul>
              <li>SEO</li>
              <li>Accessibilité</li>
              <li>Performance</li>
            </ul>
          }
        />
      </div>
    </Element>
  );
}
