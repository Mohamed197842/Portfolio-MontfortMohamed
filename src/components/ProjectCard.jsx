import React from "react";
import "../styles/ProjectCard.css";

export default function ProjectCard({
  id,
  title,
  cover,
  description,
  onClick,
}) {
  return (
    <div
      className="projects-card"
      onClick={() => onClick({ id, title, cover, description })}
    >
      <div className="card-cover">
        <img src={cover} alt={title} className="card-cover__img" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
}
