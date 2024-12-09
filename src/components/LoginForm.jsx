import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import de useNavigate
import "../styles/Login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // Initialisation de useNavigate

  // Valeurs spécifiques valides
  const validEmail = "mohamedmontfort2003@gmail.com"; // Email spécifique
  const validPassword = "Pmycmhl95"; // Mot de passe spécifique

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }
    // Vérification des valeurs spécifiques (avant d'envoyer la requête)
    if (email !== validEmail || password !== validPassword) {
      setErrorMessage("Email ou mot de passe incorect.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token; // Suppose que le token est renvoyé sous la clé 'token'

        // Stocker le token dans le localStorage
        localStorage.setItem("authToken", token);

        // Redirection vers MainPage
        navigate("/");
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Email ou mot de passe incorrect."
        );
      }
    } catch (error) {
      setErrorMessage("Erreur de connexion. Veuillez réessayer plus tard.");
    }
  };

  return (
    <form
      name="login"
      method="post"
      className="form-login"
      onSubmit={handleSubmit}
    >
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Mot de passe</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button type="submit" className="sendForm">
        Envoyer
      </button>
    </form>
  );
}
