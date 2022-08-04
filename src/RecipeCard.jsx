import React from "react";
import "./recipecard.css";

function RecipeCard({ recipe }) {
  return (
      <div className="recipeCard">
        <div
          className="recipeCard_container"
          onClick={() => {
            window.open(recipe["recipe"]["url"]);
          }}
        >
          <img src={recipe["recipe"]["image"]} alt="img" />
          <p>{recipe["recipe"]["label"]}</p>
        </div>
      </div>
  );
}

export default RecipeCard;
