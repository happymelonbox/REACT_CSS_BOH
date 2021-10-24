import React from 'react'
import { Link } from 'react-router-dom';
import '../../style/Recipes.css'

const RecipeHomeNavBar =()=>{
    return (
      <div className="recipe-navbar">
        <Link className="recipe-navbar-link"
          to="/recipes"
        >Recipes</Link>
        <Link className="recipe-navbar-link"
          to="/createRecipe"
        >Create Recipe</Link>
      </div>
    )
  }


export default RecipeHomeNavBar;