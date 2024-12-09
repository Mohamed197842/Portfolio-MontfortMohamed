import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import "../styles/EditProjets.css";

export default function EditProjets({ onAddProject }) {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:4001/api/projets");
        if (!response.ok)
          throw new Error("Erreur lors de la récupération des projets");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="modal-edit-projet">
      <button className="close-modal">
        <IoCloseSharp />
      </button>
      <h3 id="title-galerie">Galerie projets</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="modal-gallerie">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <button className="delete-btn">
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div className="barre-Horizontale"></div>
      <button className="ajout-projet" onClick={onAddProject}>
        Ajouter un projet
      </button>
    </div>
  );
}
