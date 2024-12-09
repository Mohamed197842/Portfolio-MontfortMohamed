import React from "react";
import "../styles/FilterList.css";

export default function FilterList({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <ul className="filter-list">
      {categories.map((category) => (
        <li key={category.id}>
          <button
            onClick={() => setSelectedCategory(category)} // Met à jour la catégorie sélectionnée
            className={selectedCategory?.id === category.id ? "active" : ""}
          >
            {category.name} {/* Utilisez le nom de la catégorie ici */}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => setSelectedCategory(null)} // Réinitialiser la sélection
          className={selectedCategory === null ? "active" : ""}
        >
          Tous
        </button>
        {/* Bouton pour afficher tous les projets */}
      </li>
    </ul>
  );
}
