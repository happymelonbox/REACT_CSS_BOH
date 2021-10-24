import React from 'react'

import '../../style/Recipes.css'

const CreateRecipeForm = ({ recipe, fillState, fillPendingState, handleAddIngredient, handleAddStep }) => {
    return (
        <div className="create-main-container">
            <div>
                <form className="create-recipe-form">
                    <input required className="create-recipe-form-inputs" type="text" placeholder="Recipe name" name="recipe_name" value={recipe.recipe_name} onChange={fillState} />
                    <input required className="create-recipe-form-inputs" type="number" placeholder="Yield" name="yield" onChange={fillState} />
                    <select required className="create-recipe-form-select" placeholder="Type" name="yeild_unit" value={recipe.yield_unit} onChange={fillState}>
                        <option className="create-recipe-form-option">Select a unit</option>
                        <option className="create-recipe-form-option">portions</option>
                        <option className="create-recipe-form-option">kg</option>
                        <option className="create-recipe-form-option">gram</option>
                        <option className="create-recipe-form-option">unit</option>
                    </select>
                    <input required className="create-recipe-form-inputs" type="number" name="prep_time" placeholder="Prep Time" onChange={fillState} />
                    <select required className="create-recipe-form-select" name="prep_time_unit" value={recipe.prep_time_unit} onChange={fillState}>
                        <option className="create-recipe-form-option">Select a timeframe</option>
                        <option className="create-recipe-form-option">Mins</option>
                        <option className="create-recipe-form-option">Hours</option>
                        <option className="create-recipe-form-option">Days</option>
                        <option className="create-recipe-form-option">Weeks</option>
                    </select>
                    <input required className="create-recipe-form-inputs" type="number" placeholder="Cooking Time" name="cooking_time" onChange={fillState} />
                    <select required className="create-recipe-form-select" name="cooking_time_unit" value={recipe.cooking_time_unit} onChange={fillState}>
                        <option className="create-recipe-form-option">Select a timeframe</option>
                        <option className="create-recipe-form-option">Mins</option>
                        <option className="create-recipe-form-option">Hours</option>
                        <option className="create-recipe-form-option">Days</option>
                        <option className="create-recipe-form-option">Weeks</option>
                    </select>
                    <input required className="create-recipe-form-inputs" type="text" placeholder="Add an image URL for your recipe" name="img_URL" value={recipe.img_URL} onChange={fillState} />
                    <input required className="create-recipe-form-inputs" type="text" placeholder="Add a brief description of your recipe" name="description" value={recipe.description} onChange={fillState} />
                </form>
                <form className="create-recipe-form" onSubmit={handleAddIngredient}>
                    {/* Change this to a select input eventually when the database is more full of ingredients
                recipes - the select option will have recipes in to add in recipes as ingredient (for example - mayonnaise for a sandwich) */}
                    <h4 className="create-recipe-form-h4">Ingredients:</h4>
                    <input required className="create-recipe-form-inputs" type="text" placeholder="Ingredient name" name="ingredient_name" onChange={fillPendingState} />
                    <input required className="create-recipe-form-inputs" type="number" placeholder="Quantity" name="quantity" onChange={fillPendingState} />
                    <select required className="create-recipe-form-select" name="unit" onChange={fillPendingState}>
                        <option className="create-recipe-form-option">Select a unit</option>
                        <option className="create-recipe-form-option">tsp</option>
                        <option className="create-recipe-form-option">Tbs</option>
                        <option className="create-recipe-form-option">Cup</option>
                        <option className="create-recipe-form-option">ml</option>
                        <option className="create-recipe-form-option">L</option>
                        <option className="create-recipe-form-option">g</option>
                        <option className="create-recipe-form-option">kg</option>
                    </select>
                    <button className="create-recipe-form-submits" type="submit">Add ingredient</button>
                </form>
                <form className="create-recipe-form" onSubmit={handleAddStep}>
                    <h4 className="create-recipe-form-h4">Method:</h4>
                    <input required className="create-recipe-form-inputs" type="text" placeholder="Instructions" name="method" onChange={fillPendingState} />
                    <button className="create-recipe-form-submits" type="submit">Add Step</button>
                </form>
            </div>
        </div>
    )
}
export default CreateRecipeForm