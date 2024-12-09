import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjetsPage from "./ProjetsPage";
import FilterList from "./FilterList"; // Importation de FilterList
import "../styles/ProjectList.css";

// Importer les fichiers JSON locaux
import projectsData from "../data/Projets.json"; // Chemin vers tes projets
import categoriesData from "../data/Categories.json"; // Chemin vers tes catégories

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Charger les projets et les catégories depuis les fichiers JSON
      setProjects(projectsData);
      setCategories(categoriesData); // Charger les catégories ici
    } catch (err) {
      setError("Erreur lors du chargement des projets ou des catégories");
    }
  }, []);

  // Filtrer les projets en fonction de la catégorie sélectionnée
  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.categoryId === selectedCategory.id)
    : projects;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projets">
      <FilterList
        categories={categories} // Passer les catégories ici
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="project-list">
        {error && <p className="error">{error}</p>}
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              cover={project.cover}
              description={project.description}
              onClick={() => handleProjectClick(project)}
            />
          ))
        ) : (
          <p>Aucun projet trouvé.</p>
        )}
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <ProjetsPage
              id={selectedProject.id}
              title={selectedProject.title}
              descriptionMission={selectedProject.descriptionMission}
              imageDemo={selectedProject.imageDemo}
              tags={selectedProject.tags}
              url={selectedProject.url}
              closeModal={closeModal}
            />
          </div>
        )}
      </div>
    </div>
  );
}
