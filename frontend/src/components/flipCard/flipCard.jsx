import { useState } from "react";
import "./flipCard.css";

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleTouchStart = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontContent} width={"300px"} height={"300px"} alt="" />
        </div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
