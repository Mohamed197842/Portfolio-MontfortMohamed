import React, { useEffect, useState } from "react";
import "../styles/Projets.css";
import { Element } from "react-scroll";
import ProjectList from "./ProjectList";

export default function Projets() {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Element name="projets" className="projects-section">
      <h2>Mes Projets</h2>
      {/* Passer les props nécessaires à ProjectList */}
      <ProjectList
        projects={projects}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </Element>
  );
}
