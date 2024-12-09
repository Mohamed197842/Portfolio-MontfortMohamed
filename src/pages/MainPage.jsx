import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Accueil from "../components/Accueil";
import Projets from "../components/Projets";
import Compétences from "../components/Compétences";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";

export default function MainPage() {
  useEffect(() => {
    // Récupérer le token depuis le localStorage
    const token = localStorage.getItem("authToken");

    // Afficher le token dans la console
    if (token) {
      console.log("Token:", token);
    } else {
      console.log("Aucun token trouvé");
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Accueil />
      <Projets />
      <Compétences />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
