import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjetsPage from "./ProjetsPage";
import FilterList from "./FilterList"; // Importation de FilterList
import "../styles/ProjectList.css";

export default function ProjectList({
  projects,
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState(null);

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
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="project-list">
        {error && <p className="error">{error}</p>}
        {/* Intégrer FilterList dans ProjectList */}
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              cover={project.imageUrl}
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
              imageDemo={selectedProject.imageDémo}
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
