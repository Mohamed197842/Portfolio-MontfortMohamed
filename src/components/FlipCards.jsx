import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../styles/FlipCards.css";

const FlipCard = ({ frontImage, frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flip-container">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Face avant */}
        <div
          className="card front"
          onClick={() => setIsFlipped(true)}
          style={{
            backgroundImage: `url(${frontImage})`,
            backgroundSize: "cover",
          }}
        >
          <h2>{frontText}</h2> {/* Utilise le texte passé en props */}
        </div>

        {/* Face arrière */}
        <div className="card back" onClick={() => setIsFlipped(false)}>
          <h2>{backText}</h2> {/* Utilise le texte passé en props */}
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
