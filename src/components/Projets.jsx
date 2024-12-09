import React, { useEffect, useState } from "react";
import "../styles/Projets.css";
import { Element } from "react-scroll";
import ProjectList from "./ProjectList";
import FormProjets from "../components/FormProjets";
import EditProjets from "../components/EditProjets";
import { jwtDecode } from "jwt-decode";
import { FaEdit } from "react-icons/fa";

export default function Projets() {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fonction pour récupérer les catégories
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:4001/api/categories");
      if (!response.ok)
        throw new Error("Erreur lors de la récupération des catégories");
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Fonction pour récupérer les projets
  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:4001/api/projets");
      if (!response.ok)
        throw new Error("Erreur lors de la récupération des projets");
      const data = await response.json();
      console.log(data); // Vérifie les données
      setProjects(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
      try {
        jwtDecode(storedToken);
        setIsAdmin(true); // Considérer l'utilisateur comme admin si le token est valide
      } catch (err) {
        setError("Token invalide");
      }
    }
    fetchCategories();
    fetchProjects();
  }, []);

  const handleEditClick = () => {
    setShowForm(!showForm);
  };

  console.log("Catégorie sélectionnée:", selectedCategory);
  console.log("Projets:", projects);

  return (
    <Element name="projets" className="projects-section">
      <h2>Mes Projets</h2>
      {isAdmin && (
        <button className="edit-button" onClick={handleEditClick}>
          <p>Modifier </p>
          <FaEdit />
        </button>
      )}
      {/* Passer les props nécessaires à ProjectList */}
      <ProjectList
        projects={projects}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {isAdmin && showForm && (
        <div className="overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FormProjets
              fetchCategories={fetchCategories}
              fetchProjects={fetchProjects}
              categories={categories}
            />
            <EditProjets />
          </div>
        </div>
      )}
    </Element>
  );
}
