import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleLeft, FaImage } from "react-icons/fa";
import "../styles/FormProjets.css";

export default function FormProjets({
  fetchCategories, // Fonction pour récupérer les catégories
  fetchProjects, // Fonction pour récupérer les projets après ajout
  categories, // Liste des catégories disponibles
}) {
  const {
    register, // Permet de lier les champs du formulaire avec react-hook-form
    handleSubmit, // Fonction pour gérer l'envoi du formulaire
    setError, // Fonction pour définir des erreurs de formulaire
    reset, // Fonction pour réinitialiser le formulaire après soumission
    formState: { errors }, // Gestion des erreurs du formulaire
  } = useForm(); // Initialisation du hook de gestion des formulaires

  // useEffect pour récupérer les catégories si elles ne sont pas encore disponibles
  useEffect(() => {
    if (!categories || categories.length === 0) {
      fetchCategories(); // Si les catégories sont vides, on les charge
    }
  }, [categories, fetchCategories]);

  // Gérer l'envoi du formulaire avec fetch
  const onSubmitForm = async (data) => {
    // Création de l'objet FormData pour envoyer les données en multipart/form-data
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("url", data.url);

    // Ajouter l'image sélectionnée (en prenant le premier fichier de l'array)
    formData.append("file", data.image[0]);

    // Ajouter la catégorie sélectionnée
    formData.append("categoryId", data.categoryId);

    try {
      // Envoi de la requête POST pour ajouter le projet
      const response = await fetch("http://localhost:4001/api/projets", {
        method: "POST", //
        body: formData, //
      });

      // Vérification de la réponse du serveur
      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'ajout du projet.");
      }

      // Réinitialisation du formulaire après l'ajout
      reset();
      fetchProjects(); // Mettre à jour la liste des projets dynamiquement
      alert("Projet ajouté avec succès !");
    } catch (error) {
      // Gestion des erreurs lors de l'ajout du projet
      console.error("Erreur lors de l'ajout du projet", error);
      setError("form", {
        message:
          error.message || "Une erreur est survenue lors de l'ajout du projet.", // Affichage de l'erreur globale
      });
    }
  };

  return (
    <div className="add-projet">
      <button className="return">
        <FaAngleLeft />
      </button>
      <button className="close-modal">
        <IoCloseSharp />
      </button>

      <form
        onSubmit={handleSubmit(onSubmitForm)} // Gérer la soumission du formulaire
        encType="multipart/form-data" // Spécifier que le formulaire contient des fichiers
        className="form-projets"
      >
        <div>
          <label htmlFor="title">Titre</label>
          <input
            {...register("title", { required: "Le titre est obligatoire." })} // Enregistrement du champ avec validation
            type="text"
            id="title"
          />
          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            {...register("description", {
              required: "La description est obligatoire.",
            })}
            id="description"
          />
          {errors.description && (
            <p style={{ color: "red" }}>{errors.description.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="url">Lien du projet</label>
          <input
            {...register("url", {
              pattern: {
                value: /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/[\w._%+-]+)*\/?$/, // Validation de l'URL avec une expression régulière
                message: "Lien invalide",
              },
            })}
            type="url"
            id="url"
          />
          {errors.url && <p style={{ color: "red" }}>{errors.url.message}</p>}
        </div>

        {/* Champ pour télécharger l'image du projet */}
        <div className="ajout-image">
          <FaImage id="icon-image" />
          <label htmlFor="image">Image du projet</label>
          <input
            {...register("image", {
              required: "L'image est obligatoire",
              validate: {
                fileType: (value) =>
                  value[0]?.type === "image/png" ||
                  value[0]?.type === "image/jpeg" ||
                  "Formats acceptés : JPG, PNG", // Validation pour les types d'image
                fileSize: (value) =>
                  value[0]?.size <= 4 * 1024 * 1024 ||
                  "L'image doit être inférieure à 4 Mo", // Validation pour la taille de l'image
              },
            })}
            type="file"
            id="image"
            accept="image/png, image/jpeg"
          />
          <p>Formats acceptés : JPG, PNG (4 Mo max)</p>
          {/* Affichage d'un message d'erreur si l'image ne respecte pas les règles */}
          {errors.image && (
            <p style={{ color: "red" }}>{errors.image.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="categoryId">Catégorie</label>
          <select
            {...register("categoryId", {
              required: "La catégorie est obligatoire.",
            })}
            id="categoryId"
          >
            <option value="" disabled>
              Sélectionnez une catégorie
            </option>
            {/* Générer les options de catégorie dynamiquement */}
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <p style={{ color: "red" }}>{errors.categoryId.message}</p>
          )}
        </div>

        {errors.form && (
          <div style={{ color: "red" }}>{errors.form.message}</div>
        )}
        <button type="submit">Ajouter le projet</button>
      </form>
    </div>
  );
}
