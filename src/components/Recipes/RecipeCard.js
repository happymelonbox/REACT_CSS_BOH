import React from 'react';

class RecipeCard extends React.Component{

    render(){
        const recipe = this.props.recipe
        return(
            <div className="recipe-card" key={recipe.id}>
                <div className="recipe-card-heading">
                    <h3 className="recipe-card-name">{recipe.recipe_name}</h3>
                    <img className="recipe-card-img" src={recipe.img_URL} alt={recipe.recipe_name}/>
                </div>
                <div className="recipe-card-subheading">
                    <h4 className="recipe-card-info">Makes: {recipe.yield} {recipe.yield_unit}</h4>
                    <h4 className="recipe-card-info">Prep Time: {recipe.prep_time} {recipe.prep_time_unit}</h4>
                    <h4 className="recipe-card-info">Cook Time: {recipe.cooking_time} {recipe.cooking_time_unit}</h4>
                </div>
                <div className="recipe-card-description">
                    <p>{recipe.description}</p>
                </div>
                <div className="recipe-card-recipe">
                    <div className="recipe-card-recipe-ingredients"></div>
                        <h5 className="recipe-card-recipe-ingredients-title">Ingredients</h5>
                        <ul>{this.props.recipe.ingredients.map(ingr=>{
                            return(
                                <li className="recipe-card-ingredients-each" key={ingr.id}>
                                    <h6 className="each-ingredient">+ {ingr.ingredient_name}:  {ingr.quanity} {ingr.unit}</h6>
                                </li>
                            )})}
                        </ul>
                        <h5 className="recipe-card-method-title">Method</h5>
                        <ol className="recipe-card-method">
                            {this.props.recipe.method.map((step,index)=>{
                                return (
                                    <li className="recipe-card-method-step" key={step}>
                                        <h6>{index+1}. {step}</h6></li>
                                )
                            })}
                        </ol>
                </div>
            </div>
        )
}}

export default RecipeCard