import React from "react";
import "../styles/form-contact.css";

export default function FormContact() {
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    console.log("Formulaire soumis"); // Log pour indiquer que le formulaire a été soumis

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    console.log("Données du formulaire:", formData); // Log les données du formulaire

    try {
      const response = await fetch("http://localhost:4001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Message envoyé avec succès:", data);
        event.target.reset(); // Réinitialiser le formulaire après succès
      } else {
        console.error("Erreur lors de l'envoi du message:", response.status);
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
    }
  };

  return (
    <form
      name="contact"
      method="post"
      className="form-contact"
      onSubmit={handleSubmit}
    >
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Email</label>
      <input type="email" name="email" required />

      <label>Message</label>
      <textarea name="message" required></textarea>

      <button type="submit" className="sendForm">
        Envoyer
      </button>
    </form>
  );
}
