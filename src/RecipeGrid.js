import React from 'react'
import "./RecipeGrid.css"

export default function RecipeGrid({ recipe }) {
  return (
    <div className="recipeGrid">
    <a href={recipe["recipe"]["url"]}>
      <img className="recipeGrid_img" src={recipe["recipe"]["image"]}/>
    </a>
    <p className="recipeGrid_title">{recipe["recipe"]["label"]}</p>
    </div>
  )
}
