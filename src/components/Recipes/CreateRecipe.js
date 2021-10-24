import React from 'react'
import RecipeCard from './RecipeCard'

import { baseURL } from '../..'
import { recipeEndPoint } from '../..'

import CreateRecipeForm from './CreateRecipeForm'

class CreateRecipe extends React.Component{
    constructor(){
        super()
        this.state={
            recipe: {
                recipe_name: "",
                yield: 0,
                yield_unit: "",
                prep_time: "",
                prep_time_unit: "",
                cooking_time: "",
                cooking_time_unit: "",
                img_URL: "",
                description: "",
                ingredients: [
                ],
                method: []
            },
            pending_ingredient_name: '',
            pending_quantity: undefined,
            pending_unit: '',
            pending_method: ''
        }
    }

    fillState = (event) => {
        this.setState({
            recipe: {
                ...this.state.recipe,
                [event.target.name]: event.target.value.toString()
            }
        })
    }

    fillPendingState = (event) => {
        const key = 'pending_' + event.target.name
        this.setState({
            [key]: event.target.value,
        })
    }

    handleAddIngredient = (event) => {
        event.preventDefault()
        this.addIngredient()
    }

    addIngredient = () => {
        const increment = this.state.recipe.ingredients.length + 1
        this.setState({
            recipe:{
            ...this.state.recipe,
            "ingredients": [
                ...this.state.recipe.ingredients,
                {   "id": increment,
                    "ingredient_name": this.state.pending_ingredient_name,
                    "quantity": this.state.pending_quantity,
                    "unit": this.state.pending_unit
                }
            ]
            }
        })
    }

    handleAddStep = (event) => {
        event.preventDefault()
        const value = event.target.method.value
        this.addStep(value)
    }

    addStep = (value) => {
        const valueString = value.toString()
        this.setState({
            recipe:{
                ...this.state.recipe,
                "method": [
                    ...this.state.recipe.method, valueString
            ]
        }
        })
    }

    submitToDatabase = (event) =>{
        event.preventDefault()
        event.target.disabled=true
        event.target.innerHTML = "Submitted"
        this.postRecipe()
    }

    postRecipe = () => {
        const incrementId = this.state.recipe.length + 1
        fetch(baseURL + recipeEndPoint, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                "id": incrementId,
                "recipe_name": this.state.recipe.recipe_name,
                "yield": this.state.recipe.yield,
                "yield_unit": this.state.recipe.yield_unit,
                "prep_time": this.state.recipe.prep_time,
                "prep_time_unit": this.state.recipe.prep_time_unit,
                "cooking_time": this.state.recipe.cooking_time,
                "cooking_time_unit": this.state.recipe.cooking_time_unit,
                "img_URL": this.state.recipe.img_URL,
                "description": this.state.recipe.description,
                "ingredients": this.state.recipe.ingredients,
                "method": this.state.recipe.method
            })
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
            this.props.updateRecipes()
        })
    }

    startNewRecipe = (event) =>{
        event.target.previousSibling.innerHTML = "Submit Recipe?"
        event.target.previousSibling.disabled = false
        this.setState({
            recipe: {
                recipe_name: "",
                yield: 0,
                yield_unit: "",
                prep_time: "",
                prep_time_unit: "",
                cooking_time: "",
                cooking_time_unit: "",
                img_URL: "",
                description: "",
                ingredients: [
                ],
                method: []
            },
            pending_ingredient_name: '',
            pending_quantity: undefined,
            pending_unit: '',
            pending_method: ''
        }
        )
    }

    render(){
    return(
        <div className="create-recipe-container">
            <div className="createRecipeForm-container">
                < CreateRecipeForm recipe={this.state.recipe} fillState={this.fillState} fillPendingState={this.fillPendingState}  handleAddIngredient={this.handleAddIngredient} handleAddStep={this.handleAddStep}/>
            </div>
            <div className="create-display-new-recipe">
                <RecipeCard recipe={this.state.recipe} key={this.state.recipe.recipe_name} />
                <button className="create-recipe-form-submits-recipe-card" onClick={this.submitToDatabase}>Submit recipe?</button>
                <button className="create-recipe-form-submits-recipe-card" onClick={this.startNewRecipe}>Start again?</button>
            </div>

        </div>
    )
}
}

export default CreateRecipe