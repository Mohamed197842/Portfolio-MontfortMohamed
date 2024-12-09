import React from "react";
import "../styles/ProjetPage.css";
import { FaGithub } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default function ProjetsPage({
  title,
  descriptionMission,
  imageDemo,
  tags,
  url,
  closeModal,
}) {
  // Vérification de 'tags' pour la conversion en tableau si nécessaire
  const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags || "[]");

  // Vérification du format d'imageDemo et conversion en tableau JSON si nécessaire
  console.log("imageDemo:", imageDemo); // Ajout pour vérifier la structure de imageDemo
  const imageArray = Array.isArray(imageDemo)
    ? imageDemo
    : JSON.parse(imageDemo || "[]");
  console.log("imageArray:", imageArray); // Affiche l'imageArray pour déboguer

  // Fonction pour rediriger vers un nouvel onglet
  const handleRedirect = () => {
    window.open(url, "_blank"); // Ouvre dans un nouvel onglet
  };

  return (
    <div
      className="modale-details-projets"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="close-modal" onClick={closeModal}>
        <IoCloseSharp />
      </button>
      <h2 className="title">{title}</h2>
      <p className="description">
        {descriptionMission || "Description non disponible"}
      </p>
      <button className="code-source" onClick={handleRedirect}>
        Code source
        <FaGithub />
      </button>

      {/* Affichage des tags, s'il y en a */}
      {tagsArray.length > 0 && (
        <div className="tags-list">
          {tagsArray.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Affichage des images si imageDemo est un tableau non vide */}
      {imageArray.length > 0 && (
        <div className="image-demo">
          {imageArray.map((imageDemo, index) => (
            <img key={index} src={imageDemo} alt={`Image demo ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}
